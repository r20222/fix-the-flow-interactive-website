let button = document.querySelector('.button-accordion');
let weekOverview = document.querySelector('.expand');
let tabButtons = document.querySelectorAll('.button-day');


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


