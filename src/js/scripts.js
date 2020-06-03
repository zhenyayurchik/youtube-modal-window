class Modal {

    constructor({ first, last }) {
      this.firstFocusableElement = first;
      this.lastFocusableElement = last;
    }
  
    tab(e) {
        if (e.shiftKey) {
            if (document.activeElement === this.firstFocusableElement) {
                this.lastFocusableElement.focus(); 
                e.preventDefault();
            }
        } else { 
            if (document.activeElement === this.lastFocusableElement) {
                this.firstFocusableElement.focus(); 
                e.preventDefault();
            }
        }
        this.firstFocusableElement.focus();
    }
  
    open() {
        document.querySelector('.modal-background').style.display = "flex";
    }
  
    close() {
        document.querySelector('.modal-background').style.display = "none";
    }
  }
  
  
let modal = new Modal({first: document.getElementById('first'), last: document.getElementById('last')});

document.getElementById('btn').addEventListener("click", function() {
    modal.open();
});

document.querySelector('.modal-content__close-btn').addEventListener("click", function() {
    modal.close();
});

document.addEventListener('keydown', function(e) {
    if(e.key === "Escape") {
        modal.close();
    }
    if (e.key === 'Tab' || e.keyCode === 9) {
       modal.tab(e);
    }
});

