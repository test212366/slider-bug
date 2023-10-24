const slider = document.querySelector('.wrapper'),
	prev = document.getElementById('prev'),
	next = document.getElementById('next'),
	sliderItems = document.querySelectorAll('.other-item')




next.addEventListener('click', function () {
	const first = document.querySelector('.other-item')
	const savefirst = first
	console.log(savefirst);
	first.remove()
	prev.addEventListener('click', function () {
		slider.appendChild(savefirst)
	})
})

