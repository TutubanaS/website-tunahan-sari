<!-- src/components/Header.vue -->
<template>
    <header class="header">
      <div class="nav-container">
        <div class="header-line"></div>
        <nav class="navigation">
          <ul>
            <li :class="{ active: activeSection === 'home' }">
              <a href="#" @click.prevent="setActiveSection('home')">Home</a>
            </li>
            <li :class="{ active: activeSection === 'projects' }">
              <a href="#" @click.prevent="setActiveSection('projects')">Projects</a>
            </li>
            <li :class="{ active: activeSection === 'experience' }">
              <a href="#" @click.prevent="setActiveSection('experience')">Experience</a>
            </li>
            <li :class="{ active: activeSection === 'contact' }">
              <a href="#" @click.prevent="setActiveSection('contact')">Contact & FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- Content area with transition -->
      <div class="content-area">
        <transition name="fade" mode="out-in">
          <div :key="activeSection">
            <div v-if="activeSection === 'home'">
              <!-- Home content -->
              <p class="text-home">
                born in 2001 in ankara, türkiye, and now based in eindhoven, netherlands.
              </p>
              <p class="text-home">
                since i co-founded a company to revolutionize how we engage with art, i thought i need a website for myself to reflect on my design understanding, thus I created this website.
              </p>
              <p class="text-home">
                i offer software development and AI/ML services through vista technologies.
              </p>
              <p class="text-home">
                next to software development, i paint and design. the website design/code belongs to me.
              </p>
            </div>
            <div v-else-if="activeSection === 'projects'">
              <!-- Projects content -->
              <h2 class="title-projects">ArtVista app - tech lead:</h2>
              <p class="text-projects">
                need a digital museum guide or shazam for artworks? artvista is your app.
                i’m in charge of the back-end, ai systems, and product designs, together with vlad.
              </p>
              <div class="project-links">
                <a href="https://artvista.app" target="_blank" rel="noopener noreferrer">website</a>
                <a href="https://play.google.com/store/apps/details?id=com.artvista&hl=en" target="_blank" rel="noopener noreferrer">android</a>
                <a href="https://apps.apple.com/nl/app/artvista-art-companion/id6503986684?l=en-GB" target="_blank" rel="noopener noreferrer">ios</a>
              </div>
            </div>
            <div v-else-if="activeSection === 'experience'">
              <!-- Experience content -->
              <div class="experience-item">
                <h3 class="title-experience">2023-2025</h3>
                <p class="text-experience">software & machine learning engineer @ enter, eindhoven</p>
              </div>
              <div class="experience-item">
                <h3 class="title-experience">2022-2023</h3>
                <p class="text-experience">machine learning engineer @ universaldot foundation, eindhoven</p>
              </div>
              <div class="experience-item">
                <h3 class="title-experience">2021-2023</h3>
                <p class="text-experience">tutoring assistant @ tu eindhoven, eindhoven</p>
              </div>
              <p class="text-experience">
                for more details, check and request my cv through linkedin, available here.
                <br />
              </p>
            </div>
            <div v-else-if="activeSection === 'contact'">
              <!-- Contact & FAQ content -->
              <div class="faq-section">
                <h3 class="faq-question">how can you be a software and machine learning engineer at once?</h3>
                <p class="faq-answer">
                  i did computer science and began as a machine learning engineer but soon realized i needed to build APIs, manage databases, and write robust back-end code for all this AI to work. since one depends on the other, i work with both.
                </p>
                <h3 class="faq-question">do you freelance?</h3>
                <p class="faq-answer">
                  yes, you can contact me from the following.
                </p>
                <div class="contact-links">
                  <a href="mailto:tunahansari11@gmail.com" target="_blank" rel="noopener noreferrer">email</a>
                  <a href="https://www.linkedin.com/in/tunahan-sari" target="_blank" rel="noopener noreferrer">linkedin</a>
                  <a href="https://github.com/TutubanaS" target="_blank" rel="noopener noreferrer">github</a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        activeSection: 'home', // Default section
      }
    },
    methods: {
      setActiveSection(section) {
        this.activeSection = section
      },
    },
  }
  </script>
  
  <style scoped>
  /* Fade transition styles */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  /* Navigation Styles */
  .navigation {
    width: 100%;
  }
  
  .navigation ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  
  .navigation li {
    /* Add any additional styling here */
  }
  
  .navigation a {
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    font-size: 18px;
    padding: 5px 10px; /* Adjust padding as needed */
    transition: background-color 0.3s, color 0.3s; /* Smooth transition */
  }
  
  .navigation li.active a {
    background-color: rgb(255,255,255,0.8); /* White background */
    color: #000; /* Text color changes to black */
    font-weight: 500;
  }
  
  .navigation a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  
  /* Adjusted nav-container styles */
  .nav-container {
    flex-shrink: 0;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Styles for title elements */
  .title-projects {
    font-weight: 400; /* Adjust as desired */
  }
  
  .title-experience {
    font-weight: 400; /* Adjust as desired */
  }
  
  /* Styles for text elements */
  .text-home {
    font-weight: 300; /* Adjust as desired */
  }
  
  .text-projects {
    font-weight: 200; /* Adjust as desired */
  }
  
  .text-experience {
    font-weight: 200; /* Adjust as desired */
  }
  
  .text-contact {
    font-weight: 200; /* Adjust as desired */
  }
  
  /* Styles for FAQ section */
  .faq-section {
    margin-top: 20px;
    text-align: center;
  }
  
  .faq-question {
    font-weight: 400;
    margin-top: 0px;
    padding-top: 50px;
  }
  
  .faq-answer {
    font-weight: 200;
    margin-bottom: 10px;
  }
  
  .contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
  }
  
  /* Existing styles */
  .header {
    width: 100%;
    background-color: transparent;
    color: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .header-line {
    width: 100%;
    height: 2px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  
  .content-area {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-align: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 200px;
  }
  
  /* Ensure links in content area appear underlined */
  .content-area a {
    color: #fff;
    text-decoration: underline;
  }
  
  .project-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
  }
  
  .experience-item {
    margin-bottom: 20px;
  }
  
  p {
    font-weight: 300;
  }
  </style>
  