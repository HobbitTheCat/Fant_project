const img = document.querySelectorAll("img");
const img_open = document.querySelector('.overlay_content img');
const all_img =Array.from(img);
const length = all_img.length;

const overlay = document.querySelector('.overlay');
var array_of_used = [];
var is_open = false;
var vse = '';

function random(){


    min = Math.ceil(0);
    max = Math.floor(length-1);

    if (array_of_used.length < (length-1)) {
        var random_img;
        do {
            random_img = Math.floor(Math.random() * (max - min) + min);
        } while (array_of_used.includes(random_img));

        all_img[random_img].style.display = 'initial';
        array_of_used.push(random_img);
        open(all_img[random_img])

        vse += random_img + ", ";
    } else {
        alert("Все уже выведено");
    }
}

function open(ell){
    overlay.classList.add('open');
    img_open.src = ell.src;
    is_open = true;
}

function close_img(){
    overlay.classList.remove('open');
    is_open = false;
}

function key_press(event){
    if(event.key === 'Escape' && is_open){
        close_img();
    }
}

const images = document.querySelectorAll('.gallery-img');

Array.from(images).forEach(img => {
    img.addEventListener('click', () => open(img));
});

document.addEventListener('keydown', key_press);