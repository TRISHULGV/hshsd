// loader
var loade = document.getElementById("loader");

        window.addEventListener("load", function(){
            loader.style.display = "none";
        })
// loader
// $('.btn').on('click', function(event) {
//         if(this.hash !== '' ){
//             event.preventDefault();
//             const hash = this.hash;
//             $('html, body'). animate(
//                 {
//                     scrollTop: $(hash).offset().top
//                 },
//                 800
//             );
//         }
//     });
    // gsap

    // components
    class TheImport extends HTMLElement {
        constructor (){
            super();
            this.innerHTML = `<h1>hello</h1>`;
        }
    }

    window.customElements.define('the-import', TheImport)

