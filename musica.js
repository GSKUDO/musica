document.querySelector("body").style.backgroundColor = "yellow"; 

document.querySelector(".tit").style.color = "red"; 

document.querySelector(".texto").style.color = "green"; 

document.getElementById("minhafoto").src = "minhafoto.jpeg";

const elementSobremim = document.getElementById("sobremim");
elementSobremim.innerHTML = "<strong>Sobre mim</strong>";

const elementNome = document.getElementById("nome");
elementNome.innerHTML = "Meu nome é Gislene Sayuri";

const elementIdade = document.getElementById("idade");
elementIdade.innerHTML = "Tenho 40 anos";

const elementEstado = document.getElementById("estado");
elementEstado.innerHTML = "Sou de São Paulo/Capital";

document.getElementById("fotonanda").src = "fotonanda.jpg";

const elementTitulo = document.getElementById("titulo");
elementTitulo.innerHTML = "<strong>Nanda Guedes</strong>";

const elementDescricao = document.getElementById("genero");
elementDescricao.innerHTML = " forro"

let text = "Instagram"
let endereco = text.link ("https://www.instagram.com/nandaguedesoficial/");
document.getElementById("links").innerHTML = endereco;

let text2 = "Facebook"
let endereco2 = text2.link ("https://www.facebook.com/nandaguedesoficial/");
document.getElementById("links2").innerHTML = endereco2;

document.querySelector(".musicas").style.backgroundColor = "orange"; 

document.querySelector(".mus").style.color = "red"; 

document.querySelector(".cd").src = "cd.jpg";
document.querySelector(".cd").style.height = "80px"; 
document.querySelector(".cd").style.width = "80px"; 

let mus1 = "Me Leva que eu Vou"
let musica1 = mus1.link ("https://open.spotify.com/track/6YuMlLa9JI9cC4OjZ1021S?si=25bb2abff0af43a4");
document.getElementById("musica1").innerHTML = musica1;

document.querySelector(".cd1").src = "cd.jpg";
document.querySelector(".cd1").style.height = "80px"; 
document.querySelector(".cd1").style.width = "80px"; 

let mus2 = "A Gente Transa Bem"
let musica2 = mus2.link ("https://open.spotify.com/track/6qqJJdrlgcSpKBPX571fEd?si=c0396094b0dc4bb7");
document.getElementById("musica2").innerHTML = musica2;

document.querySelector(".cd2").src = "cd.jpg";
document.querySelector(".cd2").style.height = "80px"; 
document.querySelector(".cd2").style.width = "80px"; 

let mus3 = "Saudade"
let musica3 = mus3.link ("https://open.spotify.com/track/38A9PG9OeuZw4SBcWhfLtz?si=464901578b5246f1");
document.getElementById("musica3").innerHTML = musica3;

document.querySelector(".cd3").src = "cd.jpg";
document.querySelector(".cd3").style.height = "80px"; 
document.querySelector(".cd3").style.width = "80px"; 

let mus4 = "Ciranda"
let musica4 = mus4.link ("https://open.spotify.com/track/2SLe2KJh78ZkLLuj3MTHzd?si=cfdcfc05f1814567");
document.getElementById("musica4").innerHTML = musica4;

document.querySelector(".cd4").src = "cd.jpg";
document.querySelector(".cd4").style.height = "80px"; 
document.querySelector(".cd4").style.width = "80px"; 

let mus5 = "Ilustre Cantador"
let musica5 = mus5.link ("https://open.spotify.com/track/0qIQeNhxX2tKTcAL8YjXuk?si=17643d026a524412");
document.getElementById("musica5").innerHTML = musica5;
