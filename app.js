//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title h1');
const purchase = document.querySelector('.purchase button');
const ETHimage = document.querySelector('.ETHimage img');
const circle = document.querySelector('.circle');
const info = document.querySelector('.info h3');
const infoH1 = document.querySelector('.info h2');

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener(`mouseenter`, (e) =>{
    card.style.transition = "none";
    //popout
    ETHimage.style.transform = `translateY(100px) translateX(-10px)`;
    info.style.transform = "translateY(20px)";
    purchase.style.transform = "translateY(60px)";
    infoH1.style.transform = "translateY(40px)";
});

//Animate Out
container.addEventListener('mouseleave', (e) =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    ETHimage.style.transform = "translateY(0px)";
    info.style.transform = "translateY(0px)";
    purchase.style.transform = "translateY(0px)";
    infoH1.style.transform = "translateY(0px)";
});
