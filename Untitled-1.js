//background auto changing 

let landingdesign  = document.querySelector(".landing-design");
let imgarray = ["1.jpg" ,"2.jpg" ,"3.jpg" ,"4.jpg" ,"5.jpg" , "6.jpg"]


let backgroundoption  = true;
let backgroundinterval ;
function random()
{

 if (backgroundoption===true)
 {
   
    backgroundinterval= setInterval(()=> {
    let randomnumber = Math.floor(Math.random() * imgarray.length);
    console.log(randomnumber);
    landingdesign.style.backgroundImage = 'url("../images/' +imgarray[randomnumber]  + '")';

},3000);

 }
}random();

//changing the web random-background 
const background = document.querySelectorAll(".option-box span ");
background.forEach(span =>{

span.addEventListener("click",(e)=>{

e.target.parentElement.querySelectorAll(".active").forEach(element=>{
 element.classList.remove("active");
});
   e.target.classList.add("active");

   if(e.target.dataset.background ==='yes')
   {
       backgroundoption=true;
       random();
   }else
   {
       backgroundoption=false;
       clearInterval(backgroundinterval);

   }
}); 

}); 

//box setting 
document.querySelector(".toggle-settings .fa-cog ").onclick = function()
{
    document.querySelector(".settingbox").classList.toggle("open");
   
};

//changing the web color
 const colorsli = document.querySelectorAll(".colors-list li ");
 colorsli.forEach(li=>{

li.addEventListener("click",(e)=>{

console.log(e.target.dataset.color);

document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

});

 }); 

// strat skills selector 

let ourskills = document.querySelector(".skills")

window.onscroll = function()
{
 let skillsoffsettop = ourskills.offsetHeight;

let skillsouterheight = ourskills.offsetHeight;

let windowheight = this.innerHeight ; 

let windowscrooltop = this.pageYOffset ; 

this.console.log(windowheight);

if( windowscrooltop > ( skillsoffsettop +skillsouterheight - windowheight )){

    let allskills = document.querySelectorAll(".skills-progress  span")

  allskills.forEach(skill => {
  skill.style.width = skill.dataset.progress ;

});

}

};




// end skills selecto 


//image popup
let ourgallary = document.querySelectorAll(".gallary img");
ourgallary.forEach(img=> {
img.addEventListener('click',(e)=>{
let overlay = document.createElement("div");
overlay.className = 'popup-overlay';

document.body.appendChild(overlay);
 
let popupbox = document.createElement("div");

popupbox.className = 'popup-box';
let popupimage = document.createElement("img");
popupimage.src = img.src;
popupbox.appendChild(popupimage);
document.body.appendChild(popupbox)

  //close button

let closebutton = document.createElement("span");
let closebuttontext = document.createTextNode("x");
closebutton.appendChild(closebuttontext);
closebutton.className ='close-button';
popupbox.appendChild(closebutton);




  });
});

//close popup
document.addEventListener("click",function (e){
 
if(e.target.className === 'close-button'){

e.target.parentNode.remove();
document.querySelector(".popup-overlay ").remove();



}
});


//my bullts 
const allbullts = document.querySelectorAll(".nav-bullts .bullts");

allbullts.forEach(bullts=>{

bullts.addEventListener("click",(e)=>{

document.querySelector(e.target.dataset.section).scrollIntoView({

behavior : "smooth"


     });

   });

});
//my links 
const alllinks = document.querySelectorAll(".links a");

alllinks.forEach(link=>{

link.addEventListener("click",(e)=>{

  e.preventDefault(); 

document.querySelector(e.target.dataset.section).scrollIntoView({

behavior : "smooth"


     });

   });

});
//my diplay bultts 

let bulltsspan  = document.querySelectorAll(".Bultts-option span");
let bulltscontainer  = document.querySelectorAll(".nav-bullts ");
bulltsspan.forEach(span => {

span.addEventListener("click", (e) =>{

 

if (span.dataset.display==='show'){

  bulltscontainer.style.display = 'block';
} else{
  bulltscontainer.style.display = 'none';

  }



});


});

//reset button

document.querySelector(".reset-option").onclick = function(){
window.localStorage.clear();
window.location.reload();

};



