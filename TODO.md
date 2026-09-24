# TODO.md — Tarefas Pendentes

> Prioridade: 🔴 Crítico | 🟡 Importante | 🟢 Backlog

---

## Atualizacao 2026-09-24 - Fotos dos aniversariantes de agosto

- [x] Restaurar na home as fotos de Luiz Roberto da Silva Santos, Siomara Rodrigues Alexandre e Tatiana Borges Costa Teixeira.
- [x] Manter os caminhos alinhados com os arquivos locais e com a edicao arquivada de agosto.
- [x] Criar commit, enviar para `main` e acompanhar o deploy automatico da Vercel.

## Atualizacao 2026-09-01 - Iframe

- [x] Restringir `frame-ancestors` no `vercel.json` a `https://calling.mbfinance.com.br`.

## Atualizacao 2026-09-16 - Origens de iframe

- [x] Autorizar `calling.mbfinance.com.br`, `localhost:8090`, `localhost:8091` e `187.77.253.55:8100` em `frame-ancestors`.
- [x] Publicar e validar o cabecalho CSP com as quatro origens autorizadas em producao.
- [ ] Validar a incorporacao efetiva a partir de cada ambiente consumidor.

## Atualizacao 2026-09-16 - Edicoes de agosto e setembro

## Atualizacao 2026-09-21 - Rota da edicao de agosto

- [x] Criar uma rota publica dedicada para agosto.
- [x] Atualizar os links “Ago” das edicoes historicas.
- [x] Validar o carregamento local da edicao de agosto.

- [x] Acrescentar os destaques dos setores e a entrevista de Thays na edicao de agosto.
- [x] Criar a edicao de setembro com a indicacao de filme e a apresentacao da entrevista de Amanda.
- [x] Extrair o cartaz de `Um Senhor Estagiario` para `public/images/mb-news/setembro/`.
- [x] Atualizar a navegacao das edicoes historicas para setembro.
- [ ] Receber e publicar as respostas completas da entrevista de Amanda, caso entrem na proxima entrega editorial.

## 🔴 Crítico (fazer antes do próximo push sério)

- [x] **Filtrar posts agendados no Blog (Next.js)** - Implementado no `lib/blog-store.ts` e API.

- [x] **Substituir número de WhatsApp fictício pelo número real** - Centralizado em `lib/constants.ts`.

- [x] **Banner de consentimento de cookies (LGPD)**
  - Implementado em todas as páginas do ecossistema (Next.js + Legado).
  - Persistência em localStorage e bloqueio de GA4 antes do consentimento.

- [x] **Refinamento Visual do Navbar**
  - Implementado fundo branco e troca de logo ao passar o mouse (hover).
  - Garante legibilidade do menu de produtos em qualquer posição de scroll.

- [x] **Tipografia do Hero**
  - Título principal alterado para Inter Bold (700) para maior autoridade visual.

- [x] **Layout de Produtos**
  - Seção convertida para grid de 2 colunas com **cards independentes sólidos** (fundo branco, sombra).
  - Lógica de accordion alterada para permitir múltiplos itens abertos simultaneamente.

---

## 🟡 Importante (próximas sessões)

### MB News
- [x] Criar MVP administrativo da MB News em `/admin/mb-news` com edicoes estruturadas, endpoint protegido e persistencia Upstash/JSON.
- [ ] Renderizar a MB News publica a partir das edicoes salvas no CMS.
- [ ] Criar rotas publicas dinamicas para edicoes antigas da MB News.
- [ ] Substituir token simples do admin por Supabase Auth com permissoes de usuario.
- [ ] Adicionar upload permanente de imagens para a MB News via Supabase Storage ou Vercel Blob.
- [x] Ajustar copy editorial da edição de abril para referência mensal e tom mais natural.
- [x] Revisar textos visíveis da MB News para tom mais humano e menos artificial.
- [x] Adicionar ponto final no título da seção de saúde da MB News.
- [x] Corrigir pontuação solta nos cards de direitos de saúde da MB News.
- [x] Corrigir quebra de linha do prazo "48h após a emissão" na seção de saúde.
- [x] Melhorar o aproveitamento de largura do quadro "Novo plano de saúde".
- [x] Atualizar rótulo do atendimento WhatsApp para "RH MB Finance".
- [x] Atualizar edição de maio da MB News com ranking Total Pass, RH no WhatsApp, canal de denúncia, NR1, terapia, absenteísmo, novo site e promoção da Maria Eduarda.
- [x] Remover bloco de aniversariantes da edição de maio da MB News.
- [x] Inserir foto oficial da Maria Eduarda na edição de maio da MB News.
- [x] Corrigir cargo da Maria Eduarda: de Analista de Negócios para Líder de Qualidade.
- [x] Ajustar layout da promoção da Maria Eduarda com texto ao lado da foto e enquadramento mais aberto.
- [x] Remover caixa flutuante do texto da promoção e alinhar copy com a imagem.
- [x] Ajustar foto da Maria Eduarda para proporção 3:4 e reduzir tamanho visual.
- [x] Trocar referência "Duda" por "Maria Eduarda" nos textos visíveis da edição de maio.
- [x] Reescrever seção da promoção para reduzir repetição e usar o título "Nova Líder de Qualidade".
- [x] Manter o subtítulo da promoção da Maria Eduarda em uma linha no desktop.
- [x] Refazer ranking Total Pass com fotos circulares ao lado dos nomes.
- [x] Destacar Antonio Costa como grande campeão do ranking Total Pass.
- [x] Ampliar pódio do Total Pass e aumentar fotos/cards para melhorar destaque e nitidez percebida.
- [x] Colocar cards do pódio Total Pass lado a lado e adicionar controle de posicionamento das fotos por variáveis CSS.
- [x] Exibir controles visuais para ajustar o posicionamento das fotos do Total Pass e compactar os cards secundários.
- [x] Remover botão de ajuste das fotos, travar o reposicionamento e aumentar os avatares da Julia e do Raphael.
- [x] Colocar Antonio Costa no centro do pódio Total Pass no desktop.
- [x] Recolocar a função `Ajustar fotos` no pódio Total Pass com sliders X/Y por competidor.
- [x] Desativar novamente a função `Ajustar fotos`, removendo botão, sliders e JavaScript.
- [x] Restaurar a edição de Abril e manter conteúdos publicados acessíveis pelo menu mensal.
- [ ] Substituir `--%` pela porcentagem oficial alcançada da trimestral na edição de maio da MB News.
- [x] Criar e publicar a prévia estrutural da edição de junho de 2026.
- [x] Substituir a ilustração temporária da Copa pelas duas fotos e três vídeos originais.
- [x] Substituir a ilustração temporária de promoções pelas fotos reais de Mayko/Juliana/Natallia, Karoline e Thalles.
- [x] Adicionar fotos e slides individuais de Pedro Xavier e Lucas Trajano.
- [x] Transformar as fotos de promoções em carrossel com imagem e texto sincronizados.
- [x] Criar texto corporativo específico para a efetivação de Thalles.
- [x] Centralizar as setas nas laterais do carrossel e remover os nomes dos seletores.
- [x] Corrigir o nome para Natalia Araujo e posicioná-la acima de Juliana no carrossel.
- [x] Inserir o texto do RH com Mayko Hentzy, Natallia, Juliana Leite e Karoline.
- [x] Incluir as efetivações de Thalles, Pedro Xavier e Lucas Trajano.
- [ ] Completar aniversariantes, contratações e ranking Total Pass de junho.

### Copy do site
- [x] Revisar copy da home principal e páginas comerciais com linguagem mais direta.
- [x] Revisar componentes Next/React de hero, produtos, processo, CTA e depoimentos.
- [ ] Revisar artigos longos do blog em uma rodada editorial separada, preservando SEO e estrutura de conteúdo.
- [ ] Normalizar encoding dos HTMLs legados antes de novas revisões amplas em páginas antigas.

### Conteúdo real
- [ ] Substituir depoimentos fictícios por depoimentos reais de clientes
- [ ] Adicionar logos dos bancos parceiros na seção de parceiros (carrossel)
- [ ] Atualizar links de redes sociais no rodapé (`public/mb-finance-completo.html` + `public/pages/`)

### CMS Inteligente (Melhorias)
- [x] **Modularizar scripts do blog-admin.html** - Lógica extraída para módulos em `public/assets/js/admin/` e UI de abas estabilizada (ADR-013).
- [ ] **Validar Radar Trends em Mobile** - Verificar se o iframe do Google Trends comporta-se adequadamente em telas menores.
- [ ] **Aumentar base de tópicos da IA** - Criar um arquivo de configuração para expandir as ideias sugeridas pelo gerador.

### Refatoração dos HTMLs secundários

- [ ] Refatorar `public/pages/sobre.html`
  - Extrair CSS → `public/assets/css/sobre.css` (ou adicionar em `main.css` se compartilhado)
  - Extrair JS → camadas `ui/`, `use-cases/`, `infra/`
  - Atualizar paths para `../assets/` e `../images/`
  - Preservar o ajuste visual do bloco `Escala` na timeline durante o refactor

- [ ] Refatorar `public/pages/blog.html`
  - Mesmos passos acima

- [ ] Refatorar `public/pages/politica-de-privacidade.html`
  - Hero-meta já ajustado para branco 90% em 2026-04-15; migrar para `public/assets/` no refactor

- [ ] Refatorar `public/pages/termos-de-uso.html`
  - Hero-meta já ajustado para branco 90% em 2026-04-15; migrar para `public/assets/` no refactor

### SEO
- [ ] Adicionar `sitemap.xml` apontando para todas as pages
- [ ] Verificar e corrigir `robots.txt`
- [ ] Open Graph tags em todas as pages (`og:image`, `og:description`)
- [ ] Meta descriptions únicas em cada page HTML

### Performance
- [ ] Converter imagens PNG/JPG para WebP
- [ ] Adicionar `loading="lazy"` nas imagens abaixo da dobra
- [ ] Verificar Lighthouse score (target: > 90)

---

## 🟢 Backlog (futuro)

### Migração Next.js (Strangler Fig)
- [ ] Migrar seção Hero para componente React
- [ ] Migrar seção Produtos para componente React
- [ ] Migrar seção Depoimentos para componente React
- [ ] Eventualmente eliminar `mb-finance-completo.html` totalmente

### Funcionalidades
- [ ] Página de agradecimento após captura de lead
- [ ] Tracking de eventos GA4
- [ ] Integração com ferramenta de email marketing

### Infraestrutura
- [ ] Configurar `robots.txt` para bloquear `/admin`
- [ ] Adicionar error pages customizadas (404, 500) no Next.js

## Atualizacao 2026-06-16

- [x] Corrigir rota de producao da edicao de Abril para `/pages/mb-news-abril-2026.html`.
- [x] Reativar controle de reposicionamento das fotos do Total Pass.
- [x] Adicionar controle de reposicionamento para a foto da Maria Eduarda.
- [x] Travar os enquadramentos salvos e desativar os botoes de reposicionamento.
- [x] Permitir ampliar e baixar as fotos principais da secao da Copa.
- [x] Criar a secao dos dez aniversariantes de junho com os retratos oficiais.
- [ ] Adicionar nomes e datas aos aniversariantes quando a relacao oficial for enviada pelo RH.
- [x] Transformar os retratos dos aniversariantes em carrossel automatico sem ampliacao.
- [x] Criar o ranking TotalPass com Renata Batista, Maria Seixas, Julia Lopes e Rodrigo Gadelha.
- [x] Remover o bloco de novas contratacoes da edicao.
- [x] Organizar os dez aniversariantes em duas fileiras animadas de cinco cards.
- [ ] Validar com o time a velocidade final das fileiras de aniversariantes em producao.
- [x] Remover a frase explicativa acima das duas fileiras de aniversariantes.
- [x] Repetir na edicao de junho a secao de maio sobre canais e orientacoes do RH.
- [x] Exibir a quantidade de check-ins nos cards do ranking TotalPass.
- [x] Atualizar o fundo da secao TotalPass para um visual relacionado a academia e identificar a headline com uma tag.

## Atualização 2026-09-11 — Padrão visual do TotalPass de agosto

- [x] Aplicar à edição de agosto o mesmo pódio visual da edição de julho.
- [x] Manter os dados do ranking de agosto sem reutilizar fotos de outros colaboradores.
- [x] Usar as fotos existentes de Antonio Augusto e Maria Seixas no pódio de agosto.
- [x] Centralizar o grid do pódio com o cabeçalho da seção.
- [x] Adicionar a foto oficial enviada de Douglas Reis ao pódio de agosto.

## Atualização 2026-09-11 — Correção da navegação histórica da MB News

- [x] Restaurar a edição completa de julho.
- [x] Corrigir os links de abril, maio, junho e julho para as edições disponíveis.
- [x] Remover o conflito que abria o modal de agosto como se a edição ainda fosse futura.

## Atualização 2026-09-11 — Ajuste do plano de saúde em agosto

- [x] Manter tabela, copy e passo a passo do Bot Ben iguais aos da edição anterior.
- [x] Atualizar o prazo de solicitação para 15/09.
- [x] Informar nova janela de inclusão em janeiro de 2027.

## Atualização 2026-09-10 — Correção do acesso à edição de julho

- [x] Criar a página pública `public/pages/mb-news-julho-2026.html`.
- [x] Corrigir o link de julho na navegação mensal da edição de agosto.
- [x] Revalidar os links dos PDFs de saúde da edição de julho.

## Atualização 2026-09-10 — MB News Agosto

- [x] Criar estrutura editorial da edição #005 de agosto.
- [x] Aplicar plano de saúde para dependentes com prazo até 15/09.
- [x] Aplicar evento Instituto Cury, NR-1 e conteúdo sobre terapia.
- [x] Atualizar ranking TotalPass para Antonio Augusto, Douglas Reis e Maria Seixas.
- [x] Ocultar conteúdo de promoções de julho que não faz parte do briefing de agosto.
- [ ] Receber do RH os valores oficiais do plano por faixa etária.
- [ ] Receber do RH a lista e datas dos aniversariantes de agosto.
- [ ] Validar o fluxo oficial de agendamento SulAmérica.
- [ ] Disponibilizar o calendário vacinal oficial da edição de agosto.

## Atualização 2026-08-12 — MB News Julho

- [x] Publicar conteúdo editorial de julho na MB News.
- [x] Adicionar as promoções e efetivações enviadas pelo RH.
- [x] Criar seção de plano de saúde para dependentes e cônjuges, com valores e passo a passo.
- [x] Adicionar aniversariantes de julho.
- [x] Atualizar ranking TotalPass de julho.
- [x] Disponibilizar PDFs do calendário de vacinação e das campanhas anuais para download.
- [x] Validar a disponibilidade da edição de julho após o deploy (HTTP 200 em produção).
- [x] Atualizar aniversariantes de julho com os seis retratos fornecidos pelo RH, no formato de carrossel de junho.
- [x] Garantir animação autônoma das duas faixas de aniversariantes, mesmo sem carregamento do script de ícones.
- [x] Consolidar os seis aniversariantes de julho em uma única faixa animada.
- [x] Remover pausa automática por hover do carrossel de aniversariantes.
- [x] Adicionar retratos do pódio TotalPass de julho.
- [x] Corrigir regra legada que ocultava as fotos do pódio TotalPass.
- [x] Corrigir leitura do passo a passo do Bot Ben no plano de saúde.
- [x] Ajustar contraste dos títulos nas campanhas anuais de saúde.
- [x] Corrigir rotas públicas dos downloads em PDF da edição de julho.
- [x] Substituir os cards de promoções/efetivações de julho por carrossel com as fotos oficiais.
- [x] Manter Arthur e Evellyn juntos em um único slide, com setores individuais de Relacionamento e Hunter.
- [x] Reunir Julia Luiza e Julia Goulart no slide de Abertura de Contas e detalhar a trajetória da Beatriz em T&D.
- [x] Substituir as fotos individuais das Julias pela foto conjunta oficial.
- [x] Manter a altura padronizada dos cards do carrossel de reconhecimentos.
- [x] Incluir a trajetória de estágio e efetivação da Evellyn no slide de reconhecimento.
- [x] Corrigir o setor e incluir a trajetória do Arthur no slide compartilhado.
- [x] Esclarecer a transição da Beatriz de Adquirência para Treinamento e Desenvolvimento.
- [x] Separar calendário de vacinação das campanhas de HPV e câncer do colo do útero e atualizar os textos legais e informativos.
- [x] Reordenar o carrossel de Reconhecimento com Beatriz Assumpção primeiro e Willian Amaral por último.
- [x] Exibir Calendário 2026, HPV e Câncer de Colo do Útero lado a lado com o mesmo peso visual.
- [x] Equilibrar o volume de texto dos três cards de saúde para eliminar o espaço visual excessivo.
- [x] Padronizar o ícone e o espaçamento interno do card Calendário 2026.
- [x] Padronizar os títulos dos três cards de saúde e remover o rótulo auxiliar do calendário.
- [x] Posicionar o ícone do Calendário 2026 acima do título, como nos cards de campanha.

## Atualização 2026-09-21 — Carrossel dos destaques de agosto

- [x] Substituir os cards agrupados de setores por seis slides individuais.
- [x] Associar as seis fotos de agosto aos respectivos nomes e setores.
- [x] Adicionar texto editorial curto para cada destaque.
- [x] Manter navegação por setas, dots e teclado com status acessível.
- [x] Validar o comportamento responsivo e o carregamento das imagens.
- [ ] Revisar a copy com o RH antes da publicação.

## Atualização 2026-09-21 — Nova experiência da entrevista de agosto

- [x] Reorganizar a entrevista em perfil visual da Thays e acordeão de perguntas e respostas.
- [x] Reutilizar a foto oficial da Thays na abertura da seção.
- [x] Preservar as seis respostas e tornar a leitura progressiva, com uma resposta aberta por vez.
- [x] Validar acessibilidade básica, responsividade e comportamento do acordeão localmente.
- [ ] Revisar com o RH o título, a frase-chave e o resumo editorial do perfil.

## Atualização 2026-09-21 — Indicação de filme de agosto

- [x] Adicionar a indicação de `O Lobo de Wall Street` à edição de agosto.
- [x] Incluir cartaz, ampliação por lightbox e resumo dos aprendizados comerciais.
- [x] Conectar a seção ao menu e ao CTA principal da edição.
- [x] Validar a renderização responsiva e o carregamento do cartaz.
- [ ] Revisar a imagem e a copy final com Comunicação/RH.

## Atualização 2026-09-21 — Identidade de setembro e Palavra do Mês de agosto

- [x] Aplicar à indicação de filme de setembro o mesmo formato editorial criado para agosto.
- [x] Criar identidade visual amarela para a edição de setembro.
- [x] Inserir o símbolo do laço amarelo nos principais pontos de identificação da edição.
- [x] Corrigir a Palavra do Mês de agosto para refletir o conteúdo real da edição.
- [x] Corrigir caminhos de imagens quebrados na edição de setembro.
- [ ] Validar com Comunicação/RH a intensidade do amarelo e as duas mensagens editoriais.

## Atualização 2026-09-21 — Aniversariantes de agosto

- [x] Incluir os dez aniversariantes informados na edição de agosto.
- [x] Reativar o carrossel e atualizar a contagem da seção.
- [x] Criar cartões responsivos com iniciais para não inventar fotos dos colaboradores.
- [x] Validar pausa, loop duplicado, nomes e layout mobile localmente.
- [ ] Substituir as iniciais por fotos oficiais quando o RH enviar os retratos.

## Atualização 2026-09-21 — Conteúdos de setembro

- [x] Liberar a seção de promovidos com os seis destaques enviados.
- [x] Reconfigurar o carrossel para seis slides e seis indicadores acessíveis.
- [x] Liberar a seção de aniversariantes com os quinze nomes de setembro.
- [x] Liberar o módulo de saúde mental do Setembro Amarelo.
- [x] Adicionar links de navegação para os novos conteúdos.
- [x] Validar desktop, mobile, navegação do carrossel e carregamento de recursos localmente.
- [ ] Inserir as fotos dos encontros de saúde mental quando forem enviadas.
- [ ] Substituir cartões de iniciais por retratos oficiais, caso disponíveis.

## Atualização 2026-09-21 — Guia de uso do TotalPass

- [x] Liberar a seção TotalPass de setembro.
- [x] Adicionar o módulo de cadastro logo abaixo do pódio.
- [x] Incluir os passos de download, cadastro, confirmação da empresa, escolha do plano e check-in.
- [x] Adicionar link de navegação para TotalPass.
- [x] Validar carregamento da imagem de apoio, responsividade e ausência de overflow mobile.
- [ ] Substituir a reprodução HTML/CSS pela arte original quando o arquivo PNG/JPG for enviado.

## Atualização 2026-09-21 — Guia de uso do TotalPass em agosto

- [x] Corrigir a ausência do módulo no card/seção TotalPass de agosto.
- [x] Inserir o mesmo guia de cadastro logo abaixo do pódio de agosto.
- [x] Compartilhar o estilo do guia em `mb-news-totalpass-howto.css`.
- [x] Validar desktop, mobile, imagem de apoio, passos e ausência de overflow.
- [ ] Substituir a reprodução pela arte original nas edições de agosto e setembro quando o arquivo for enviado.

## Atualização 2026-09-21 — Compactação do guia do TotalPass

- [x] Reduzir o módulo para um card complementar, sem competir visualmente com o pódio.
- [x] Preservar o passo a passo principal e a orientação de check-in.
- [x] Remover a repetição visual dos mini-passos e a foto auxiliar no mobile.
- [x] Validar alturas, responsividade, ausência de overflow e recursos ausentes em agosto e setembro.
- [ ] Substituir a reprodução pela arte original nas duas edições quando o PNG/JPG estiver disponível.

## Atualização 2026-09-21 — Fotos dos promovidos de setembro

- [x] Copiar as seis fotos recebidas para `public/images/mb-news/setembro/promovidos/`.
- [x] Associar cada retrato ao respectivo slide do carrossel.
- [x] Ajustar o enquadramento individual das fotos.
- [x] Validar os seis slides, carregamento das imagens, mobile e recursos ausentes.
- [ ] Confirmar com o RH os enquadramentos e a ordem editorial final.

## Atualização 2026-09-21 — TotalPass temporariamente oculto em setembro

- [x] Ocultar a seção TotalPass da edição de setembro.
- [x] Remover o link TotalPass da navegação de setembro.
- [x] Preservar o conteúdo no HTML para reativação posterior.
- [ ] Reavaliar a publicação do TotalPass em setembro quando o conteúdo for aprovado.

## Atualização 2026-09-21 — Entrevista de Amanda

- [x] Substituir o bloco de texto por perfil, frase-chave e acordeão de perguntas.
- [x] Resumir as oito respostas sem perder contexto e detalhes pessoais.
- [x] Adicionar a foto da Amanda à edição de setembro.
- [x] Aplicar a identidade amarela e validar desktop, mobile e interação.

## Atualização 2026-09-22 — Preview local da MB News

- [x] Corrigir o 404 das edições históricas no servidor local.
- [x] Validar a edição de setembro e seus principais recursos estáticos.
- [ ] Transformar o mapeamento local atual em um comando/script reutilizável de desenvolvimento.
- [x] Corrigir o caminho do vídeo da Páscoa na edição de abril.
- [x] Padronizar abril sem tela de carregamento exclusiva.
- [x] Deixar a indicação de filme como última seção nas edições que possuem esse conteúdo.
- [x] Reordenar Matheus Oliveira e Thays Florencio no carrossel de destaques de agosto.
- [x] Melhorar o aproveitamento visual do espaço no card de destaques de agosto.
- [x] Ajustar a copy da Thays para usar “atendimento”.
- [x] Atualizar o setor da Thays para “Abertura C6 Bank”.
- [x] Atualizar o setor do Matheus para “Relacionamento C6 Bank”.
- [x] Adicionar ícones à seção e aos cards de destaques de agosto.
- [x] Atualizar a data limite de inclusão de dependentes para 30/09.

## Atualização 2026-09-22 — Liderança no Setembro Amarelo

- [x] Mover a seção “Liderar também é cuidar.” para a edição de setembro.
- [x] Contextualizar o bloco como conteúdo de Setembro Amarelo e preservar as informações do Instituto Cury/NR-1.
- [x] Remover a duplicação e os atalhos “Evento interno” de agosto.
- [x] Corrigir os caminhos das imagens institucionais da home e da edição arquivada de agosto.
- [x] Validar as três páginas, recursos carregados e layout mobile.
- [ ] Confirmar com o RH se a copy da consultoria deve seguir uma redação oficial.

## Atualização 2026-09-22 — Enquadramento da entrevista

- [x] Ajustar a foto da Amanda para terminar no tronco.
- [x] Preservar a imagem original e aplicar o recorte via CSS.
- [x] Validar desktop, mobile e ausência de recursos 4xx/5xx.

## Atualização 2026-09-22 — Foto de equipe do Higor

- [x] Adicionar a foto de equipe recebida em `public/images/mb-news/setembro/promovidos/`.
- [x] Substituir a imagem do slide 06 do Higor.
- [x] Preservar o enquadramento e validar o carregamento no desktop e no mobile.

## Atualização 2026-09-22 — Redesign do guia TotalPass

- [x] Remover a repetição visual e textual de “cadastro”.
- [x] Consolidar o fluxo em quatro etapas objetivas.
- [x] Criar painel lateral de benefícios sem repetir o passo a passo.
- [x] Aplicar o redesign à home e às edições de agosto/setembro.
- [x] Validar desktop, mobile e recursos carregados.

## Atualização 2026-09-22 — Estrutura das seções após TotalPass

- [x] Corrigir os fechamentos HTML removidos durante o redesign do TotalPass.
- [x] Garantir que vacinação e filme sejam seções independentes.
- [x] Validar largura, ordem das seções, mobile e ausência de 4xx/5xx.

## Atualização 2026-09-22 — Cabeçalho do guia TotalPass

- [x] Aumentar a largura do card do TotalPass.
- [x] Colocar o título abaixo do texto “TotalPass · primeiros passos”.
- [x] Validar desktop, mobile e ausência de overflow.

## Atualização 2026-09-22 — Fotos dos aniversariantes

- [x] Consultar a pasta compartilhada do Google Drive informada pelo usuário.
- [x] Baixar e organizar 5 fotos de aniversariantes de agosto.
- [x] Baixar e organizar 8 fotos de aniversariantes de setembro.
- [x] Aplicar as fotos na home, em agosto e em setembro sem alterar a ordem dos nomes.
- [x] Validar o carregamento das imagens no navegador e a ausência de falhas locais.
- [ ] Completar os cards restantes quando as fotos correspondentes forem disponibilizadas.
- [x] Substituir a foto da Marcela Gomes Pita pela nova imagem adicionada ao Drive.
- [x] Validar a nova imagem no caminho local do card de setembro.
- [x] Adicionar a foto existente de Rodrigo Gadelha ao card de aniversariantes de setembro.
- [x] Adicionar a foto de Matheus Felix Ribeiro ao card de aniversariantes de agosto.
- [x] Adicionar a foto de Luana Alves Maia Silva ao card de aniversariantes de agosto.
- [x] Criar commit, enviar para `main` e validar o deploy da atualização na Vercel.
- [x] Atualizar as fotos de Hellene Silva dos Santos e Nathan Almeida Amorim na edição de setembro.
- [ ] Confirmar a edição e a ordem dos 11 novos nomes encontrados no Drive antes de adicioná-los à lista.
- [x] Remover Juan Cavalcante Campello da Rosa da lista de aniversariantes de setembro.
- [x] Integrar a montagem fotográfica de liderança na seção Setembro Amarelo.
- [x] Validar opacidade, legibilidade, recursos carregados e comportamento visual da seção localmente.

## Atualização 2026-09-23 — Nova montagem fotográfica

- [x] Combinar a montagem anterior com a nova foto da equipe.
- [x] Substituir o asset de fundo da seção de liderança.
- [ ] Validar a nova composição visualmente e publicar após aprovação.

## Atualização 2026-09-23 — Fotos do Drive

- [x] Conferir novamente a pasta compartilhada do Google Drive.
- [x] Atualizar 3 fotos correspondentes aos aniversariantes de agosto.
- [x] Atualizar 4 fotos correspondentes aos aniversariantes de setembro.
- [x] Validar os 7 cards e os recursos locais com Playwright.
- [ ] Confirmar a edição e a ordem dos novos nomes que ainda não aparecem nas listas.
