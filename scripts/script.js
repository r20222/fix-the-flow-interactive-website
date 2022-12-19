const buttons = document.querySelectorAll('.button-accordion');
const tabButtons = document.querySelectorAll('.button-day');
// console.log(buttons)

buttons.forEach(button => {
    // console.log(button)
    button.addEventListener('click', openLogbookSection, false);
})

// arrow up and down on click 

let arrowDown = document.querySelectorAll('.arrow-down')



function openLogbookSection(event){

    console.log(event) 
    const panel = event.target.nextElementSibling;
    panel.classList.toggle('active');

    // let img = event.target.srcElement.firstElementChild;
    // console.log(img);
   
    // if (img.src.match("assets/arrow-down.svg")) {
    //     img.src = "assets/arrow-up.svg";
    //     }
    // else if(img.src.match("assets/arrow-up.svg")) {
    //         img.src = "assets/arrow-down.svg";
    //     }
    

    arrowDown.forEach(down =>{
        if (down.src.match("assets/arrow-down.svg")) {
            down.src = "assets/arrow-up.svg";
        }
        else if(down.src.match("assets/arrow-up.svg")) {
            down.src = "assets/arrow-down.svg";
        }
    })
    
    

    tabButtons.forEach(function(tabButton) {
        if(tabButton.tabIndex == "-1"){
            tabButton.tabIndex="0";
        }
        else {
            tabButton.tabIndex="-1";
        }
    })
}


