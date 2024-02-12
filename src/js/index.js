// import "../../dist/css/tailwind.css"

import cHeader from './components/header'
import cSwiper from './components/swiper'
import cQuiz from './components/quiz'

import cTailwind from './components/tailwind'


const initScripts = {
  init: function () {
    cHeader()
    cSwiper()
    cQuiz()
    cTailwind()
  },
}
initScripts.init()
