function setup() {
  somTrilha.loop();
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  vvCarro();
  verificaC();
  pontos();
  marcaP();
}

