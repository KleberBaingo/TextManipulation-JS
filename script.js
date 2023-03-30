const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; //100px

function Shadow(event) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }
  // console.log(x, y);
  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;
  //console.log(xWalk, yWalk);
  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,${255 - xWalk},0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(${255 - xWalk},255,0,0.7),
  ${xWalk}px ${yWalk * -1}px 0 rgba(255,${255 - yWalk},255,0.7),
  ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,255,${255 - yWalk},0.7)
  `;
  text.offsetWidth += xWalk;
  // console.log(text.offsetWidth)

  //console.log(e)
}

hero.addEventListener("mousemove", Shadow);
