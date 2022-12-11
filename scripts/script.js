let button = document.querySelector('.logbook button');
let weekOverview = document.querySelector('.logbook div');
let tabButtons = document.querySelectorAll('.logbook li button');


button.addEventListener('click', openLogbook);


function openLogbook(){
    weekOverview.classList.toggle('active');
    tabButtons.forEach(function(tabButton) {
        if(tabButton.tabIndex == "-1"){
            tabButton.tabIndex="0";
        }
        else {
            tabButton.tabIndex="-1";
        }
    })
    
    
}


