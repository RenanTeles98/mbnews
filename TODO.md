# TODO.md — Tarefas Pendentes

> Prioridade: 🔴 Crítico | 🟡 Importante | 🟢 Backlog

---

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
