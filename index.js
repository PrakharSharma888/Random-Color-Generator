var button = document.getElementById('but');

const colors = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',];

button.addEventListener('click', function(){
    let randomno = '#';
    for(let i=0;i<6;i++){
        randomno += colors[randomnumbers()]
    }
    document.getElementById('changingText').innerHTML = 'Background Color : ' + randomno;
    document.getElementById('body').style.backgroundColor = randomno;
    audio.play();
});

function randomnumbers(){
    return Math.floor(Math.random() * colors.length)
}

var audio = new Audio("music.wav");


