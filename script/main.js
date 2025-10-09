import { elementsFadeIn } from "./motion.js";
import { renderContents } from "./render-contents.js";
import { emailSender } from "./email-sender.js";
import {workStatusChangeColor, skillAutoScroller, showHideContactCard, showHideExperienceDetail, projectsSlider } from "./motion.js";


renderContents();

//Make sure do display contents first before add animation and interaction
document.addEventListener('DOMContentLoaded', ()=>{
  emailSender();
  workStatusChangeColor();
  skillAutoScroller();
  showHideContactCard();
  showHideExperienceDetail();
  projectsSlider();
  elementsFadeIn();
});




