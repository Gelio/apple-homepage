function redirectToHeroPage() {
    location.replace($(this).data('url'));
}

var controlDots = null,
    photosAlbum = null,
    currentSlide = 0,
    totalSlides = 0;

function initHeroSectionControls() {
    controlDots = $('.album-control-dots').children();
    totalSlides = controlDots.length;

    photosAlbum = $('.photos-album');

    controlDots.each(function(index) {
        $(this).on("click", function() {
            changeSlide(this, index);
        });
    });

    updateControlDots();
}

function changeSlide(self, index) {
    if(index == currentSlide)
        return;

    $(self).removeClass('fa-circle').addClass('fa-circle-o');
    $(self).siblings().removeClass('fa-circle-o').addClass('fa-circle');
    currentSlide = index;

    photosAlbum.css('left', '-'+(currentSlide)+'00vw');

    updateControlDots();
}

function updateControlDots() {
    controlDots.eq(currentSlide).addClass('fa-circle-o').removeClass('fa-circle');
}