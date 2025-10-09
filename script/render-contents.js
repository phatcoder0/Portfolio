import { personalData } from "../data/personal-data.js";
import { experienceData }  from "../data/experience-data.js";
import { techtoolsData }  from "../data/techtoolsData.js";
import { projectData }  from "../data/projects-data.js";


//Render All Contents
export function renderContents(){
  profileCardContent();
  aboutSectionContent();
  experienceSectionContent();
  techtoolsSectionContent();
  projectSectionContent();
}



// Project Section Contents
function projectSectionContent(){
  let projectCardHTML = '';

  projectData.forEach(project => {
    projectCardHTML += `
      <div class="project-card">
        <img class="project-img" src="images-and-icons/images/${project.image}" alt="project.image">
        <div class="project-details">
          <p class="project-name">${project.name}</p>
          <p class="project-detail">${project.detail}</p>
          <a class="view-project-btn" href="${project.link}" target="_blank">
            View Project
            <img class="arrow-icon" src="images-and-icons/icons/up-right-arrow.png" alt="arrow-icon" >
          </a>
        </div>
      </div>
    `;
  });

  const projectCardsContainer = document.querySelector('#projects-section .projects-slider').innerHTML = projectCardHTML;
}


// TechTools Section Contents
function techtoolsSectionContent(){
  let techtoolsCardHTML = '';

  techtoolsData.forEach(techtool => {
    techtoolsCardHTML += `
       <div class="techstack-card card">
          <img class="icon" src="images-and-icons/icons/${techtool.icon}" alt="html icon" />
          <div>
            <p class="name">${techtool.name}</p>
            <p class="mastery">${techtool.mastery}</p>
          </div>
        </div>
    `;
  });

  const techtoolCardContainer = document.querySelector('.techtool-cards-container').innerHTML = techtoolsCardHTML;
}


// Experience Section Contents
function experienceSectionContent(){
  let experienceCardHTML = '';

  experienceData.forEach(experience => {
    experienceCardHTML += `
        <div class="experience-card">
          <div class="details">
            <img src="images-and-icons/images/${experience.image}" alt="experienceData.image" class="image">
            <div>
              <p class="experience-title">${experience.title}</p>
              <p class="yrs-of-experience">${experience.yrsOfExperience}</p>
            </div>
            <img src="images-and-icons/icons/show-details-icon.png" alt="toggle-button" class="toggle-button show-details-icon">
          </div>
          <div class="more-details">${experience.details}</div>
        </div>
    `;
  });

  const experienceCardsContainer = document.querySelector('.experience-cards-container').innerHTML = experienceCardHTML;
}


//About Section Content
function aboutSectionContent(){
  const aboutParagraphHTML = personalData.aboutMe.map(paragraph => `<span class="paragraph">${paragraph}</span>`).join('');

  const aboutMe = document.querySelector('#about-section .about-me').innerHTML = aboutParagraphHTML;
}


// Profile Card Contents
function profileCardContent(){
  const skills = personalData.skills.map(skill => `<p class="skill">${skill}</p>`).join('');

  const profileCardHTML = `
        <div class="main-details-card card">
          <img src="images-and-icons/images/${personalData.profilePicture}" alt="${personalData.profilePicture}" class="profile-pic">
          <div class="details">
            <p class="greeting">Hello I'm</p>
            <h2 class="name">${personalData.name}</h2>
            <div class="scroller skill-list">
              <div class="main-skills scroller__inner reload-animation">${skills}</div>
            </div>
            <div class="work-availabililty">
              <div class="dot-icon"></div>
              <div class="availability-status">${personalData.workAvailabilityStatus}</div>
            </div>
            <p class="adress">
              <img src="images-and-icons/icons/location-icon.png" alt="location icon" class="location-icon icon">
              <span class="label">${personalData.adress}</span>
            </p>       
          </div>
          <div class="toggle-button show-contact-card-icon">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>

        <div class="contact-card card">
          <div class="contact-detail-container container">
            <div class="contact-number detail">
              <img src="images-and-icons/icons/phone icon.png" alt="" class="contact-icon icon">
              <p class="label">${personalData.contactNumber}</p>
            </div>
            <div class="email detail">
              <img src="images-and-icons/icons/email-icon.png" alt="" class="email-icon icon">
              <p class="label">${personalData.email}</p>
            </div>
            <div class="socmed-list">
              <a href="${personalData.facebookLink}" target="_blank" class="fb-icon icon">
                <img src="images-and-icons/icons/facebook-icon.png" alt="fb-icon" class="fb-icon socmed-icon">
              </a>
              <a href="${personalData.instagramLink}" target="_blank" class="ig-icon icon">
                <img src="images-and-icons/icons/instagram-icon.png" alt="ig-icon" class="ig-icon socmed-icon">
              </a>
              <a href="${personalData.tiktokLink}" target="_blank" class="tiktok-icon icon">
                <img src="images-and-icons/icons/tiktok-icon.png" alt="tiktok-icon" class="tiktok-icon socmed-icon">
              </a>
            </div>
          </div>
          <div class="buttons-container container">
            <a href="${personalData.resume}" class="download-resume-btn button">Download Resume</a>
            <a href="#contact-section" class="contact-btn button">Contact Me</a>
          </div>
        </div>
  `;

  const profileCardsContainer = document.querySelector('.profile-cards-container').innerHTML = profileCardHTML;
}