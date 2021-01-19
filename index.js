// header, footer 로드 후에
const itv = setInterval(() => {
  const header = document.querySelector('.header')
  const footer = document.querySelector('.footer')
  if (header && footer) {
    clearInterval(itv)

    // logo click scroll
    const logo = document.querySelector('.logo')
    logo.addEventListener('click', function () {
      document.body.scrollTop = 0
    })

    // global-navigator click
    const gns = document.querySelectorAll('.gn')
    gns.forEach((i, idx) => {
      i.addEventListener('click', function () {
        if (idx === gns.length - 1) {
          // About scroll
          document.body.scrollTop = footer.getClientRects()[0].y + document.body.scrollTop - header.clientHeight
        } else {
          location.href = '/' + i.innerHTML.toLowerCase() + '-page/'
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
          document.body.scrollTop = 0
        } else {
          document.body.scrollTop = bgs[idx].getClientRects()[0].y + document.body.scrollTop - header.clientHeight
        }
      }),
    )
  }
}, 100)
