console.log('Hare Krishna');
const imgBox = document.querySelector('.imgBox');
const gif = document.querySelector('.gif');
const text = document.querySelector('.text');
const resetBtn = document.querySelector('.resetBtn');
const whiteBoxes = document.getElementsByClassName('whiteBox');

var objID = null;
const elements = [imgBox, gif, text];

for(element of elements) {
  element.addEventListener('dragstart', (e) => {
    console.log('Drag start has been triggered');
    e.target.className = 'hold';
    objID = e.target.id;
    console.log(e.target.id);
    setTimeout(() => {
      e.target.className = 'hide';
    }, 0);
  });

  element.addEventListener('dragend', (e) => {
    console.log('Drag end has been triggered');
    console.log(e.target.id);
    if(e.target.id == 'imgID'){
      e.target.className = 'imgBox';
    } else if(e.target.id == 'textID'){
      e.target.className = 'text';
    } else if(e.target.id == 'gifID'){
      e.target.className = 'gif';
    } 
    objID = null;
  });
}

for (var whiteBox of whiteBoxes) {

  whiteBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('Drag over has been triggered');
  });

  whiteBox.addEventListener('dragenter', () => {
    console.log('Drag enter has been triggered');
  });

  whiteBox.addEventListener('dragleave', () => {
    console.log('Drag leave has been triggered');
  });

  whiteBox.addEventListener("drop", (e) => {
    console.log('Drag drop has been triggered');
    if(objID == 'imgID') {
      e.target.append(imgBox);
    } else if(objID == 'textID') {
      e.target.append(text);
    } else if(objID == 'gifID') {
      e.target.append(gif);
    }
  }); 
}

resetBtn.addEventListener('click', ()=>{
  var content;
  var child = document.getElementById('whiteBox2').getElementsByClassName('imgBox');
  if(child.length > 0) {
    document.getElementById('whiteBox1').append(imgBox);
  }
  child = document.getElementById('whiteBox2').getElementsByClassName('gif');
  if(child.length > 0) {
    document.getElementById('whiteBox1').append(gif);
  }
  child = document.getElementById('whiteBox2').getElementsByClassName('text');
  if(child.length > 0) {
    document.getElementById('whiteBox1').append(text);
  }
});