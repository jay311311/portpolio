const navigatorBar = document.querySelector(".navigator_bar")
    const navigatorLi = document.querySelectorAll(".navigator i")
    const text = document.querySelector(".blind_letter");
    const textTitle = document.querySelector(".blind_letter h2");
    const textSpan = document.querySelectorAll(".blind_letter p");
   const  svg = document.querySelector("#svgExample")
   const effectImg = document.querySelector(".landing_effect img")
   const landingBtn  = document.querySelector(".landing_text .button")
    let i = 0;
    let interval;
    
    window.addEventListener("load", handleLoading)
    document.addEventListener("scroll", handleScroll)
    landingBtn.addEventListener("click", handleClick)


    function handleClick(){
      landingBtn.style.display="none"
      text.animate([
         {opacity:1},{opacity:0}
      ],{duration:5000,
         easing:"ease-out",
         fill: "forwards",});
      svg.animate([
         {transform: "scale(20)",opacity: 0},
         {transform: "scale(1)",opacity: 1}
      ], {duration:5500,
         easing:"linear",
         fill: "forwards",
         delay:-1800})
         
       setTimeout(startWeb,3700)
    }
     function startWeb(){
       svg.animate([
          {transform:"translateY(" + 0 + "px)"},
          {transform:"translateY(" + -100 + "px)"}
             ],
             {duration:1000,
             fill: "forwards",
             easing:"linear"});
      navigatorBar.animate([
         {transform:"translateX(" + -100 + "px)"},
         {transform:"translateX(" + 0 + "px)"}
            ],
            {duration:800,
            fill: "forwards",
            easing:"linear",
            delay:800
            });   
         }

    function handleLoading(event){
       svg.style.opacity=0;
       landingBtn.style.opacity=0;
       svg.style.display="block";
       landingBtn.style.display="block"
       textTitle.animate([
        {transform:"translateY(" + 200 + "px)"},
        {transform:"translateY(" + 0 + "px)"}
         ],
         {duration:1500,
         fill: "forwards",
         easing:"ease-out"});
    setTimeout(startInterval,1500)
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
         setTimeout( twinkle,4500)
      }
      function  twinkle(){
         landingBtn.animate([
            {opacity:0},{opacity:1},{opacity:0}
         ],{duration:2000,
            iterations: Infinity,
            fill: "forwards"});
      }
   }

    function handleScroll(event){
      console.log(svg.clientHeight)
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
            navigatorLi.forEach((navi)=>navi.classList.remove("color"))
            navigatorLi[3].classList.add("color")
         }
         if(window.pageYOffset <= innerHeight*4+150 && window.pageYOffset >= innerHeight*4-150){
            navigatorLi.forEach((navi)=>navi.classList.remove("color"))
            navigatorLi[4].classList.add("color")
         }
    }
