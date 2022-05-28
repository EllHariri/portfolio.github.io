$(function () {
    var txt="hello world"
    txt.rep
    let btnMenu = document.querySelector("#btnMenu");
    let sidbarre = document.querySelector(".sidbarre");
    btnMenu.onclick = function () {
        sidbarre.classList.toggle("active");
    }
    $('.sidbarre .list-menu li a').click(function(){
        var id=$(this).attr('href');
        $('[class *= "sect"]').hide();
        $(id).fadeIn(3000);
    });
    var typed = new Typed(".animat", {
        strings: [
            "Full-Stack developer",
            "Mobile Developer",
            "Web designer",
            ],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true
    });
});
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "",
        Password : "",
        To : 'elhariri056@gmail.com',
        From : document.getElementById("email").value,
        Subject : "contact me",
        Body : "hhhh"
    }).then(
      message => alert(message)
    );
}