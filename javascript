/*
THANK YOU TO JONATHAN PEREZ FOR HIS HELP WITH THIS! I received so much help on this project and it condensed it from a 6-hour project to a 2-hour project for me
*/

function makeGrid() {
  const x = parseInt($('#inputWidth').val()); //Gives us the value for inputWidth and turns it from a string into number
  let i; //i exists now
  let htmlTable = ''; //htmlTable exists too
  let htmlRow = '<tr>'; //If htmlRow = <tr> we can add stuff to this tag!
  for (i = 0; i < x; i++) { //Loops through the value in inputWidth
    htmlRow += '<td></td>'; //adds <td></td> to each iteration
  } 
  htmlRow += '</tr>'; //adds htmlRow at the end so we close the tags
  const y = parseInt($('#inputHeight').val()); //parseInt turns this into a number, not a string
  for (i = 0; i < y; i++) { //Loops through the value in inputHeight (y)
    htmlTable += htmlRow;//adds htmlRow to each iteration
  } 
  $('#pixelCanvas').html(htmlTable); //.html returns the html content of the stuff in the pixelCanvas id (stored in another tag)
}

$('#update').on('click', function(e) { //when someone clicks the button 
  makeGrid(); //makeGrid is called 
  e.preventDefault();//event.preventDefault - prevents form from refreshing when you click
});

$('#pixelCanvas').on('mousedown', function(e) {
  let color = $('#colorPicker').val(); //sets color equal to the value in #colorPicker
  if (e.target.tagName === 'TD') { //if target (individual cell/TD) is clicked
    e.target.style.cssText = 'background-color:' + color; //then add style for that cell's html to background-color: color (variable from earlier)
  }
});

$('#pixelCanvas').on('mousemove', function(e) { 
  let color = $('#colorPicker').val(); //sets color equal to the value in #colorPicker
  if (e.target.tagName === 'TD' && e.which === 1) { //if there's mouse movement over the target (cell) AND the left mouse button is clicked (value of action = 1)
    e.target.style.cssText = 'background-color:' + color; //then the background of the cell turns to color (variable)
  }
});
