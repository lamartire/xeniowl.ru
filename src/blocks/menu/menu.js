import Scroll from 'smooth-scroll'

function initMenu () {
  const scroll = new Scroll()
  const menuLinks = document.querySelectorAll('.menu__link')

  menuLinks.forEach((link) => {
    link.onclick = (e) => {
      const { to } = e.target.dataset
      const targetSection = document.querySelector(`*[data-anchor=${to}]`)

      if (targetSection) {
        scroll.animateScroll(targetSection)
      }
    }
  })
}

export default initMenu
