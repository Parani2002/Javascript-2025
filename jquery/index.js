$(document).ready(function(){
    $('.btnAdd').click(function(){
        var input = $('#input1').val();
        if(input){
            $("ul").append('<li>' + input + '<button class="btnDelete">Delete</button></li></br>');
            $('#input1').val('');
            $('.count').text($('li').length);
        }else{
            $('.alert').show('slow');
            $('#input1').focus();
            $('.alert').hide('slow');
        }
    })
    $('ul').on('click', '.btnDelete', function () {
        $(this).closest('li').remove();  // Remove the corresponding list item
        $('.count').text($('li').length); 
    });
})