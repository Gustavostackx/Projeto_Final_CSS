const form = document.getElementById('formContato');
const erro = document.getElementById('erro');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if(!nome || !email || !mensagem) {
    erro.textContent = "Preencha todos os campos.";
    return;
  }

  const regex = /\S+@\S+\.\S+/;
  if(!regex.test(email)) {
    erro.textContent = "E-mail inválido.";
    return;
  }

  erro.textContent = "";
  alert("Mensagem enviada com sucesso!");
});


// Elemento de destinho (seção comprar)

const secaoComprar = document.getElementById("comprar");
// aciona comprar no html quando acionado

document.getElementById("tab-html").addEventListener("click", () => {

  secaoComprar.scrollIntoView({behavior:"smooth", block: "start"});

});
// Quando clicar na aba JavaScript
document.getElementById("tab-js").addEventListener("click", () => {
    secaoComprar.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Quando clicar na aba React
document.getElementById("tab-react").addEventListener("click", () => {
    secaoComprar.scrollIntoView({ behavior: "smooth", block: "start" });
});