let form = document.getElementById("form");
let input = document.getElementById("input");
let conteudo_p = document.getElementById("conteudo_p");
let publicao = document.getElementById("publicao");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Enviado");

    formValidation();
});

let formValidation = () => {
    if(input.value === "") {
        conteudo_p.innerHTML = "Adicione Algo antes de enviar";
        console.log("Falhou");
    }else{
        console.log("Enviou!");
        conteudo_p.innerHTML = "";
        aceitarInf();
        
    }
};

let inf = {};
let aceitarInf = () => {
    inf["text"] = input.value;
    console.log(inf);

    criarpublicao();
};
// ERROR N ESTA APARECENDO O NOME NA HORA DA CRIAÇÃO
let criarpublicao = () => {
    publicao.innerHTML += `
    <div>
        <p>${inf.text}</p>
        <span class="opicoes">
        <i onclick="editarPublicao(this)" class="fas fa-edit"></i>
        <i onclick="deletarPublicao(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
                `;
    
};

let deletarPublicao = (e) => {
    e.parentElement.parentElement.remove()
};

let editarPublicao = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};