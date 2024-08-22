document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    let locoScroll = () => {

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".main"),
            smooth: true,
            smartphone: {
                smooth: true
            },
            tablet: {
                smooth: true
            }
        });
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(".main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
        });


        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        ScrollTrigger.refresh();


    }

    locoScroll();
    let main = document.querySelector(".main");

    //landing page

    let landingPageFn = () => {

        Shery.imageEffect(".top", { style: 5, config: { "a": { "value": 1.37, "range": [0, 30] }, "b": { "value": -0.59, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.915906761227867 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.61, "range": [0, 10] }, "metaball": { "value": 0.15, "range": [0, 2] }, "discard_threshold": { "value": 0.64, "range": [0, 1] }, "antialias_threshold": { "value": 0.1, "range": [0, 0.1] }, "noise_height": { "value": 0.36, "range": [0, 2] }, "noise_scale": { "value": 18.32, "range": [0, 100] } }, gooey: true });

         
        let landingpagetl = gsap.timeline();    
        
        
        landingpagetl.to('.halfupper', {
            y: -500,
            duration: 2,
            opacity:0,
            ease: Expo.easeInOut,
        },"a").to('.halfbottom', {
            y: 500,
            duration: 2,
            ease: Expo.easeInOut,
        },"a").to('.halfbottom', {
            opacity : 0,
            duration : 0 
        },).from(".thirsty" , {
            y :"40%",
            opacity:0
        }).from(".for",{
            x : "-40%",
            opacity : 0
        },"z").from(".more",{
            x : "20%",
            opacity : 0
        },"z").from(".container button",{
            borderRadius : "100%",
            scale : 0,
        })
        
        let p1tTl = gsap.timeline({repeat : -1});
        p1tTl.to(".p1text h2",{
            y:"-90%",
            delay : 5
        })

        
    }
    landingPageFn();

    // about page

    let aboutPageFn = () => {

        let charIdxFinder = (array, val) => {
            let idxs = [], i;
            for (i = 0; i < array.length; i++) {
                if (array[i] == val) {
                    idxs.push(i);
                }
            }
            return idxs;
        }

        let tl = gsap.timeline({
            scrollTrigger: {
                scroller: ".main",
                trigger: ".about",
                end: "top -40%",
                toggleActions: "play reverse play reset",
                start: "top 50%%",
            }
        });
        tl.from('.about', {
            opacity: 0
        })
        tl.to(".about .left img", {
            x: 0,
            duration: 1,
            ease: Expo.inOut,

        }, "a").to(".about .right h2", {
            x: "1%",
            duration: 1,
            ease: Expo.inOut,
        }, "a")

        let clutter3 = ""
        let aboutPoints = document.querySelectorAll(".aboutPoints");
        aboutPoints.forEach((point) => {
            let pointTxtContent = point.textContent;
            let pointWords = pointTxtContent.split("");
            pointWords.forEach((word) => {
                clutter3 = clutter3 + `<span class="outerPoint"><span class="innerPoint">${word}</span></span>`;
                point.innerHTML = clutter3;
            })
            clutter3 = "";
        })

        gsap.from(".innerPoint", {
            x: "-100%",
            scrollTrigger: {
                trigger: aboutPoints,
                scroller: "main",
                toggleActions: "play reverse play reset",
                start: "top 70%",

            }
        })

    }
    aboutPageFn();

    // product page

    let productPageFn = () => {


        let canContainer = document.querySelector(".canContainer");

        let cans = document.querySelectorAll(".cans");

        let extraSection = document.querySelectorAll(".extraSection");

        let canNames = document.querySelectorAll(".cans h3");

        let canScroll = gsap.timeline({
            scrollTrigger: {
                trigger: "#extraPage",
                pin: "#productPage",
                start: "top bottom",
                scroller: ".main",
                pinSpacing: false,
                scrub: 1

            }
        });

        gsap.from(".cans img", {
            x: "-120%",
            scrollTrigger: {
                trigger: "#productPage",
                start: "top 40%",
                scroller: ".main",
                pinSpacing: false
            }
        })

        let canArray = ["0%", "-4%", "-8%", "-10%", "-19%", "-25%", "-36%", "-42%", "-50%", "-57%", "-64%", "-68%", "-70%"]


        extraSection.forEach((sec, i) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sec,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                    scroller: ".main",
                    toggleActions: "play none reverse reset",
                    pinSpacing: false
                }
            });
            tl.to(cans, {
                height: "75%",
                width: "14vw",
                scale: 1
            }, "a").to(canNames, {
                rotateX: 90
            }, "a").to(cans[i], {
                height: '85%',
                width: "16vw",
                scale: 1.1
            }, "a").from(canNames[i], {
                rotateX: 90,
                y: "100%",
                ease: "back.inOut  "
            }, "a").to(canContainer, {
                x: canArray[i],
            }, "a")

        })

        let productHEadingText = document.querySelector(".headingTXT");
        let productHEadingTextContent = productHEadingText.textContent;
        let productHeadingWOrd = productHEadingTextContent.split("");
        let clutter = "";
        productHeadingWOrd.forEach((word) => {
            clutter = clutter + `<span>${word}</span>`;
            productHEadingText.innerHTML = clutter;
        })

        gsap.from(".headingTXT span", {
            rotateX: 90,
            y: "100%",
            stagger: 0.05,
            scrollTrigger: {
                trigger: "#productPage",
                start: "top 60%",
                scroller: ".main"
            }
        })

        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#productPage",
                start: "top 20%",
                scroller: ".main",
                pinSpacing: false
            }
        })

        tl3.from(".comeAlive", {
            scale: 0,
            top: "-12%"
        })

        canScroll.to(".comeAlive", {
            left: "70%"
        }, "A")
    }

    productPageFn();

    // pepsi fan page

    let pepsiLoverFn = () => {
        
        let pepsilover = document.querySelector(".pepsiFans .pepsilover");
        let pepsiloverText = pepsilover.textContent;
        let pepsiloverWords = pepsiloverText.split("");
        let clutter = "";
        pepsiloverWords.forEach((word) => {
            clutter = clutter + `<span class="">${word}</span>`;
            pepsilover.innerHTML = clutter
        })

        let pepsispans = document.querySelectorAll(".pepsilover span")
        pepsispans.forEach((span, i) => {
            if (span.textContent == "#") {
                span.setAttribute("class", "blah");
            }
            else if (span.textContent == "e" || span.textContent == "i" || span.textContent == "o") {
                span.setAttribute("class", "vowel");

            } else {
                span.setAttribute("class", "conso")
            }
        })

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pepsiFans",
                start: "top 60%",
                toggleActions: "play none play reset",
                scroller: ".main"
            }
        })
        tl.from(".blah", {
            opacity: 0,
            delay: 0.5
        }, "a").from(".vowel", {
            opacity: 0,
            stagger: 0.1,
        }, "a").from(".conso", {
            stagger: 0.1,
            opacity: 0,
        }, "a").from(".pepsiFans #bgimg", {
            opacity: 0
        }, "a")

        let commenttext = gsap.timeline({
            scrollTrigger: {
                trigger: '.pepsiFans .text',
                scroller: '.main',
                scrub: 2,
            },
        });
        let image = gsap.timeline({
            scrollTrigger: {
                trigger: '.pepsiFans .block img',
                scrub: 2,
                scroller: '.main',
            }
        });

        commenttext.from("#block1 .text", {
            x: 500,
            delay: 2,
            duration: 2,
            opacity: 0,
            scale: 0

        })
        .from("#block2 .text", {
            x: -500,
            duration: 2,
            opacity: 0,
            scale: 0
        })
        .from("#block3 .text", {
            x: 500,
            duration: 1.5,
            opacity: 0,
            scale: 0
        })

        image.from("#block1 img", {
            x: -500,
            duration: 2,
            opacity: 0,
            scale: 0
        })
        image.from("#block2 img", {
            x: 500,
            duration: 1.5,
            opacity: 0,
            scale: 0
        })
        image.from("#block3 img", {
            x: -500,
            duration: 1.5,
            opacity: 0,
            scale: 0
        })

    }

    pepsiLoverFn();

    // socialmedialink

})