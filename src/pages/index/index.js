window.addEventListener('scroll', scrollDocument)

function scrollDocument() {
  const scrollTop = window.scrollY
  const elementMove = scrollTop

  document.querySelector('.parallax__bubbles-left').style.transform = `translateX(-${elementMove}px) scale(1.5)`
  document.querySelector('.parallax__bubbles-right').style.transform = `translateX(-${elementMove}px) scale(1.5)`
}
