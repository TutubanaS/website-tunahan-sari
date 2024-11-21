<template>
    <header class="header">
      <div class="nav-container">
        <div class="header-line"></div>
        <nav class="navigation">
          <ul ref="navList">
            <li :class="{ active: activeSection === 'home' }" ref="homeNavItem">
              <a href="#" @click.prevent="setActiveSection('home')">home</a>
            </li>
            <li :class="{ active: activeSection === 'projects' }" ref="projectsNavItem">
              <a href="#" @click.prevent="setActiveSection('projects')">skills & projects</a>
            </li>
            <li :class="{ active: activeSection === 'experience' }" ref="experienceNavItem">
              <a href="#" @click.prevent="setActiveSection('experience')">experience</a>
            </li>
            <li :class="{ active: activeSection === 'contact' }" ref="contactNavItem">
              <a href="#" @click.prevent="setActiveSection('contact')">contact & faq</a>
            </li>
            <!-- Sliding indicator -->
            <div class="nav-indicator" :style="indicatorStyle"></div>
          </ul>
        </nav>
      </div>
      <!-- Content area with transition -->
      <div class="content-area">
        <transition name="fade" mode="out-in">
          <div :key="activeSection">
            <!-- Home content -->
            <div v-if="activeSection === 'home'">
              <p class="text-home">
                born in 2001 in ankara, türkiye, and now based in eindhoven, netherlands. graduated from tu eindhoven with a bachelor's in computer science.
              </p>
              <p class="text-home">
                since i co-founded a company to revolutionize how we engage with art, i realized i needed a website to reflect my design understanding. so, i created this website.
              </p>
              <p class="text-home">
                i offer software development and AI/ML services through vista technologies.
              </p>
              <p class="text-home">
                next to software development, i paint and design. the website's design/code belongs to me.
              </p>
            </div>
            <!-- Projects content -->
            <div v-else-if="activeSection === 'projects'">
              <div class="tech-stack-container">
                <h3 class="title-experience-white">skills; tech-stack</h3>
                <p class="text-experience-white">python, pyTorch, tensorflow, langchain, openai, fastapi, django</p>
                <p class="text-experience-white">kotlin, java, postgresql, docker, kubernetes, digitalocean, google cloud</p>
                <p class="text-experience-white">javascript, typescript, vue, figma</p>
              </div>
              <h2 class="title-projects">ArtVista app - tech lead:</h2>
              <p class="text-projects">
                need a digital museum guide or shazam for artworks? artvista is your app.
                i’m in charge of the back-end, ai systems, and product designs, together with vlad.
                within artvista, we train and deploy computer vision models, transformers, and gans to recognize art. build rag pipelines, and manage the app’s infrastructure.
              </p>
              <div class="project-links">
                <a href="https://artvista.app" target="_blank" rel="noopener noreferrer">website</a>
                <a href="https://play.google.com/store/apps/details?id=com.artvista&hl=en" target="_blank" rel="noopener noreferrer">android</a>
                <a href="https://apps.apple.com/nl/app/artvista-art-companion/id6503986684?l=en-GB" target="_blank" rel="noopener noreferrer">ios</a>
              </div>
            </div>
            <!-- Experience content -->
            <div v-else-if="activeSection === 'experience'">
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
            </div>
            <!-- Contact & FAQ content -->
            <div v-else-if="activeSection === 'contact'">
              <div class="faq-section">
                <div class="faq-pair">
                  <h3 class="faq-question">how can you be a software and machine learning engineer at once?</h3>
                  <p class="faq-answer">
                    i did computer science and began as a machine learning engineer but soon realized i needed to build APIs, manage databases, and write robust back-end code for all this AI to work. since one depends on the other, i work with both.
                  </p>
                </div>
                <div class="faq-pair">
                  <h3 class="faq-question">do you freelance or want my cv?</h3>
                  <p class="faq-answer">
                    sure, you can contact me through the following.
                  </p>
                </div>
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
        indicatorStyle: {
          left: '0px',
          width: '0px',
        },
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.updateIndicator();
      });
      window.addEventListener('resize', this.updateIndicator);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateIndicator);
    },
    methods: {
      setActiveSection(section) {
        this.activeSection = section;
        this.$nextTick(() => {
          this.updateIndicator();
        });
      },
      updateIndicator() {
        const activeNavItem = this.$refs[`${this.activeSection}NavItem`];
        if (activeNavItem) {
          const navListRect = this.$refs.navList.getBoundingClientRect();
          const itemRect = activeNavItem.getBoundingClientRect();
          const left = itemRect.left - navListRect.left;
          const width = itemRect.width;
          this.indicatorStyle = {
            left: `${left}px`,
            width: `${width}px`,
          };
        }
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
    position: relative; /* Position relative for absolute positioning of the indicator */
    width: 100%;
  }
  
  .navigation ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    position: relative;
  }
  
  .navigation li {
    position: relative;
  }
  
  .navigation a {
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    font-size: 18px;
    padding: 5px 10px; /* Adjust padding as needed */
    transition: color 0.3s; /* Smooth transition for text color */
  }
  
  .navigation a:hover {
    text-decoration: none; /* Removes the underline on hover */
    cursor: pointer;
  }
  
  .nav-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1), width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none; /* Ignore pointer events */
    z-index: -1; /* Place behind the navigation items */
  }
  
  .navigation li.active a {
    color: #000; /* Text color changes to black when active */
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
  
  .title-experience-white {
    font-weight: 500; /* Adjust as desired */
    font-size: 22.5px;
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
  
  .text-experience-white {
    font-weight: 300; /* Adjust as desired */
  }
  
  .text-contact {
    font-weight: 200; /* Adjust as desired */
  }
  
  /* Styles for FAQ section */
  .faq-section {
    /* Optional: add padding or other styles if needed */
  }
  
  .faq-pair {
    margin-bottom: 20px; /* Adjust the spacing between pairs as desired */
  }
  
  .faq-question {
    font-weight: 400;
    margin-top: 0px;
  }
  
  .faq-answer {
    font-weight: 200;
    margin-bottom: 0px; /* Removed to handle spacing via .faq-pair */
  }
  
  .contact-links {
    display: flex;
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
    text-align: left;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 0px;
    overflow-y: auto;
  }
  
  /* Ensure links in content area appear underlined */
  .content-area a {
    color: #fff;
    text-decoration: underline;
  }
  
  .project-links {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }
  
  .experience-item {
    margin-bottom: 20px;
  }
  
  p {
    font-weight: 300;
  }
  
  .tech-stack-container {
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    padding: 5px 20px; /* Adjust padding as needed */
    border-radius: 0px; /* Rounded corners */
    color: #000; /* Black text */
    margin-bottom: 20px; /* Space below the container */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow for depth */
  }
  </style>
  