// safari나 IE 스크롤 폴리필하기
function scrollTo(y) {
  if (y <= 0 || isNaN(y)) y = 0
  if (getBrowserType() === 'Chrome') {
    // 크롬 등 scroll-behavior 정상 작동
    document.body.scrollTop = y
  } else {
    // scroll-behavior 미작동
    const nowY = document.body.scrollTop
    const dif = (y - nowY) / 50
    if (y > nowY) {
      const itv = setInterval(() => {
        document.body.scrollTop += dif
        if (document.body.scrollTop >= y) {
          clearInterval(itv)
          document.body.scrollTop = y
        }
      }, 10)
      setTimeout(() => clearInterval(itv), 1000)
    } else {
      const itv = setInterval(() => {
        document.body.scrollTop += dif
        if (document.body.scrollTop <= y) {
          clearInterval(itv)
          document.body.scrollTop = y
        }
      }, 10)
      setTimeout(() => clearInterval(itv), 1000)
    }
  }
}
scrollTo()

// 브라우저 타입 알아내기
function getBrowserType() {
  var agent = navigator.userAgent.toLowerCase()
  if (agent.indexOf('chrome') != -1) return 'Chrome'
  if (agent.indexOf('opera') != -1) return 'Opera'
  if (agent.indexOf('staroffice') != -1) return 'Star Office'
  if (agent.indexOf('webtv') != -1) return 'WebTV'
  if (agent.indexOf('beonex') != -1) return 'Beonex'
  if (agent.indexOf('chimera') != -1) return 'Chimera'
  if (agent.indexOf('netpositive') != -1) return 'NetPositive'
  if (agent.indexOf('phoenix') != -1) return 'Phoenix'
  if (agent.indexOf('firefox') != -1) return 'Firefox'
  if (agent.indexOf('safari') != -1) return 'Safari'
  if (agent.indexOf('skipstone') != -1) return 'SkipStone'
  if (agent.indexOf('msie') != -1) return 'Internet Explorer'
  if (agent.indexOf('rv:11.0') != -1) return 'Internet Explorer'
  if (agent.indexOf('netscape') != -1) return 'Netscape'
  if (agent.indexOf('mozilla/5.0') != -1) return 'Mozilla'
}
