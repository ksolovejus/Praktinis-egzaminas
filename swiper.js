const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  
  slidesPerView: 3,
  slidesPerGroup: 3,
});

// Change button style
const buttons = document.getElementsByClassName("button-swiper");
swiper.on("slideChange", function(){
    // Remove active class from button
    for(let button of buttons){
        button.classList.remove("active")
    }    

    // Add active class according to active index
   let index = swiper.activeIndex
   buttons[index].classList.add("active")
});

for(let button of buttons){
    button.addEventListener("click", function() {
        swiper.slideTo(this.getAttribute("index"))
    })
}