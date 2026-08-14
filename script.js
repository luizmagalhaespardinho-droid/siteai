// 1. Seleção dos elementos do DOM
let btnAjuda = document.querySelector("#btn-abrir-ajuda");
let btnFechar = document.querySelector("#btn-fechar-ajuda");
let modal = document.querySelector("#modal-ajuda");

// 2. Definição das funções para mostrar e ocultar o modal
function abreModal() {
  modal.style.display = "flex"; // Exibe o modal centralizado na tela
}

function fechaModal() {
  modal.style.display = "none"; // Oculta o modal da tela
}

// 3. Associação dos eventos de clique aos botões
btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);
