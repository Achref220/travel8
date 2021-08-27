// carousel
var slider_img = document.querySelector('.slider-img');
var images = ['newyork1.jpg', 'plage.jpg', 'spain2.jfif', 'spain3.jpg', 'beach1.jpg', 'beach2.jpg'];
var i = 0;

function prev(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg();
}


function next(){
    if(i >= images.length-1 ) i = -1; 
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src',  'images/' + images[i]);
}

// scroll effects
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.content-section');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
        
    }else{
        content.classList.remove('active');
    }

});

// form validation

const name = document.getElementById('name');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const message = document.getElementById('message')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name1.value === '' || name1.value == null) {
        messages.push('❌Name is required')
    }
    if (phone.value === '' || phone.value == null){
        messages.push('❌Number is required')
    }
    if (message.value === '' || message.value == null) {
        messages.push('❌message is required')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' ')
    }
})
