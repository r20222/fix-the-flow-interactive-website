let button = document.querySelector('.logbook button')
let weekOverview = document.querySelector('.logbook div');
button.addEventListener('click', openLogboek)


function openLogboek(){
    weekOverview.classList.toggle('active');
}



