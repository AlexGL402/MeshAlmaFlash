const I18N={
ru:{
 heroTitle:'Firmware Flasher',heroText:'Выберите плату и проверенную прошивку, затем настройте узел через USB Serial.',independent:'Независимый community-проект',
 chooseBoard:'Выберите плату',chooseBoardSub:'Поддерживаемое и планируемое железо',filterAll:'Все',chooseFirmware:'Выберите прошивку',chooseBoardFirst:'Сначала выберите плату',
 selectedBuild:'ТАҢДАЛҒАН ЖИНАҚ',comingSoon:'Прошивка скоро',diyTitle:'DIY — собрать самому',diySub:'Схемы, пины и пояснения для наших сборок',
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
 download:'Скачать UF2',ready:'готово',planned:'планируется',firmwaresFor:'Прошивки для'
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
 download:'Download UF2',ready:'ready',planned:'planned',firmwaresFor:'Firmware for'
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
 download:'UF2 жүктеу',ready:'дайын',planned:'жоспарда',firmwaresFor:'Firmware'
}};

const boards=[
 {id:'diy-promicro',name:'DIY В· nRF52840 ProMicro',vendor:'DIY',chip:'nrf52840',group:['nrf52840','diy'],status:'ready',icon:'🛠️',desc:{ru:'Наш основной DIY-конструктор: SX1278 или E22/SX126x, дисплей, GPS и датчики.',en:'Our main DIY platform: SX1278 or E22/SX126x, display, GPS and sensors.',kk:'Негізгі DIY платформа: SX1278 немесе E22/SX126x, дисплей, GPS және сенсорлар.'}},
 {id:'heltec-v3',name:'Heltec LoRa 32 V3',vendor:'Heltec',chip:'esp32-s3',group:['esp32'],status:'planned',icon:'📡',desc:{ru:'ESP32-S3 + SX1262. Поддержка профилей готовится.',en:'ESP32-S3 + SX1262. Firmware profiles are planned.',kk:'ESP32-S3 + SX1262. Firmware профильдері жоспарланған.'}},
 {id:'heltec-v4',name:'Heltec LoRa 32 V4',vendor:'Heltec',chip:'esp32-s3',group:['esp32'],status:'planned',icon:'📡',desc:{ru:'Новое поколение Heltec. Добавим после hardware-проверки.',en:'New Heltec generation. Will be added after hardware validation.',kk:'Жаңа Heltec буыны. Hardware тесттен кейін қосылады.'}},
 {id:'t1000-e',name:'SenseCAP T1000-E',vendor:'Seeed',chip:'nrf52840',group:['nrf52840'],status:'planned',icon:'🧭',desc:{ru:'Компактный nRF52840 tracker с GNSS. Профиль запланирован.',en:'Compact nRF52840 tracker with GNSS. Profile planned.',kk:'GNSS бар ықшам nRF52840 tracker. Профиль жоспарланған.'}},
 {id:'t-echo',name:'LILYGO T-Echo',vendor:'LilyGo',chip:'nrf52840',group:['nrf52840'],status:'planned',icon:'📟',desc:{ru:'nRF52840 + LoRa + экран. Добавим проверенную сборку.',en:'nRF52840 + LoRa + display. A validated build is planned.',kk:'nRF52840 + LoRa + экран. Тексерілген жинақ жоспарланған.'}}
];

const builds=[
 {id:'sensor-sx1278',board:'diy-promicro',name:'SENSOR В· SX1278',desc:{ru:'Endpoint telemetry SENSOR с GPS, discovery и sensor scan.',en:'Endpoint telemetry SENSOR with GPS, discovery and sensor scan.',kk:'GPS, discovery және sensor scan бар SENSOR endpoint.'},tags:['nRF52840','SX1278','SENSOR'],file:'firmware/nrf52840/sensor-sx1278.uf2',ready:true},
 {id:'companion-sh1106',board:'diy-promicro',name:'Companion В· SH1106',desc:{ru:'Companion с SH1106, кириллицей, историей сообщений и one-button UI.',en:'Companion with SH1106, Cyrillic rendering, message history and one-button UI.',kk:'SH1106, Cyrillic, хабар тарихы және one-button UI бар Companion.'},tags:['nRF52840','SX1278','SH1106'],file:'firmware/nrf52840/companion-sx1278-sh1106.uf2',ready:true},
 {id:'companion-ssd1306',board:'diy-promicro',name:'Companion В· SSD1306',desc:{ru:'Companion для SSD1306 display profile.',en:'Companion build for SSD1306 display profile.',kk:'SSD1306 display profile үшін Companion.'},tags:['nRF52840','SX1278','SSD1306'],file:'firmware/nrf52840/companion-sx1278-ssd1306.uf2',ready:true},
 {id:'repeater-sx126x',board:'diy-promicro',name:'Repeater В· E22 / SX126x 433',desc:{ru:'Repeater для nRF52840 + E22/SX126x 433/434 MHz.',en:'Repeater for nRF52840 + E22/SX126x 433/434 MHz.',kk:'nRF52840 + E22/SX126x 433/434 MHz үшін Repeater.'},tags:['nRF52840','SX126x','433/434'],file:'firmware/nrf52840/repeater-sx126x-433.uf2',ready:true}
];

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
const diySection=document.querySelector('#diy-section');
const fwSub=document.querySelector('#firmware-step-sub');

function applyI18n(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(I18N[lang][key])el.textContent=I18N[lang][key]});
 document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
 renderBoards(document.querySelector('.filter.active')?.dataset.filter||'all');
 renderFirmware();
 renderDIY(document.querySelector('.diy-tab.active')?.dataset.diy||'sx1278');
 if(selectedBuild) showBuild(selectedBuild);
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;localStorage.setItem('meshalma.lang',lang);applyI18n()}));

function renderBoards(filter='all'){
 boardList.innerHTML='';
 boards.filter(b=>filter==='all'||b.group.includes(filter)).forEach(b=>{
  const el=document.createElement('button');
  el.className=`board-card ${b.status==='planned'?'planned':''} ${selectedBoard===b.id?'active':''}`;
  el.innerHTML=`<div class="board-head"><div><strong>${b.name}</strong><small>${b.vendor} В· ${b.chip}</small></div><span class="board-icon">${b.icon}</span></div><small>${b.desc[lang]}</small><div class="badges"><span class="status ${b.status}">${b.status==='ready'?t('ready'):t('planned')}</span>${b.group.includes('diy')?'<span class="badge">DIY</span>':''}</div>`;
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
 const items=builds.filter(x=>x.board===selectedBoard);
 if(!items.length){
  const p=document.createElement('div');p.className='note';p.textContent=board?.status==='planned'?`${t('planned')}: ${board.name}`:t('chooseBoardFirst');firmwareList.appendChild(p);return;
 }
 items.forEach(build=>{
  const b=document.createElement('button');b.className='card';b.type='button';
  b.innerHTML=`<strong>${build.name}</strong><small>${build.desc[lang]}</small><div class="badges">${build.tags.map(x=>`<span class="badge">${x}</span>`).join('')}</div>`;
  b.addEventListener('click',()=>showBuild(build,b));firmwareList.appendChild(b);
 });
}
function showBuild(build,button){
 selectedBuild=build;document.querySelectorAll('.card').forEach(x=>x.classList.remove('active'));if(button)button.classList.add('active');
 selected.classList.remove('hidden');nameEl.textContent=build.name;descEl.textContent=build.desc[lang];meta.textContent=build.tags.join(' В· ');
 if(build.ready){download.href=build.file;download.download='';download.textContent=t('download');download.classList.remove('disabled');download.removeAttribute('aria-disabled')}
 else{download.removeAttribute('href');download.textContent=t('comingSoon');download.classList.add('disabled');download.setAttribute('aria-disabled','true')}
}

function renderDIY(key){
 document.querySelectorAll('.diy-tab').forEach(x=>x.classList.toggle('active',x.dataset.diy===key));
 const d=DIY[key];const rows=d.pins.map(([a,b])=>`<tr><td>${a}</td><td><code>${b}</code></td></tr>`).join('');
 document.querySelector('#diy-content').innerHTML=`<div class="diy-block"><h3>${d.title}</h3><p>${d.why[lang]}</p><p>${d.notes[lang]}</p></div><div class="diy-block"><h3>Pinout</h3><table class="pin-table"><thead><tr><th>Signal</th><th>Pin</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
document.querySelectorAll('.diy-tab').forEach(b=>b.addEventListener('click',()=>renderDIY(b.dataset.diy)));

const connectBtn=document.querySelector('#serial-connect');
const clearBtn=document.querySelector('#serial-clear');
const stateEl=document.querySelector('#serial-state');
const terminal=document.querySelector('#terminal');
const form=document.querySelector('#terminal-form');
const input=document.querySelector('#terminal-input');
let port=null,reader=null,writer=null,readLoopActive=false;
const encoder=new TextEncoder(),decoder=new TextDecoder();
function appendTerminal(text){terminal.textContent+=text;terminal.scrollTop=terminal.scrollHeight}
function setState(text,online=false){stateEl.textContent=text;stateEl.classList.toggle('online',online)}
async function disconnectSerial(){readLoopActive=false;try{if(reader){await reader.cancel();reader.releaseLock()}}catch{}reader=null;try{if(writer){writer.releaseLock()}}catch{}writer=null;try{if(port){await port.close()}}catch{}port=null;connectBtn.textContent=t('connect');setState(t('disconnected'),false)}
async function readSerial(){if(!port?.readable)return;reader=port.readable.getReader();readLoopActive=true;try{while(readLoopActive){const {value,done}=await reader.read();if(done)break;if(value)appendTerminal(decoder.decode(value,{stream:true}))}}catch(err){appendTerminal(`\n[serial read error] ${err.message}\n`)}finally{try{reader.releaseLock()}catch{}reader=null;if(readLoopActive)await disconnectSerial()}}
async function connectSerial(){if(!('serial' in navigator)){appendTerminal('\nWeb Serial requires Chrome/Edge over HTTPS.\n');return}if(port){await disconnectSerial();return}try{port=await navigator.serial.requestPort();await port.open({baudRate:115200,dataBits:8,stopBits:1,parity:'none',flowControl:'none'});writer=port.writable.getWriter();connectBtn.textContent='Disconnect';setState('Connected В· 115200',true);appendTerminal('\n[connected 115200 8N1]\n');readSerial()}catch(err){appendTerminal(`\n[connect error] ${err.message}\n`);await disconnectSerial()}}
async function sendCommand(command){const cmd=String(command||'').trim();if(!cmd)return;if(!writer){appendTerminal(`\n> ${cmd}\n[not connected]\n`);return}appendTerminal(`\n> ${cmd}\n`);try{await writer.write(encoder.encode(cmd+'\r\n'))}catch(err){appendTerminal(`[write error] ${err.message}\n`)}}
connectBtn.addEventListener('click',connectSerial);clearBtn.addEventListener('click',()=>{terminal.textContent=''});form.addEventListener('submit',async e=>{e.preventDefault();const cmd=input.value;input.value='';await sendCommand(cmd);input.focus()});document.querySelectorAll('[data-command]').forEach(btn=>btn.addEventListener('click',()=>sendCommand(btn.dataset.command)));window.addEventListener('beforeunload',()=>{if(port)disconnectSerial()});

applyI18n();selectBoard('diy-promicro');
