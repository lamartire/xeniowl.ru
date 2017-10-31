import VanillaModal from 'vanilla-modal'

function createModal () {
  const modal = new VanillaModal({
    modalContent: '.modal__content',
    modalInner: '.modal__inner',
    clickOutside: true
  })

  return modal
}

export default createModal
