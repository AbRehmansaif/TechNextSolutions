// document.addEventListener("DOMContentLoaded", function() {
//     const heading = document.querySelector(".heading");
//     const paragraph = document.querySelector(".paragraph");
  
//     // Function to handle scroll event
//     function handleScroll() {
//       if (isScrollingDown()) {
//         fadeInElement(heading);
//         fadeInElement(paragraph);
//       } else {
//         fadeOutElement(paragraph);
//         fadeOutElement(heading);
//       }
//     }
  
//     // Function to check if scrolling down
//     function isScrollingDown() {
//       return window.scrollY > window.lastScrollPosition;
//     }
  
//     // Function to fade in element from bottom
//     function fadeInElement(element) {
//       const rect = element.getBoundingClientRect();
//       if (rect.top < window.innerHeight && rect.bottom >= 0) {
//         element.style.opacity = 1;
//         element.style.transform = "translateY(0)";
//       }
//     }
  
//     // Function to fade out element
//     function fadeOutElement(element) {
//       const rect = element.getBoundingClientRect();
//       if (rect.top < window.innerHeight && rect.bottom >= 0) {
//         element.style.opacity = 0;
//         element.style.transform = "translateY(100px)"; // Move it down initially
//       }
//     }
  
//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);
  
//     // Store last scroll position
//     window.lastScrollPosition = window.scrollY;
  
//     // Update last scroll position on scroll
//     window.addEventListener("scroll", function() {
//       window.lastScrollPosition = window.scrollY;
//     });
  
//     // Call handleScroll on page load
//     handleScroll();
//   });
  


// document.addEventListener("DOMContentLoaded", function() {
//     const heading = document.querySelector(".heading");
//     const paragraph = document.querySelector(".paragraph");
  
//     // Function to handle scroll event
//     function handleScroll() {
//       if (isScrollingDown()) {
//         fadeInElement(heading);
//         fadeInElement(paragraph);
        
//       }else {
//         fadeOutElement(paragraph);
//         fadeOutElement(heading);
//       }
//     }
  
//     // Function to check if scrolling down
//     function isScrollingDown() {
//       return window.scrollY > window.lastScrollPosition;
//     }

//     function isScrollingUp() {
//       // Compare the current scroll position with the previous scroll position
//       let scrollingUp = window.scrollY < lastScrollPosition;
//       // Update the previous scroll position to the current scroll position
//       lastScrollPosition = window.scrollY;
//       return scrollingUp;
//     }
  
//     // Function to fade in element from bottom
//     function fadeInElement(element) {
//       const rect = element.getBoundingClientRect();
//       if (rect.top < window.innerHeight && rect.bottom >= 0) {
//         element.style.opacity = 1;
//         element.style.transform = "translateY(0)";
//       }
//     }
  
//     // Function to fade out element
//     function fadeOutElement(element) {
//       const rect = element.getBoundingClientRect();
//       if (rect.top < window.innerHeight && rect.bottom >= 0) {
//         element.style.opacity = 0;
//         element.style.transform = "translateY(100px)"; // Move it down initially
//       }
//     }

//     function fadeOutelement(element) {
//       const rect = element.getBoundingClientRect();
//       if (rect.top < window.innerHeight && rect.bottom >= 0) {
//         element.style.opacity = 0;
//         element.style.transform = "translateY(-100px)"; // Move it down initially
//       }
//     }
  
//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);
  
//     // Store last scroll position
//     window.lastScrollPosition = window.scrollY;
  
//     // Update last scroll position on scroll
//     window.addEventListener("scroll", function() {
//       window.lastScrollPosition = window.scrollY;
//     });
  
//     // Call handleScroll on page load
//     handleScroll();
//   });



document.addEventListener("DOMContentLoaded", function() {
  const heading = document.querySelector(".heading");
  const paragraph = document.querySelector(".paragraph");

  // Function to handle scroll event
  function handleScroll() {
    if (isScrollingDown()) {
      fadeInElement(heading);
      fadeInElement(paragraph);
      
    } else if (isScrollingUp()) {
      fadeOutElement(paragraph);
      fadeOutElement(heading);
    }
  }

  // Function to check if scrolling down
  function isScrollingDown() {
    return window.scrollY > window.lastScrollPosition;
  }

  // Function to check if scrolling up
  function isScrollingUp() {
    return window.scrollY < window.lastScrollPosition;
  }

  // Function to fade in element from bottom
  function fadeInElement(element) {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  }

  // Function to fade out element
  function fadeOutElement(element) {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.style.opacity = 0;
      element.style.transform = "translateY(100px)"; // Move it down initially
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Store last scroll position
  window.lastScrollPosition = window.scrollY;

  // Update last scroll position on scroll
  window.addEventListener("scroll", function() {
    window.lastScrollPosition = window.scrollY;
  });

  // Call handleScroll on page load
  handleScroll();
});
