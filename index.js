const body = document.body;
const btn = document.querySelectorAll('.button')[0];
const headingOne = document.querySelector('.heading1')
const headingTwo = document.querySelector('.my-box')


const tl = new TimelineMax();

tl.fromTo(headingOne, 1,{height:'0%'}, {height: '80%', ease: Power2.easeInOut })
.fromTo(headingTwo, 0.5, {opacity: 0, x:30}, {opacity:1, x:0}, "0.5")


btn.addEventListener('mouseenter', () => {
	body.classList.add('show');
});

btn.addEventListener('mouseleave', () => {
	body.classList.remove('show');
});

