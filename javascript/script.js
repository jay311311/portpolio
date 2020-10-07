const navigatorBar = document.querySelector(".navigator_bar")
const navigatorLi = document.querySelectorAll(".navigator i")
const text = document.querySelector(".blind_letter");
const textTitle = document.querySelector(".blind_letter h2");
const textSpan = document.querySelectorAll(".blind_letter p");
const  landing = document.querySelector(".landing_effect")



    let i = 0;
    let interval;
    
    window.addEventListener("load", handleLoading)

    document.addEventListener("scroll", handleScroll)
   
    function handleLoading(event){
       textTitle.animate([
        {transform:"translateY(" + 200 + "px)"},
        {transform:"translateY(" + 0 + "px)"}
         ],
         {duration:1500,
         fill: "forwards",
         easing:"ease-out"});
    setTimeout(startInterval,1000)
   }


   function startInterval(){
      interval = setInterval(textspan,500)
   }

   function textspan(){
      textSpan[i].animate([
         {transform:"translateY(" + 200 + "px)"},
         {transform:"translateY(" + 0 + "px)"}
            ],
            {duration:800,
            fill: "forwards",
            easing:"ease-out"});
      i++;  
      if(i === 2 ){
         clearInterval(interval);
   
      }
   }


   
    function handleScroll(event){
      console.log(landing.clientHeight)
            navigatorBar.classList.add("navi_scroll")
            

          if (window.pageYOffset<=innerHeight&&window.pageYOffset >= 0) {
           
            navigatorLi.forEach((navi)=>navi.classList.remove("color"))
            navigatorLi[0].classList.add("color")
         
          }
         if(window.pageYOffset <= innerHeight*1+150 && window.pageYOffset >= innerHeight*1-150){

            navigatorLi.forEach((navi)=>navi.classList.remove("color"))
            navigatorLi[1].classList.add("color")
         }
         if(window.pageYOffset <= innerHeight*2+150 && window.pageYOffset >= innerHeight*2-150){
            navigatorLi.forEach((navi)=>navi.classList.remove("color"))
            navigatorLi[2].classList.add("color")
         }
         if(window.pageYOffset <= innerHeight*3+150 && window.pageYOffset >= innerHeight*3-150){

            navigatorBar.style.zIndex=999;
            navigatorLi.forEach((navi)=>navi.classList.remove("color"))
            navigatorLi[3].classList.add("color")
         }
         if(window.pageYOffset <= innerHeight*4+150 && window.pageYOffset >= innerHeight*4-150){
            navigatorLi.forEach((navi)=>navi.classList.remove("color"))
            navigatorLi[4].classList.add("color")
         }
    }
