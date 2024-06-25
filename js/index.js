gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline({});

$(window).on("load", () => {
    window.paceOptions = {
        ajax: true,
        eventLag: false,
        document: true,
    };

    Pace.on("done", () => {
        tl.to(".pace", 1, {
            autoAlpha: 0,
        })

        tl.to(".loader .top-half", 1, {
            y: "-100%",
        })
            .to(
                ".bottom-half",
                1,
                {
                    y: "100%",
                },
                "-=0.95"
            )
            .to(".loader", {
                zIndex: -1,

            });
    });
});

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },

    pinType: document.querySelector("[data-scroll-container]").style.transform
        ? "transform"
        : "fixed",
});

$(".menu-open").on("click", () => {
    tl.to(".navigation-wrapper", 1, {
        x: 0,
    });
});

$(".menu-close").on("click", () => {
    tl.to(".navigation-wrapper", 1, {
        x: "-100%",
    });
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
locoScroll.on("scroll", ScrollTrigger.update);