let button = document.querySelector('.logbook button');
let weekOverview = document.querySelector('.logbook div');
let tabButtons = document.querySelectorAll('.logbook li button');
// let tabButton = document.getElementById('tabbutton');
button.addEventListener('click', openLogboek);


function openLogboek(){
    weekOverview.classList.toggle('active');
    tabButtons.forEach(function(tabButton) {
        if(tabButton.tabIndex == "-1"){
            tabButton.tabIndex="0";
            // alert('-1')
        }
        else {
            tabButton.tabIndex="-1";
            // alert('0')
        }
    })
    
    
}


