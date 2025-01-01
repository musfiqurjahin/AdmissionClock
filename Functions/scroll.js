//Scroll_btn_func:
document.querySelector('.scroll-icon').addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });


//_______________________________________________________________________