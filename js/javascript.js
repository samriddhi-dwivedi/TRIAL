
var imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {

        $('.m1').css('display','block');
        $('.mainright').css('display','block');


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 
sr.reveal('.shift',{delay: 400}); 


/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{}); 
sr.reveal('.skills__img',{});

sr.reveal('.timeline__event',{});

sr.reveal('.skillbar',{});


/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




/////////////

const animate = ScrollReveal();

 
    animate.reveal(".m1", {
      delay: 0,
      origin: "left",
      duration: 1500,
      distance: "150px",
    });

    animate.reveal(".mainright", {
        delay: 0,
        origin: "right",
        duration: 1000,
        distance: "150px",
      });

      animate.reveal(".abt-1", {
        delay: 0,
        origin: "left",
        duration: 1000,
        distance: "100px",
      });

      animate.reveal(".professional", {
        delay: 0,
        origin: "left",
        duration: 1500,
        distance: "100px",
      });

      animate.reveal(".technical", {
        delay: 0,
        origin: "right",
        duration: 1000,
        distance: "100px",
      });

      animate.reveal(".design", {
        delay: 0,
        origin: "left",
        duration: 1000,
        distance: "100px",
      });

      animate.reveal(".language", {
        delay: 0,
        origin: "right",
        duration: 1000,
        distance: "100px",
      });

      animate.reveal(".section-title", {
        delay: 0,
        origin: "bottom",
        duration: 1000,
        distance: "100px",
      });



      
//Education


      animate.reveal(".secondary", {
        delay: 0,
        origin: "top",
        duration: 1000,
        distance: "100px",
      });

      animate.reveal(".seniorsecondary", {
        delay: 0,
        origin: "bottom",
        duration: 1000,
        distance: "100px",
      });

      animate.reveal(".biotech", {
        delay: 0,
        origin: "top",
        duration: 1000,
        distance: "100px",
      });
 
//Projects


      animate.reveal(".align-items-stretch", {
        delay: 100,
        origin: "left",
        duration: 1000,
        distance: "100px",
      });
 

    //Experience

    animate.reveal(".leftexp", {
        delay: 100,
        origin: "left",
        duration: 1000,
        distance: "100px",
      });


      animate.reveal(".rightexp", {
        delay: 100,
        origin: "left",
        duration: 1000,
        distance: "100px",
      });
      


// Achievement

animate.reveal(".achievement-container", {
  delay: 100,
  origin: "left",
  duration: 1000,
  distance: "100px",
});
 

// Certifications

animate.reveal(".card-wrap2", {
  delay: 100,
  origin: "left",
  duration: 1000,
  distance: "100px",
});


//Contact
    
      animate.reveal("#contact", {
        delay: 100,
        origin: "top",
        duration: 1000,
        distance: "100px",
      });




//Footer

animate.reveal(".footer", {
    delay: 100,
    origin: "left",
    duration: 1000,
    distance: "100px",
  });

  
animate.reveal(".cc-contact", {
    delay: 100,
    origin: "top",
    duration: 1500,
    distance: "150px",
  });

////
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<font size="5">'+this.txt+'<br></font>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite font { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


console.log( 'All images loaded!' );
}
}
