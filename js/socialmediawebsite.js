const menuitems=document.querySelectorAll(".menu-item")
const notificationpoppup=document.querySelector(".notification-poppup")
const notificationid=document.querySelector("#notification")
const notificationcount=document.querySelector("#notification small")
// message
const messageid=document.querySelector("#messages")
const messagecount=document.querySelector("#messages small")
const RightMessagesBox=document.querySelector(".messages")
const friendsMessage=document.querySelectorAll(".message")
const Messagesearch=document.querySelector(".messages .search-bar")
const Messagesearchinput=document.querySelector(".messages .search-bar input")
//
const left =document.querySelector(".left")
const right =document.querySelector(".right")

//theme
const theme=document.querySelector(".costomize")
const themeicon=document.querySelector("#theme")
const fontsizes=document.querySelectorAll(".sizes span")
const primarycolor=document.querySelectorAll(".color div")
const root =document.querySelector(":root")

const bg1=document.querySelector('.bg-1')
const bg2=document.querySelector('.bg-2')
const bg3=document.querySelector('.bg-3')
// constants declaration ends here
// removeactive class funtion
function removeactive(){
    menuitems.forEach(item => {
        item.classList.remove("active")
        
    });
}

menuitems.forEach((menuitem) => {
    menuitem.addEventListener("click" ,()=>{
        removeactive()
menuitem.classList.add("active")
if (menuitem.id!='notification') {
  notificationpoppup.style.display="none"
  notificationcount.style.display="block"

}    else{
  notificationpoppup.style.display="block"
notificationcount.style.display="none"
}
if (menuitem.id!='messages') {
    right.classList.remove("display-right")
}
    })

});
// highlighting the the message box
messageid.addEventListener("click",()=>{
messagecount.style.display="none"
// right.style.display="block" ;
RightMessagesBox.style.boxShadow="0 0 2rem var(--color-primary)"

right.classList.toggle("display-right")

setTimeout(() => {
RightMessagesBox.style.boxShadow="none"
  
}, 2000);
})

// right


// message search bar 
// find fried funtion 
const  findfriend=()=>{
    const val=Messagesearchinput.value.toLowerCase()
   
    friendsMessage.forEach(user => {
        // console.log(user)
        let name=user.querySelector("h5").textContent.toLowerCase()
        // console.log(name)

        if (name.indexOf(val)!=-1) {
            user.style.display='flex'
        }else{
            user.style.display='none'

        }
    });
}

Messagesearch.addEventListener("keyup" , findfriend)




// theme costamization ////////
themeicon.addEventListener("click",()=>{
    theme.style.display='flex'
})
theme.addEventListener("click",(e)=>{
    if (e.target.classList.contains('costomize')) {
        theme.style.display='none'
    }
})

// font 

fontsizes.forEach(size => {
    let fontsize;
   
    size.addEventListener("click",()=>{
        fontsizes.forEach(Element => {
            Element.classList.remove("active")
        });
        size.classList.toggle('active')
        if (size.classList.contains('font-size-1')) {
            fontsize='10px';
        }else if(size.classList.contains('font-size-2')){
            fontsize='13px';
        }
        else if(size.classList.contains('font-size-3')){
            fontsize='16px';

        }else if(size.classList.contains('font-size-4')){
            fontsize='19px';

        }else if(size.classList.contains('font-size-5')){
            fontsize='22px';

        }
        document.querySelector('html').style.fontSize=fontsize;
    })
});

// primarycolor
primarycolor.forEach(color => {
    let hue;
   
    color.addEventListener("click",()=>{
        primarycolor.forEach(Element => {
            Element.classList.remove("active")
        });
        color.classList.toggle('active')
        if (color.classList.contains('color-1')) {
          hue=252;
        }else if(color.classList.contains('color-2')){
          hue=118;
        }
        else if(color.classList.contains('color-3')){
          hue=24;

        }else if(color.classList.contains('color-4')){
          hue=525;

        }else if(color.classList.contains('color-5')){
          hue=0;

        }
       root.style.setProperty('--hue-primary',hue)
    })
});


// background color

bg2.addEventListener("click",()=>{
bg2.classList.add("active")
bg1.classList.remove("active")
bg3.classList.remove("active")

root.style.setProperty("--white",'0%')
root.style.setProperty("--light",'10%')
root.style.setProperty("--dark",'100%')

})
bg1.addEventListener("click",()=>{
bg1.classList.add("active")
bg2.classList.remove("active")
bg3.classList.remove("active")

root.style.setProperty("--white",'100%')
root.style.setProperty("--light",'95%')
root.style.setProperty("--dark",'17%')

})
bg3.addEventListener("click",()=>{
bg3.classList.add("active")
bg1.classList.remove("active")
bg2.classList.remove("active")
root.style.setProperty("--white",'10%')
root.style.setProperty("--light",'0%')
root.style.setProperty("--dark",'100%')
})


// roght

