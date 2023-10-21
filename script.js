$(document).ready(function (){
    var img = "url('Icon/menu.png') no-repeat no-repeat center/cover"
    $(".navbar button").click(function () {
        $(".navbar .nav_menu .menu_items").css("visibility","visible").toggle();
    });
});