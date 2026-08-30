const I18N={
ru:{
 heroTitle:'Firmware Flasher',heroText:'Выберите плату и проверенную прошивку, затем настройте узел через USB Serial.',independent:'Независимый community-проект',
 chooseBoard:'Выберите плату',chooseBoardSub:'Поддерживаемое и планируемое железо',filterAll:'Все',chooseFirmware:'Выберите прошивку',chooseBoardFirst:'Сначала выберите плату',
 selectedBuild:'ВЫБРАННАЯ СБОРКА',comingSoon:'Прошивка скоро',diyTitle:'DIY — собрать самому',diySub:'Схемы, пины и пояснения для наших сборок',
 diyIntro:'DIY — основной раздел MeshAlma. Выберите вариант сборки: ниже показаны назначение модулей, базовое подключение и соответствующая прошивка.',
 diyWarning:'Перед пайкой сверяйте выбранный профиль прошивки и ревизию платы. Разные модули LoRa могут иметь несовместимый pinout.',
 flashTitle:'Прошивка',flash1:'Подключите плату по USB.',flash2:'Для nRF52840 дважды нажмите RESET, чтобы открыть bootloader.',flash3:'Откройте диск NICENANO / bootloader в Windows.',flash4:'Скачайте выбранный .uf2 и скопируйте его на этот диск.',flash5:'После копирования плата перезагрузится автоматически.',
 roadmapTitle:'Следующий этап',roadmapText:'Для ESP32 добавим прямую прошивку из Chrome, erase/update и загрузку собственного firmware — как в крупных web-flasher проектах.',
 serialTitle:'Serial Console',connect:'Подключить USB Serial',clear:'Очистить',disconnected:'Не подключено',send:'Отправить',commandHints:'ПОДСКАЗКИ КОМАНД',basic:'Основные',radioIdentity:'Радио и имя',
 commandTip:'Нажмите команду для немедленной отправки. Команды со значением вводите вручную:', version:'Версия',buildDate:'Сборка',included:'Включено',knownIssues:'Известные проблемы',
 testBuildsTitle:'Тестовые прошивки',testBuildsSub:'Версии, изменения, известные проблемы и пожелания',
 sensorKnown:'Новая сборка с temperature advert и remote Admin password fix проходит hardware-тест перед публикацией.',
 sh1106Notes:'История сообщений, кириллица, RSSI/SNR и one-button UI.',ssdNotes:'Regression build для SSD1306 display profile.',
 repeaterNotes:'Тестовая сборка для E22/SX126x; проверяйте модуль, частоту и питание перед прошивкой.',
 wishlistTitle:'Хотелки / Wishlist',wishlistText:'Здесь будем отмечать запросы сообщества, результаты полевых тестов и функции для следующей сборки.',
 communityTitle:'Community & Testing',communitySub:'Обсуждение, тесты и обратная связь',communityText:'Казахстанское сообщество: сети, DIY-сборки, тестовые прошивки и полевые испытания.',joinTelegram:'Открыть Telegram',
 testersTitle:'Top testers & contributors',testersText:'Участники будут добавляться только с их согласия. Спасибо всем, кто тестирует прошивки, железо и сеть.',comingWithPermission:'Имена появятся после согласия',
 creditsTitle:'Credits & Upstream',creditsSub:'Открытые проекты, на которых основана часть работы',zephCredit:'MeshAlma firmware использует и адаптирует части открытого ZephCore и архитектурные решения из ветки dev проекта shadowroot2/ZephCore.',
 meshcoreCredit:'MeshAlma — независимый community-проект и не является официальным дистрибутивом MeshCore или ZephCore.',thirdParty:'Third-party notices',footer:'независимый community-проект. Проверяйте частоту, распиновку и модель платы перед прошивкой.',
 download:'Скачать UF2',flashEsp32:'Прошить ESP32',eraseEsp32:'Стереть ESP32',ready:'готово',planned:'планируется',firmwaresFor:'Прошивки для',statusLabel:'Статус',boardLabel:'Плата',radioLabel:'Радио',bandLabel:'Диапазон',manifestError:'Не удалось загрузить каталог прошивок. Обновите страницу или проверьте manifest.json.',espConfirmErase:'Полностью стереть flash ESP32? Настройки и identity будут удалены.',espConnecting:'Подключение к {chip}…',espFlashing:'Прошивка…',espComplete:'Прошивка и проверка завершены. Плата перезагружена.',espErased:'Flash стёрт. Плата перезагружена.'
},
en:{
 heroTitle:'Firmware Flasher',heroText:'Choose a board and a tested firmware, then configure the node directly over USB Serial.',independent:'Independent community project',
 chooseBoard:'Choose board',chooseBoardSub:'Supported and planned hardware',filterAll:'All',chooseFirmware:'Choose firmware',chooseBoardFirst:'Choose a board first',
 selectedBuild:'SELECTED BUILD',comingSoon:'Firmware coming soon',diyTitle:'DIY — build it yourself',diySub:'Wiring, pins and notes for our builds',
 diyIntro:'DIY is the main focus of MeshAlma. Pick a build below to see module purpose, basic wiring and the matching firmware.',
 diyWarning:'Before soldering, verify the selected firmware profile and board revision. Different LoRa modules may use incompatible pinouts.',
 flashTitle:'Flash',flash1:'Connect the board over USB.',flash2:'For nRF52840, double-press RESET to enter the bootloader.',flash3:'Open the NICENANO / bootloader drive.',flash4:'Download the selected .uf2 file and copy it to that drive.',flash5:'The board will reboot automatically after the copy finishes.',
 roadmapTitle:'Next step',roadmapText:'For ESP32 we will add direct Chrome flashing, erase/update and custom firmware upload, following the best ideas from mature web flashers.',
 serialTitle:'Serial Console',connect:'Connect USB Serial',clear:'Clear',disconnected:'Disconnected',send:'Send',commandHints:'COMMAND HINTS',basic:'Basic',radioIdentity:'Radio & identity',
 commandTip:'Click a command to send it immediately. Commands with values can be entered manually:', version:'Version',buildDate:'Build',included:'Included',knownIssues:'Known issues',
 testBuildsTitle:'Test builds',testBuildsSub:'Versions, changes, known issues and requests',
 sensorKnown:'A new build with temperature advert and the remote Admin password fix is undergoing hardware testing before publication.',
 sh1106Notes:'Message history, Cyrillic rendering, RSSI/SNR and one-button UI.',ssdNotes:'Regression build for the SSD1306 display profile.',
 repeaterNotes:'Test build for E22/SX126x; verify module, frequency and power before flashing.',
 wishlistTitle:'Wishlist',wishlistText:'Community requests, field-test results and candidates for the next firmware build will be tracked here.',
 communityTitle:'Community & Testing',communitySub:'Discussion, testing and feedback',communityText:'Kazakhstan community for mesh networking, DIY builds, test firmware and field trials.',joinTelegram:'Open Telegram',
 testersTitle:'Top testers & contributors',testersText:'Participants will only be listed with their permission. Thanks to everyone testing firmware, hardware and the network.',comingWithPermission:'Names will appear with permission',
 creditsTitle:'Credits & Upstream',creditsSub:'Open-source projects that contributed to this work',zephCredit:'MeshAlma firmware uses and adapts parts of the open-source ZephCore project and architectural work from the shadowroot2/ZephCore dev branch.',
 meshcoreCredit:'MeshAlma is an independent community project and is not an official MeshCore or ZephCore distribution.',thirdParty:'Third-party notices',footer:'independent community project. Verify frequency, pinout and board model before flashing.',
 download:'Download UF2',flashEsp32:'Flash ESP32',eraseEsp32:'Erase ESP32',ready:'ready',planned:'planned',firmwaresFor:'Firmware for',statusLabel:'Status',boardLabel:'Board',radioLabel:'Radio',bandLabel:'Band',manifestError:'The firmware catalog could not be loaded. Refresh the page or check manifest.json.',espConfirmErase:'Erase the entire ESP32 flash? Settings and identity will be removed.',espConnecting:'Connecting to {chip}…',espFlashing:'Flashing…',espComplete:'Flash and verification complete. The board was reset.',espErased:'Flash erased. The board was reset.'
},
kk:{
 heroTitle:'Firmware Flasher',heroText:'Платаны және тексерілген firmware таңдаңыз, содан кейін түйінді USB Serial арқылы баптаңыз.',independent:'Тәуелсіз community-жоба',
 chooseBoard:'Платаны таңдаңыз',chooseBoardSub:'Қолдау көрсетілетін және жоспарланған құрылғылар',filterAll:'Барлығы',chooseFirmware:'Firmware таңдаңыз',chooseBoardFirst:'Алдымен платаны таңдаңыз',
 selectedBuild:'ТАҢДАЛҒАН ЖИНАҚ',comingSoon:'Firmware жақында',diyTitle:'DIY — өзіңіз жинаңыз',diySub:'Схемалар, пиндер және біздің жинақтарға түсініктемелер',
 diyIntro:'DIY — MeshAlma жобасының негізгі бағыты. Жинақты таңдап, модульдердің мақсатын, негізгі қосылуын және сәйкес firmware-ді көріңіз.',
 diyWarning:'Дәнекерлеу алдында firmware профилін және плата ревизиясын тексеріңіз. LoRa модульдерінің pinout-ы әртүрлі болуы мүмкін.',
 flashTitle:'Прошивка',flash1:'Платаны USB арқылы қосыңыз.',flash2:'nRF52840 үшін bootloader ашу үшін RESET батырмасын екі рет басыңыз.',flash3:'NICENANO / bootloader дискін ашыңыз.',flash4:'Таңдалған .uf2 файлын жүктеп, дискіге көшіріңіз.',flash5:'Көшіру аяқталған соң плата автоматты түрде қайта жүктеледі.',
 roadmapTitle:'Келесі кезең',roadmapText:'ESP32 үшін Chrome арқылы тікелей flashing, erase/update және өз firmware файлын жүктеуді қосамыз.',
 serialTitle:'Serial Console',connect:'USB Serial қосу',clear:'Тазалау',disconnected:'Қосылмаған',send:'Жіберу',commandHints:'КОМАНДА КӨМЕГІ',basic:'Негізгі',radioIdentity:'Радио және атау',
 commandTip:'Команданы бірден жіберу үшін басыңыз. Мәні бар командаларды қолмен енгізіңіз:', version:'Нұсқа',buildDate:'Жинақ',included:'Құрамында',knownIssues:'Белгілі мәселелер',
 testBuildsTitle:'Тесттік firmware',testBuildsSub:'Нұсқалар, өзгерістер, белгілі мәселелер және ұсыныстар',
 sensorKnown:'Temperature advert және remote Admin password fix бар жаңа жинақ жарияланар алдында hardware тесттен өтуде.',
 sh1106Notes:'Хабар тарихы, Cyrillic, RSSI/SNR және one-button UI.',ssdNotes:'SSD1306 display profile үшін regression build.',
 repeaterNotes:'E22/SX126x үшін тесттік жинақ; flashing алдында модульді, жиілікті және қоректі тексеріңіз.',
 wishlistTitle:'Wishlist',wishlistText:'Қауымдастық сұраныстары, далалық тест нәтижелері және келесі firmware мүмкіндіктері осында белгіленеді.',
 communityTitle:'Community & Testing',communitySub:'Талқылау, тест және кері байланыс',communityText:'Қазақстандағы mesh желілері, DIY жинақтар, тест firmware және далалық сынақтар қауымдастығы.',joinTelegram:'Telegram ашу',
 testersTitle:'Top testers & contributors',testersText:'Қатысушылар тек өз келісімімен жарияланады. Firmware, hardware және желіні тестілейтін барлық адамға рақмет.',comingWithPermission:'Аттар келісімнен кейін шығады',
 creditsTitle:'Credits & Upstream',creditsSub:'Жұмысқа үлес қосқан ашық жобалар',zephCredit:'MeshAlma firmware ашық ZephCore жобасының бөліктерін және shadowroot2/ZephCore dev тармағындағы архитектуралық шешімдерді қолданады және бейімдейді.',
 meshcoreCredit:'MeshAlma — тәуелсіз community-жоба және MeshCore немесе ZephCore ресми дистрибутиві емес.',thirdParty:'Third-party notices',footer:'тәуелсіз community-жоба. Прошивка алдында жиілікті, pinout пен плата моделін тексеріңіз.',
 download:'UF2 жүктеу',flashEsp32:'ESP32 прошивкалау',eraseEsp32:'ESP32 өшіру',ready:'дайын',planned:'жоспарда',firmwaresFor:'Firmware',statusLabel:'Күйі',boardLabel:'Плата',radioLabel:'Радио',bandLabel:'Диапазон',manifestError:'Firmware каталогын жүктеу мүмкін болмады. Бетті жаңартыңыз немесе manifest.json файлын тексеріңіз.',espConfirmErase:'ESP32 flash жадын толық өшіру керек пе? Баптаулар мен identity жойылады.',espConnecting:'{chip} құрылғысына қосылу…',espFlashing:'Прошивкалау…',espComplete:'Прошивкалау және тексеру аяқталды. Плата қайта жүктелді.',espErased:'Flash өшірілді. Плата қайта жүктелді.'
}};

const boards=[
 {id:'diy-promicro',name:'DIY · nRF52840 ProMicro',vendor:'DIY',chip:'nrf52840',group:['nrf52840','diy'],status:'ready',icon:'🛠️',desc:{ru:'Наш основной DIY-конструктор: SX1278 или E22/SX126x, дисплей, GPS и датчики.',en:'Our main DIY platform: SX1278 or E22/SX126x, display, GPS and sensors.',kk:'Негізгі DIY платформа: SX1278 немесе E22/SX126x, дисплей, GPS және сенсорлар.'}},
 {id:'esp32s3-devkitc-n16r8',name:'ESP32-S3 DevKitC N16R8',vendor:'MeshAlma',chip:'ESP32-S3',group:['esp32','espnow'],status:'ready',icon:'🖥️',desc:{ru:'Z-Bridge DevKitC с ST7789, энкодером, ESP-NOW, BLE Companion и BLE Remote.',en:'Z-Bridge DevKitC with ST7789, encoder, ESP-NOW, BLE Companion and BLE Remote.',kk:'ST7789, encoder, ESP-NOW, BLE Companion және BLE Remote бар Z-Bridge DevKitC.'}}, {id:'xiao-esp32c3',name:'XIAO ESP32-C3',vendor:'Seeed',chip:'ESP32-C3',group:['esp32','espnow'],status:'ready',icon:'📶',desc:{ru:'Компактный ESP32-C3 SENSOR endpoint для ESP-NOW.',en:'Compact ESP32-C3 SENSOR endpoint for ESP-NOW.',kk:'ESP-NOW үшін ықшам ESP32-C3 SENSOR endpoint.'}},
 {id:'heltec-v3',name:'Heltec LoRa 32 V3',vendor:'Heltec',chip:'esp32-s3',group:['esp32'],status:'planned',icon:'📡',desc:{ru:'ESP32-S3 + SX1262. Поддержка профилей готовится.',en:'ESP32-S3 + SX1262. Firmware profiles are planned.',kk:'ESP32-S3 + SX1262. Firmware профильдері жоспарланған.'}},
 {id:'heltec-v4',name:'Heltec LoRa 32 V4',vendor:'Heltec',chip:'esp32-s3',group:['esp32'],status:'planned',icon:'📡',desc:{ru:'Новое поколение Heltec. Добавим после hardware-проверки.',en:'New Heltec generation. Will be added after hardware validation.',kk:'Жаңа Heltec буыны. Hardware тесттен кейін қосылады.'}},
 {id:'t1000-e',name:'SenseCAP T1000-E',vendor:'Seeed',chip:'nrf52840',group:['nrf52840'],status:'planned',icon:'🧭',desc:{ru:'Компактный nRF52840 tracker с GNSS. Профиль запланирован.',en:'Compact nRF52840 tracker with GNSS. Profile planned.',kk:'GNSS бар ықшам nRF52840 tracker. Профиль жоспарланған.'}},
 {id:'t-echo',name:'LILYGO T-Echo',vendor:'LilyGo',chip:'nrf52840',group:['nrf52840'],status:'planned',icon:'📟',desc:{ru:'nRF52840 + LoRa + экран. Добавим проверенную сборку.',en:'nRF52840 + LoRa + display. A validated build is planned.',kk:'nRF52840 + LoRa + экран. Тексерілген жинақ жоспарланған.'}},
 {id:'espnow-node',name:'ESP-NOW Node',vendor:'DIY',chip:'ESP32',group:['esp32','espnow'],status:'planned',icon:'📶',desc:{ru:'Компактный endpoint для ESP-NOW mesh.',en:'Compact endpoint for an ESP-NOW mesh.',kk:'ESP-NOW mesh үшін ықшам endpoint.'}},
 {id:'espnow-repeater',name:'ESP-NOW Repeater',vendor:'DIY',chip:'ESP32',group:['esp32','espnow'],status:'planned',icon:'↔',desc:{ru:'Транзитный ESP-NOW repeater.',en:'Transit ESP-NOW repeater.',kk:'Транзиттік ESP-NOW repeater.'}},
 {id:'espnow-companion',name:'ESP-NOW Companion',vendor:'DIY',chip:'ESP32',group:['esp32','espnow'],status:'planned',icon:'📱',desc:{ru:'BLE/USB Companion с ESP-NOW транспортом.',en:'BLE/USB Companion using ESP-NOW transport.',kk:'ESP-NOW transport бар BLE/USB Companion.'}},
 {id:'espnow-lora-bridge',name:'ESP-NOW + LoRa Bridge',vendor:'DIY',chip:'ESP32',group:['esp32','espnow'],status:'planned',icon:'🔀',desc:{ru:'Мост между ESP-NOW и LoRa.',en:'Bridge between ESP-NOW and LoRa.',kk:'ESP-NOW және LoRa арасындағы bridge.'}},
 {id:'xiao-esp32s3',name:'Z-Bridge S3',vendor:'MeshAlma',chip:'ESP32-S3',group:['esp32','espnow'],status:'ready',icon:'🌐',desc:{ru:'ESP32-S3 SuperNode: ESP-NOW, LoRa, BLE и Web.',en:'ESP32-S3 SuperNode: ESP-NOW, LoRa, BLE and Web.',kk:'ESP32-S3 SuperNode: ESP-NOW, LoRa, BLE және Web.'}}
];

let builds=[];
let manifestError='';

const DIY={
 sx1278:{
  title:'nRF52840 ProMicro + SX1278 (RA-02 class)',
  why:{ru:'Компактный DIY companion/sensor на 433/434 MHz.',en:'Compact DIY companion/sensor for 433/434 MHz.',kk:'433/434 MHz үшін ықшам DIY companion/sensor.'},
  pins:[['CS','P1.11'],['MOSI','P1.13'],['MISO','P1.15'],['SCK','P0.10'],['DIO0 / IRQ','P0.29'],['RESET','P1.06']],
  notes:{ru:'Питание LoRa — только 3.3 V. Держите SPI-проводники короткими. Антенну подключайте до передачи.',en:'LoRa power is 3.3 V only. Keep SPI wiring short. Attach an antenna before transmitting.',kk:'LoRa қуаты тек 3.3 V. SPI сымдарын қысқа ұстаңыз. Тарату алдында антеннаны қосыңыз.'}
 },
 sx126x:{
  title:'nRF52840 ProMicro + E22 / SX1262/SX1268',
  why:{ru:'DIY repeater/sensor с современным SX126x и внешним Ebyte E22 модулем.',en:'DIY repeater/sensor with modern SX126x and an Ebyte E22 module.',kk:'SX126x және Ebyte E22 модулі бар DIY repeater/sensor.'},
  pins:[['SCK','P1.11'],['MOSI','P1.15'],['MISO','P0.02'],['CS','P1.13'],['DIO1','P0.10'],['BUSY','P0.29'],['RESET','P0.09'],['RXEN','P0.17']],
  notes:{ru:'Для E22 с TCXO используйте профиль платы, рассчитанный на конкретный модуль. 30 dBm варианты требуют правильного питания и RF-тракта.',en:'For E22 modules with TCXO, use the board profile for that exact module. 30 dBm variants need correct power and RF layout.',kk:'TCXO бар E22 үшін нақты модульге арналған профильді қолданыңыз. 30 dBm нұсқалары дұрыс қорек пен RF жолын қажет етеді.'}
 },
 sensor:{
  title:'DIY SENSOR + GPS',
  why:{ru:'SENSOR использует общий SensorManager и может отдавать температуру, GPS и другие подключённые датчики.',en:'SENSOR uses the common SensorManager and can expose temperature, GPS and other connected sensors.',kk:'SENSOR жалпы SensorManager пайдаланып, температура, GPS және басқа сенсорларды береді.'},
  pins:[['GPS MCU RX','P0.22'],['GPS MCU TX','P0.20'],['GPS ENABLE','P0.24'],['UART baud','9600']],
  notes:{ru:'Команда sensor scan ищет доступные датчики. GPS включается командой gps on; координаты появляются только после валидного fix.',en:'sensor scan probes available sensors. Enable GPS with gps on; coordinates are reported only after a valid fix.',kk:'sensor scan қолжетімді сенсорларды тексереді. GPS — gps on; координаттар valid fix болғаннан кейін шығады.'}
 }
};

let lang=localStorage.getItem('meshalma.lang')||((navigator.language||'').toLowerCase().startsWith('kk')?'kk':(navigator.language||'').toLowerCase().startsWith('en')?'en':'ru');
let selectedBoard='diy-promicro';
let selectedBuild=null;

const t=(key)=>I18N[lang][key]||I18N.en[key]||key;
const boardList=document.querySelector('#board-list');
const firmwareList=document.querySelector('#firmware-list');
const selected=document.querySelector('#selected');
const nameEl=document.querySelector('#selected-name');
const descEl=document.querySelector('#selected-description');
const meta=document.querySelector('#selected-meta');
const download=document.querySelector('#download');
const espErase=document.querySelector('#esp-erase');
const flashProgress=document.querySelector('#flash-progress');
const flashStatus=document.querySelector('#flash-status');
const diySection=document.querySelector('#diy-section');
const fwSub=document.querySelector('#firmware-step-sub');
const testBuilds=document.querySelector('#test-builds');
const escapeHtml=(value)=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const buildDescription=(build)=>{
 const description=build?.description;
 if(description&&typeof description==='object')return description[lang]||description.en||'';
 return typeof description==='string'?description:'';
};

function applyI18n(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(I18N[lang][key])el.textContent=I18N[lang][key]});
 document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
 renderBoards(document.querySelector('.filter.active')?.dataset.filter||'all');
 renderFirmware();
 renderTestBuilds();
 renderDIY(document.querySelector('.diy-tab.active')?.dataset.diy||'sx1278');
 if(selectedBuild) showBuild(selectedBuild);
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;localStorage.setItem('meshalma.lang',lang);applyI18n()}));

function renderBoards(filter='all'){
 boardList.innerHTML='';
 boards.filter(b=>filter==='all'||b.group.includes(filter)).forEach(b=>{
  const el=document.createElement('button');
  el.className=`board-card ${b.status==='planned'?'planned':''} ${selectedBoard===b.id?'active':''}`;
  el.innerHTML=`<div class="board-head"><div><strong>${b.name}</strong><small>${b.vendor} · ${b.chip}</small></div><span class="board-icon">${b.icon}</span></div><small>${b.desc[lang]}</small><div class="badges"><span class="status ${b.status}">${b.status==='ready'?t('ready'):t('planned')}</span>${b.group.includes('diy')?'<span class="badge">DIY</span>':''}</div>`;
  el.addEventListener('click',()=>selectBoard(b.id));
  boardList.appendChild(el);
 });
}
document.querySelectorAll('#board-filters .filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#board-filters .filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderBoards(b.dataset.filter)}));

function selectBoard(id){
 selectedBoard=id; selectedBuild=null; selected.classList.add('hidden');
 renderBoards(document.querySelector('.filter.active')?.dataset.filter||'all');
 renderFirmware();
 diySection.classList.toggle('hidden',id!=='diy-promicro');
 if(id==='diy-promicro') renderDIY('sx1278');
}
function renderFirmware(){
 firmwareList.innerHTML='';
 const board=boards.find(b=>b.id===selectedBoard);
 fwSub.textContent=board?`${t('firmwaresFor')} ${board.name}`:t('chooseBoardFirst');
 if(manifestError){firmwareList.innerHTML=`<div class="manifest-error">${escapeHtml(t('manifestError'))}</div>`;return}
 const items=builds.filter(x=>x.board===selectedBoard);
 if(!items.length){
  const p=document.createElement('div');p.className='note';p.textContent=board?.status==='planned'?`${t('planned')}: ${board.name}`:t('chooseBoardFirst');firmwareList.appendChild(p);return;
 }
 items.forEach(build=>{
  const b=document.createElement('button');b.className='card';b.type='button';
  b.innerHTML=`<strong>${escapeHtml(build.name)}</strong><small>${escapeHtml(buildDescription(build))}</small><dl class="firmware-meta"><div><dt>${t('version')}</dt><dd>${escapeHtml(build.version)}</dd></div><div><dt>${t('buildDate')}</dt><dd>${escapeHtml(build.build_date)}</dd></div><div><dt>${t('statusLabel')}</dt><dd>${escapeHtml(build.status)}</dd></div><div><dt>${t('boardLabel')}</dt><dd>${escapeHtml(build.mcu)}</dd></div><div><dt>${t('radioLabel')}</dt><dd>${escapeHtml(build.radio)}</dd></div><div><dt>${t('bandLabel')}</dt><dd>${escapeHtml(build.band)}</dd></div></dl>`;
  b.addEventListener('click',()=>showBuild(build,b));firmwareList.appendChild(b);
 });
}
function showBuild(build,button){
 selectedBuild=build;document.querySelectorAll('.card').forEach(x=>x.classList.remove('active'));if(button)button.classList.add('active');
 selected.classList.remove('hidden');nameEl.textContent=build.name;descEl.textContent=buildDescription(build);meta.textContent=[build.version,build.status,build.mcu,build.radio,build.band].join(' · ');
 const extension=String(build.file||'').split('?')[0].toLowerCase().match(/\.[^.\/]+$/)?.[0]||'';
 const espFlash=build.flash?.type==='esp32'&&extension==='.bin';
 espErase.classList.toggle('hidden',!espFlash);espErase.textContent=t('eraseEsp32');flashProgress.classList.add('hidden');flashProgress.value=0;flashStatus.textContent='';
 if(build.ready&&espFlash){download.removeAttribute('href');download.removeAttribute('download');download.textContent=t('flashEsp32');download.classList.remove('disabled');download.removeAttribute('aria-disabled')}
 else if(build.ready){download.href=build.file;download.download='';download.textContent=extension==='.uf2'?t('download'):`Download ${extension||'firmware'}`;download.classList.remove('disabled');download.removeAttribute('aria-disabled')}
 else{download.removeAttribute('href');download.textContent=t('comingSoon');download.classList.add('disabled');download.setAttribute('aria-disabled','true')}
}

function bytesToHex(bytes){return Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('')}
async function loadEspTool(){
 try{return await import('https://unpkg.com/esptool-js@0.6.0/bundle.js')}
 catch(error){throw new Error(`Unable to load ESP32 flasher library: ${error?.message||error}`)}
}
function normalizeChipName(value){
 const compact=String(value||'').toLowerCase().replace(/[^a-z0-9]/g,'');
 const families=['esp32c61','esp32c6','esp32c5','esp32c3','esp32s3','esp32s2','esp32h2','esp32p4','esp32'];
 return families.find(family=>compact.startsWith(family))||compact;
}
function matchesExpectedChip(expected,detected){return normalizeChipName(expected)===normalizeChipName(detected)}
function selectedEspChip(build){return String(build?.mcu||build?.flash?.chip||'ESP32').toUpperCase()}
function espConnectingText(build){return t('espConnecting').replace('{chip}',selectedEspChip(build))}
async function connectEsp(build){
 if(!('serial' in navigator))throw new Error('Web Serial requires Chrome/Edge over HTTPS.');
 const {ESPLoader,Transport}=await loadEspTool();
 const device=await navigator.serial.requestPort();
 const transport=new Transport(device,true);
 const loader=new ESPLoader({transport,baudrate:Number(build.flash?.baud||921600),terminal:{clean(){},writeLine(data){flashStatus.textContent=String(data)},write(data){flashStatus.textContent=String(data)}}});
 const detected=await loader.main();
 if(!build.flash?.chip||!matchesExpectedChip(build.flash.chip,detected)){await transport.disconnect();throw new Error(`Chip mismatch: expected ${build.flash?.chip}, detected ${detected||'unknown'}.`)}
 return {loader,transport};
}
async function downloadFirmware(path){
 const load=async url=>{try{const response=await fetch(url,{cache:'no-store'});if(!response.ok)return {error:`HTTP ${response.status}`};return {data:new Uint8Array(await response.arrayBuffer())}}catch{return {error:'network error'}}};
 const pages=await load(path);if(pages.data)return pages.data;
 const relative=String(path||'').replace(/^\/+/, '');
 const raw=await load(`https://raw.githubusercontent.com/AlexGL402/MeshAlmaFlash/main/${relative}`);if(raw.data)return raw.data;
 throw new Error(`Firmware download failed: Pages ${pages.error}; GitHub raw ${raw.error}`);
}
async function flashSelectedEsp(){
 const build=selectedBuild;if(!build?.flash||build.flash.type!=='esp32')return;
 download.classList.add('disabled');espErase.disabled=true;flashProgress.classList.remove('hidden');flashProgress.value=0;flashStatus.textContent=espConnectingText(build);
 let session;
 try{
  const files=[];
  for(const file of build.flash.files||[]){const data=await downloadFirmware(file.path);if(file.sha256){const digest=bytesToHex(new Uint8Array(await crypto.subtle.digest('SHA-256',data)));if(digest!==String(file.sha256).toLowerCase())throw new Error('Firmware SHA-256 mismatch.')}files.push({data,address:Number(file.offset)});}
  if(!files.length)throw new Error('No ESP32 flash files in manifest.');
  session=await connectEsp(build);flashStatus.textContent=t('espFlashing');
  await session.loader.writeFlash({fileArray:files,flashMode:build.flash.mode,flashFreq:build.flash.frequency,flashSize:build.flash.size,eraseAll:false,compress:true,reportProgress(_index,written,total){flashProgress.value=total?Math.round(written*100/total):0}});
  await session.loader.after('hard_reset');flashProgress.value=100;flashStatus.textContent=t('espComplete');
 }catch(error){flashStatus.textContent=`Error: ${error?.message||error}`}
 finally{if(session?.transport)try{await session.transport.disconnect()}catch{}download.classList.remove('disabled');espErase.disabled=false}
}
async function eraseSelectedEsp(){
 const build=selectedBuild;if(!build?.flash||build.flash.type!=='esp32'||!confirm(t('espConfirmErase')))return;
 download.classList.add('disabled');espErase.disabled=true;flashStatus.textContent=espConnectingText(build);let session;
 try{session=await connectEsp(build);await session.loader.eraseFlash();await session.loader.after('hard_reset');flashStatus.textContent=t('espErased')}
 catch(error){flashStatus.textContent=`Error: ${error?.message||error}`}
 finally{if(session?.transport)try{await session.transport.disconnect()}catch{}download.classList.remove('disabled');espErase.disabled=false}
}
download.addEventListener('click',event=>{if(selectedBuild?.flash?.type==='esp32'){event.preventDefault();flashSelectedEsp()}});
espErase.addEventListener('click',eraseSelectedEsp);

function renderDIY(key){
 document.querySelectorAll('.diy-tab').forEach(x=>x.classList.toggle('active',x.dataset.diy===key));
 const d=DIY[key];const rows=d.pins.map(([a,b])=>`<tr><td>${a}</td><td><code>${b}</code></td></tr>`).join('');
 document.querySelector('#diy-content').innerHTML=`<div class="diy-block"><h3>${d.title}</h3><p>${d.why[lang]}</p><p>${d.notes[lang]}</p><div class="diy-placeholders"><div><strong>Schematic</strong><small>Image placeholder</small></div><div><strong>Wiring diagram</strong><small>Image placeholder</small></div><div><strong>BOM</strong><small>Parts list placeholder</small></div><div><strong>Compatible firmware</strong><small>${builds.filter(b=>b.category==='diy').map(b=>escapeHtml(b.name)).join(', ')||'—'}</small></div></div></div><div class="diy-block"><h3>Pinout</h3><table class="pin-table"><thead><tr><th>Signal</th><th>Pin</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
document.querySelectorAll('.diy-tab').forEach(b=>b.addEventListener('click',()=>renderDIY(b.dataset.diy)));

const connectBtn=document.querySelector('#serial-connect');
const clearBtn=document.querySelector('#serial-clear');
const stateEl=document.querySelector('#serial-state');
const terminal=document.querySelector('#terminal');
const form=document.querySelector('#terminal-form');
const input=document.querySelector('#terminal-input');
const dfuBtn=document.querySelector('#serial-dfu');
let port=null,reader=null,writer=null,readLoopActive=false;
const encoder=new TextEncoder(),decoder=new TextDecoder();
function appendTerminal(text){terminal.textContent+=text;terminal.scrollTop=terminal.scrollHeight}
function setState(text,online=false){stateEl.textContent=text;stateEl.classList.toggle('online',online)}
async function disconnectSerial(){readLoopActive=false;try{if(reader){await reader.cancel();reader.releaseLock()}}catch{}reader=null;try{if(writer){writer.releaseLock()}}catch{}writer=null;try{if(port){await port.close()}}catch{}port=null;connectBtn.textContent=t('connect');setState(t('disconnected'),false)}
async function readSerial(){if(!port?.readable)return;reader=port.readable.getReader();readLoopActive=true;try{while(readLoopActive){const {value,done}=await reader.read();if(done)break;if(value)appendTerminal(decoder.decode(value,{stream:true}))}}catch(err){appendTerminal(`\n[serial read error] ${err.message}\n`)}finally{try{reader.releaseLock()}catch{}reader=null;if(readLoopActive)await disconnectSerial()}}
async function connectSerial(){if(!('serial' in navigator)){appendTerminal('\nWeb Serial requires Chrome/Edge over HTTPS.\n');return}if(port){await disconnectSerial();return}try{port=await navigator.serial.requestPort();await port.open({baudRate:115200,dataBits:8,stopBits:1,parity:'none',flowControl:'none'});writer=port.writable.getWriter();connectBtn.textContent='Disconnect';setState('Connected · 115200',true);appendTerminal('\n[connected 115200 8N1]\n');readSerial()}catch(err){appendTerminal(`\n[connect error] ${err.message}\n`);await disconnectSerial()}}
async function sendCommand(command){const cmd=String(command||'').trim();if(!cmd)return;if(!writer){appendTerminal(`\n> ${cmd}\n[not connected]\n`);return}appendTerminal(`\n> ${cmd}\n`);try{await writer.write(encoder.encode(cmd+'\r\n'))}catch(err){appendTerminal(`[write error] ${err.message}\n`)}}
connectBtn.addEventListener('click', connectSerial);
clearBtn.addEventListener('click', () => {
  terminal.textContent = '';
});

dfuBtn.addEventListener('click', async () => {
  await sendCommand('dfu');
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  const cmd = input.value;
  input.value = '';
  await sendCommand(cmd);
  input.focus();
});

document.querySelectorAll('[data-command]').forEach(btn =>
  btn.addEventListener('click', () => sendCommand(btn.dataset.command))
);

window.addEventListener('beforeunload', () => {
  if (port) disconnectSerial();
});
function renderTestBuilds(){
 if(!testBuilds)return;
 if(manifestError){testBuilds.innerHTML=`<div class="manifest-error">${escapeHtml(t('manifestError'))}</div>`;return}
 testBuilds.innerHTML=builds.map(build=>`<article class="release-card"><div class="release-head"><div><strong>${escapeHtml(build.name)}</strong><small>${escapeHtml(build.mcu)} · ${escapeHtml(build.radio)} · ${escapeHtml(build.band)}</small></div><span class="release-status ${escapeHtml(build.status)}">${escapeHtml(build.status.toUpperCase())}</span></div><dl class="release-meta"><div><dt>${t('version')}</dt><dd>${escapeHtml(build.version)}</dd></div><div><dt>${t('buildDate')}</dt><dd>${escapeHtml(build.build_date)}</dd></div></dl><h4>${t('included')}</h4><ul>${build.included.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul><h4>${t('knownIssues')}</h4><p class="muted">${build.known_issues.length?build.known_issues.map(escapeHtml).join(' '):'—'}</p></article>`).join('');
}

async function loadManifest(){
 try{
  const response=await fetch('manifest.json',{cache:'no-store'});
  if(!response.ok)throw new Error(`HTTP ${response.status}`);
  const manifest=await response.json();
  if(!Array.isArray(manifest.firmware))throw new Error('firmware array missing');
  builds=manifest.firmware;
 }catch(error){manifestError=String(error?.message||error)}
 applyI18n();selectBoard('diy-promicro');
}

loadManifest();
