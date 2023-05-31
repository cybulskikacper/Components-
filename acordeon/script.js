const accordion = document.querySelector('.accordion')
const accordionBtns = document.querySelectorAll('.accordion-btn')

function openAccordionItems() {



    console.log(this);




}



function openAccordion() {



    console.log(this);



}



accordionBtns.addEventListener('click', openAccordionItems)

accordion.addEventListener('click', openAccordion)