(function() {
  "use strict";
  async function handleContentMessage(message, sender, sendResponse) {
    const {
      payload: { url, init }
    } = message;
    const messageToContent = {
      extensionName: message.extensionName,
      sessionId: message.sessionId,
      sessionSource: "background",
      sessionTarget: "content",
      type: "request",
      payload: void 0
    };
    try {
      const response = await fetch(url, init);
      messageToContent.payload = {
        // 只能发送jsonable的数据，Promise不行
        text: await response.text(),
        ok: response.ok
      };
    } catch (error) {
      console.error(error);
      messageToContent.payload = {
        text: `fetch error: ${error}`,
        ok: false
      };
    }
    console.log("[background] : messageToContent");
    console.log(messageToContent);
    sendResponse(messageToContent);
  }
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    handleContentMessage(message, sender, sendResponse);
    return true;
  });
})();
