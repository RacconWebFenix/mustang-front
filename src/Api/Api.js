import imgParthnetData1 from "./CardParthnerImg/1.jpg";
import imgParthnetData2 from "./CardParthnerImg/2.jpg";
import imgParthnetData3 from "./CardParthnerImg/3.jpg";

export const Api = {
  // baseUrl: "http://localhost:3001",
  // readAllUrl: () => Api.baseUrl + "/personagem",
  // readOneUrl: (id) => Api.baseUrl + `/personagem/${id}`,
  // createUrl: () => Api.baseUrl + "/personagem/",
  // //login
  // loginUrl: () => Api.baseUrl + "/login/",
  // deleteUrl: (id) => Api.baseUrl + `/personagem/${id}`,
  // readAllUrlLocalizacao: () => Api.baseUrl + "/localizacao",
  // //authHeadert
  // authHeader: {
  //   Authorization: "Bearer " + localStorage.getItem("JWT"),
  // },
  // buildApiGetRequest: (url, auth) =>
  //   fetch(url, {
  //     method: "GET",
  //     headers: auth
  //       ? new Headers({
  //           ...Api.authHeader,
  //         })
  //       : undefined,
  //   }),
  // buildApiPutRequest: (url, body) => {
  //   return fetch(url, {
  //     method: "PATCH",
  //     headers: new Headers({
  //       "Content-type": "application/json",
  //     }),
  //     body: JSON.stringify(body),
  //   });
  // },
  // buildApiPostRequest: (url, body) => {
  //   return fetch(url, {
  //     method: "POST",
  //     headers: new Headers({
  //       "Content-type": "application/json",
  //     }),
  //     body: JSON.stringify(body),
  //   });
  // },
  // buildApiDeleteRequest: (url) => {
  //   fetch(url, {
  //     method: "DELETE",
  //   });
  // },
  serviceMovelData: [
    {
      id: 1,
      name: "Combo Básico 1 ou 2 Pneus (Aro 12 - 16)",
      desc: "Montagem + Balanceamento",
      valor: "169.90",
    },
    {
      id: 2,
      name: "Combo Essencial 1 ou 2 Pneus (Aro 12 - 16)",
      desc: "Montagem + Balanceamento + Alinhamento dianteiro do veículo",
      valor: "189.90",
    },
  ],
  partneService: [
    {
      id: 1,
      name: "Auto Filadelfia Center",
      imagemUrl:
        "https://www.cantupneus.com.br/medias/sys_master/he2/h61/9469373775902/fotoOficina-37640212000143.jpg",
      combo: "Combo Básico 1 ou 2 Pneus (Aro 12 - 16)",
      desc: "Montagem + Balanceamento | Apenas entrega em Centro de Montagem Esta opção não inclui o serviço de montagem, balanceamento e alinhamento",
      valor: "189.90",
    },
    {
      id: 2,
      name: "Giba Auto Center",
      imagemUrl:
        "https://www.cantupneus.com.br/medias/sys_master/h6e/h91/9538413035550/fotoOficina-08623310000174.jpg",
      combo: "Combo Básico 1 ou 2 Pneus (Aro 12 - 16)",
      desc: "Montagem + Balanceamento",
      valor: "219.90",
    },
    {
      id: 3,
      name: "O Chefão Pneus",
      imagemUrl:
        "https://www.cantupneus.com.br/medias/sys_master/h71/ha2/9486653816862/fotoOficina-39843161000182.jpg",
      combo: " Combo Básico 1 ou 2 Pneus (Aro 12 - 16)",
      desc: "Montagem + Balanceamento | Apenas entrega em Centro de Montagem Esta opção não inclui o serviço de montagem, balanceamento e alinhamento",
      valor: "149.90",
    },
  ],
  partnerData: [
    {
      id: 1,
      imagemUrl: imgParthnetData1,
      name: "AUTO CENTER FILADÉLFIA",
      address: "Rua Brusque, 837, Santa Catarina, Itajaí, 88302001",
      attendance:
        "Horário de Atendimento - Semana: 08:00 - 18:00 Sábado: 08:00 - 12:00 / Domingo: Fechado",
    },

    {
      id: 2,
      imagemUrl: imgParthnetData2,
      name: "Giba Auto Center",
      address:
        "Rua Manoel Leopoldo Rocha, 700, Santa Catarina, Navegantes, 88370564",
      attendance:
        " Horário de Atendimento Semana: 08:00 - 18:00 Sábado: 08:00 - 12:00 / Domingo: Fechado",
    },
    {
      id: 3,
      imagemUrl: imgParthnetData3,
      name: " Lindomar Centro Automotivo Porto Seguro",
      address: " RUA CONCEICAO, 563, Santa Catarina, ITAJAI, 88304220",
      attendance:
        " Horário de Atendimento Semana: 07:30 - 12:00 Sábado: 08:00 - 12:00 / Domingo: Fechado",
    },
  ],
};
