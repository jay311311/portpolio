    const informationBar = document.querySelector(".information_bar")
    const navigator = document.querySelectorAll(".navigator li")
    
    const navigationLi = document.querySelectorAll(".navigator_bar li")


    const wrapDiv = document.querySelectorAll("#wrap>div")

    let interval;
    let i=0;
    var offset = 0;
    let counter=0;
    let sectionCounter=0;

    window.addEventListener("load", handleLoading)
    document.addEventListener("scroll", handleScroll)
    document.addEventListener('wheel', handleWheel)      

    function handleWheel(event){
        counter++;
            var gosectioncount = counter%5
          
        if(event.wheelDelta>0){
            
            if(gosectioncount == 4 && sectionCounter>0)sectionCounter--;
            console.log("위로",gosectioncount,sectionCounter,wrapDiv)
          
        }
        if(event.wheelDelta<0){
            
            if(gosectioncount == 4 && sectionCounter<5)sectionCounter++;
            console.log("아래",gosectioncount,sectionCounter,wrapDiv)
        }

        let wheeling = wrapDiv[sectionCounter].animate([

            {opacity:0},
            {opacity:1}
        ])
    }

  
       
  
      




        


    function handleLoading(){
        setTimeout(delayNavi,7000)
        }
    function delayNavi (){
        interval = setInterval(goNavi,400)
    }
    function goNavi(){
        let navi = navigationLi[i].animate([
            {
                transform:"translateY(" + -50 + "px)"
            },{
                transform:"translateY(" + 0 + "px)"
            }
        ],400);
        navigationLi[i].style.transform="translateY(0px)"
        i++;
        if(i > 3) {
            console.log("종료");
            clearInterval(interval);
        };
    }



    function handleScroll(event){

          if (window.pageYOffset>=innerHeight) {
            informationBar.style.position="fixed";
          }else{
            informationBar.style.position="absolute";
          }
         if(window.pageYOffset <= innerHeight*1+150 && window.pageYOffset >= innerHeight*1-150){
            navigator.forEach((navi)=>navi.classList.remove("color"))
            navigator[0].classList.add("color")
         }
         if(window.pageYOffset <= innerHeight*2+150 && window.pageYOffset >= innerHeight*2-150){
            navigator.forEach((navi)=>navi.classList.remove("color"))
            navigator[1].classList.add("color")
         }
         if(window.pageYOffset <= innerHeight*3+150 && window.pageYOffset >= innerHeight*3-150){
            navigator.forEach((navi)=>navi.classList.remove("color"))
            navigator[2].classList.add("color")
         }
         if(window.pageYOffset <= innerHeight*4+150 && window.pageYOffset >= innerHeight*4-150){
            navigator.forEach((navi)=>navi.classList.remove("color"))
            navigator[3].classList.add("color")
         }
    }
     
    let guage = {
        startpos: 0, //pipe가 시작하는 위치
      };