# Bulls One

Landing page da equipe pernambucana Bulls One, com informações sobre F1 in Schools, Bulls Education, integrantes do time e canais de contato.

## Estrutura

- `index.html`: estrutura da página e conteúdo das seções.
- `style.css`: estilos, responsividade, cards, footer e carrossel mobile.
- `script.js`: menu mobile e carrossel da seção do time.
- `image/`: logos, ícones, fotos dos integrantes e imagens usadas no site.

## Como Rodar

O projeto é estático e não precisa de instalação.

Abra o `index.html` no navegador ou use uma extensão como Live Server. Com Live Server, a página costuma abrir em:

```bash
http://127.0.0.1:5500/
```

## Seções

- `Início`: apresentação da Bulls One.
- `F1inSchools`: explicação sobre a competição.
- `Quem Somos?`: cards dos integrantes, com carrossel automático no mobile abaixo de `520px`.
- `BullsEducation`: descrição do projeto social.
- `Contatos`: navegação e links sociais no footer.

## Edição Rápida

Para trocar textos, edite o conteúdo no `index.html`.

Para ajustar espaçamentos, cores, responsividade ou imagens de fundo dos cards, edite o `style.css`.

Para alterar o tempo do carrossel, edite o intervalo em `script.js`:

```js
}, 3000);
```

## Imagens Dos Integrantes

As fotos atuais seguem o padrão:

- `image/erick-monteiro.png`
- `image/gabriel-lins.png`
- `image/jorge-freitas.png`
- `image/vitor-camara.png`
- `image/yasmim-jaques.png`

Ao trocar uma foto, mantenha o mesmo nome do arquivo ou atualize a referência correspondente no `style.css`.
