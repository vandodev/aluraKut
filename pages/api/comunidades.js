import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  const TOKEN = "9bfbbb8180f049798e1c3fd0e8f3";
  const client = new SiteClient(TOKEN);

  // Validar os dados, antes de sair cadastrando
  const registroCriado = await client.items.create({
    itemType: "9730", // ID do Model de "Communities" criado pelo Dato
    title: "Comunidade de Teste",
    imageUrl: "https://github.com/vandodev.png",
    creatorSlug: "Evandro",
  });

  console.log(registroCriado);

  response.json({
    dados: "Algum dado qualquer",
    registroCriado: registroCriado,
  });
}
