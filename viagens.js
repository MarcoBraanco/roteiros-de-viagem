// =====================================================================
//  VIAGENS · todos os roteiros do site ficam salvos aqui.
//
//  Cada viagem tem vários roteiros (um por dia, cidade ou parque).
//  Um roteiro pode ser:
//   • "pagina": uma página própria e personalizada (ex.: "madrid/").
//     As "paradas" servem só para desenhar os pinos no mapa da página inicial.
//   • sem "pagina": o site monta a página sozinho em roteiro/?id=<id>,
//     com mapa, lista de paradas, checklist e botões do Google Maps.
//
//  Campos de uma parada:
//   n  nome (obrigatório)          ll  [latitude, longitude] para o pino
//   t  horário "HH:MM"             a   endereço/busca do Google Maps (padrão: o nome)
//   d  descrição                   dica  destaque amarelo
//   ph título de uma nova fase do dia (ex.: "Manhã", "Volta ao hotel")
//   w  deslocamento até a próxima (ex.: "10 min a pé")
// =====================================================================
window.VIAGENS = [
  {
    id: "europa-2026",
    nome: "Europa no inverno",
    periodo: "novembro de 2026",
    resumo: "São Paulo → escala em Madrid → Dublin → Paris, com um dia na Disney.",
    roteiros: [
      {
        id: "madrid",
        pagina: "madrid/",
        titulo: "Escala em Madrid",
        subtitulo: "Roteiro clássico a pé, num domingo, entre o T4S e o voo das 23h para Dublin.",
        cidade: "Madrid", bandeira: "🇪🇸", emoji: "🥘",
        data: "2026-11-15", fuso: "Europe/Madrid", cor: "#b8322a",
        paradas: [
          { n: "Consigna do T1 (malas)", ll: [40.4683, -3.5706], t: "13:35" },
          { n: "Plaza de Cibeles", ll: [40.4193, -3.6931], t: "14:45" },
          { n: "Puerta del Sol", ll: [40.4169, -3.7035], t: "15:00" },
          { n: "Plaza Mayor", ll: [40.41553, -3.70742], t: "15:05" },
          { n: "Mercado de San Miguel", ll: [40.4154, -3.70895], t: "15:55" },
          { n: "Palacio Real", ll: [40.41797, -3.7143], t: "16:25" },
          { n: "Templo de Debod", ll: [40.42404, -3.7178], t: "17:05" },
          { n: "Plaza de España", ll: [40.4234, -3.7122], t: "18:05" },
          { n: "Plaza del Callao", ll: [40.42003, -3.70583], t: "18:25" },
          { n: "Chocolatería San Ginés", ll: [40.41695, -3.70668], t: "18:40" }
        ]
      },
      {
        id: "disney",
        pagina: "disney/",
        titulo: "Disneyland Paris",
        subtitulo: "Os dois parques numa tarde e noite, com o Rei Leão e o show do castelo no fim.",
        cidade: "Marne-la-Vallée", bandeira: "🇫🇷", emoji: "🏰",
        data: "2026-11-18", fuso: "Europe/Paris", cor: "#3b4fa8",
        paradas: [
          { n: "Estação Marne-la-Vallée–Chessy", ll: [48.8701, 2.7826] },
          { n: "Disneyland Park", ll: [48.8722, 2.7758] },
          { n: "Disney Adventure World", ll: [48.8681, 2.7805] },
          { n: "Castelo da Bela Adormecida · show final", ll: [48.8731, 2.7764] }
        ]
      },
      {
        id: "paris",
        pagina: "paris/",
        titulo: "Paris, último dia",
        subtitulo: "Torre Eiffel, Notre-Dame, Quartier Latin, Montmartre e Aérobus no fim do dia.",
        cidade: "Paris", bandeira: "🇫🇷", emoji: "🗼",
        data: "2026-11-20", fuso: "Europe/Paris", cor: "#c98f10",
        paradas: [
          { n: "Airbnb (Garches)", ll: [48.8455, 2.188] },
          { n: "Torre Eiffel", ll: [48.85826, 2.2945] },
          { n: "Trocadéro", ll: [48.86196, 2.2889] },
          { n: "Ponte de Bir-Hakeim", ll: [48.8552, 2.2874] },
          { n: "Notre-Dame", ll: [48.85296, 2.3499] },
          { n: "Quartier Latin", ll: [48.8532, 2.344] },
          { n: "Jardim de Luxemburgo", ll: [48.84622, 2.33715] },
          { n: "Sacré-Cœur", ll: [48.88671, 2.3431] },
          { n: "Muro do Eu Te Amo", ll: [48.88483, 2.33831] },
          { n: "Moulin Rouge", ll: [48.8841, 2.33224] },
          { n: "Galeries Lafayette", ll: [48.87334, 2.33232] },
          { n: "Arco do Triunfo", ll: [48.87378, 2.29504] },
          { n: "Aérobus A01 · Porte Maillot", ll: [48.88003, 2.2829] }
        ]
      }
    ]
  }

  // Para criar uma viagem nova, copie o bloco acima (de { até }),
  // cole aqui depois de uma vírgula e troque os dados.
  // Roteiros sem "pagina" ganham a página automática em roteiro/?id=...
];
