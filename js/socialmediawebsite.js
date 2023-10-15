

function addTask() {
    const input = document.getElementById("todoInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const ul = document.getElementById("todoList");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="cross btn" onclick="removeTask(this)">X</button>
    `;

    ul.insertBefore(li, ul.firstChild);

    input.value = "";
}

function removeTask(button) {
    const li = button.parentElement;
    const ul = li.parentElement;
    ul.removeChild(li);
}


//
// dropdown
drop = document.querySelector(".container-bar")
dropbtn = document.querySelector(".dropbtn")
dropbtn.addEventListener('click', function () {
    drop.classList.toggle("container-bar")
    // drop.classList.toggle("height_bar")
    console.log("hhhhh")
});
// dropdown ends
// new todo ends
document.addEventListener('DOMContentLoaded', function () {
    const addMediaButton = document.getElementById('add-media-button');
    const mediaList = document.getElementById('media-list');

    addMediaButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const mediaType = document.getElementById('media-type').value;
        const mediaFile = document.getElementById('media-file').files[0]; // Get the file input correctly
        const mediaTitle = document.getElementById('media-title').value;
        const mediaDescription = document.getElementById('media-description').value;

        if (mediaType && mediaFile && mediaTitle) {
            const mediaItem = document.createElement('li');
            mediaItem.className = 'media-item';

            if (mediaType === 'image') {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(mediaFile);
                 // Create a URL for the file
                 mediaItem.innerHTML=`  <button class="cross-feed btn" onclick="removeTask(this)">X</button>`
                mediaItem.appendChild(img);
            } else if (mediaType === 'video') {
                const video = document.createElement('video');
                video.src = URL.createObjectURL(mediaFile); // Create a URL for the file
                video.controls = true;
                mediaItem.innerHTML=`  <button class="cross-feed btn" onclick="removeTask(this)">X</button>`
                mediaItem.appendChild(video);
            }

            const title = document.createElement('div');
            title.className = 'media-title';
            title.textContent = mediaTitle;
            mediaItem.appendChild(title);

            const description = document.createElement('div');
            description.className = 'media-description';
            description.textContent = mediaDescription;
            mediaItem.appendChild(description);

            // Get the current date and time
            const currentDate = new Date();
            const postTime = document.createElement('div');
            postTime.className = 'media-post-time';
            postTime.textContent = 'Posted on ' + currentDate.toLocaleString();
            mediaItem.appendChild(postTime);

            // Insert the new media item at the beginning of the list
            mediaList.insertBefore(mediaItem, mediaList.firstChild);
        }
    });
});

// extrsaaaaaaaaaaaaaa endsssssssssssssssssssss
const menuitems = document.querySelectorAll(".menu-item")
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
        menuitem.classList.add("active");


})

});
// highlighting the the message box


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
    console.log("jjjd")
    theme.style.display = 'flex'
})
theme.addEventListener("click",(e)=>{
    if (e.target.classList.contains('costomize')) {
        theme.style.display='none'
        console.log("hassdfg")
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

