//Slider-Section-Hero
$('.mySlider').slick({

    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true

});
//Scroll
$(document).ready(function(){
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
    $(".arrow").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
//Mobile-nav
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
//Slider
$('.slider-content').slick({
    dots: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: 2000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let lat = 40.680144;
let lng = -73.905462;
let zoom = 14;

let mymap = L.map('mapID').setView([lat, lng], zoom);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JpZ2lyIiwiYSI6ImNrM29wcGZqdDF3ZXEza3JreHZkd2tvcXMifQ.QN0_IxYcW4BNp0Ga8Oh1fQ', {
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZ3JpZ2lyIiwiYSI6ImNrM29wcGZqdDF3ZXEza3JreHZkd2tvcXMifQ.QN0_IxYcW4BNp0Ga8Oh1fQ'
}).addTo(mymap);

let marker = L.marker([lat, lng]).addTo(mymap);

marker.bindPopup("<b>2029-2017 Eastern Pkwy,<br> Brooklyn, NY 11207,<br> Сполучені Штати Америки</br>").click.openPopup();
