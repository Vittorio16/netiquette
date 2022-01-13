const type = (() => {
   new Typed("#typed", {
      strings: [" il manifesto della comunicazione", "la consapevolezza", "le mie esperienze personali"],
      typeSpeed: 80,
      delaySpeed: 90,
      backSpeed: 70,
      backDelay: 400,
      loop: true,
   });
})();

const comparsa = (() => {
    let li = document.querySelectorAll(' header ul li a');
    let obj = document.querySelector('.comparsa');
    let objDiv = document.querySelectorAll('.comparsa .comparsa-contain');
    let remove = document.querySelectorAll('#remove');

    //clicco dei link
    for (const x of li) {
        x.onclick = function () {
            obj.classList.add('active');
            // dinamic div
            let string = this.textContent;
            for (const div of objDiv) {
                div.classList.remove('current');
                if (div.classList.contains(string))  div.classList.add('current');  
            }
      }   
    }
    //clicco delle x
    for (const x of remove) { x.onclick = function () { obj.classList.remove('active') } }
})();

const faq=(()=>{
  let item = document.querySelectorAll('.accordion-item');

  //for of element
  for (const single of item) {
    let toggle = single.querySelector('#toggle');
    toggle.onclick=()=>{
      single.classList.toggle('show');
      toggle.classList.toggle('bx-message-x')
    }
  }
})();