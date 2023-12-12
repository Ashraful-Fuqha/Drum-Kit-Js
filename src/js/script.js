// const audio = document.querySelector(`audio[data-key]`);
// const key = document.querySelector(`div[data-key]`);
// const keys = Array.from(document.querySelectorAll('.key'))

// window.addEventListener('keydown',function(e){
//     console.log(e);
// });

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`);
    // console.log(audio);
    if(!audio) return 
    console.log("Changaa")
    audio.currentTime = 0;
    audio.play();
    key.classList.add('scale-[1.1]', 'shadow-yellow-500')
    key.classList.replace('border-[rgba(0,0,0,0.4)]','border-yellow-500');

    ontransitionend = (e) => {
    e.target.classList.remove('scale-[1.1]','shadow-yellow-500')
    e.target.classList.replace('border-yellow-500','border-[rgba(0,0,0,0.4)]');
    };
}

window.addEventListener('keydown', playSound)