document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar a");
  
    sections.forEach((section, index) => {
      let top = section.offsetTop;
      let height = section.clientHeight;
  
      if (pageYOffset >= top - 50 && pageYOffset < top + height - 50) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
  
        navLinks[index].classList.add("active");
      }
    });
  });