window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    document.querySelector(".background").style.transform =
    `translateY(${scroll * 0.2}px)`;

});
