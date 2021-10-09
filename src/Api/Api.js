import imgParthnetData1 from "./CardParthnerImg/1.jpg";
import imgParthnetData2 from "./CardParthnerImg/2.jpg";
import imgParthnetData3 from "./CardParthnerImg/3.jpg";

export const Api = {
  baseUrl: "https://mustang-backapi.azurewebsites.net/Produto",

  readAllUrl: () => Api.baseUrl,

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    }),

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
      desc: ["Montagem + Balanceamento" , "Apenas entrega em Centro de Montagem."],
      valor: "189.90",
    },
    {
      id: 2,
      name: "Giba Auto Center",
      imagemUrl:
        "https://www.cantupneus.com.br/medias/sys_master/h6e/h91/9538413035550/fotoOficina-08623310000174.jpg",
      combo: "Combo Básico 1 ou 2 Pneus (Aro 12 - 16)",
      desc: ["Montagem + Balanceamento"],
      valor: "219.90",
    },
    {
      id: 3,
      name: "O Chefão Pneus",
      imagemUrl:
        "https://www.cantupneus.com.br/medias/sys_master/h71/ha2/9486653816862/fotoOficina-39843161000182.jpg",
      combo: " Combo Básico 1 ou 2 Pneus (Aro 12 - 16)",
      desc: ["Montagem + Balanceamento" , "Apenas entrega em Centro de Montagem."],
      valor: "149.90",
    },
    {
      id: 4,
      name: "Auto Filadelfia Center",
      imagemUrl:
        "https://www.cantupneus.com.br/medias/sys_master/he2/h61/9469373775902/fotoOficina-37640212000143.jpg",
      combo: "Combo Básico 1 ou 2 Pneus (Aro 12 - 16)",
      desc: ["Montagem + Balanceamento" , "Apenas entrega em Centro de Montagem."],
      valor: "189.90",
    },
    {
      id: 5,
      name: "Giba Auto Center",
      imagemUrl:
        "https://www.cantupneus.com.br/medias/sys_master/h6e/h91/9538413035550/fotoOficina-08623310000174.jpg",
      combo: "Combo Básico 1 ou 2 Pneus (Aro 12 - 16)",
      desc: ["Montagem + Balanceamento"],
      valor: "219.90",
    },
    {
      id: 6,
      name: "O Chefão Pneus",
      imagemUrl:
        "https://www.cantupneus.com.br/medias/sys_master/h71/ha2/9486653816862/fotoOficina-39843161000182.jpg",
      combo: " Combo Básico 1 ou 2 Pneus (Aro 12 - 16)",
      desc: ["Montagem + Balanceamento" , "Apenas entrega em Centro de Montagem.."],
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
      name: "O Chefão Pneus",
      address: " RUA CONCEICAO, 563, Santa Catarina, ITAJAI, 88304220",
      attendance:
        " Horário de Atendimento Semana: 07:30 - 12:00 Sábado: 08:00 - 12:00 / Domingo: Fechado",
    },
    {
      id: 4,
      imagemUrl: imgParthnetData1,
      name: "AUTO CENTER FILADÉLFIA",
      address: "Rua Brusque, 837, Santa Catarina, Itajaí, 88302001",
      attendance:
        "Horário de Atendimento - Semana: 08:00 - 18:00 Sábado: 08:00 - 12:00 / Domingo: Fechado",
    },
    {
      id: 5,
      imagemUrl: imgParthnetData2,
      name: "Giba Auto Center",
      address:
        "Rua Manoel Leopoldo Rocha, 700, Santa Catarina, Navegantes, 88370564",
      attendance:
        " Horário de Atendimento Semana: 08:00 - 18:00 Sábado: 08:00 - 12:00 / Domingo: Fechado",
    },
    {
      id: 6,
      imagemUrl: imgParthnetData3,
      name: "O Chefão Pneus",
      address: " RUA CONCEICAO, 563, Santa Catarina, ITAJAI, 88304220",
      attendance:
        " Horário de Atendimento Semana: 07:30 - 12:00 Sábado: 08:00 - 12:00 / Domingo: Fechado",
    },
  ],

  cart: [
    {
      id: 1,
      marca: "CooperTires",
      tipo: "Aro 13 CS1 185/70R13 86T",
      preco: 319.04,
      descricao: "Melhor Custo Benefício",
      imgUrl:
        "https://static.pneustore.com.br/medias/sys_master/images/images/h4c/h6a/8859171291166/pneu-cooper-aro-13-cs1-175-70r13-82t-2.jpg",
    },
    {
      id: 2,
      marca: "Tornel",
      tipo: "Aro 13 Classic 175/70R13 82T",
      preco: 315.02,
      descricao: "Maior economia",
      imgUrl:
        "https://static.pneustore.com.br/medias/sys_master/images/images/h31/hae/8859194949662/pneu-tornel-aro-13-classic-175-70r13-82t-1.jpg",
    },
  ],
};
