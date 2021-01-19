document.addEventListener('DOMContentLoaded', function () {
  // header, footer 로드 후에
  const itv = setInterval(() => {
    const header = document.querySelector('.header')
    const headerC = document.querySelector('.header-content')
    const footer = document.querySelector('.footer')
    const footerC = document.querySelector('.footer-content')
    if (headerC && footerC) {
      clearInterval(itv)

      // logo click scroll
      const logo = document.querySelector('.logo')
      logo.addEventListener('click', function () {
        scrollTo()
      })

      // global-navigator click
      const gns = document.querySelectorAll('.gn')
      gns.forEach((i, idx) => {
        i.addEventListener('click', function () {
          if (idx === gns.length - 1) {
            // About 클릭시 아래로 scroll
            scrollTo(footer.getClientRects()[0].y + document.body.scrollTop - header.clientHeight + 1)
            footer.style.color = 'var(--oc-indigo-9)'
            setTimeout(() => {
              footer.style = null
            }, 500)
          } else {
            location.href = '../' + i.innerHTML.toLowerCase() + '-page/'
          }
        })
      })

      // local-navigator scroll
      const lns = document.querySelectorAll('.ln')
      const bgs = document.querySelectorAll('.bg')
      lns.forEach((i, idx) =>
        i.addEventListener('click', function () {
          if (idx === 0) {
            // First ln scroll
            scrollTo(0)
          } else {
            scrollTo(bgs[idx].getClientRects()[0].y + document.body.scrollTop - header.clientHeight + 1)
          }
        }),
      )
    }
  }, 100)
})
