/* =========================================================
   TAVI STUDIO: lista de lojas
   Para adicionar uma loja nova, copie um bloco { ... } e troque os dados.
   ========================================================= */

const TAVI_STUDIO = {
  // Link para quem quiser uma vitrine (WhatsApp, Instagram, e-mail...).
  // Deixe vazio ('') para esconder o convite no fim da página.
  contato: 'https://ig.me/m/tavii_studio',
  instagram: 'https://www.instagram.com/tavii_studio',
  contatoTexto: 'Quero minha vitrine',
};

/* ---------------------------------------------------------
   - endereco: o nome do repositório (studiotavi.github.io/ENDERECO/)
     ou um link completo (https://...) se a loja tiver domínio próprio
   - capa: imagem em assets/lojas/ (de preferência 1200 × 900)
   - logo: opcional, PNG sem fundo em assets/lojas/
   - cor: cor da marca (aparece no detalhe do card)
   --------------------------------------------------------- */

const LOJAS = [
  {
    nome: 'Nóli',
    endereco: 'noli',
    categoria: 'Ateliê',
    segmento: 'Cerâmica fria',
    descricao: 'Porta-joias, incensários, porta-velas e peças decorativas modeladas e pintadas à mão.',
    capa: 'assets/lojas/noli.jpg',
    logo: 'assets/lojas/noli-logo.png',
    cor: '#6E0003',
    fundoLogo: '#ECE6DC',
    instagram: 'https://www.instagram.com/atelie_noli',
  },
  {
    nome: 'Pipocou',
    endereco: 'https://pipocou.onrender.com',
    categoria: 'App',
    segmento: 'Filmes e séries',
    descricao: 'Diário de filmes e séries em forma de mural. Dê nota, marque a pipoca no que curtiu, monte pastas e veja o que a galera está assistindo.',
    capa: 'assets/lojas/pipocou.jpg',
    logo: 'assets/lojas/pipocou-logo.png',
    cor: '#E60023',
    fundoLogo: '#FFFFFF',
  },
];
