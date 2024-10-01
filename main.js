let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');
let horas = document.querySelector('.horas');
const contando = document.querySelector('.contando');
const buttons = document.querySelector('.buttons');
const iniciarbtn = document.querySelector('.iniciar')
let pausar;
let zerar;
let iniciar;
const messi = true;
let timer;




iniciarbtn.onclick = function()
{

this.remove();
clearInterval(timer);
setTimeout(timer);

horas.style.display = 'none';
minutos.style.display = 'none';
segundos.style.display = 'none';

criarBotoes();

transformarEmInt();

removeElements();

}


function marcaTempo(horas, minutos, segundos)
{
    const time = new Date();

    clearInterval(timer);

    timer = setInterval(() => {
        segundos -= 1;
        time.setHours(horas, minutos, segundos);
        contando.innerHTML = time.toLocaleTimeString();

        if( time.toLocaleTimeString() == "00:00:00")
            {
                clearInterval(timer);
                reiniciar();
            }
    }, 1000) 



pausar.onclick = function()
{
    clearInterval(timer);
}

iniciar.onclick = function()
{
    marcaTempo(horas, minutos, segundos)
}

zerar.onclick = function()
{

    inserirDisplay();

    inserirHoras();
    
    clearInterval(timer);
    contando.innerHTML = ""

    iniciar.remove();
    pausar.remove();
    zerar.remove();
    
    buttons.appendChild(iniciarbtn);

}

}

function criarBotoes()
{
    
iniciar = document.createElement("button")

iniciar.className = "iniciar"
iniciar.innerHTML = "Iniciar";


buttons.appendChild(iniciar);

pausar = document.createElement("button")

pausar.className = "pausar"
pausar.innerHTML = "Pausar";


buttons.appendChild(pausar);

zerar = document.createElement("button")

zerar.className = "zerar"
zerar.innerHTML = "Zerar";

buttons.appendChild(zerar);

}

function transformarEmInt()
{
let horasreais = horas.innerHTML;
let minutosreais = minutos.innerHTML;
let segundosreais = segundos.innerHTML;

minutosreais = parseInt(minutosreais);
segundosreais = parseInt(segundosreais);
horasreais = parseInt(horasreais);

if(horasreais == 0 & minutosreais == 0 & segundosreais == 0)
{
    contando.innerHTML == "00:00:00"
    segundosreais = 1
    reiniciar();
}


marcaTempo(horasreais, minutosreais, segundosreais);


}

function removeElements()
{
   minutos.innerHTML = "";
   segundos.innerHTML = "";
   horas.innerHTML = "";
}


function inserirHoras()
{
    horas.innerHTML = "00h";
    minutos.innerHTML = "00m";
    segundos.innerHTML = "00s";
}

function inserirDisplay()
{
    horas.style.display = 'block';
    minutos.style.display = 'block';
    segundos.style.display = 'block'; 
}

function reiniciar()
{
    iniciar.remove();
    pausar.remove();
    zerar.innerHTML = "Reinicar";
}

