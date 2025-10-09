import { personalData } from "../data/personal-data.js";


//---------------------workStatusChangeColor--------------------//
function workStatusChangeColor(){
  let workStatus = personalData.workAvailabilityStatus;
  workStatus = workStatus.charAt(0).toUpperCase() + workStatus.slice(1);
  
  const dotIcon = document.querySelector('.work-availabililty .dot-icon');

  if(workStatus !== 'Available for work'){ //If the status is not "Available for work" then the dot icon will change to color red
    dotIcon.style.backgroundColor = 'red';
  }
}


//---------------------Skill Auto Scrollers--------------------//
function skillAutoScroller(){
  const scrollers = document.querySelectorAll('.scroller');

  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
  }

  function addAnimation(){
    scrollers.forEach(scroller => {
      scroller.setAttribute('data-animated', true);
    });
  
    const scrollersInner = document.querySelectorAll('.scroller__inner');
  
    scrollersInner.forEach(scrollerInner => {
      const scrollerItems = Array.from(scrollerInner.children);
      scrollerItems.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}


//---------------------Show and Hide contact-card--------------------//
function showHideContactCard(){
  const contactCard = document.querySelector('.contact-card');
  const mainDetailsCard = document.querySelector('.main-details-card');
  const toggleBtn = document.querySelector('.profile-cards-container .toggle-button');

  toggleBtn.addEventListener('click', ()=>{
    if(toggleBtn.classList.contains('show-contact-card-icon')){
      showCard();
    } 
    else {
      hideCard()
    }


    function showCard(){
      contactCard.style.display = 'flex';
      toggleBtn.classList.remove('show-contact-card-icon');
      toggleBtn.classList.add('hide-contact-card-icon');
      contactCard.style.animation = 'show-card 0.4s ease-in-out forwards';
      mainDetailsCard.style.boxShadow = 'none';
    }
    
    function hideCard(){
      toggleBtn.classList.remove('hide-contact-card-icon')
      toggleBtn.classList.add('show-contact-card-icon');
      contactCard.style.animation = 'hide-card 0.4s ease-in-out forwards';
      setTimeout(()=>{
        contactCard.style.display = 'none';
        mainDetailsCard.style.boxShadow = 'rgba(0, 0, 0, 0.101) 0px 2px 8px 1px';
      }, 300);
    }
  });

  // If resize the page and the page is greater than 810px the contact card will display and if the page is less than 810px the contact card will hide
  window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 810){
      contactCard.style.display = 'flex';
      contactCard.style.position = 'relative';
      contactCard.style.animation = 'none';
      mainDetailsCard.style.boxShadow = 'rgba(0, 0, 0, 0.101) 0px 2px 8px 1px';
    } else {
      contactCard.style.display = 'none';
      contactCard.style.position = 'absolute';
      toggleBtn.classList.remove('hide-contact-card-icon')
      toggleBtn.classList.add('show-contact-card-icon');
    }
  })
}


//---------------------Show and Hide experience more-details--------------------//
function showHideExperienceDetail(){
  const experienceCards = document.querySelectorAll('.experience-card');
  experienceCards.forEach(card => {
      const toggleBtn = card.querySelector('.toggle-button');

      function showDetails(){
        toggleBtn.classList.remove('show-details-icon');
        toggleBtn.classList.add('hide-details-icon');
        card.style.animation = 'show-more-details 0.2s forwards';
      }

      function hideDetails(){
        toggleBtn.classList.add('show-details-icon');
        toggleBtn.classList.remove('hide-details-icon');
        card.style.animation = 'hide-more-details 0.2s forwards';
      }


      card.addEventListener('click', ()=>{
        if(toggleBtn.classList.contains('show-details-icon')){
          showDetails();
        }else{
          hideDetails();
        }      
      });
    });
}


//---------------------Project Slider--------------------//
function projectsSlider(){
  const leftBtn = document.querySelector('#projects-section .slide-to-left-btn');
  const rightBtn = document.querySelector('#projects-section .slide-to-right-btn');
  const projectSlider = document.querySelector('#projects-section .projects-slider');

  let slidePercent = 0;

  leftBtn.addEventListener('click', ()=>{
    slidePercent -= 263;

    if(slidePercent <= 0){
      slidePercent = 0;
      leftBtn.style.display = 'none';
    }

    rightBtn.style.display = 'flex';
    projectSlider.style.transform = `translateX(-${slidePercent}px)`
  });


  rightBtn.addEventListener('click', ()=>{
    slidePercent += 262.9;
    let maxWidth;
    maxWidth = projectSlider.scrollWidth - 514;
    if(window.innerWidth <= 550){
      maxWidth = projectSlider.scrollWidth - 250;
    }
   

    if(slidePercent >= maxWidth){
      slidePercent = maxWidth;
      rightBtn.style.display = 'none';
    }

    leftBtn.style.display = 'flex';
    projectSlider.style.transform = `translateX(-${slidePercent}px)`;
  });







}


//---------------------Elements Fade-in Animation--------------------//
export const elementsFadeIn = () => {
  const elements = Array.from(document.body.querySelectorAll(".main-wrapper *")).filter(el => !el.closest('.profile-cards-container') 
  );

  elements.forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 93%", // Start animation when the element is 93% in the viewport
        toggleActions: "play none none reset", 
      },
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  });
}


//--------Export All Functionalities----------//
export{workStatusChangeColor,
       skillAutoScroller,
       showHideContactCard,
       showHideExperienceDetail,
       projectsSlider
}