document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect for Introduction
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor-typing');
  
    const textArray = ["a Web Developer", "a Graphic Designer", "a Freelancer"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } 
      else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } 
      else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }
  
    // Initialize typing effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  
    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
  
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault();
      } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
      }
    });
  
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(String(email).toLowerCase());
    }
  
    // Skill Bar Animation on Scroll
    const skillBars = document.querySelectorAll('.skill-bar .bar span');
    
    function animateSkillBars() {
      skillBars.forEach(bar => {
        const width = bar.getAttribute('class');
        bar.style.width = `${width}`;
      });
    }
  
    const skillSection = document.getElementById('skills');
    let skillsAnimated = false;
  
    function checkScroll() {
      if (window.scrollY + window.innerHeight >= skillSection.offsetTop && !skillsAnimated) {
        animateSkillBars();
        skillsAnimated = true;
      }
    }
  
    window.addEventListener('scroll', checkScroll);
  });
  