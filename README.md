# Roteiros de viagem

Site (GitHub Pages) para escolher e seguir roteiros de viagem.

- `/` página inicial: mapa com todas as viagens e um card por roteiro
- `viagens.js` **todas as viagens, roteiros e paradas ficam aqui**
- `/roteiro/?id=<id>` página automática para roteiros que só têm dados (mapa, checklist, Google Maps)
- `/madrid/`, `/disney/`, `/paris/` páginas personalizadas da viagem Europa nov/2026

## Adicionar uma viagem
Copie um bloco de viagem em `viagens.js` e troque os dados. Roteiros sem `pagina`
abrem na página automática; para um roteiro personalizado, crie uma pasta com
`index.html` e use `pagina: "pasta/"`.
