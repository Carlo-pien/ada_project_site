/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
/*
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };
        
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

*/


function addMargin() {
    window.scrollTo(0, window.pageYOffset - 50);
}

window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;

    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        content: '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header"><span class="btn-close"></span></div><div class="container"><h2 class="modal-title">Title of Case study</h2><hr class="divider" /><div class="modal-body"><div class="row gx-4 gx-lg-5 justify-content-center"><div class="col-lg-8 text-center" ><p class=" mb-4 text-black-75 ">Test textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest text</p><img src="assets/figures/mobility_timeseries.png" width="650" ></div></div></div></div></div></div>',
        elements: '#portfolio a.portfolio-box'

    });


    

})

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn-close")[0];
var span2 = document.getElementsByClassName("btn-close")[1];
var span3 = document.getElementsByClassName("btn-close")[2];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
  }
// When the user clicks on the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal2 || event.target == modal3 ) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}