import PhotoSwipe from 'photoswipe'
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'

function initGallery () {
  const galleryNode = document.querySelector('.pswp')
  const mockupsLinks = document.querySelectorAll('.mockup__link')
  let items = []

  mockupsLinks.forEach((link, i) => {
    items.push({
      src: link.href,
      w: 0,
      h: 0
    })

    link.addEventListener('click', (e) => {
      e.preventDefault()

      const gallery = new PhotoSwipe(galleryNode, PhotoSwipeUIDefault, items, {
        index: i,
        closeOnScroll: false,
        closeOnVerticalDrag: false
      })

      gallery.listen('gettingData', function (index, item) {
        if (item.w < 1 || item.h < 1) {
          const image = new Image()

          image.src = item.src

          image.onload = () => {
            item.h = image.height
            item.w = image.width

            gallery.invalidateCurrItems()
            gallery.updateSize(true)
          }
        }
      })

      gallery.init()
    })
  })
}

export default initGallery
