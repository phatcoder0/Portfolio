# Meowish Portfolio Website

## 📌 Overview

This is a dynamic and customizable portfolio website where all content is rendered using JavaScript. You can easily update personal details, projects, and experience by modifying the files in the `data` folder. The website’s styling is managed in the `styles` folder.

---

## 📂 Directory Structure

### 📁 data  
- **experience-data.js** → Contains work experience details  
- **personal-data.js** → Stores personal information  
- **projects-data.js** → Holds project details  
- **techtoolsData.js** → Lists technologies and tools used  

### 📁 images-and-icons  
- **icons/** → Contains icons used across the website  
- **images/** → Stores general images  

### 📁 script  
- **email-sender.js** → Handles email functionality  
- **main.js** → Core JavaScript file for rendering content  
- **motion.js** → Controls animations and motion effects  
- **render-contents.js** → Dynamically loads content from the `data` folder  

### 📁 styles  
- 📂**sections-style/** → Contains styles for different sections:  
- **animation.css** → Handles animations  
- **footer.css** → Styles for the footer section  
- **global.css** → Global styles affecting the entire website  
- **profile-card.css** → Styles for the profile card  
- **techtools.css** → Styling for the tools and technologies section  

### 📄 Other Files  
- **meowish-resume.pdf** → Resume file  
- **page.html** → Main HTML file  
- **README.md** → This documentation file  

---

## 🔧 How to Update Content

### 📌 Modify Data  
1. Navigate to the `data` folder.  
2. Edit the respective JavaScript files:  
   - `personal-data.js` → Modify personal details.  
   - `projects-data.js` → Update project details.  
   - `experience-data.js` → Add or modify work experience.  
   - `techtoolsData.js` → Update the technologies list.  
3. Changes are automatically reflected since the content is dynamically loaded via `render-contents.js`.  

### 🎨 Update Styles  
1. Open the `styles` folder.  
2. Modify the relevant CSS files to change the design and layout.  

💡 **Note:** Do not remove `render-contents.js`, as it dynamically loads content from the `data` folder. Ensure JavaScript object structures remain consistent to prevent errors.

---

## 🚀 Hosting the Website

Easily host your website online using GitHub Pages or other hosting services.

📌 Watch the tutorial here 👉 [Easy Way to Host Your Website](https://youtu.be/3e_FVE4piEM?si=Zs3fJf6QOZm2LnBW)

---

## 📩 Contact Me  

Need help? Feel free to reach out!  
📧 Email: **meowish.000@gmail.com**  

Happy coding! 😊🚀
