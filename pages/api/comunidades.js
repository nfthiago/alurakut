// import { SiteClient } from 'datocms-client';


// export default async function recebedorDeRequests(request, response) {
//     const TOKEN = '86a11d9485d41269bb4704f0274955'
//     const client = new SiteClient(TOKEN);

//     const registroCriado = await client.items.create({
//         itemType: "970551", // Id do model de "communities" criado pelo Dato
//         title: "Comunidade de teste",
//         imageUrl: "https://github.com/nfthiago.png",
//         creatorSlug: "nfthiago",
//     })

//     response.json({
//         dados: 'Algum dado qualquer',
//         registroCriado: registroCriado,
//     })
// }

import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '86a11d9485d41269bb4704f0274955';
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "970551", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/omariosouto.png",
            // creatorSlug: "omariosouto"
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}