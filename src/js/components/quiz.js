const quiz = [
    {
        heading: 'Сильная головная боль, обычно с одной стороны, называется:',
        name: 'silnaya-golovnaya-bol',
        variants: [
            {
                title: 'Острая боль',
            },
            {
                title: 'Мигрень',
            },
            {
                title: 'Зубная боль',
            },
        ]
    },
    {
        heading: 'В какой из этих ситуаций не появляется тупая боль?',
        name: 'ne-poyavlyaetsya-tupaya-bol',
        variants: [
            {
                title: 'Порез пальца',
            },
            {
                title: 'Воспаление',
            },
            {
                title: 'Мышечное напряжение',
            },
        ]
    },
    {
        heading: 'Для чего организму человека нужна боль?',
        name: 'dlya-chego-organizmu-cheloveka-nuzhna-bol',
        variants: [
            {
                title: 'Чтобы привлечь внимание к определенному участку тела',
            },
            {
                title: 'Чтобы помучить человека',
            },
            {
                title: 'Чтобы сообщить о патологическом состоянии',
            },
        ]
    },
    {
        heading: 'Какой из перечисленных видов боли не существует?',
        name: 'kakih-vidov-boli-ne-sushestvuet',
        variants: [
            {
                title: 'Фантомная боль',
            },
            {
                title: 'Кожная боль',
            },
            {
                title: 'Ступенчатая боль',
            },
        ]
    },
    {
        heading: 'Какими средствами избавляются от боли?',
        name: 'kakimi-sredstvami-izbavlyayutsya-ot-boli',
        variants: [
            {
                title: 'Анальгетиками',
            },
            {
                title: 'Антигистаминными препаратами',
            },
            {
                title: 'Антибиотиками',
            },
        ]
    },
]

const QuizComponent = () => {
    const root = document.getElementById('quiz-questions');

    const questions = quiz.map((question, index) => (
        `<div class="block bg-[#f7f8fe] p-[20px] xl:p-[30px] !pb-[10px] mb-10 rounded-[30px]">
            <div class="flex flex-col xl:flex-row xl:items-center mb-12">
                <div class="w-max mb-6 xl:mb-0 p-4 xl:px-[20px] xl:py-[12px] bg-[#a3b3ff] rounded-[20px] text-3xl xl:text-5xl text-white mr-6">${index < 10 ? '0' : ''}${index + 1}</div>
                <h3 class="text-4xl">${question.heading}</h3>
            </div>
            <div class="flex flex-wrap">
            ${(question.variants.map((variant) => (
                `<div class="!flex items-center mb-6 text-[#7f7f7f] bg-white rounded-[20px] p-6 mr-4 mb-4">
                <input id="variant-${variant.title}" class="peer hidden" type="radio" name="${question.name}" value="${variant.title}" />
                <label for="variant-${variant.title}" class="relative flex items-center cursor-pointer select-none text-slate-400 pl-14
                    before:absolute before:left-0 before:flex before:h-4 before:w-4 
                    before:items-center before:justify-center before:rounded-full before:p-4 before:border-[2px] 
                    before:border-slate-400 before:bg-white before:transition-[background-color] 
                    before:duration-300 before:ease-in before:content-[''] 
                    peer-checked:before:content-['●']
                    peer-checked:before:text-xl
                    before:scale-75
                    peer-checked:before:transition-[background-color] 
                    peer-checked:before:duration-300 peer-checked:before:ease-in">
                    <span class="text-[#7f7f7f] text-2xl">${variant.title}</span>
                </label>
            </div>`
            ))).join('')}
            </div>
        </div>`
    )).join('')


    root.innerHTML = questions;
}

export default QuizComponent;
