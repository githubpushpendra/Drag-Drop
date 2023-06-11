console.log('Hare Krishna');

// In next 5 lines of JS code there are javascript variable names with constant type which are assigned objects of 
// following classes as mentioned

// In the 3 lines of beggining there are objects on which drag and drop operation will be performed

const imgBox = document.querySelector('.imgBox');
const gif = document.querySelector('.gif');
const text = document.querySelector('.text');

const resetBtn = document.querySelector('.resetBtn');
const whiteBoxes = document.getElementsByClassName('whiteBox');

var objID = null;                                    // objID variable contains ID of the element which is dragged from 1st Box
const elements = [imgBox, gif, text];                // Array containing all the initial elements of first block

// This for loop iterate all the initial elements (i.e. image, text and gif) of 1st block

for(element of elements) {                         
  element.addEventListener('dragstart', (e) => {     // detecting event on element of whiteBox
    e.target.className += ' hold';                     // The class of dragging element is changed into hold to make some changes
                                                    // while dragging. hold class applied different visuals to the dragging elements
    objID = e.target.id;
    setTimeout(() => {                              // This piece of code hide the element which is dragged (from the 1st box) by 
      e.target.className = 'hide';                  // assigning it hide class which has *display: none;*
    }, 0);
  });

  element.addEventListener('dragend', (e) => {      // Detection of dragend event

    // These some conditional blocks check which element is dropped so its original className is restored which
    // was changed to apply some visual effects while dragging

    if(e.target.id == 'imgID'){
      e.target.className = 'imgBox';
    } else if(e.target.id == 'textID'){
      e.target.className = 'text';
    } else if(e.target.id == 'gifID'){
      e.target.className = 'gif';
    } 
    objID = null;                                     // After drop objID variable is reset
  });
}

// This for loop iterate over both the boxes to observe the dragover and drop events

for (var whiteBox of whiteBoxes) {                  

  // On dragover event it prevent the element inside the box

  whiteBox.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // On drop it append the element in the box 2.
  // Element is identified by its ID which is stored in the 'ojbID' variable at the time of dragstart event

  whiteBox.addEventListener("drop", (e) => {
    if(objID == 'imgID') {
      e.target.append(imgBox);
    } else if(objID == 'textID') {
      e.target.append(text);
    } else if(objID == 'gifID') {
      e.target.append(gif);
    }
  }); 
}

 // This is reset button which detect click operation and immediately appent all the elements
 // in first box as initially

resetBtn.addEventListener('click', ()=>{
  document.getElementById('whiteBox1').append(imgBox);
  document.getElementById('whiteBox1').append(gif);
  document.getElementById('whiteBox1').append(text);
});