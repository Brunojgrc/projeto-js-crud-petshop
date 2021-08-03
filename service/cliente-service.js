const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json();
            }
            throw new Error('Não foi possível listar os clientes');
        });
};


//REFATORADO: Todo codigo abaixo foi substituido pelo codigo fecht acima para resquisições:
//const listaClientes = () => {
// const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open('GET', 'http:localhost:3000/profile');
//     //o primeiro argumento é o que eu vou pedir para o meu servidor(get) e o segundo é o endereço para onde vou enviar minha requisição

//     http.onload = () => { //onload será executado assim que a página carregar
//         if (http.status >= 400) {
//             reject(JSON.parse(http.response));
//         } else {
//             resolve(JSON.parse(http.response));
//         }
//     };
//     http.send(); //envia nossa requisição
// });
// return promise;
//};

export const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            if(resposta.ok){
                return resposta.body
            }
            throw new Error('Não foi possível criar um cliente');
        })
};

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover um cliente');
        }
    })
};

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            if(resposta.ok){
                return resposta.json()
            }
            throw new Error('Não foi possível detalhar o cliente');
        })
};

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar o cliente');
    })
};

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
};