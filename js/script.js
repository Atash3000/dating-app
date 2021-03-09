
document.querySelector('.btn-signin').addEventListener('click',myFunction)
let x = document.querySelector('.row-visible');
function myFunction() {

if (x.style.display === 'none') {
  x.style.display = 'initial';
} else {
    x.style.display = 'none';
  }

}