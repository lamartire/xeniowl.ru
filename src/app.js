import initMenu from './blocks/menu/menu'
import initMockups from './blocks/mockup/mockup'
import createModal from './blocks/modal/modal'

window.onload = () => {
  initMenu()
  initMockups(createModal())
}
