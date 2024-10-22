const openBtn = document.querySelector('.btn_white');
const closeBtn = document.querySelector('.modal__close');
const modal = document.querySelector('dialog');


openBtn.onclick = () => {
    modal.showModal();
};


closeBtn.onclick = () => {
    modal.close();
};


const slides = document.querySelectorAll('.offer__slide')
const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
let slideIndex = 0
let current = document.querySelector('#current')
let total = document.querySelector('#total')




total.innerHTML = addZero(slides.length)



slideShow()

function slideShow(n) {
    if (n > slides.length - 1) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')
    current.innerHTML = addZero(slideIndex + 1)


}

function addZero(n) {
    return n < 10 ? `0${n}` : n
}

next.onclick = () => {
    slideShow(++slideIndex)
}

prev.onclick = () => {
    slideShow(--slideIndex)

}



// Tabs



const tabs = document.querySelectorAll('.tabcontent');
const tabButtons = document.querySelectorAll('.tabheader__items .tabheader__item')



tabsShow(0)


function tabsShow(n) {
    tabs.forEach(tab => tab.classList.add('hide','fade') )
    tabs[n].classList.remove('hide')
}


tabButtons.forEach((btn,idx) =>{
    btn.onclick = () => {
        tabButtons.forEach((btn)=> btn.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')
        tabsShow(idx)
    }
} )


//timer

const minView = document.querySelector('#minutes')
const secView = document.querySelector('#seconds')
const hoursView = document.querySelector('#hours')
const dayView = document.querySelector('#days')


let seconds = 10

let minutes = 59
let hours = 20
let days = 12


let interval = setInterval(() => {
    seconds--
    if (seconds <=0 ) {
        seconds = 59
        minutes--
    }
    if (minutes <=0 ) {
        minutes = 59
        hours--
    }
    if ( hours <=0 ) {
        hours = 23 
        days--
    }
    if ( days <=0 ) {
      
    }

    secView.innerText = seconds
    minView.innerText = minutes 
    hoursView.innerText = hours
    dayView.innerText = days

},1000)






