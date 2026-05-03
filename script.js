
const poems = [
  {
    id: 'florist',
    title: 'Флорист',
    preview: `Наутро забыл, что вчера болело.
Пожилой флорист, работая один...`,
    content: `Наутро забыл, что вчера болело.
Пожилой флорист, работая один,
Из сухоцветов собрал новое тело —
Зайду за ним в цветочный магазин.

Он пахнет пылью и сухой лавандой,
Я растворяюсь в гулкой пустоте.
Хотел уйти оттуда с гордой правдой,
Но вижу смысл в этой седине.

Он молча предложил мне поиграть,
Достал из-под стола свою коробку.
А я мог лишь смотреть и лишь молчать —
Разве я мог перечить богу?

На шахматной доске — сплошное поле,
Ферзя и пешку спрятали в карман.
Мой соперник замечтался о море,
А меня поглотил океан.

Еще до партии я чувствовал обман:
Ты знаешь каждый ход мой наизусть.
На улицах живет густой туман,
Разбитый стакан не полон и не пуст.

Ты ставишь мат, не глядя на фигуры.
Мой проигрыш — осознанный триумф.
Я ухожу, и я совсем не хмурый,
Приняв твой вечный, монолитный ум.

Я ухожу, скрипя сухой травою,
В груди шуршит букет из мертвых роз.
Тот бог-флорист помашет мне рукою,
Но я не обернусь. Так довелось.`,
    size: 'large'
  },
  {
    id: 'Bus-6',
    title: 'Автобус №6',
    preview: `Снежным утром смотрит, брови хмуря,
Мой одинокий друг — он как-то говорил...`,
    content: `Снежным утром смотрит, брови хмуря,
Мой одинокий друг — он как-то говорил,
Что в нашем мире не нужна цензура,
И в своем взгляде шутку проронил.

Не чувствую ничего в ночную пору,
Исчез бесследно внутренний протест.
В автобусе жизни не бывает поручней,
В автобусе жизни нет сидячих мест.

Каждый успеет подвести итоги,
Всех ждет межцифровой пунктир.
Я не жалуюсь на уставшие ноги,
Поскольку стоя вижу весь мир.

Вчера хотел зашить свежие раны,
Но в тишине я об иголку укололся.
Сегодня я очнулся на краю нирваны
И вспомнил, почему всегда боролся.

Нам невозможно угадать концовку:
Мы — это мы, мы просто есть.
Он снова проехал мою остановку —
Автобус под номером шесть.`,
    size: 'medium'
  },
  {
    id: 'List',
    title: 'Декабрьский Лист',
    preview: `Как первый лист упавший в сентябре,
Осознаю всю боль, что от падения...`,
    content: `Как первый лист упавший в сентябре,
Осознаю всю боль, что от падения,
Сжимая зубы, потерял в календаре
Дату первого неверного решения.

Не восхищаюсь чужими рекордами.
Я знаю, наш свет почти погас.
Мы лишь играем такими аккордами,
Которые давно придумали за нас.

Не существует энциклопедии жизни.
Ошибки заставляют вспоминать:
О том, как убеждения корыстны,
О том, как свою исповедь читать,

О том, какой вес несут слова,
Что повлекли немыслимый урон.
Опять с кровати свисает голова,
Которую давно покинул тихий сон.

И многое хотелось поменять.
Несем мы бремя человеческого выбора,
Но каждый раз я буду вспоминать,
Как нежен запах того самого свитера.

Мне жаль, что покрываемся эрозией.
Клянусь в любви на кровном алтаре:
Я буду ценить каждый день осени,
Как крайний лист, упавший в декабре.`,
    size: 'large'
  },
  {
    id: 'Симфония разбитых фонарей',
    title: 'Симфония разбитых фонарей',
    preview: `Я пишу, закончились чернила.
Для книги характерно выбирать...`,
    content: `Я пишу, закончились чернила.
Для книги характерно выбирать —
Название, чтоб точно ты любила
И остальных заставила читать.

В ней будет гармония жизни
И высота, чтоб больно было падать.
Намеренья мои небескорыстны.
Сколько можно от радости плакать?

Я пишу, мне не нужны чернила.
Для книги характерно выбирать —
Эпиграф, которым погрузила
Читателя любившего мечтать.

И мне не нужно объяснять человеку,
Что буду рад я сделать мир добрей.
Я просто уберу ее в свою библиотеку
«Симфонию разбитых фонарей».`,
    size: 'small'
  },
  {
    id: 'main-verse',
    title: 'Главный стих',
    preview: `Я напишу свой самый главный стих,
На дне страниц оставив свою подпись...`,
    content: `Я напишу свой самый главный стих,
На дне страниц оставив свою подпись.
И больше нет сомнений никаких.
Не размышляйте обо мне — вы ошибётесь.

Я посвящаю тебе самый главный стих,
И каждую улыбку бережно лелея,
Надеюсь, соберемся мы на выходных,
Впервые запустим воздушного змея.

И мне не нужен алкоголь и сигареты.
Я напишу свой самый грустный стих.
Открыв гербарий, я увидел сухоцветы.
Мне жаль, что я давно забыл про них.

И даже вместе встретив новые рассветы,
Мы удивимся, насколько небо далеко.
Тени на стенах сплетут наши портреты,
А электричка больше не вернется в депо.

Я напишу свою самую главную строчку,
Проронив слезу от осознания.
Но я специально не поставлю точку,
Поскольку забыл все знаки препинания`,
    size: 'large'
  },
  {
    id: 'happen',
    title: 'Зимняя ночь длится дольше будних дней',
    preview: `Зимняя ночь длится дольше будних дней.
Я жду когда внутри меня наступит оттепель...`,
    content: `Зимняя ночь длится дольше будних дней.
Я жду когда внутри меня наступит оттепель.
Пугают масштабы ледяных камней,
Что в голове прорастают как опухоль.

Был младше, без сомнений и осознано,
Я бегал без футболки под дождем.
Сейчас, мне выходить из дома холодно,
Смотрю в окно, как убегает он ручьем.

Этот ручей впадает в забытый водоем,
В который люди свою ненависть сливают.
«Когда-нибудь мы точно заживем».
Или в наших краях такого не бывает?

Все сводится к несчастному моменту,
В котором важна лишь веревка, потолок.
Я ночью сдам вам свои страхи в аренду.
На теплой шее появился узелок.

И самую холодную зиму мы переживем.
Пусть солнца нет, луна нас согревает.
Хотел бы пробежаться под теплым дождем,
Жаль в наших краях такого не бывает.`,
    size: 'medium'
  },
  {
    id: 'hood',
    title: 'Капюшон',
    preview: `Я снова вышел на улицу без шапки,
Морозный ветер не сдует мой пыл...`,
    content: `Я снова вышел на улицу без шапки,
Морозный ветер не сдует мой пыл.
Ах, новогодние вспышки так ярки.
Не зря тебя в свой мир я впустил.

Когда растают бесконечные сугробы
Пойдем гулять с тобой на край земли
И сделаем мы это без союза «чтобы»,
И сделаем мы это от людей вдали.

Но пока под снегом провалилось дно.
Я глубоко устал, отталкиваю помощь.
Пусть в девять утра пока ещё темно,
В июне солнце обожжет нас в полночь.

И жить мы начнем полноценно.
На небе снова воцарятся звезды.
Я обращаюсь к вам немного откровенно:
Мы очень ждем, вы приходите в гости.

Мы с радостью наполним ваши чашки.
В нашем доме никто не чужой.
В пыльной книге лежат сухие ромашки —
Цветочкам тоже холодно зимой. 

Я бы хотел повторить все истории,
Вся грусть давно превратилась в фон,
Я распишусь в формате аллегории: 
Зачем мне шапка, когда есть капюшон?`,
    size: 'large'
  },
  {
    id: 'От громкого крика заболело горло',
    title: 'От громкого крика заболело горло',
    preview: `От громкого крика заболело горло.
Извините, я скоро замолчу...`,
    content: `От громкого крика заболело горло.
Извините, я скоро замолчу.
И что-то под ребром мгновенно закололо,
Но говорить о чувствах не хочу.

Все руки разъедает бытовая химия
В попытке смыть безнадежные слезы,
Что на кофте остались от бессилия.
Внутри меня сейчас царят морозы.

Я слишком юн для слова счастье.
Я слишком юн, дал страху победить.
Я слишком глуп, раз плачу в ненастье,
Но все это неважно, раз могу любить.

Пугает перед сном упущенное время.
Мне тяжело все это признавать.
Передо мной стоит забытая дилемма:
Мне нужно в себе мудрость воспитать?

И в поиске себя я стер свои мозоли.
Скелеты больше не влезают в шкаф.
Избавиться от них мне не хватает воли.
Меня душит мой собственный шарф.

Пока прошлое лежит под снегами 
Прости мой друг, мне нужно уходить.
И чтобы мне потом остаться с вами
Я в этой жизни должен победить.`,
    size: 'medium'
  },
  {
    id: '«Реквием по забытым словам»',
    title: '«Реквием по забытым словам»',
    preview: `Я забываю о несказанных словах,
И многие мысли погибнут со мной....`,
    content: `Я забываю о несказанных словах,
И многие мысли погибнут со мной.
Контраст эмоций заметьте в листах,
Исписанных в мой непростой выходной.

Я сжёг эти листы чтобы согреться.
В моем костре ещё осталась правда.
Гуляя в пламени, не смог я загореться,
Вспоминая мечту вчерашнего завтра.

Меня не пугают такие ожоги.
Такие костры - маяки по ночам .
И больше нет со мною тревоги.
«Реквием по забытым словам».`,
    size: 'small'
  },
  {
    id: 'Пуля',
    title: 'Пуля',
    preview: `От тяжести уныния свисает голова,
И сигаретный дым давно пропал в нирване...`,
    content: `От тяжести уныния свисает голова,
И сигаретный дым давно пропал в нирване.
Ещё не слишком поздно - пока лежит листва,
Увековечу ваши лица я в своем романе.

О тяжести ошибок я уже не беспокоюсь.
Давно уже запомнил и такова моя манера,
И самой темной ночью я одеялом не укроюсь.
Останусь крайней пулей в барабане револьвера.`,
    size: 'small'
  },
];



let currentPage = 'poems';
let displayedPoemsCount = 6; 
const POEMS_PER_LOAD = 3;


function createPoetryBlock(poem, index) {
  const block = document.createElement('div');
  block.className = 'poetry-block';
  block.dataset.poemId = poem.id;
  block.dataset.size = poem.size;
  block.style.animationDelay = `${index * 0.08}s`;

  block.innerHTML = `
    <div class="block-vignette"></div>
    <div class="hover-glow"></div>
    <div class="block-content">
      <h3 class="serif">${poem.title}</h3>
      <div class="preview serif">${poem.preview}</div>
    </div>
    <span class="read-hint">Read →</span>
  `;


  block.addEventListener('click', () => openPoemModal(poem.id));

  return block;
}

function renderPoems(startIndex = 0, count = displayedPoemsCount) {
  const grid = document.getElementById('poetryGrid');
  const loadMoreWrapper = document.getElementById('loadMoreWrapper');


  if (startIndex === 0) {
    grid.innerHTML = '';
  }


  const poemsToRender = poems.slice(startIndex, startIndex + count);
  poemsToRender.forEach((poem, index) => {
    const block = createPoetryBlock(poem, startIndex + index);
    grid.appendChild(block);
  });


  if (displayedPoemsCount >= poems.length) {
    loadMoreWrapper.classList.add('hidden');
  } else {
    loadMoreWrapper.classList.remove('hidden');
  }
}


function initLoadMore() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  loadMoreBtn.addEventListener('click', () => {
    const currentCount = displayedPoemsCount;
    displayedPoemsCount += POEMS_PER_LOAD;

    const newPoems = poems.slice(currentCount, displayedPoemsCount);
    const grid = document.getElementById('poetryGrid');

    newPoems.forEach((poem, index) => {
      const block = createPoetryBlock(poem, currentCount + index);
      grid.appendChild(block);

      setTimeout(() => {
        block.style.opacity = '1';
        block.style.transform = 'scale(1)';
      }, index * 80);
    });

    if (displayedPoemsCount >= poems.length) {
      document.getElementById('loadMoreWrapper').classList.add('hidden');
    }
  });
}


function initAboutPageAnimations() {

  const aboutTextParagraphs = document.querySelectorAll('.about-text p');
  const baseDelay = 0.4; 
  const staggerDelay = 0.1; 

  aboutTextParagraphs.forEach((p, index) => {
    const delay = baseDelay + (index * staggerDelay);
    p.style.animation = `fadeSlideUp 0.8s ${delay}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
  });
}

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const poemsPage = document.getElementById('poemsPage');
  const aboutPage = document.getElementById('aboutPage');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const page = link.dataset.page;

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      if (page === 'poems') {
        aboutPage.classList.add('hidden');
        poemsPage.classList.remove('hidden');
        currentPage = 'poems';

        document.getElementById('hero').style.transform = '';
        document.getElementById('hero').style.opacity = '1';
      } else if (page === 'about') {
        poemsPage.classList.add('hidden');
        aboutPage.classList.remove('hidden');
        currentPage = 'about';


        initAboutPageAnimations();
      }


      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}


function initRandomPoem() {
  const randomBtn = document.getElementById('randomBtn');

  randomBtn.addEventListener('click', () => {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    openPoemModal(randomPoem.id);

    randomBtn.style.transform = 'scale(0.9)';
    setTimeout(() => {
      randomBtn.style.transform = '';
    }, 200);
  });
}


function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

function lockScroll() {
  const scrollbarWidth = getScrollbarWidth();

  const scrollY = window.scrollY;

  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }

  document.body.classList.add('modal-open');
  document.body.dataset.scrollY = scrollY;
}

function unlockScroll() {

  document.body.style.paddingRight = '';
  document.documentElement.style.removeProperty('--scrollbar-width');


  document.body.classList.remove('modal-open');

  const scrollY = document.body.dataset.scrollY;
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY));
  }
}


function openPoemModal(poemId) {
  const poem = poems.find(p => p.id === poemId);
  if (!poem) return;

  const poemModal = document.getElementById('poemModal');
  const poemTitle = document.getElementById('poemTitle');
  const poemStanzas = document.getElementById('poemStanzas');

  // Set title
  poemTitle.textContent = poem.title;

  // Parse content into stanzas (separated by double newlines)
  const stanzas = poem.content.split('\n\n');

  // Clear and populate stanzas
  poemStanzas.innerHTML = '';
  stanzas.forEach((stanza, index) => {
    const p = document.createElement('p');
    p.className = 'stanza serif';
    p.textContent = stanza;

    // Dynamic animation delay based on actual stanza count
    const baseDelay = 0.4; // Start delay in seconds
    const staggerDelay = 0.15; // Delay between each stanza
    const delay = baseDelay + (index * staggerDelay);

    // Apply animation via inline style
    p.style.animation = `stanzaIn 0.8s ${delay}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;

    poemStanzas.appendChild(p);
  });

  // Lock scroll (prevents layout shift)
  lockScroll();

  // Show modal
  poemModal.style.display = 'block';

  // Trigger animation
  requestAnimationFrame(() => {
    poemModal.classList.add('active');
  });
}

function closePoemModal() {
  const poemModal = document.getElementById('poemModal');

  poemModal.classList.remove('active');
  poemModal.classList.add('closing');

  setTimeout(() => {
    poemModal.style.display = 'none';
    poemModal.classList.remove('closing');

    // Unlock scroll immediately (no delay)
    unlockScroll();
  }, 600);
}

function initPoemModal() {
  const poemModal = document.getElementById('poemModal');
  const poemClose = document.getElementById('poemClose');

  // Close handlers
  poemClose.addEventListener('click', closePoemModal);

  poemModal.addEventListener('click', (e) => {
    if (e.target === poemModal) {
      closePoemModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && poemModal.classList.contains('active')) {
      closePoemModal();
    }
  });
}


function initParallax() {
  const hero = document.getElementById('hero');

  window.addEventListener('scroll', () => {
    // Only apply parallax on poems page
    if (currentPage !== 'poems') return;

    const scrollY = window.scrollY;

    // Parallax offset
    const translateY = scrollY * 0.15;
    hero.style.transform = `translateY(${translateY}px)`;

    // Fade out
    const opacity = Math.max(1 - (scrollY / 300), 0.3);
    hero.style.opacity = opacity;
  });
}



function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-100px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  const elementsToObserve = [
    ...document.querySelectorAll('.portfolio-header'),
    ...document.querySelectorAll('.project-card'),
    ...document.querySelectorAll('.footer-content')
  ];

  elementsToObserve.forEach(el => {
    observer.observe(el);
  });
}


function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && !this.dataset.page) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}


function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}



function checkReducedMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01s');
  }
}


function init() {
  console.log('🎨 Poetry in Code - Dynamic Edition');
  console.log(`📚 Loaded ${poems.length} poems`);

  checkReducedMotion();


  renderPoems();


  initNavigation();
  initRandomPoem();
  initLoadMore();
  initPoemModal();
  initParallax();
  initIntersectionObserver();
  initSmoothScroll();

  if (!document.getElementById('aboutPage').classList.contains('hidden')) {
    initAboutPageAnimations();
  }

  console.log('✨ All systems initialized');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  console.log('🚀 Page fully loaded');
});
