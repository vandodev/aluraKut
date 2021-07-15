import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = "9bfbbb";
    const client = new SiteClient(TOKEN);

    // Validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "97", // ID do Model de "Communities" criado pelo Dato
      title: "Comunidade de Teste 2",
      imageUrl: "https://github.com/vandodev.png",
      creatorSlug: "Leandro",
    });

    console.log(registroCriado);

    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
  }
  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!",
  });
}
