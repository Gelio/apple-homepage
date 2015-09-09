function redirectToHeroPage() {
    location.replace($(this).data('url'));
}

var controlDots = null,
    photosAlbum = null,
    currentSlide = 0,
    totalSlides = 0,
    changeSlideTimeout = null;

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

    changeSlideTimeout = setTimeout(nextSlide, slidesChangeInterval);
}

function nextSlide() {
    /*var nextSlideIndex = currentSlide += 1;
    if(nextSlideIndex >= totalSlides)
        nextSlideIndex -= totalSlides;*/
    ++currentSlide;
    if(currentSlide >= totalSlides)
        currentSlide -= totalSlides;

    changeSlide(controlDots.eq(currentSlide), currentSlide, true);
    changeSlideTimeout = setTimeout(nextSlide, slidesChangeInterval);
}

function changeSlide(self, index, viaNextSlide) {
    if(index == currentSlide && !viaNextSlide)
        return;

    $(self).removeClass('fa-circle').addClass('fa-circle-o');
    $(self).siblings().removeClass('fa-circle-o').addClass('fa-circle');
    currentSlide = index;

    photosAlbum.css('left', '-'+(currentSlide)+'00vw');

    updateControlDots();

    if(!viaNextSlide) {
        clearTimeout(changeSlideTimeout);
        changeSlideTimeout = setTimeout(nextSlide, slidesChangeIntervalAfterClick);
    }
}

function updateControlDots() {
    controlDots.eq(currentSlide).addClass('fa-circle-o').removeClass('fa-circle');
}