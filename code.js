const input = document.getElementById('input')
input.addEventListener('mouseover', () => addClass(arrow, 'arrow-hover'))
input.addEventListener('mouseout', () => removeClass(arrow, 'arrow-hover'))
input.addEventListener('keydown', e => e.key === 'Enter' ? location.reload() : null)

const arrow = document.querySelector('.bx-arrow-back')
arrow.addEventListener('mouseover', () => addClass(arrow, 'arrow-hover'))
arrow.addEventListener('mouseout', () => addClass(arrow, 'arrow-hover'))
arrow.addEventListener('click', () => location.reload())

const addClass = (element, className) => element.classList.add(className)
const removeClass = (element, className) => element.classList.remove(className)