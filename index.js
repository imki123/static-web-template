window.addEventListener('DOMContentLoaded', function(){
  console.log('loaded')
  const header = document.querySelector('.header')
  const menus = document.querySelectorAll('.menus')
  const bgs = document.querySelectorAll('.bg')
  const logo = document.querySelector('.logo')

  // scroll
  logo.addEventListener('click', function(){
    document.body.scrollTop = 0
  })
  menus.forEach((i,idx) => i.addEventListener('click', function(){
    document.body.scrollTop = bgs[idx].getClientRects()[0].y + document.body.scrollTop - header.clientHeight
  }))
  
})