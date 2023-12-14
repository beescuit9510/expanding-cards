const elements = document.querySelectorAll('.image-container')
const titles = document.querySelectorAll('.image-container__title')

elements.forEach((element) =>
  element.addEventListener('click', () => {
    elements.forEach((e) => {
      e.classList.remove('image-container--expand')
    })
    titles.forEach((e) => {
      e.classList.remove('image-container__title--visible')
    })

    element.classList.add('image-container--expand')
    element
      .querySelector('.image-container__title')
      .classList.add('image-container__title--visible')
  })
)
