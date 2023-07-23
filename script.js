/*--Scrolling the header bulletin from right to left--*/

      // Get the scrolling text element
      const scrollingText = document.querySelector(".marquee-text");
      let currentPosition = 0;
      let animationId;

      // Function to scroll the text
      function scrollText() {
        const containerWidth = document.querySelector(
          ".bulletin-container"
        ).offsetWidth;
        const textWidth = scrollingText.offsetWidth;

        // Move the text to the left by 2 pixel on each frame
        currentPosition -= 2;
        if (currentPosition <= -textWidth) {
          currentPosition = containerWidth;
        }

        scrollingText.style.transform = `translateX(${currentPosition}px)`;

        animationId = requestAnimationFrame(scrollText);
      }

      // Start the scrolling animation
      scrollText();

      scrollingText.addEventListener("mouseenter", () => {
        cancelAnimationFrame(animationId);
      });

      scrollingText.addEventListener("mouseleave", () => {
        animationId = requestAnimationFrame(scrollText);
      });



/*-- Drop Down Submenu -- */
      
      let submenuNOC = document.querySelector("#submenu-noc");
      let submenuWTBAT = document.querySelector("#submenu-wtbat");

      function showSubmenu(e) {
        if(e.srcElement.id=="noc"){
            submenuNOC.classList.add("submenu-active");
        } else if(e.srcElement.id="wtbat"){
            submenuWTBAT.classList.add("submenu-active");
        }
        
        
      }

      function hideSubmenu(){
        submenuNOC.classList.remove("submenu-active");
        submenuWTBAT
        .classList.remove("submenu-active");
      }


/* -- Drop down menu for smaller screens -- */

      let menuIconSm = document.querySelector("#menu-icon-sm");
      let menuIconImage = document.querySelector("#menu-icon-sm-img");
      let linksContainerSm = document.querySelector(".links-container-sm");
       
      function showMenu() {
        if(!menuIconImage.src.endsWith("close-button.ico")){
            menuIconImage.src = "./images/close-button.ico";
            linksContainerSm.classList.add("container-active");
        } else {
            menuIconImage.src = "./images/3-bar-menu-icon.jpg";
            linksContainerSm.classList.remove("container-active");
        }
      }


/* -- Carousel Slider -- */

    const carousel = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;

    function moveToNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`; 

        for(let i=0; i<dots.length; i++){
            dots[i].classList.remove("dot-active");
        }
        dots[currentSlide].classList.add("dot-active");
    }

    let intervalId = setInterval(moveToNextSlide,3000);

    carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
    carousel.addEventListener('mouseleave', () => intervalId = setInterval(moveToNextSlide, 5000));