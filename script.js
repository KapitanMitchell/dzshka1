document.addEventListener('DOMContentLoaded', function () {
    const sliderInput = document.querySelector('.slider__input');
    const sliderImage = document.querySelector('.slider__image');
  

    function resizeImage(value) {

      sliderImage.style.width = `${value}%`;
    }
  
    function debounce(func, wait) {
      let timeout;
      return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
      };
    }
    const debouncedResize = debounce(function () {
      resizeImage(sliderInput.value);
    }, 100);
  
    sliderInput.addEventListener('input', debouncedResize);
  });