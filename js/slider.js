var sliderControls = document.querySelectorAll('.offers__slider-control');

sliderControls.forEach(function(btn, idx, arr) {
  btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    
    arr.forEach(function(it) {
      it.classList.remove('offers__slider-control--active');
    });

    document.body.className = 'slider-' + (idx + 1);

    btn.classList.add('offers__slider-control--active');
  });
});
