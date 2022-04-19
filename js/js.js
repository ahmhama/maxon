var navlink =document.querySelectorAll(".navbar-nav > li > a")

for (var i = 0; i < navlink.length; ++i) {
    navlink[i].addEventListener("click", function (e) {
        e.preventDefault();
        [].forEach.call(navlink, function (el) {
            el.classList.remove("active");
        });
        let scrollt = this.getAttribute("data-target");

        scrollTo(document.getElementById(scrollt));

        this.classList.add("active");
        
        navbar_collapse.classList.remove("open");

    });
}

function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}
