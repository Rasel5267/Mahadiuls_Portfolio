const navSlider = () => {
    const toggleBar = document.querySelector('.toggle-bar');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    toggleBar.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        })
        toggleBar.classList.toggle('toggle');
    });

}
navSlider();

$(document).on('click', 'li a', function(){
    $(this).addClass('active').siblings().removeClass('active');
})

const section = document.querySelectorAll('section');

onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop;

    section.forEach(section => {
        if(scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25) {
            let currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    })
}

const removeAllActiveClasses = () => {
    document.querySelectorAll('li a').forEach((el) => {
        el.classList.remove('active');
    })
}
const addActiveClass = (id) => {
    let selector = `li a[href="#${id}"]`;
    document.querySelector(selector).classList.add('active');
}

//sticky navbar 

window.addEventListener("scroll", () => {
    let nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.scrollY > 20);
})

//type writer
  const typed = new Typed('.typed', {
    strings: [
        "Full-stack Web Developer",
        "YouTuber",
        "Photographer"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });

//skill bar
window.addEventListener('load', () => {
    let progressBar = document.querySelectorAll('.progress-bar');
    let values = [
        '90%',
        '90%',
        '70%',
        '85%',
        '60%',
        '65%',
        '50%',
        '40%'
    ];
    progressBar.forEach((progress, index) => {
        progress.style.width = values[index];
    });
});
//Active Portfolio
$(document).on('click', '.portfolio__items h5', function(){
    $(this).addClass('active-portfolio').siblings().removeClass('active-portfolio');
})

$(document).ready(function(){
    $('.portfolio-list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.portfolio__img').show('1000');
        } else {
            $('.portfolio__img').not('.' + value).hide('1000');
            $('.portfolio__img').filter('.' + value).show('1000');
        }
    })
})

//Modal
const learnMore = document.querySelector('.learnMore');
const modalBg = document.querySelector('.modal__bg');

learnMore.addEventListener('click', function(){
    modalBg.classList.add('modal__active')
})