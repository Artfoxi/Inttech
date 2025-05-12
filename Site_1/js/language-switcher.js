// Объект с текстами для разных языков
const translations = {
    ru: {
        'hero-title': 'ПУТЕШЕСТВИЯ ПО РОССИИ',
        'hero-subtitle': 'Настоящая страна не в выпусках новостей, а здесь.',
        'slide1-title': 'Куршская коса',
        'slide1-text': 'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава. На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.',
        'slide2-title': 'Кольский',
        'slide2-text': 'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем. Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.',
        'slide3-title': 'Алтай',
        'slide3-text': 'Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом. Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.',
        'slide4-title': 'Зимний байкал',
        'slide4-text': 'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в России. Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.',
        'slide5-title': 'Карелия',
        'slide5-text': 'Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.',
        'footer-link1': 'Карты',
        'footer-link2': 'Погода',
        'footer-link3': 'Расписание',
        'footer-link4': 'Календарь',
        'footer-link5': 'Путешествия',
        'footer-copyright': '© 2025г. Артур'
    },
    en: {
        'hero-title': 'TRAVELS ACROSS RUSSIA',
        'hero-subtitle': 'The real country is not in the news, but here.',
        'slide1-title': 'Curonian Spit',
        'slide1-text': 'Here, amidst forests and sandy dunes, you can see two water horizons—the calm Curonian Lagoon on one side and the rippling waves of the Baltic Sea on the other. A unique natural zone on the edge of the Russian enclave. But that’s not where Kaliningrad Oblast ends. Nearby, for travelers and explorers, is Russia’s westernmost point, the Baltic Spit, along with the German heritage of scattered small seaside towns. The atmosphere here excludes hustle, immersing you in the tranquility of nature and the scent of steel, cool sea air.',
        'slide2-title': 'Kola Peninsula',
        'slide2-text': 'Almost the entire peninsula lies beyond the Arctic Circle. The Sami tundra stretches south into taiga, while to the north lies the Arctic Ocean, masquerading as the Barents Sea. Perhaps you’ve seen Zvyagintsev’s films or heard about the Arctic festival in Teriberka. Maybe the word “Khibiny” hasn’t faded under the snow of school geography lessons. Perhaps you’re not curious about the ultra-deep borehole piercing the Earth’s crust, or apatite has long covered you with apathy. But your dream of seeing the Northern Lights begins to come true with a ticket to Murmansk.',
        'slide3-title': 'Altai',
        'slide3-text': 'Altai is one of the most beautiful places in Russia, primarily due to its mountains: driving along the ridge, you’ll see slopes covered with pines, mountain rivers, and lakes. Open your car windows, and you’ll get acquainted with the invisible wonder of this region—mountain air. The climate here is temperate, so summer is the best time to visit. Then you’ll see the full diversity of local flora and fauna. Moose roam the Altai forests, eagles soar above the ridges, and deer graze on the plains. And the famous manuls are also inhabitants of the Altai region.',
        'slide4-title': 'Winter Baikal',
        'slide4-text': 'Baikal is known worldwide as the largest lake. Many also know it as the greatest source of fresh water and one of Russia’s most beautiful places. All true. But Baikal is also an ideal spot for skijoring competitions—a sport where a skier attaches themselves to a motorcycle, and the duo tries to reach the highest speed on ice. In March 2019, a world record of 197.011 km/h was set at the Baikal Mile festival.',
        'slide5-title': 'Karelia',
        'slide5-text': 'Siberia doesn’t end at the Urals but in Karelia: the Siberian larch forming the taiga doesn’t grow west of Lake Vodlozero. Here, it grows up to 30 meters—Karelian national park forests, untouched by axes due to impassable swamps, have stood for centuries. Some pines are over half a millennium old. Touch a living being that saw the sun before Ivan the Terrible did. In the virgin forest, you won’t find a trail for hundreds of kilometers. And on rare paths, trees are marked with bear claws a couple of meters off the ground, so everyone knows who’s boss.',
        'footer-link1': 'Maps',
        'footer-link2': 'Weather',
        'footer-link3': 'Schedule',
        'footer-link4': 'Calendar',
        'footer-link5': 'Travel',
        'footer-copyright': '© 2025 Arthur'
    }
};

// Функция для переключения языка
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Обновляем атрибут lang для HTML
    document.documentElement.lang = lang;

    // Обновляем визуальную индикацию активного языка
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
}

// Обработчики событий для кнопок переключения языка
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращаем стандартное поведение ссылки
            const lang = button.getAttribute('data-lang');
            switchLanguage(lang);
            localStorage.setItem('language', lang); // Сохраняем язык в localStorage
        });
    });

    // Устанавливаем язык по умолчанию или из localStorage
    const savedLang = localStorage.getItem('language') || 'ru';
    switchLanguage(savedLang);
});
