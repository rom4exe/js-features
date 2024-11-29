const p = document.getElementById('timer')
let timeId = setInterval (()=>{p.textContent = Number(p.textContent)-1}, 1000);

setTimeout(() => { clearInterval(timeId); alert('Вы победили в конкурсе!'); }, p.textContent*1000);