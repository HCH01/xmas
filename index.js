let audioPlayer1 = document.getElementById('bells');
let audioPlayer2 = document.getElementById('song');
let audioPlayer3 = document.getElementById('vm');

let userName = prompt('Type your name');

if(userName){
    let user = document.querySelector('.user-name');
    if(userName.length >= 12){
        user.classList.add('fs-2r');
    }
    user.innerHTML = userName;
}else{
    document.querySelector('.user-name').innerHTML = 'To you';
}

function playSong(){
    document.getElementById('santa').classList.add('santa-ride');
    document.querySelector('.present-box').classList.add('fade-animation');
    audioPlayer2.pause();
    audioPlayer1.play();
    setTimeout(treeUp,7000);
}

function treeUp(){

    document.getElementById('tree-container').classList.add('tree-up')

    let root = document.querySelector(':root');

    setTimeout(()=>{root.style.setProperty('--col-3','blue')},3000);
    setTimeout(()=>{root.style.setProperty('--col-2','green')},4000);
    setTimeout(()=>{root.style.setProperty('--col-1','red')},5000);
    setTimeout(()=>{
        document.querySelector('.star').classList.add('glow-star');
        setTimeout(()=>{
            document.querySelector('.tree').classList.add('glow-tree');
        },1000)
        setTimeout(()=>{
            document.querySelector('.user-name').classList.add('glow-text');
        },2500)
        setTimeout(()=>{
            document.querySelector('.voice-present').classList.add('v-anime');
        },4500)
    },6000);
}

function playVM(){
    audioPlayer2.volume = 0.3;
    audioPlayer3.play();
}

audioPlayer3.addEventListener('ended',()=>{
    audioPlayer2.volume = 1;
    audioPlayer2.play();
})

audioPlayer1.addEventListener('ended',()=>{
    audioPlayer2.play();
})