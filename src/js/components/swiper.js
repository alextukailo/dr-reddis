import Swiper from 'swiper/bundle'

const handleSwiper = () => {
    const blogCardsSwiper = new Swiper('.blog-cards-slider', {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 10,
        navigation: {
          nextEl: '.blog-cards-slider .swiper-button-next',
          prevEl: '.blog-cards-slider .swiper-button-prev',
        },
    });
}

export default handleSwiper
