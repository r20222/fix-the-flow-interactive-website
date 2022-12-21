const buttons = document.querySelectorAll('.button-accordion');
const tabButtons = document.querySelectorAll('.button-day');
// console.log(buttons)

buttons.forEach(button => {
    // console.log(button)
    button.addEventListener('click', openLogbookSection, false);
})

// arrow up and down on click 


function openLogbookSection(event){

    // console.log(event) 
    // console.log(event.target.firstElementChild)

    const transform = event.target.firstElementChild;
    const panel = event.target.nextElementSibling;
    panel.classList.toggle('active');
    transform.classList.toggle('arrow-transform');

    // hieronder een werkende code voor de 3 buttons tegelijk
    // let arrowDown = document.querySelectorAll('.arrow-down')
    
    // arrowDown.forEach(down =>{
    //     if (down.src.match("assets/arrow-down.svg")) {
    //         down.src = "assets/arrow-up.svg";
    //     }
    //     else if(down.src.match("assets/arrow-up.svg")) {
    //         down.src = "assets/arrow-down.svg";
    //     }
    // })
    
    tabButtons.forEach(function(tabButton) {
        if(tabButton.tabIndex == "-1"){
            tabButton.tabIndex="0";
        }
        else {
            tabButton.tabIndex="-1";
        }
    })
}


