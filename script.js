/*

To do list:

-lage greeting funksjon - Blazej

-lage plus og minus score funskjon.  - Espen

-finne bilder og icons. - Ellen

-lage winscreen. - Said

-lag setInterval funksjon - John

*/
// Model
const app = document.getElementById('app');

const interactions = [
    { navn: '', img: '', text: '', effect: null },

    {
        navn: 'Ellen', img: './img/kari.jpg', effect: 10,
        text: "You see a old friend, but there was a secret greeting that you forgot that you both had. Can you guess what it was?",
        opt1: ['Rock out',true], opt2: ['Normal handshake',false], opt3: ['Bitch slap them', true]
    },

    {
        navn: 'Bjarne', img: './img/sad.jpg', effect: 10,
        text: 'You see your childhood friend, he seems to have something on his mind, what do you say?',
        opt1: ['Stop moping around',true] ,opt2: ['Hi, whats on your mind?',false], opt3: ['Ignore him', true]
    },

    {
        navn: 'John Richard', img: './img/man-sunglasses-2140078.jpg', effect: 10,
        text: 'A friend is asking for money. Do you want to share the money you found?',
        opt1: ['share with friend', false], opt2: ['keep for yourself', true], opt3: ['ignore him', null]
    },

    {
        navn: 'Angry grandma', img: './img/angry.webp', effect: 10
        , text: 'You see some grandma with a shotgun running after someone, what do you do?',
        opt1: ['Shoot before they do', false], opt2: ['Leave asap',false], opt3: ['Join her rampage', true],
    },

    {
        navn: 'Money Bag', img: './img/moneyBag.png', effect: 10
        , text: 'You found a suspicous bag of money, do you pick it up?'
        , opt1: ['Pick it up', true], opt2: ['Leave it be',true], opt3: '', type: 'item'
    },

    {
        navn: 'Cash', img: './img/cash.png', effect: 10,
        text: 'You found cash laying around. Do you pick it up?',
        opt1: ['Pick it up', true], opt2: ['Leave it be', false], opt3: '', type: 'item'
    },
];


let score = 0;

let curInteraction = 6;

// Controller
function checkIfTrue(input) {
    const inter = interactions[curInteraction];
    if(input === 'opt1') {
        if(inter.opt1[1]==true){
            addScore()
        } else if(inter.opt1[1]== false){
            subScore()
        } else if (inter.opt1[1]==null){
            return
        }
            
    };
    if(input === 'opt2') {
        if(inter.opt2[1]==true){
            addScore()
        } else if(inter.opt2[1]== false){
            subScore()
        } else if (inter.opt2[1]==null){
            return
        }
            
    };
    if(input === 'opt3') {
        if(inter.opt3[1]==true){
            addScore()
        } else if(inter.opt3[1]== false){
            subScore()
        } else if (inter.opt3[1]==null){
            return
        }
           
    };
};



 function addScore() {
     score += 10
     updateView()
     if (score >=100)winScreen();
    };
    function subScore() {
        score -= 10
        updateView()
        if (score <=-10) restart();
};

// SetInterval Funksjon
//Kunne burkt func som random item som beveger seg mot bilen. 
startInterval()
function startInterval() {
    intervalId = setInterval(() => {
        let randomNum = Math.floor(Math.random() * 6 + 1);
        curInteraction = randomNum;
        console.log(curInteraction)
        updateView()
    }, 8000);
}//3000
function stopInterval() {
    clearInterval(intervalId);
}


// View
updateView()
// winScreen()
function updateView() {
    let hideIt = ``;
    interactions[curInteraction].type === 'item' ? hideIt = `hidden` : hideIt = ``;
    let html = /*HTML*/ `
    <h1>Score = ${score}</h1>
    <div>
    
    <img style="width:1300px;height:400px;" src="./img/Highway-5-animation-studio-sophy.gif">
    </div>
    
    <div class="cont">
    <div>
    ${interactions[curInteraction].navn}
    <br>
    <img class="int_img" src="${interactions[curInteraction].img}"></div>
    <div style="font-size:larger;">${interactions[curInteraction].text}</div>
    <button onclick="checkIfTrue('opt1')">${interactions[curInteraction].opt1[0]}</button>
    <button onclick="checkIfTrue('opt2')">${interactions[curInteraction].opt2[0]}</button>
    <button ${hideIt} onclick="checkIfTrue('opt3')">${interactions[curInteraction].opt3[0]}</button>
    </div>`;
   
    app.innerHTML = html;
};


function winScreen() {
    let winS = /*HTML*/`
    <div>
    <h1>FYFAEN DU VANT!</h1>
    <button onclick="restart()">Play Again</button>
    <img src="./img/win.jpg" alt="FYFAEN">
    </div>
    `;
    let app = document.getElementById('app');
    app.innerHTML = winS;
    stopInterval()
};
function restart() {
 window.location.reload()
    
};

// class Gamewiew {
    //     constructor() {
        //         this.scoredisplay = document.getElementbyid("scoredisplay");
        //     }
        //     render(score) {
            //         this.scoredisplay.textcontent = `score: ${score}`;
            //     }
            // };
            // function updatescore(points) {
            //     this.model.updatescore(points);
            //     this.wiew.render(this.model.score);
            // };
            
            // const model = new gamemodel();
            // const View = new gameView();
            // const Controller = new gamecontroller(model, View);
            
            // class GameController {
            //     constructor(model, view) {
            //         this.model = model;
            //         this.view = view;
            //     }
            // }