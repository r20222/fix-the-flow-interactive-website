const buttons = document.querySelectorAll('.button-accordion');
const tabButtons = document.querySelectorAll('.button-day');
// console.log(buttons)

buttons.forEach(button => {
    // console.log(button)
    button.addEventListener('click', openLogbookSection, false);
})

function openLogbookSection(event){
    console.log(event) 
    const panel = event.target.nextElementSibling;
    
    panel.classList.toggle('active');

    tabButtons.forEach(function(tabButton) {
        if(tabButton.tabIndex == "-1"){
            tabButton.tabIndex="0";
        }
        else {
            tabButton.tabIndex="-1";
        }
    })
}


