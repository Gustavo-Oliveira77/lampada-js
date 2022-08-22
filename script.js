const turnOnOff = document.getElementById("turnOnOff");
//aqui estou chamando meus componente do html pelo id nesse caso é o butao com id turnOnOff
const lampada = document.getElementById("lamp");
//aqui estou chamando meus componente do html pelo id nesse caso é a imagem com id lamp

function isLampBroken() {
  return lampada.src.indexOf("quebrada") > -1;
}
//o indexOf retorna um numero maior que -1 quando acha oq foi pedido
// quando ele n encontra ele retorna -1, por isso usei o > -1

function lampOn() {
  if (!isLampBroken()) {
    lampada.src = "ligada.jpg";
  }
}
//essa função vai mudar o src da img quando a lampada n estiver quebrada
//e mudará seu src para ligada, assim fará a imagem ir de apagada para ligada
function lampOff() {
  if (!isLampBroken()) {
    lampada.src = "desligados.jpg";
  }
}
//essa função vai mudar o src da img quando a lampada n estiver quebrada
//e mudará seu src para desligada, assim fará a imagem ir de ligada para desligada

function lampBroken() {
  lampada.src = "quebrada.jpg";
}
//essa função é para alterar o estado da lampada para quebrada, apartir de um evento
function lampOnOff() {
  if (turnOnOff.textContent == "Ligar") {
    lampOn();
    turnOnOff.textContent = "Desligar";
  } else {
    lampOff();
    turnOnOff.textContent = "Ligar";
  }
}
//essa função ira mudar o cnteudo de dentro do texto do button
//para 'deligar' quando estiver ligado e para 'ligar' quando estiver desligado

//essas aq são os eventos que podem vir a acorrer

turnOnOff.addEventListener("click", lampOnOff);
//esse evento chamara a funçao lampOnOff quando ocorrer um evento de click no botao
lampada.addEventListener("mouseover", lampOn);
//esse evento chamara a funçao lampOn quando ocorrer um evento de mouseover na imagem
lampada.addEventListener("mouseleave", lampOff);
//esse evento chamara a funçao lampOff quando ocorrer um evento de mouseleave na imagem
lampada.addEventListener("dblclick", lampBroken);
//esse evento chamara a funçao lampBroken quando ocorrer um evento de dblclick na imagem
