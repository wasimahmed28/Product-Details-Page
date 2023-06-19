let bigImg = document.querySelector('.big-img img');
function showImg(pic){
    bigImg.src = pic;
}
let psizeElements = document.getElementsByClassName('psize');
for (let i = 0; i < psizeElements.length; i++) {
  psizeElements[i].addEventListener('click', function () {
      for (let j = 0; j < psizeElements.length; j++) {
          psizeElements[j].classList.remove('active');
      }
      this.classList.add('active');
  });
}
function openPopup() {
document.getElementById("popup-overlay").classList.add("show");
}
function submitForm(event) {
  event.preventDefault(); 
//  send user details to server
var name = document.getElementById("name").value;
var address = document.getElementById("address").value;
console.log("Name: " + name);
console.log("Address: " + address);
document.getElementById("popup-overlay").classList.remove("show");
// Make changes to and disable the upload button
document.getElementById("upload-btn").textContent = "ADD TO CART!";
document.getElementById("upload-btn").classList.add("colorchange");
document.getElementById("upload-btn").disabled = true;
}

