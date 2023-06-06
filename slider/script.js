const sliderBox = document.querySelector('.slider-box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const carouseleImages = document.querySelectorAll('.slider-img')
const carouseleWidth = 800 // odpowiada wartosci w css
const carouseleSpeed = 3000

let index = 0

const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouseleSpeed)

const changeImage = () => {
	// jestesmy na 3 obrazku a juz nic wiecej nie ma wiec wracamy do 1 zdj
	if (index > carouseleImages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouseleImages.length - 1
		// jesli index bedzie juz na 0 to jak klikniemy w lewo to przechodzimy na ostatnie zdj w karuzeli
	}

	sliderBox.style.transform = `translateX(${-index * carouseleWidth}px)`
}

const handleRightBtn = () => {
	index++
	resetInterval()
}

const handleLeftBtn = () => {
	index--
	resetInterval()
}

// ta funkcja odpowiada za to, ze aplikacja sama zmienia zdj co 3sek ale klikajac na przycisk my ten czas zerujemy
const resetInterval = () => {
	changeImage()
	clearInterval(startCarousel)
    startCarousel = setInterval(handleCarousel, carouseleSpeed)
}

rightBtn.addEventListener('click', handleRightBtn)
leftBtn.addEventListener('click', handleLeftBtn)
