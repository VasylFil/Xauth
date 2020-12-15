const xauth = document.createElement('div')
const image = 'https://github.com/VasylFil/Xauth/img/parot-abstract.jpg'
xauth.style.backgroundImage = `url(${image})`
xauth.style.backgroundColor = 'red'
xauth.classList.add('xauth')
xauth.style.height = '100vh'
xauth.style.width = '100vw'
xauth.style.position = 'fixed'
xauth.style.zIndex = '9999'
document.querySelector('body').appendChild(xauth)
let a = document.querySelector('.xauth')
console.log(a)