const buttons = document.querySelectorAll('.button-accordion');
const tabButtons = document.querySelectorAll('.button-day');
// console.log(buttons)

buttons.forEach(button => {
    // console.log(button)
    button.addEventListener('click', openLogbookSection, false);

    
})

// arrow up and down on click 


function openLogbookSection(event){

    console.log(event) 
    console.log(event.target.nextElementSibling)
    
// opnieuw een probeersel

    const btn1 = document.getElementById('button1');
    const btn2 = document.getElementById('button2');
    const btn3 = document.getElementById('button3');
    const arrow1 = document.getElementById('arrow1');
    const arrow2 = document.getElementById('arrow2');
    const arrow3 = document.getElementById('arrow3');
    const panel = event.target.nextElementSibling;
    
if(panel == btn1){
    btn1.classList.toggle('active');
    arrow1.classList.toggle('arrow-transform')
    arrow2.classList.remove('arrow-transform')
    arrow3.classList.remove('arrow-transform')
    btn2.classList.remove('active');
    btn3.classList.remove('active');
} else if (panel == btn2){
    btn2.classList.toggle('active');
    arrow2.classList.toggle('arrow-transform')
    arrow1.classList.remove('arrow-transform')
    arrow3.classList.remove('arrow-transform')
    btn1.classList.remove('active');
    btn3.classList.remove('active');
} else if (panel == btn3){
    btn3.classList.toggle('active');
    arrow3.classList.toggle('arrow-transform')
    arrow1.classList.remove('arrow-transform')
    arrow2.classList.remove('arrow-transform')
    btn1.classList.remove('active');
    btn2.classList.remove('active');
}


// Hieronder een werkende code die alles laat uitklappen (klapt niet in als je andere opent).
    // const transform = event.target.firstElementChild;
    // transform.classList.toggle('arrow-transform');
    // const panel = event.target.nextElementSibling;
    // panel.classList.toggle('active');


    // nieuw probeersel laat wel de andere sluiten, maar sluit niet als je nog eens klikt.
    // let klasactives = document.querySelectorAll('.active');
    // [].forEach.call(klasactives, function(el) {
    //     el.classList.remove("active");
    // });
    // panel.classList.add('active');

    
    // hieronder een werkende code voor de arrow 3 buttons tegelijk
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


