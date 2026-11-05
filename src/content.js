(function() {
  "use strict";
  const EXTENSION_NAME_CONTENT = "eocs-helper";
  async function fromInjectToContent(messageEvent) {
    const message = messageEvent.data;
    if (!message || !message.extensionName || message.extensionName !== EXTENSION_NAME_CONTENT) {
      return;
    }
    if (!(message.sessionSource === "inject" && message.sessionTarget === "content")) {
      return;
    }
    const { payload } = message;
    let returnPayload = void 0;
    switch (message.type) {
      case "request":
        const messageToBackground = {
          extensionName: message.extensionName,
          sessionId: message.sessionId,
          sessionSource: "content",
          sessionTarget: "background",
          type: "request",
          payload: message.payload
        };
        returnPayload = await new Promise((resolve, reject) => {
          chrome.runtime.sendMessage(
            messageToBackground,
            (messageFromBackground) => {
              if (!messageFromBackground) {
                reject("[content] : messageFromBackground is undefined");
              }
              console.log("[content] : messageFromBackground");
              console.log(messageFromBackground);
              resolve(messageFromBackground.payload);
            }
          );
        });
        break;
      case "setValue":
        {
          const { key, value } = payload;
          returnPayload = await new Promise((resolve) => {
            chrome.storage.sync.set({ [key]: value }, function() {
              console.log(`[content] : ${key} is set to ${value}`);
              resolve();
            });
          });
        }
        break;
      case "getValue":
        {
          const { key, defaultValue } = payload;
          returnPayload = await new Promise((resolve) => {
            chrome.storage.sync.get(key, function(result) {
              let temp;
              try {
                temp = JSON.parse(result[key]);
              } catch (e) {
                temp = result[key];
              }
              console.log(`[content] : ${key} is ${temp}`);
              if (!temp) {
                chrome.storage.sync.set({ [key]: defaultValue });
                temp = defaultValue;
                console.log(`[content] : ${key} is set to ${defaultValue}`);
              }
              resolve(temp);
            });
          });
        }
        break;
      default:
        const errorMessage = `fromInjectToContent: message.type ${message.type} is not supported`;
        console.error(errorMessage);
        returnPayload = errorMessage;
        break;
    }
    const messageToInject = {
      extensionName: message.extensionName,
      sessionId: message.sessionId,
      sessionSource: "content",
      sessionTarget: "inject",
      type: message.type,
      payload: returnPayload
    };
    window.postMessage(JSON.parse(JSON.stringify(messageToInject)), "*");
  }
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "sync" || !changes.userSettings) return;
    let settings = changes.userSettings.newValue;
    if (typeof settings === "string") {
      try { settings = JSON.parse(settings); } catch (_) { return; }
    }
    if (!settings || typeof settings !== "object" || Array.isArray(settings)) return;
    window.postMessage({ extensionName: EXTENSION_NAME_CONTENT, type: "settingsChanged", payload: settings }, "*");
  });
  window.addEventListener("message", fromInjectToContent, false);
})();
