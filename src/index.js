

$(document).ready(function() {
    autosize($('#editor')); //autosizes the textarea
    $('#delete').on('click', function(){
        $('#editor').slideToggle(); //removes the note from the view after clicking Delete btn
    });
    $('#new').on('click', function(){
        $('#editor').slideDown(); //displays the note after clicking new btn
    });

    $('#draw').on('click', function(){
        $('#editor').slideToggle(); // FIX THIS
        $('#palette').slideToggle(); 
    });


// jQuery drawing-table.js plugin 
// https://www.jqueryscript.net/other/drawing-paint-canvas-board.html

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;


// show border on clicked color
$("#color-controls").on("click", "li", function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
	
	
	color = $(this).css("background-color");
});

// show color making option
$("#revealColorSelect").click(function(){
	changeSpanColor();

	$("#colorSelect").toggle();
});

// making color by mixing red green blue
function changeSpanColor(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();

	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

// changing input range
$('input[type="range"]').change(changeSpanColor);

// adding the new mixed color to our color lists
$("#addNewColor").click(function(){
	var $newColor = $("<li></li>");
	
	$newColor.css("background-color", $("#newColor").css("background-color"));
	
	$("#color-controls ul").append($newColor);
	
	$newColor.click();
});

// painting with mouse events
$canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
	
}).mousemove(function(e){

	if(mouseDown){
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
	
}).mouseup(function(){
		mouseDown = false;
}).mouseleave(function(){
		$canvas.mouseup();
});

 })


// Note-taking Part


// Credit to below functions (MIT License): https://github.com/healeycodes/tiny-note-taker 
//Returns the first element that matches a specified CSS selector(s) in the document
const notes = document.querySelector('#notes');
const editor = document.querySelector('#editor');

// Load user's saved notes
for (let i = 0; i < window.localStorage.length; i++) {
    const newNote = document.createElement('option');
    newNote.innerText = window.localStorage.key(i);
    notes.appendChild(newNote);
}
changeNote();

// Ask the user to name their new note then create it.

function newNote() {
    const note = prompt('Name');
    window.localStorage.setItem(note, '');

    const noteElem = document.createElement('option');
    noteElem.innerText = note;
    notes.insertBefore(noteElem, notes.firstChild);

    // Focus this note
    notes.value = note;
    changeNote();
}

/**
 * Change editor text to the currently selected note.
 */
function changeNote() {
    editor.value = window.localStorage.getItem(notes.value);
}

/**
 * Save editor text to storage under the current note.
 */
function saveNote() {
    window.localStorage.setItem(notes.value, editor.value);
}

/**
 * Delete currently selected note
 */
function deleteNote() {
    const note = notes.value;
    window.localStorage.removeItem(note);
    editor.value = '';
    for (let i = 0; i < notes.length; i++) {
        const option = notes[i];
        if (option.value === note) {
            notes.removeChild(option);
        }
    }

}

/**
 * Check for empty note title.
 */
function checkEmpty() {
    if (notes.length === 0) {
        const untitled = document.createElement('option');
        untitled.innerText = 'untitled';
        notes.appendChild(untitled);
    }
}

module.exports={
    changeSpanColor,
    checkEmpty, 
    newNote,  
    saveNote,
    changeNote,
    deleteNote, 
}
