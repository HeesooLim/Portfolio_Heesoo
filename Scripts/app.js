(function() {
    if(window.innerWidth >= 980)
    {
        start();
    }
  })();
  
// highlight selected anchor in navigation bar
function highlightNav(title)
{
    let navAnchor = document.getElementById(title);

    navAnchor.className = "nav-link active";
}

function homeAnimation(title, array)
{
    let learnedEvenArray = [];
    let learnedOddArray = [];

    // assign values to even array and odd array
    for (let index = 0; index < 3; index++) 
    {
        learnedEvenArray[index] = array[index * 2];
        learnedOddArray[index] = array[index * 2 + 1];
    }

    // is executed only when the title is home
    if(title === 'home')
    {
        // comes down from above
        gsap.from(learnedEvenArray, { opacity: 0, duration: 1, top: 50, ease: 'bounce', scrollTrigger: {
            trigger: "#learned",
            start: "top 700px",
            // markers:true,
            toggleActions: "restart resume pause pause"
        }});

        // comes up from below
        gsap.from(learnedOddArray, { opacity: 0, duration: 1, top: 150, ease: 'bounce', scrollTrigger: {
            trigger: "#learned",
            start: "top 700px",
            // markers:true,
            toggleActions: "restart resume pause pause"
        }});

        // hero image's cherry blossom branch on the right
        gsap.to(".right", {
            scrollTrigger: {
                trigger: "#profileContainer",
                start: "top 650px",
                end: "top 100px",
                scrub: 1
            },
            right: -200,
            duration: 3
        });

        // hero image's cherry blossom branch on the left
        gsap.to(".left", {
            scrollTrigger: {
                trigger: "#profileContainer",
                start: "top 650px",
                end: "top 100px",
                scrub: 1
                // markers:true
            },
            left: -200,
            duration: 3
        });

        // profile container comes from right
        gsap.from("#profileContainer", {
            scrollTrigger: {
                trigger: "#profileContainer",
                start: "top 700px",
                end: "top 600px",
                scrub: 1
                // markers:true
            },
            marginRight: 200,
            opacity: 0,
            duration: 3
        });
    }
}

function projectAnimation(title)
{
    // is executed only when the title is projects and the window's width is enough
    if(title === 'projects' && window.innerWidth >= 1280)
    {
        // underline of 'My Recent Works'. length decreases and disappears
        gsap.to(".underLine", {
            scrollTrigger: {
                trigger: "#projectMain",
                start: "top top",
                end: "top top"
                // markers:true
            },
            width: 0,
            duration: 1
        });

        // disappears
        gsap.to("#projectHeader", {
            scrollTrigger: {
                trigger: "#projectMain",
                start: "top top",
                end: "top top"
                // markers:true
            },
            opacity: 0,
            duration: 1
        });

        // array of project items
        // let containers = document.querySelectorAll(".projectItem");
        // let bottomContainers = [];

        // for (let index = 0; index < 3; index++) 
        // {
        //     bottomContainers[index] = containers[index + 3];
        // }


        // project items appear sequentially
        const timeLine = gsap.timeline();
        timeLine.from(".one", {ease: "back", left: 50, opacity: 0, duration: 0.3, delay: 1})
                .from(".two", {ease: "back", right: 50, opacity: 0, duration: 0.3})
                .from(".three", {ease: "back", left: 50, opacity: 0, duration: 0.3})
                .from(".four", {ease: "back", top: 450, opacity: 0, duration: 0.3})
                .from(".five", {ease: "back", right: 50, opacity: 0, duration: 0.3})
                .from(".description", {ease: "back", top: 50, opacity: 0, duration: 0.3});

        ScrollTrigger.create({
            animation: timeLine,
            trigger: "#projectMain",
            start: "top top",
            // markers:true,
            anticipatePin: 1
        });
    }

}

function footerAnimation(title, array)
{
    let count = 0;

    // array containing footer roses
    let roseArray = [];

    for (let index = 6; index < 11; index++) {
        roseArray[count] = array[index];
        count++;
    }

    if(title === 'home')
    {
        // roses come from below, '#mainContainer' is a trigger
        gsap.from(roseArray, { duration: 2, bottom: 0, stagger: 0.5, ease: 'power4', scrollTrigger: {
        trigger: "#mainContainer",
        start: "top 550px",
        // markers:true,
        toggleActions: "restart pause pause pause"
        }});
    }

    if(title === 'projects')
    {
        // roses come from below, '.four' is a trigger
        gsap.from(roseArray, { duration: 2, bottom: 0, stagger: 0.5, ease: 'power4', scrollTrigger: {
        trigger: ".four",
        start: "top 100px",
        // markers:true,
        toggleActions: "restart pause pause pause"
        }});
    }
}

function start()
{
    gsap.registerPlugin(ScrollTrigger);

    let title = document.title;
    let footerArray = document.querySelectorAll("#footerInfo img");
    let learnedArray = document.querySelectorAll("#mainContainer img");

    highlightNav(title);
    homeAnimation(title, learnedArray);
    projectAnimation(title);
    footerAnimation(title, footerArray);
}







