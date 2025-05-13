function changeStatus(id) {
    let gameSelected = document.getElementById(`game-${id}`);
    let button = gameSelected.querySelector(".dashboard__item__button");
    let image = gameSelected.querySelector(".dashboard__item__img");
    let status = gameSelected.querySelector("a");

    if (button.classList.contains("dashboard__item__button--return")) {
        let warningMessage = prompt("Usuário, você tem certeza que deseja efetuar a devolução do jogo? Digite 'Sim' ou 'Não'.");
        if (warningMessage == "Não") {
            return;
        }
    }

    if(image.classList.contains("dashboard__item__img--rented")) {
        image.classList.remove("dashboard__item__img--rented");
        button.classList.remove("dashboard__item__button--return");
        status.innerHTML = "Alugar";

    } else {
        image.classList.add("dashboard__item__img--rented");
        button.classList.add("dashboard__item__button--return");
        status.innerHTML = "Devolver";
        rentedGames();
    }
}


let quantity = 0

function rentedGames() {
    quantity++;
    console.log(quantity);
}