function updateTime(){ //funçao que atualiza o horario
    const timeElement= document.getElementById('time');//pega o html com id time
    const now= new Date(); //cria um objeto com a daata e hora atual do computador
    const hours= now.getHours().toString().padStart(2,'0'); //hora, dois digitos
    const minutes=now.getMinutes().toString().padStart(2,'0'); //minutos
    const seconds=now.getSeconds().toString().padStart(2,'0'); //segundos
    const timeString= `${hours}:${minutes}:${seconds}`; //junta todos eles
    timeElement.textContent= timeString; //mostra horario dentro do html
}

setInterval(updateTime, 1000); //atualiza a cada segundo
updateTime(); // exibe o tempo atual com constancia