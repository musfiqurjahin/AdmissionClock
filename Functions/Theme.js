  //Theme_Toggle_Functionality
  const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('dark');

    //Cards:
    document.querySelectorAll('.tile').forEach(tile => {
      tile.classList.toggle('dark');
    });

    //Countdown:
    document.querySelectorAll('.countdown').forEach(countdown => {
      countdown.classList.toggle('dark');
    });

  //clock container:
  const clockContainer = document.querySelector('.clock-container');
  clockContainer.classList.toggle('dark');
});