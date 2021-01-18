document.addEventListener('DOMContentLoaded', function () {
  console.log('loaded')
  const header = document.querySelector('.header')
  const lns = document.querySelectorAll('.ln')
  const bgs = document.querySelectorAll('.bg')

  // lnb scroll
  lns.forEach((i, idx) =>
    i.addEventListener('click', function () {
      document.body.scrollTop = bgs[idx].getClientRects()[0].y + document.body.scrollTop - header.clientHeight
    }),
  )

  // logo click
  const itv = setInterval(() => {
    const logo = document.querySelector('.logo')
    if (logo) {
      logo.addEventListener('click', function () {
        document.body.scrollTop = 0
      })
      clearInterval(itv)
    }
  }, 10)
})
