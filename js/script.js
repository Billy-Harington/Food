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

const tabs = document.querySelectorAll('.tabheader__item')
const tabsContent = document.querySelectorAll('.tabcontent')



hideTabContent()

function hideTabContent() {
    tabsContent.forEach((item) => {
        item.classList.add('hide')
        item.classList.remove('show', 'fade')
    })

    tabs.forEach((tab) => {
        tab.classList.remove('tabheader__item_active')
    })
}


showTabContent()

function showTabContent(n = 0) {
    tabsContent[n].classList.add('show', 'fade')
    tabsContent[n].classList.remove('hide')
    tabs[n].classList.add('tabheader__item_active')
}



const tabsData = document.querySelectorAll('.tabcontent[data-info]');
const theaderData = document.querySelectorAll('.tabheader__item[data-info]');
const itemsBtn = document.querySelectorAll('.tabheader__item')
function showData(n = 0) {
    if (theaderData === tabsData) {
        hideTabContent()
showTabContent()
    }


}
showData()

itemsBtn.forEach((btn) =>{
    btn.onclick = () =>{
        showData()
    }
} )




