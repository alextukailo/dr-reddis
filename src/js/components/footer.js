import $ from 'jquery'

const Footer = () => {
    if($('.footer__top-arrow').length){
        $(".footer__top-arrow").on('click', function() {
          var target = $(this).attr('data-target');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1500);
      });
    }
	

	const myButton = document.getElementById("scroll-to-top");
  const scrollThreshold = 150;

  const scrollFunction = () => {
    myButton.style.display = (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) ? "flex" : "none";
  };

  window.onscroll = scrollFunction;
  scrollFunction();
}
export default Footer;