
gsap.to("#box3",{
  x:1200,
  duration:2,
  delay:1,
  rotate:360,
  repeat:-1, 
  yoyo:true
})



gsap.from("h1",{
 opacity:0,
  duration:2,
  delay:1,
  y:20,
  stagger:0.3
})


gsap.from("#box1",{
  x:1200,
  duration:2,
  delay:1,
  rotate: 360,
  backgroundColor:"blue",
  borderRadius:"50%",
  scale:0.5
})


// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1
// })

// gsap.from("#box2", {
//   x: 1200,
//   duration: 2,
//   delay: 1
// })

gsap.to("#box2", {
  x: 500,
  y:500,
  duration: 2,
  delay: 1
})