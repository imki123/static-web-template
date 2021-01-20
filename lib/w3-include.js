// from w3-school.
// Edited by Hoodie.
function includeHTML() {
  const incs = document.querySelectorAll('.include')

  for (let i = 0; i < incs.length; i++) {
    const url = incs[i].getAttribute('w3-include-html')
    axios
      .get(url)
      .then((res) => {
        // console.log(res)
        incs[i].innerHTML = res.data
        incs[i].removeAttribute('w3-include-html')
        incs[i].classList.remove('include')
      })
      .catch((e) => {
        incs[i].innerHTML = 'Page not found.'
      })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  includeHTML()
})
