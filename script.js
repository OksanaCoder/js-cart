var btns = document.querySelectorAll('.items .item');
var output  =document.querySelector('.value');
for(var i =0; i < btns.length; i++) {
   btns[i].onclick = function() {
      this.classList.toggle('green');     
     cuclcPrice();
   };
 }

function cuclcPrice() {
  var out = 0;
  for(var i =0; i < btns.length; i++) {
  if(btns[i].classList.contains('green')){
    out += +btns[i].getAttribute('data-price');
  }
}
  output.innerHTML = '<strong>' + 'Total : ' + out + '</strong>';
}