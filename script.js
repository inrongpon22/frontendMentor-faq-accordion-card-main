const text = document.querySelectorAll('.text');
const arrowActive = document.querySelectorAll('.arrow-down');

document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', event => {
          console.log('first');
          const arrow = item.getElementsByClassName('arrow-down')
          item.children[1].classList.toggle('active');
          item.classList.toggle('active');
          item.nextElementSibling.classList.toggle('active');
        // console.log(item.children)
    })
})

