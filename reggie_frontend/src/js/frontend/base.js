export const base = () => {
  const docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      let clientWidth = docEl.clientWidth
      if (!clientWidth) return
      if (clientWidth > 750) {
        docEl.style.fontSize = '28px'
      } else {
        docEl.style.fontSize = clientWidth / 375 + 'px'
      }
    }

  if (!document.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  document.addEventListener('DOMContentLoaded', recalc, false)
}
