import Swiper from 'swiper/bundle'

const handleSwiper = () => {
  const recentNewsSwiper = new Swiper('.recent-news-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  })

  const bottomThumbsSwiper = new Swiper('.bottom-swiper-thumbs', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  })

  const bottomSwiper = new Swiper('.bottom-swiper', {
    thumbs: {
      swiper: bottomThumbsSwiper,
    },
  })

  const historyPageSwiper = new Swiper('.history-page', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },

    autoplay: {
      delay: 3500,
    },

    speed: 2000,
  })

  const honoreePageSwiper = new Swiper('.honoree-slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 50,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },

    autoplay: {
      delay: 3500,
    },

    speed: 2000,
  })

  const approachTextSwiper = new Swiper('.approach-text-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: false,

    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
  })

  const approachImageSwiper = new Swiper('.approach-image-slider', {
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },

    thumbs: {
      swiper: approachTextSwiper,
    },
  })

  const workingGroupsSwiper = new Swiper('.working-groups-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const milestonesDataSwiper = new Swiper('.milestone-data-slider', {
    slidesPerView: 3,
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    thumbs: {
      swiper: milestonesTextSwiper,
    },
  })

  const milestonesTextSwiper = new Swiper('.milestone-text-slider', {
    slidesPerView: 1,
    loop: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: milestonesDataSwiper,
    },
  })

  const awardsTextSlider = new Swiper('.awards-text-slider', {
    // loop: true,
    // thumbs: {
    //   swiper: awardsLabelSlider,
    // },
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const awardsLabelSlider = new Swiper('.awards-label-slider', {
    // loop: true,
    allowTouchMove: false,
    thumbs: {
      swiper: awardsTextSlider,
    },
  })

  // const newsPageSwiper = new Swiper(".news-page-slider", {
  //   slidesPerView: 1,
  //   spaceBetween: 50,
  //   loop: false,
  //   freeMode: false,
  //   navigation: {
  //     nextEl: ".swiper-button-next-news",
  //     prevEl: ".swiper-button-prev-news",
  //   },
  // });

  const eventsPageSwiper = new Swiper('.events-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next-events',
      prevEl: '.swiper-button-prev-events',
    },
    autoplay: {
      delay: 10500,
      pauseOnMouseEnter: true,
    },

    speed: 2000,
  })

  const addressPageSwiper = new Swiper('.address-swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    speed: 2000,
  })


  const programTextSwiper = new Swiper('.program-text-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: false,

    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
  })

  const programImageSwiper = new Swiper('.program-image-slider', {
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },

    thumbs: {
      swiper: programTextSwiper,
    },
  })
}

export default handleSwiper
