const imgBoxs = document.querySelectorAll('.imgBox');
const mainImg = document.querySelector('.mainimg');

let count  = 0;
// for(let i = 0; i < imgBoxs.length; i++) {
//   imgBoxs[i].classList.add('border');
//   imgBoxs[i].style.width = '20%'
//   imgBoxs[i].style.height = '80%';
// }

setTimeout(()=> {
  imgBoxs[count].classList.add('border');
  imgBoxs[count].style.width = '20%'
  imgBoxs[count].style.height = '80%';
  mainImg.style.opacity = '0%';
}, 1000);
imgBoxs[0].addEventListener('transitionstart', ()=> {
  for(let i = 1; i < imgBoxs.length; i++) {
    imgBoxs[i].classList.add('border');
    imgBoxs[i].style.width = '20%'
    imgBoxs[i].style.height = '80%';
  }
}, {once:true})
imgBoxs[0].addEventListener('transitionend', ()=> {
  imgBoxs[0].classList.add('transform');
  imgBoxs[1].style.width = '20%'
  imgBoxs[1].style.height = '80%';
  imgBoxs[1].classList.add('border');
  imgBoxs[0].addEventListener('transitionend', ()=> {
    imgBoxs[1].style.transform = 'perspective(150px) translate3d(50px,0, -20px)';

    imgBoxs[1].addEventListener('transitionend', ()=> {
      imgBoxs[2].style.transitionDelay = '.3s';
      imgBoxs[2].style.transform = 'perspective(150px) translate3d(300px,0, -40px)'

      imgBoxs[2].addEventListener('transitionend', ()=> {
        imgBoxs[3].style.transitionDelay = '.5s';
        imgBoxs[3].style.transform = 'perspective(150px) translate3d(600px,0, -60px)'
      }, {once:true});
    }, {once:true});
  }, {once: true});
}, {once:true})
