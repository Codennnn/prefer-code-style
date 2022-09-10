// 修改 Window 系统浏览器的滚动条的默认样式，美化效果
void (function styleTheWindowsScrollbar() {
  const IS_WINDOWS = navigator.platform.indexOf('Win') > -1
  if (IS_WINDOWS) {
    const css = `
      ::-webkit-scrollbar {
        width: 8px !important;
        height: 8px !important;
        background-color: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background-color: rgba(116, 120, 141, 0.2) !important;
        border: none !important;
        border-radius: 4px !important;
      }
      
      ::-webkit-scrollbar-track-piece {
        background-color: rgb(246, 248, 251) !important;
      }
    `
    const head = document.head || document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    head.appendChild(style)
    style.innerText = css
  }
})()

export {}
