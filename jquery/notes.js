// we can use the $ or jQuery sign to call the jQuery function
$(document).ready(function(){

})
jQuery(document).ready(function(){

})

//-- id selector
$('#input1').val();
$('#input1').text();

//class selector
$('.btnAdd').click(function(){
    alert('Button clicked');
})
$('.input1').val();

//element selector
$('p').text();

//Attribute selector
$('[placeholder]').hide();
$('[name = "input1"]').hide();

//Descendent selector
$('.container p').text();

//add content to HTML
$('p').append('Hello World');

//remove content from HTML
$('p').remove('Hello World');