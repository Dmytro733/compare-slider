const imageAfter = document.querySelector('.compare__after');
const widthImageAfter = imageAfter.offsetWidth;
const heightImageAfter = imageAfter.offsetHeight;
const delimeter = document.querySelector('.compare__delimetr');

compare();

function compare() {
  delimeter.style.left = (widthImageAfter/2) - (delimeter.offsetWidth/2) + 'px';
  imageAfter.style.width = '50%';

  delimeter.addEventListener('pointerdown', (event) => {
    delimeter.addEventListener('pointermove', onMoveDelimeter);
    delimeter.addEventListener('pointerup', () => {
      delimeter.removeEventListener('pointermove', onMoveDelimeter)
    });
  });
}

function onMoveDelimeter(event){
  
  if(event.pressure == 0) return;
  event.target.setPointerCapture(event.pointerId);
  moveSlider(currentPositionDelimeter(event));
}

function currentPositionDelimeter(event){
  let image = imageAfter.getBoundingClientRect();
  
  let x = 0;
  x = event.pageX - image.left;

  if(x < 0){
    x = 0;
  }

  if(x > widthImageAfter){
    x = widthImageAfter;
  }

  return x;
}

function moveSlider (x){
  
  imageAfter.style.width = x + 'px';

  delimeter.style.left = imageAfter.offsetWidth - (delimeter.offsetWidth/2) + 'px';
}