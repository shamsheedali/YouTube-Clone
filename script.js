function toggleMenu(){
    var menuToggle = document.querySelector('.toggleContainer');
    var menu = document.querySelector('.left-section');
    var rightSection = document.querySelector('.right-section');
    var videoRows = document.querySelectorAll('.video-rows');
    var rightUpperSection = document.querySelector('.right-upper-section');

    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    rightSection.classList.toggle('active');
    for(let i = 0; i < videoRows.length; i++){
        videoRows[i].classList.toggle('active');
    }
    rightUpperSection.classList.toggle('active');
}