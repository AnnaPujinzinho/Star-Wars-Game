let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeC = [11,7, 5.2, 8, 9, 6];
let cCarro = 50;
let aCarro = 40;

//carro 1
let xCarro = 600;

//carro 2
let xCarro2 = 600;

//carro 3
let xCarro3 =600;


function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++ ) {
    image(imagemCarros[i], xCarros[i], yCarros[i], cCarro, aCarro);
  }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeC[i];
        }
}

function vvCarro() {
for(let i = 0; i < imagemCarros.length; i++) {
    if (passouTela(xCarros[i])) {
      xCarros[i] = 600;
        }
    }
}

function passouTela (xCarro) {
  return xCarro < -50;
}
