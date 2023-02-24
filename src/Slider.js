import gsap from "gsap";
import data from "./animal.json"

export default class Slider {
  constructor(){

    
    
    const slider = document.createElement('section');
    slider.id = "slider";
    document.body.appendChild(slider);

    const sliderContainer = document.createElement('div');
    sliderContainer.id = "sliderContainer";
    slider.appendChild(sliderContainer);

    
    const sliderImg = document.createElement('div');
    sliderImg.id = "sliderImg";
    sliderContainer.appendChild(sliderImg);

    const sliderText = document.createElement('div');
    sliderText.id = "sliderText";
    sliderContainer.appendChild(sliderText);
  
    const sliderHeader = document.createElement('h1');
    sliderHeader.id = "sliderHeader";
    sliderText.appendChild(sliderHeader);
  
    const sliderFillText = document.createElement('p');
    sliderFillText.id = "sliderFillText";
    sliderText.appendChild(sliderFillText);
    
    const imgMenu = document.createElement('div');
    imgMenu.id = "imgMenu";
    slider.appendChild(imgMenu);
    
    /* sliderImg.style.backgroundImage = data.animals[0].img; */
    sliderImg.style.display = "none";
    sliderText.style.display = "none";


    
    let i= 0
    const imgArrayLength = data.animals.length

    gsap.to(sliderText, {
      duration: 0.2,
      translateX: window.innerWidth,
    })


    sliderImg.addEventListener("click", ()=>{
      sliderImg.style.display = "block";
      sliderText.style.display = "block";
      gsap.to(sliderImg, {
        duration: 0.2,
        scaleX: -1,
        alpha: 0,
        repeat: 1,
        yoyo: true,
      })
      gsap.to(sliderText, {
        duration: 0.2,
        translateX: window.innerWidth,
      })
      gsap.to(sliderText, {
        delay: 0.2,
        duration: 0.2,
        translateX: -100,
      })
      if (i<imgArrayLength-1) {
        i++;
        sliderImg.style.backgroundImage = data.animals[i].img;
        sliderFillText.innerHTML = data.animals[i].text
        sliderHeader.innerHTML = data.animals[i].name
      } else {
        i=0;
        sliderImg.style.backgroundImage = data.animals[i].img;
        sliderFillText.innerHTML = data.animals[i].text
        sliderHeader.innerHTML = data.animals[i].name
      }
    })


    data.animals.forEach((el, index)=>{

      const imgMenuItem = document.createElement('div');
      imgMenuItem.className = "imgMenuItem";
      imgMenu.appendChild(imgMenuItem);
      imgMenuItem.style.backgroundImage =  el.img;
      imgMenuItem.addEventListener("click", ()=>{
        sliderImg.style.display = "block"
        sliderText.style.display = "block";
        sliderImg.style.backgroundImage =  el.img;
        sliderFillText.innerHTML =  el.text
        sliderHeader.innerHTML =  el.name
        i=index

        
        gsap.to(sliderImg, {
          duration: 0.2,
          scaleX: -1,
          alpha: 0,
          repeat: 1,
          yoyo: true,
        })
        gsap.to(sliderText, {
          duration: 0.2,
          translateX: window.innerWidth,
        })
        gsap.to(sliderText, {
          delay: 0.2,
          duration: 0.2,
          translateX: 0,
        })
      })
    });
  }//END constructor
}//END class