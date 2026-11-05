//连线题(et-matching)的作答逻辑已移到 et/solver.ts：
//  - 旧实现是在本文件加载时查询一次全局的 .line / circle[data-circle="A"|"B"]，
//    但连线的 svg 圆圈是 etMatching 的 $postLink 里按布局坐标动态生成的，
//    而且这个文件没有被任何模块 import，全局变量在运行时并不存在。
//  - 现在改为在 et/solver.ts 的 etSolveMatchingAll() 里，按每个 et-matching
//    元素内部查询 g.circles circle，再依次点击左栏/右栏圆圈，
//    由课件自己写入 matching.answers，而不是直接往 DOM 里塞 <line>。
