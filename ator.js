let yAtor = 366;
let xAtor = 90;
let colisao = false;
let meuP = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 40, 40)
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(mover()){
    yAtor += 3;
    }
  }

}

function verificaC() {
  for(let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(xCarros[i], yCarros[i],cCarro, aCarro,xAtor, yAtor, 15)
    if (colisao) {
      colidiu();
      somPerde.play();
      if (meuP > 0) {
      meuP -= 1;
      }
    }
  }
}

function colidiu() {
  yAtor = 366;
}

function pontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(131,111,255));
  text(meuP, width/5, 27);
}

function marcaP() {
  if (yAtor < 15) {
    meuP += 1;
    somGanha.play();
    colidiu();
  }
}

function mover() {
  return yAtor < 366;
}