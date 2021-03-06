import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = "9bfbbb8180f049798e1c3fd0e8f330";
    const client = new SiteClient(TOKEN);

    // Validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "973008", // ID do Model de "Communities" criado pelo Dato
      ...request.body,
      // title: "Comunidade de Teste 2",
      // imageUrl: "https://github.com/vandodev.png",
      // creatorSlug: "Leandro",
    });

    console.log(registroCriado);

    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }
  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!",
  });
}
