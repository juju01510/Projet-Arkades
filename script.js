let pageName = window.location.pathname;
let pageIconNumber = 1

const PageAcceuil = document.getElementById("Accueil")
const PageQuiSommesNous = document.getElementById("QuiSommesNous")
const PageJeux = document.getElementById("Jeux")
const PageContact = document.getElementById("Contact")
console.log(pageName)

addEventListener("keypress", goto=>{
    if (goto.key=== "Enter" && pageIconNumber ===1){
        window.location.assign("./Page D'acceuil.html"); 
    }
    if (goto.key=== "Enter" && pageIconNumber ===2){
        window.location.assign("./QuiSommesNous.html"); 
    }
    if (goto.key=== "Enter" && pageIconNumber ===3){
        window.location.assign("./ListeDesJeux.html");
    }
    if (goto.key=== "Enter" && pageIconNumber ===4){
        window.location.assign("./Form.html"); 
    }
})

document.onkeydown = function Select(event){
    console.log(pageIconNumber)
    if(event.key=== "ArrowRight"){
        pageIconNumber ++
    }
    if(event.key=== "ArrowLeft"){
        pageIconNumber --
    }
    if(pageIconNumber === 0){
        pageIconNumber = 4
    }
    if(pageIconNumber === 5){
        pageIconNumber = 1
    }
    CheckPageNumber()
}


function CheckPageNumber(){
    if (pageIconNumber ===1){
        PageAcceuil.classList.add("nav-bg-on-select")
        PageQuiSommesNous.classList.remove("nav-bg-on-select")
        PageJeux.classList.remove("nav-bg-on-select")
        PageContact.classList.remove("nav-bg-on-select")
    }
    if (pageIconNumber ===2){
        PageAcceuil.classList.remove("nav-bg-on-select")
        PageQuiSommesNous.classList.add("nav-bg-on-select")
        PageJeux.classList.remove("nav-bg-on-select")
        PageContact.classList.remove("nav-bg-on-select")
    }
    if (pageIconNumber ===3){
        PageAcceuil.classList.remove("nav-bg-on-select")
        PageQuiSommesNous.classList.remove("nav-bg-on-select")
        PageJeux.classList.add("nav-bg-on-select")
        PageContact.classList.remove("nav-bg-on-select")
    }
    if (pageIconNumber ===4){
        PageAcceuil.classList.remove("nav-bg-on-select")
        PageQuiSommesNous.classList.remove("nav-bg-on-select")
        PageJeux.classList.remove("nav-bg-on-select")
        PageContact.classList.add("nav-bg-on-select")
    }
}


/* ------Page New Game-------*/

if(pageName === "/NewGame.html"){
    document.body.addEventListener("click", e =>{
        window.location.assign("./Page D'acceuil.html"); 
    })
    document.body.addEventListener("keypress", e =>{
        window.location.assign("./Page D'acceuil.html"); 
    })
}

/* ------Page D'acceuil-------*/

if(pageName === "/Page%20D'acceuil.html"){
const previous = document.getElementById("previous")
const current = document.getElementById("current")
const next = document.getElementById("next")
const showphoto = document.getElementById("ShowPhoto")
let ImageOrder = 1
let ImageShow = false


previous.addEventListener("click", previousphoto => {
    SmallPrev()
    ImageOrder --;
})
function SmallPrev(){
    previous.style.transition = "100ms"
    previous.style.transform = "Scale(0.5,0.5)"
    setTimeout(NormalPrev, 100)
}
function NormalPrev(){
    previous.style.transition = "100ms"
    previous.style.transform = "Scale(1,1)"
    check2()
}


next.addEventListener("click", nextphoto => {
    SmallNext()
    ImageOrder ++;
})
function SmallNext(){
    next.style.transition = "100ms"
    next.style.transform = "Scale(0.5,0.5)"
    setTimeout(NormalNext, 100)
}
function NormalNext(){
    next.style.transition = "100ms"
    next.style.transform = "Scale(1,1)"
    check2()
}

function check2() {
    current.style.transition = "100ms"
    current.style.transform = "Scale(1.2,1.2)"
    check()
    setTimeout(check3, 100)
}
function check3() {
    current.style.transition = "100ms"
    current.style.transform = "Scale(1,1)"
}


current.addEventListener("click", show =>{
    if (ImageShow === false){
        current.style.zIndex = 1;
        current.style.transition = "250ms"
        current.style.transform = "Scale(1.8,1.8)"
        setTimeout(MakeitTrue, 500)
    }
    if (ImageShow === true){
        current.style.transition = "250ms"
        current.style.transform = "Scale(1,1)"
        setTimeout(MakeitFalse, 500)
    }
})
function MakeitTrue() {
    ImageShow = true
}
function MakeitFalse() {
    ImageShow = false
}



function check(){
    if (ImageOrder ===5 ){
        ImageOrder = 1
    }
    else if (ImageOrder ===0 ){
        ImageOrder = 4
    }
    if (ImageOrder===1){
        previous.style.backgroundImage = "url(./Images/photo4.PNG)"
        current.style.backgroundImage = "url(./Images/photo1.PNG)"
        next.style.backgroundImage = "url(./Images/photo2.PNG)"
    }
    else if (ImageOrder ===2){
        previous.style.backgroundImage = "url(./Images/photo1.PNG)"
        current.style.backgroundImage = "url(./Images/photo2.PNG)"
        next.style.backgroundImage = "url(./Images/photo3.PNG)"
    }
    else if (ImageOrder ===3){
        previous.style.backgroundImage = "url(./Images/photo2.PNG)"
        current.style.backgroundImage = "url(./Images/photo3.PNG)"
        next.style.backgroundImage = "url(./Images/photo4.PNG)"
    }
    else if (ImageOrder ===4){
        previous.style.backgroundImage = "url(./Images/photo3.PNG)"
        current.style.backgroundImage = "url(./Images/photo4.PNG)"
        next.style.backgroundImage = "url(./Images/photo1.PNG)"
    }
}

}

/* ------------ Page Qui Sommes Nous ------------------- */
if(pageName === "/QuiSommesNous.html"){
    const board = document.getElementById("board")
    const title = document.getElementById("board-title")
    const text = document.getElementById("board-text")
    const close = document.getElementById("close-button")

    const mission = document.getElementById("mission")
    const histoire = document.getElementById("histoire")
    const equipe = document.getElementById("equipe")

    equipe.addEventListener("click", EquipeText =>{
        title.innerHTML = "Notre Equipe";
        text.innerHTML = "Notre equipe etc etc";
        showboard();
    })
    histoire.addEventListener("click", HistoireText =>{
        showboard();
        title.innerHTML = "Notre Histoire";
        text.innerHTML = "Notre histoire etc etc";
    })
    mission.addEventListener("click", MissionText =>{
        showboard();
        title.innerHTML = "Notre Mission";
        text.innerHTML = "Notre mission etc etc";
    })
    close.addEventListener("click", CloseBoard =>{
        board.style.transition = "1000ms"
        board.style.transform = "Scale(0,0)"
    })


    function showboard(){
        board.style.transition = "1000ms"
        board.style.transform = "Scale(1,1)"
    }
}
/* ------------ Page Liste Des Jeux ------------------- */
if(pageName === "/ListeDesJeux.html"){
    let Jeux = false
    const Tetris = document.getElementById("Tetris")
    const Pong = document.getElementById("Pong")
    const Snake = document.getElementById("Snake")
    const TetrisScript = document.createElement("script")
    const PongScript = document.createElement("script")
    const SnakeScript = document.createElement("script")

    Tetris.addEventListener("click", PageTetris =>{
        if(Jeux=== false){
            TetrisScript.setAttribute("src", "./Script des jeux/tetris.js")
            document.body.appendChild(TetrisScript)
            setTimeout(JeuxOpened, 100)
        }
        else if(Jeux === true){
            window.location.assign("./ListeDesJeux.html"); 
        }
    })
    Pong.addEventListener("click", PagePong =>{
        if(Jeux=== false){
            PongScript.setAttribute("src", "./Script des jeux/Pong.js")
            document.body.appendChild(PongScript)
            setTimeout(JeuxOpened, 100)
        }
        else if(Jeux === true){
            window.location.assign("./ListeDesJeux.html"); 
        }
    })
    Snake.addEventListener("click", PageSnake =>{
        if(Jeux=== false){
            SnakeScript.setAttribute("src", "./Script des jeux/Snake.js")
            document.body.appendChild(SnakeScript)
            setTimeout(JeuxOpened, 100)
        }
        else if(Jeux === true){
            window.location.assign("./ListeDesJeux.html"); 
        }
    })
    function JeuxOpened() {
        Jeux = true
    }
}
