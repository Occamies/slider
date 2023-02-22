import gsap from "gsap";

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
  
    const sliderHeader = document.createElement('div');
    sliderHeader.id = "sliderHeader";
    sliderText.appendChild(sliderHeader);
  
    const sliderFillText = document.createElement('div');
    sliderFillText.id = "sliderFillText";
    sliderText.appendChild(sliderFillText);
    
    const imgMenu = document.createElement('div');
    imgMenu.id = "imgMenu";
    slider.appendChild(imgMenu);

    const headerArray = [
      "Giraf",
      "Flodhest",
      "Løve",
      "Næsehorn"
    ]

    const textArray = [
      "Giraffer er fascinerende dyr og er verdens højeste landpattedyr. De kan vokse op til 5,5 meter høje og veje op til 1.200 kg. Giraffer er kendt for deres lange hals, som faktisk består af de samme antal halsvirvler som mennesker (syv), men som er meget længere. Deres tætte og plettede pels fungerer også som et camouflage.",

      "Flodheste er massive dyr og er kendt for at være et af de farligste dyr i Afrika. De kan veje op til 2.700 kg og kan nå en længde på op til 4 meter. Selvom de ofte opholder sig i vandet, tilbringer de også meget tid på land, hvor de græsser og hviler sig om natten. Flodheste har en tyk hud, som fungerer som beskyttelse mod solen og mod andre dyr. Deres brede mund er fyldt med store tænder, som de bruger til at bide i planter og til at forsvare sig mod rovdyr. Flodheste er også kendt for deres aggressive adfærd, især hvis de føler sig truet. Det er vigtigt at holde afstand fra flodheste, da de kan være farlige, selvom de ser fredelige ud.",

      "Næsehorn er store dyr og er kendt for deres massive kroppe og karakteristiske horn på deres næser. Der findes fem forskellige arter af næsehorn, hvoraf tre arter - det hvide næsehorn, det sorte næsehorn og det javanesiske næsehorn - er truet af udryddelse på grund af ulovlig jagt og habitatødelæggelse. Næsehorn kan veje op til 2.300 kg og nå en længde på op til 4,2 meter. Deres tykke hud fungerer som beskyttelse mod rovdyr og solen, mens deres store horn bruges til at forsvare sig mod angribere. Næsehorn er planteædere og bruger deres store læber til at gribe fat i blade og grene. Selvom de ser tunge og klodsede ud, kan næsehorn faktisk løbe med en hastighed på op til 55 km/t, så de er faktisk ganske hurtige dyr.",
      
      "Løver er majestætiske dyr og er kendt for deres styrke og skønhed. De er en del af kattefamilien og er de eneste socialt levende katte i verden. Løver lever typisk i grupper kaldet prides, som består af flere hunner, deres unger og et eller flere hanner. Løver er imponerende rovdyr og kan veje op til 190 kg og nå en længde på op til 2,5 meter. Deres brune pels er dækket af pletter og fungerer som camouflage i deres naturlige habitat. Løver er kendt for deres brøl, som kan høres på op til 8 km afstand, og som bruges til at markere deres territorium og kommunikere med hinanden. Som kødædere jager løver typisk større byttedyr, såsom bøfler og zebraer, og kan jage i grupper for at øge deres succesrate. Løver er imidlertid også truet af habitatødelæggelse og ulovlig jagt, og deres antal er faldet drastisk i de senere år."
    ]
    
    const imgArray = [
      "url(../assets/giraf.jpg)",
      "url(../assets/hippo.jpg)",
      "url(../assets/lion.jpg)",
      "url(../assets/rhino.jpg)"
    ];
    
    //mangler eventlistener
    sliderImg.style.backgroundImage = imgArray[0];
    
    let i= 0
    const imgArrayLength = imgArray.length


    sliderImg.addEventListener("click", ()=>{

      gsap.to(sliderImg, {
        duration: 0.2,
        scaleX: -1,
        alpha: 0,
        repeat: 1,
        yoyo: true,
      })
      if (i<imgArrayLength-1) {
        i++;
        sliderImg.style.backgroundImage = imgArray[i];
        sliderFillText.innerHTML = textArray[i]
        sliderHeader.innerHTML = headerArray[i]
      } else {
        i=0;
        sliderImg.style.backgroundImage = imgArray[i];
        sliderFillText.innerHTML = textArray[i]
        sliderHeader.innerHTML = headerArray[i]
      }
    })

    
    imgArray.forEach((el, index)=>{
      const imgMenuItem = document.createElement('div');
      imgMenuItem.className = "imgMenuItem";
      imgMenu.appendChild(imgMenuItem);
      imgMenuItem.style.backgroundImage = imgArray[index];

      imgMenuItem.addEventListener("click", ()=>{
        sliderImg.style.backgroundImage = imgArray[index];
        sliderFillText.innerHTML = textArray[index]
        sliderHeader.innerHTML = headerArray[index]
        i=index
        gsap.to(sliderImg, {
          duration: 0.2,
          scaleX: -1,
          alpha: 0,
          repeat: 1,
          yoyo: true,
        })
      })

    
    });

    

  }//END constructor
}//END class