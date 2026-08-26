const builds=[
 {id:'sensor-sx1278',name:'SENSOR · SX1278',desc:'Authenticated endpoint-only telemetry sensor with GPS support and sensor discovery.',tags:['nRF52840','SX1278','SENSOR'],file:'firmware/nrf52840/sensor-sx1278.uf2',ready:true},
 {id:'companion-sh1106',name:'Companion · SH1106',desc:'MeshCore companion build for the SH1106 display and one-button UI.',tags:['nRF52840','SX1278','SH1106'],file:'firmware/nrf52840/companion-sx1278-sh1106.uf2',ready:true},
 {id:'companion-ssd1306',name:'Companion · SSD1306',desc:'MeshCore companion build for SSD1306 display hardware.',tags:['nRF52840','SX1278','SSD1306'],file:'firmware/nrf52840/companion-sx1278-ssd1306.uf2',ready:true},
 {id:'repeater-sx126x',name:'Repeater · SX126x 433',desc:'ZephCore repeater build for nRF52840 with E22 / SX126x radio hardware.',tags:['nRF52840','SX126x','433 MHz'],file:'firmware/nrf52840/repeater-sx126x-433.uf2',ready:true}
];
const list=document.querySelector('#firmware-list'),selected=document.querySelector('#selected'),nameEl=document.querySelector('#selected-name'),descEl=document.querySelector('#selected-description'),meta=document.querySelector('#selected-meta'),download=document.querySelector('#download');
function choose(build,button){document.querySelectorAll('.card').forEach(x=>x.classList.remove('active'));button.classList.add('active');selected.classList.remove('hidden');nameEl.textContent=build.name;descEl.textContent=build.desc;meta.textContent=build.tags.join(' · ');if(build.ready){download.href=build.file;download.download='';download.textContent='Download UF2';download.classList.remove('disabled');download.removeAttribute('aria-disabled')}else{download.removeAttribute('href');download.textContent='Firmware coming soon';download.classList.add('disabled');download.setAttribute('aria-disabled','true')}}
builds.forEach(build=>{const b=document.createElement('button');b.className='card';b.type='button';b.innerHTML=`<strong>${build.name}</strong><small>${build.desc}</small><div class="badges">${build.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div>`;b.addEventListener('click',()=>choose(build,b));list.appendChild(b)});

const connectBtn=document.querySelector('#serial-connect');
const clearBtn=document.querySelector('#serial-clear');
const stateEl=document.querySelector('#serial-state');
const terminal=document.querySelector('#terminal');
const form=document.querySelector('#terminal-form');
const input=document.querySelector('#terminal-input');
let port=null,reader=null,writer=null,readLoopActive=false;
const encoder=new TextEncoder();

function appendTerminal(text){terminal.textContent+=text;terminal.scrollTop=terminal.scrollHeight}
function setState(text,online=false){stateEl.textContent=text;stateEl.classList.toggle('online',online)}

async function disconnectSerial(){readLoopActive=false;try{if(reader){await reader.cancel();reader.releaseLock()}}catch{}reader=null;try{if(writer){writer.releaseLock()}}catch{}writer=null;try{if(port){await port.close()}}catch{}port=null;connectBtn.textContent='Connect USB Serial';setState('Disconnected',false)}

async function readSerial(){if(!port?.readable)return;reader=port.readable.getReader();readLoopActive=true;try{while(readLoopActive){const {value,done}=await reader.read();if(done)break;if(value)appendTerminal(new TextDecoder().decode(value))}}catch(err){appendTerminal(`\n[serial read error] ${err.message}\n`)}finally{try{reader.releaseLock()}catch{}reader=null;if(readLoopActive)await disconnectSerial()}}

async function connectSerial(){if(!('serial' in navigator)){appendTerminal('\nWeb Serial is not supported. Use current Chrome or Edge over HTTPS.\n');return}if(port){await disconnectSerial();return}try{port=await navigator.serial.requestPort();await port.open({baudRate:115200,dataBits:8,stopBits:1,parity:'none',flowControl:'none'});writer=port.writable.getWriter();connectBtn.textContent='Disconnect';setState('Connected · 115200',true);appendTerminal('\n[connected 115200 8N1]\n');readSerial()}catch(err){appendTerminal(`\n[connect error] ${err.message}\n`);await disconnectSerial()}}

async function sendCommand(command){const cmd=String(command||'').trim();if(!cmd)return;if(!writer){appendTerminal(`\n> ${cmd}\n[not connected]\n`);return}appendTerminal(`\n> ${cmd}\n`);try{await writer.write(encoder.encode(cmd+'\r\n'))}catch(err){appendTerminal(`[write error] ${err.message}\n`)}}

connectBtn.addEventListener('click',connectSerial);
clearBtn.addEventListener('click',()=>{terminal.textContent=''});
form.addEventListener('submit',async e=>{e.preventDefault();const cmd=input.value;input.value='';await sendCommand(cmd);input.focus()});
document.querySelectorAll('[data-command]').forEach(btn=>btn.addEventListener('click',()=>sendCommand(btn.dataset.command)));
window.addEventListener('beforeunload',()=>{if(port)disconnectSerial()});

