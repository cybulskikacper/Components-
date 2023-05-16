const btn = document.querySelector('.btn')

const btnAnimation = e => {
	const top = e.clientY
	const left = e.clientX
	// pozycja w którą klikamy

	const btnTopPosition = e.target.offsetTop
	const btnLeftPosition = e.target.offsetLeft
	// pozycja przycisku

	const insideBtnTop = top - btnTopPosition
	const insideBtnLeft = left - btnLeftPosition

	const circle = document.createElement('span')
	circle.classList.add('circle')
    circle.style.top = insideBtnTop

	e.target.appendChild(circle)
}

btn.addEventListener('click', btnAnimation)
