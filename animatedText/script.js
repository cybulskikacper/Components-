const btn = document.querySelector('.search-btn')
const input = document.querySelector('.search-input')

const searchBar = () => {
	input.classList.toggle('active')
}

btn.addEventListener('click', searchBar)
