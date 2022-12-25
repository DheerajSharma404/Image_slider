//Getting the reference of all the item that we need
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const img = document.querySelectorAll(".img");
const bottom = document.querySelector(".bottom");

let slideNumber = 1; //This the no.of pictures we have..we have denoted it as slids
const len = img.length; //This is the total no. of the slide

//This for-loop loop through the len(no. of image) and create the html which will be injected to the bottom div.
for (let i = 0; i < len; i++) {
  const div = document.createElement("div"); //Creatting the html element div
  div.className = "btn"; //Adiing a class to it.
  bottom.appendChild(div); //Appending as a child of the bottom div (html)
}
//if try to get the reference of the btn above the for-loop  we'll get error cause the buttons are not created before the for loop.
const btn = document.querySelectorAll(".btn"); //Getting the reference of all the .btn class.(all the buttons)(small circle on the bottom)
btn[0].style.backgroundColor = "white"; //setting the background of the first button to be white

//This function changes the color back to transparent when the othee small circle button are click.
const resetBg = () => {
  btn.forEach((btn) => {
    btn.style.backgroundColor = "transparent";
  });
};

btn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    resetBg(); //when the button is clicked change the color to  transparent.
    slider.style.transform = `translateX(-${i * 800}px)`; //change the slider based on the multiples of i.which is the index of button from the button array return by the qerySelectorAll.
    slideNumber = i + 1; //array index starts from 0 but the no. of image starts as 1 so the + 1.
    btn.style.backgroundColor = "white"; //changing the color of the button clicked to be whilte.
  });
});

//Move the slide to the right- next slide
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`; //slide no.1 start at 0 and the next slide at 800 ans so on .. so teh slidenumber * 800px.
  slideNumber++; // increase the slide no.
};

//Move the slide to the first slide after the last slide
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`; //Cause the first slide start at 0px.
  slideNumber = 1; //Also intially the slide no.= 1
};

//Move the silde back by one position
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`; //First slide starts at 0 and second slide starts at 800px and the third slide at 1600
  slideNumber--; //Also decrease the slide by 1.
};

//Move the slid to the last slid when in first slide
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(len - 1) * 800}px)`; //len-1  to get the last slide no. and the multiply with 800px.
  slideNumber = len; //then setting the slidenumber to be the len cause of the last slide.
};

//Changes the color of the circle button
const changeColor = () => {
  resetBg(); //chagnes the button to transparent
  btn[slideNumber - 1].style.backgroundColor = "white"; //Sets the background color of the button to white when clicked.
};

//This is the right arrow's event listener
right.addEventListener("click", () => {
  slideNumber < len ? nextSlide() : getFirstSlide(); //This is the right arrow's event listner
  changeColor(); //Also making sure that the buttons also changes.
});

//This is the left arrow's event listener
left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide(); //This is the left arrow's event listner
  changeColor(); //Also making sure that the buttons also changes.
});
