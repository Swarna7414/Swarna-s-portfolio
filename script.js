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

  function openMailClient() {
    const mailtoLink = "mailto:swarnasaisankarnaidu369@gmail.com";
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=swarnasaisankarnaidu369@gmail.com";
    
    const mailWindow = window.open(mailtoLink, "_blank");

    setTimeout(() => {
      if (!mailWindow || mailWindow.closed || typeof mailWindow.closed == "undefined") {
        window.open(gmailLink, "_blank");
      }
    }, 1000);
  }