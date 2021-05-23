const infoList = document.querySelector('.info__list')
const infoListItems = infoList.querySelectorAll('.info-list-item')

infoListItems.forEach(item => {
  item.addEventListener('click', function() {
    if (!item.matches('._expanded')) {
      infoListItems.forEach(item => item.classList.remove('_expanded'))
      item.classList.add('_expanded')
    } else  {
      item.classList.toggle('_expanded')
    }
  })
})
