$(document).ready(function(){
    $('#btnAdd').click(function(){
        var input = $('#input1').val();
        if(input){
            $("ul").append('<li>' + input + ' <button class="btnDelete">Delete</button></li>');
            $('#input1').val('');
        }
    })
    $('ul').on('click', '.btnDelete', function () {
        $(this).closest('li').remove(); // Remove the corresponding list item
    });
})