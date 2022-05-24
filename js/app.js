let smallLinks =document.getElementById('links-small');
let menuBar =document.getElementById('menu');

menuBar.onclick = () =>{
    smallLinks.classList.toggle('show')
    if(smallLinks.classList.contains('show')){
        menuBar.innerHTML = `<i class="fa fa-times"></i>`
        }else{
        menuBar.innerHTML = `<i class="fa fa-bars"></i>`

        }
}

let goElement = document.querySelector('.go');
window.addEventListener('scroll',function(){
    let pageScroll = window.pageYOffset;
    if(pageScroll > 370){
        goElement.classList.add('active')
    }else{
        goElement.classList.remove('active')
    }
})


let sliderContainers = document.querySelectorAll('.sliderContainer');
let nextBtn = document.querySelectorAll('.next');
let prevBtn = document.querySelectorAll('.prev');

sliderContainers.forEach((slider, i) =>{
    let sliderWith = slider.getBoundingClientRect().width;

    nextBtn[i].addEventListener('click',()=>{
        slider.scrollLeft += sliderWith
    })
    prevBtn[i].addEventListener('click',()=>{
        slider.scrollLeft -= sliderWith
    })

})