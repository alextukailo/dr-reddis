import $ from 'jquery'
const Script = () => {
    function calculateHeroWithMapSize() {
        if (document.querySelector('.hero--map')) {
            const hero = document.querySelector('.hero--map');
            const map = document.querySelector('.hero--map .map');
            const height = map.clientHeight;
            hero.style.height = height+'px';
        }
    }
    window.addEventListener('resize', calculateHeroWithMapSize);
    calculateHeroWithMapSize();

    function addMenuPadding() {
        window.onscroll = function() {
            let height = document.querySelector(".header__inner").offsetHeight;
            let currentScrollPos = window.pageYOffset;
            if (window.screen.width < 1024) {
                document.querySelector("main").style.paddingTop = height + "px";
            }
            //prevScrollpos = currentScrollPos;
        }
    }
    addMenuPadding();
    window.dispatchEvent(new CustomEvent('scroll'))

}
export default Script;