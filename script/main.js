document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
};
document.querySelectorAll('#menu > *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open')
    }
})

new WOW({
    animateClass: 'animate__animated'
}).init();
$('.popup_img').magnificPopup({
    type: 'image'
  });
  