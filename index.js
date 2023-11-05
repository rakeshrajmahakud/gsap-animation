// gsap.to(
//     ".box",{
//         x: 500,
//         y: 500,
//         backgroundColor: "red",
//         yoyo: true,
//         repeat: -1,
//         duration: 1,
//         scale: 1.5,
//         rotate:360,
//     }
// )

// gsap.from(
//     ".box",{
//         x: 500,
//         y: 500,
//         backgroundColor: "red",
//         yoyo: true,
//         repeat: -1,
//         duration: 4,
//         scale: 1.5,
//         rotate:360,
//         stagger: 2
//     }
// )



// let t1 = gsap.timeline();

// t1.from(
//     "#heading",
//     {
//         opacity: 0,
//         duration: 
//     },
//     3
// )
// t1.from('#box1',{
//     opacity: 0,
//     duration: 2,
//     x: 500
// })

// t1.from('#box2',{
//     opacity: 0,
//     duration: 2,
//     x: 500
// })

// t1.from('#box3',{
//     opacity: 0,
//     duration: 2,
//     x: 500
// })



// --------------------
// var tl = gsap.timeline({scrollTrigger:{
//     trigger:"#main",
//     markers:true,
//     start:"50% 50%",
//     end:"100% 50%",
//     scrub:2,
//     pin:true
// }});
// tl.to("#box1",{
//     opacity:1,
// },'a')
// // .to("#box2",{
// //     top:"150%",
// //     opacity:1
// // },'a')
// .to("#box1",{
//     width: 0,
//     height: 0
// },'b')
// // .to("#box3",{
// //     top: "130%"
// // }, 'b')
// // .to("#box3",{
// //     top: "75%"
// // }, 'c')
// // .to("#box2",{
// //     width: 0,
// //     height: 0
// // },'c')

// --------------------------------
const { innerHeight } = window;

gsap.from("#box1",{
    scale: 100, stager:0.25,duration:3,
    scrollTrigger:{
        trigger: "#main",
        pin: true,
        end: `+=${innerHeight*1.3}`,
        scrub: 0
    }
})


gsap.from("#box2",{
    scale: 100, stager:0.25,duration:3,
    scrollTrigger:{
        trigger: "#mymain",
        pin: true,
        end: `+=${innerHeight*1.3}`,
        scrub: 0
    }
})

//-----------------
// const { innerHeight } = window;
// gsap.registerPlugin(ScrollTrigger);
// let timeln = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".cards",
//         pin: true,
//         pinSpacing: true,
//         start: "left-=120px left",
//         end: `+=${innerHeight*1.3}`,
//         scrub:1
//     }
// })

// timeln.addLabel('card1');
// timeln.to('.card-1',{
//     xPercent:0,
//     opacity:1
// })

// timeln.from('.card-2',{
//     xPercent: 75,
//     opacity: 0
// })
// timeln.addLabel("card2");

// timeln.to('.card-1',{
//     scale:0.95,
//     xPercent: -0.5,
//     opacity:0.5
// },"-0.3")

// timeln.to(".card-2",{
//     xPercent:0,
//     opacity:1
// });

// timeln.from(".card-3",{
//     xPercent:75,
//     opacity:0
// });
// timeln.addLabel("card3");

// timeln.to(".card-2",{
//     scale:0.98,
//     xPercent:-0.4,
//     opacity:0.6
// },"-0.3");

// timeln.to(".card-3",{
//     xPercent:0,
//     opacity:1
// })

