import $ from 'jquery'
const Script = () => {
    console.log("test");
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
}
export default Script;