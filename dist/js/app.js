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



const links = document.querySelectorAll(".nav-link")


links.forEach((link)=> {
    link.addEventListener("click", (e)=> {
        // e.preventDefault()

        let sec =  link.href.split('link-')
        sec =  "#" + sec[1]

        window.scroll({
            top: document.querySelector(sec).offsetTop -150,
            behavior: 'smooth',
            left: 0
        })
    

    })
})
