
function renderizarLista(repos){
    var lista = document.querySelector("ul");
    lista.innerHTML = '';

    for(repo of repos){
        var itemTexto = document.createTextNode(repo.name);
        var item = document.createElement("li");

        item.appendChild(itemTexto);
        lista.appendChild(item);
    };
}

function addLista(){
    var txtBox = document.querySelector("input");
    var lista = document.querySelector("ul");

    var usuario = txtBox.value;

    lista.innerHTML = '';
  
    var item  = document.createElement('li');
    var itemTexto = document.createTextNode('Carregando, por favor aguarde...');

    item.appendChild(itemTexto);
    lista.appendChild(item);

    setTimeout(() => {
        axios.get("https://api.github.com/users/" + usuario + "/repos")
    .then(function(response){
        renderizarLista(response.data);
    })
    .catch(function(error){
        console.warn(console.error('Usuário: "' + usuario + '" - não encontrado'));
    }
    )
    }, 3000);
   
}

