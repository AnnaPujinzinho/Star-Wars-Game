let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somGanha;
let somPerde;

function preload() {
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/icons8-baby-yoda-96.png");
  imagemCarro = loadImage("Imagens/icons8-star-wars-naboo-ship-96.png");
  imagemCarro2 = loadImage("Imagens/icons8-star-wars-64.png");
  imagemCarro3 = loadImage("Imagens/icons8-aal-1971-91-transporter-96.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somTrilha = loadSound("sons/8d82b5_Star_Wars_The_Imperial_March_Theme_Song.mp3");
  somGanha = loadSound("sons/8d82b5_Star_Wars_Yoda_Eeehhh_Sound_Effect.mp3");
  somPerde = loadSound("sons/8d82b5_Star_Wars_Blaster_Sound_Effect.mp3"); 
}
