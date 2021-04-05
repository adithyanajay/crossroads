//resize nav-bar while scroll.
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo")
window.onscroll = ()=>{
    navSize()
    // workScroll()
}

    
    const navSize = ()=> {
        if(window.innerWidth >= 800) {
        if(document.documentElement.scrollTop > 180) {
            nav.style.height = "10vh"
            nav.style.padding = "1em 0"
            nav.style.background = "white"
            nav.style.boxShadow =  "0px 0px 8px 2px rgba(0,0,0,.2)"
            logo.style.height = "9vh"
            
        }else {
            nav.style.height = "15vh"
            nav.style.padding = "2em 0"
            nav.style.background = "none"
            nav.style.boxShadow =  "none"
            logo.style.height = "13vh"
        }
    
    }
}



//position change in work section


const works = document.querySelector(".works");
// console.log(works.scrollHeight)
// console.log(works.s)
// console.log(document.documentElement.scrollTop - works.scrollHeight)

// const workScroll = ()=> {
//     const sec1 = document.getElementsByClassName("works-showcase-sec")[0]
//     const sec2 = document.getElementsByClassName("works-showcase-sec")[1]
//     const sec3 = document.getElementsByClassName("works-showcase-sec")[2]
//     console.log(sec1)
//     if(document.documentElement.scrollTop >= works.offsetTop-200){
//        sec1.style.left = "-20%";
//        console.log("yes")

//        sec2.style.left = "0%";
//        console.log("yes")

//        sec3.style.left = "10%";
//        console.log("yes")
//     }
    
//     if(document.documentElement.scrollTop <= works.offsetTop-200){
//         sec1.style.left = "-10%";
//         console.log("yes")

//         sec2.style.left = "-3%";
//         console.log("yes")
 
//         sec3.style.left = "-10%";
//         console.log("yes")
//      }
// }


// console.log(works.offsetTop)
// window.onscroll = ()=>slide_pic()
