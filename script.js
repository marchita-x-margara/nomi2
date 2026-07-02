gsap.registerPlugin(ScrollTrigger);
gsap.to(".titulo", {
    opacity: 0,
    y: -30,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".uno",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
gsap.fromTo(".img-derecha",
{
    opacity: 0,
    y: 20
},
{
    opacity: 1,
    y: 0,
    duration: 3,
    ease: "power3.out",
    scrollTrigger:{
        trigger: ".img-derecha",
        start: "top 85%"
    }
});
gsap.fromTo(".img-derecha2",
{
    opacity:0,
    y:20
},
{
    opacity:1,
    y:0,
    duration:5,
    ease:"power3.out",
    scrollTrigger:{
        trigger:".img-derecha2",
        start:"top 85%"
    }
});
gsap.fromTo(".img-izquierda",
{
    opacity:0,
    y:20
},
{
    opacity:1,
    y:0,
    duration:1.2,
    ease:"power3.out",
    scrollTrigger:{
        trigger:".img-izquierda",
        start:"top 85%"
    }
});
gsap.to(".img-centro",{
    y:-20,
    ease:"none",
    scrollTrigger:{
        trigger:"body",
        start:"top top",
        end:"bottom bottom",
        scrub:true
    }
});
gsap.to(".img-derecha",{
    y:-15,
    ease:"none",
    scrollTrigger:{
        trigger:"body",
        start:"top top",
        end:"bottom bottom",
        scrub:true
    }
});
gsap.to(".img-izquierda",{
    y:-10,
    ease:"none",
    scrollTrigger:{
        trigger:"body",
        start:"top top",
        end:"bottom bottom",
        scrub:true
    }
});
gsap.from(".reveal-centro",{

    clipPath:"inset(100% 0 0 0)",

    duration:1.5,

    ease:"power4.out",

    scrollTrigger:{
        trigger:".reveal-centro",
        start:"top 80%"
    }

});
gsap.registerPlugin();


const data = {
    arte: [
        
  "arte2.jpg",
   "arte1.jpg",
    "arte3.jpg"
    ],
    analogico: [
        "analogico3.jpg",
        "analogico1.jpg",
        "analogico2.jpg"
    ],
    retrato: [
      "retrato2.jpg",
         "retrato1.jpg",
        "retrato3.jpg"
    ],
    cobertura: [
      "cobertura1.jpg",
       "cobertura2.jpg",
        "cobertura3.jpg"
        
    ]
};

const items = document.querySelectorAll(".item");

items.forEach((item) => {

    const categoria = item.dataset.categoria;

    const overlay = item.querySelector(".overlay");

    item.addEventListener("mouseenter", () => {

        let images = data[categoria];

        const others = Array.from(items).filter(i => i !== item);

        others.forEach((el, index) => {

            const img = el.querySelector(".overlay");

            img.src = images[index];

            gsap.killTweensOf(img);

            gsap.fromTo(img,
                {
                    opacity: 0,
                    scale: 1.05
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0,
                    ease: "power3.out"
                }
            );

        });

    });

    item.addEventListener("mouseleave", () => {

        const overlays = document.querySelectorAll(".overlay");

        overlays.forEach(img => {

            gsap.killTweensOf(img);

            gsap.to(img, {
                opacity: 0,
                scale: 1.05,
                duration: 0.4,
                ease: "power2.out"
            });

        });

    });

});
gsap.registerPlugin();

document.querySelectorAll(".item").forEach((item) => {

    const overlayBg = item.querySelector(".overlay-bg");
    const info = item.querySelector(".info");

    item.addEventListener("mouseenter", () => {

        gsap.killTweensOf(overlayBg);
        gsap.killTweensOf(info);

        // 1. fondo blanco
        gsap.to(overlayBg, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
        });

        // 2. texto
        gsap.to(info, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        });

        document.querySelectorAll(".item").forEach((el) => {

            if (el !== item) {

                const img = el.querySelector(".overlay");

                gsap.killTweensOf(img);

                gsap.to(img, {
                    opacity: 1,
                    scale: 1.03,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });

    });

    item.addEventListener("mouseleave", () => {

        gsap.killTweensOf(overlayBg);
        gsap.killTweensOf(info);

        gsap.to(overlayBg, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out"
        });

        // texto fuera
        gsap.to(info, {
            opacity: 0,
            y: 15,
            duration: 0.4,
            ease: "power2.out"
        });

        document.querySelectorAll(".overlay").forEach((img) => {

            gsap.killTweensOf(img);

            gsap.to(img, {
                opacity: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        });

    });

});