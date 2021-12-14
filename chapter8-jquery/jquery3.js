$(document).ready(function() {
    //showHello();
    showFullName();
})

//function showHello() {
   /*  $('#helloBtn').click(function() {
        $('#helloWorldText').text('Hello World!!');
    }) */
//}

function showFullName() {
    //$('#fullNameBtn').click(function() {
        // on pio geniki me8odos
        $('#fullNameBtn').on('click', function() {
        alert($('#fname').val() + ' ' + $('#lname').val())
    })
}
