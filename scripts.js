console.log("js connects")
const version = "Oracle 1"
const changes = "2025-02-03:Started Oracle <br> 2025-02-26:Added fun facts"
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
var sendbutton = document.getElementById("send"); 
var inputsend = document.getElementById("text")
var convo = document.getElementById("convo")
let p1 = document.getElementById("p1")
inputsend.addEventListener("click",function(){
    inputsend.style.borderColor="dodgerblue";
    inputsend.style.boxShadow="0 0 10px dodgerblue";
})

inputsend.addEventListener("mouseup",function(){
    inputsend.style.borderColor="#1d2f4d";
    inputsend.style.boxShadow="0 0 10px transparent";
})

sendbutton.addEventListener("click" , function(){

if (inputsend.value.length==0){
    console.log("empty")
   inputsend.style.borderColor="red";
   inputsend.style.boxShadow="0 0 10px red"
   const glow = setInterval(()=>{
    inputsend.style.borderColor="#1d2f4d";
   inputsend.style.boxShadow="0 0 10px transparent";
   clearInterval(glow)
   },3000);

} else{
    convo.innerHTML = convo.innerHTML.replace("Start A Conversation?","")
    newChat(inputsend.value,"me")
    newChat(process(inputsend.value),"ai")
    

}
});
function shake(){
    let shakecount=0;
    const maxShakes=19;
     const shakeIntensity=5;
    
     const shakeInterval= setInterval(()=>{
        const randomX = Math.floor(Math.random()*shakeIntensity*4)-shakeIntensity
       sendbutton.style.left=randomX+'px'

       shakecount++
       if (shakecount >= maxShakes){
        clearInterval(shakeInterval)
        sendbutton.style.left='0px'
       }
     },50);
}

var aianswers = ["Yes","No","Yeah","No","Umm..Mabye Not","Of Course", "I'm Sure!","Probably"];
var funfacts = ["It is impossible for most people to lick their own elbow.","A shrimp's heart is in its head.","A crocodile cannot stick its tongue out.","It is physically impossible for pigs to look up into the sky.","The 'sixth sick sheik's sixth sheep's sick' is believed to be the toughest tongue twister in the English language.","If you sneeze too hard, you could fracture a rib.","Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.","In the course of an average lifetime, while sleeping you might eat around 70 assorted insects and 10 spiders, or more.","Like fingerprints, everyone's tongue print is different.","Rubber bands last longer when refrigerated."];
var confused = ["Sorry,I don't know this at the moment","I don't understand","Can you rephrase that?"];
var greeting = ["Hi", "Hello", "Bonjour", "Hola", "Howdy","WSG","What's Up","whats up","wat"];


function process(text) {
    for (var i = 0; i < ((greeting.length+confused.length)+funfacts.length)+aianswers.length; i++) {
        if (text.toLowerCase().includes(("funfact"||"fun fact")||"fun facts"||"funfacts")!=""||undefined) {
          return("Oh! Heres a funfact:"+funfacts[getRandomInt(funfacts.length-1)]);
        } else if ((detecttype(text)==1)) {
         return(aianswers[(getRandomInt(aianswers.length-1))]);
        } else if ((detecttype(text)==3)) {
          return(confused[(getRandomInt(confused.length-1))]);
          
        } else if (detecttype(text)==2) {
         return(greeting[(getRandomInt(greeting.length-1))]);
        }else if (detecttype(text)==4){
          return(changes)
        }
      }
}
function detecttype(i) {
    var words = i.split(" ");
    var y = ["will", "is", "am", "won't", "are", "can", "should", "do", "don't", "does", "did", "aren't", "shouldn't", "can't", "isn't"];
    var spec = ["//+change"]
    var g = ["hi", "hello", "bonjour", "hola", "howdy", "good morning", "good day", "good afternoon", "good night", "hi!", "hola!","whats up","wsg","yo!"];
    if (y.indexOf(words[0].toLowerCase()) >= 0) {
      return 1;
    } else if ((g.indexOf(words[0].toLowerCase()) >= 0)) {
      return 2;
    } else if(spec.indexOf(words[0].toLowerCase())>=0) {
      return 4;
    }else{
    return 3;
    }
}
  function newChat(content,from){
    let el  = document.createElement("p")
    convo.appendChild(el);
    if (from == "me"){
      el.style.textAlign = "left"
      el.style.background = "#2d4a7b"
      el.style.position = "relative"
      el.style.right = "0px"
      el.style.width =  "1000px"
      el.style.height =  "fit-content"
      el.innerHTML = "<span style='color:tomato;'><b>You</b></span><br>"+content;
      el.style.paddingLeft = "10px"
      el.style.borderRadius = "0px 10px 10px 0px"
      el.style.paddingLeft = "30px"
      el.style.borderLeft = "3px solid tomato"
    }else{
      el.style.textAlign = "left"
      el.style.background ="rgb(25, 39, 65)"
      el.style.position = "relative"
      el.innerHTML = "<b><span style='color:blue';>"+version+"</span></b><br>"+content;
      el.style.width =  "1000px"
      el.style.lineBreak = "unset"
      el.style.height =  "fit-content"
      el.style.paddingLeft = "0px"
      el.style.borderRadius = "0px 10px 10px 0px"
      el.style.paddingLeft = "30px"
      el.style.borderLeft = "3px solid dodgerblue"
    }
  }



