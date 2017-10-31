function initMockups (modal) {
  const mockupsLinks = document.querySelectorAll('.mockup__link')

  if (mockupsLinks) {
    mockupsLinks.forEach((mockup) => {
      mockup.onclick = (e) => {
        // const { origin } = e.target.dataset

        // console.log(origin)
        // modal.open()
      }
    })
  }
}

export default initMockups
