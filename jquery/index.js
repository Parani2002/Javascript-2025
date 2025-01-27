$(document).ready(function(){
    //Add task to list
    $('.btnAdd').click(function(){
        var input = $('#input1').val(); // Get the value of the input field
        if(input){
            $("ul").append('<li><p>' + input + '</p><button class="btnDelete">Delete</button></li>');
            $('#input1').val('');
            $('.count').text($('li').length);
        }else{
            alert('Please enter a task'); // If the input field is empty, display an alert
            $('#input1').focus();
        }
    })
    //Remove task from list - Event delegation
    $('ul').on('click', '.btnDelete', function () {
        $(this).parent().remove();  // Remove the corresponding list item
        $('.count').text($('li').length); 
    });
})