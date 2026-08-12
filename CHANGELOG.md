# CHANGELOG.md — Histórico de Mudanças

> Formato: [versão ou data] — O que mudou

---

## 2026-06-15 — Ajuste visual da foto da Duda

### Modificado
- `index.html` — foto da Maria Eduarda ajustada para proporção 3:4 e largura máxima menor no bloco de promoção.
- `index.html` — textos da promoção atualizados para usar `Maria Eduarda`, sem o sobrenome Mendes.
- `index.html` — seção da promoção reescrita para reduzir repetição e usar o título "Nova Líder de Qualidade".
- `index.html` — subtítulo da promoção ajustado para ficar em uma linha no desktop.
- `index.html` — cards do pódio Total Pass colocados lado a lado com controle de posicionamento das fotos por variáveis CSS.
- `index.html` — função `Ajustar fotos` do pódio Total Pass desativada novamente, removendo botão, sliders e JavaScript.
- `index.html` — Antonio Costa colocado no centro do pódio Total Pass no desktop.
- `public/pages/mb-news-abril-2026.html` — edição de Abril recuperada como arquivo navegável.
- `index.html` — botão `Abr` do menu mensal atualizado para abrir a edição de Abril em vez de bloquear o conteúdo.

---

## 2026-06-11 — Atualização MB News Maio

### Modificado
- `index.html` — MB News atualizada para a edição #002 de Maio de 2026.
- Incluídos ranking Total Pass, promoção da Maria Eduarda, novo site da MB Finance, RH no WhatsApp, canal de denúncia, NR1, terapia, absenteísmo e quadro da trimestral.
- Foto oficial da Maria Eduarda adicionada em `public/images/maria-eduarda-lider-qualidade.jpeg`.
- Cargo da Maria Eduarda corrigido: de Analista de Negócios para Líder de Qualidade.
- Layout da promoção da Maria Eduarda ajustado com texto ao lado da imagem e enquadramento mais aberto da foto.
- Texto da promoção removido da caixa flutuante e alinhado diretamente com a imagem.
- Ranking Total Pass refeito com fotos circulares de Antonio Costa, Julia Goulart e Raphael Machado ao lado dos nomes.
- Card de Antonio Costa destacado como grande campeão do Total Pass.
- Pódio do Total Pass ampliado com fotos e cards maiores.
- Removido o bloco de aniversariantes da edição de maio.
- Placeholder mantido apenas para a porcentagem da trimestral ainda não informada.

---

## 2026-04-30 — Ajuste de copy da MB News

### Modificado
- `index.html` — texto editorial atualizado de referência semanal para mensal.
- `index.html` — travessões removidos do bloco editorial e tom do texto refinado.
- `index.html` — rótulo "Destaque da semana" alterado para "Destaque do mês".

---

## 2026-04-30 — Revisão editorial do site

### Modificado
- Textos da MB News, home principal, páginas comerciais e componentes React revisados para tom mais natural e direto.
- Promessas genéricas e estruturas artificiais foram substituídas por copy mais clara, focada em comparação de opções, atendimento humano e decisão financeira.
- CTAs e descrições de produtos ajustados para reduzir exageros comerciais.

---

## 2026-04-14 — Refatoração estrutural + organização

### Adicionado
- `public/assets/css/main.css` — todo o CSS extraído do HTML principal (614 linhas)
- `public/assets/js/infra/sheets.js` — integração com Google Sheets
- `public/assets/js/infra/storage.js` — backup em localStorage
- `public/assets/js/ui/scroll.js` — smooth scroll + Lenis
- `public/assets/js/ui/navbar.js` — navbar scroll effect, menu mobile, dropdown
- `public/assets/js/ui/accordion.js` — accordion de produtos + FAQ
- `public/assets/js/ui/animations.js` — parallax, etapas animadas, carrossel
- `public/assets/js/use-cases/lead.js` — modal de lead + roteamento WhatsApp
- `public/assets/js/use-cases/partnership.js` — modal de parceria
- `public/images/` — pasta centralizada para todas as imagens (14 arquivos + 2 subpastas)
- `public/pages/` — pasta centralizada para HTMLs secundários (11 arquivos)
- `AGENTS.md` — protocolo de colaboração com IA
- `CONTEXT.md` — estado atual do projeto
- `DECISIONS.md` — registro de decisões técnicas (5 ADRs)
- `TODO.md` — tarefas priorizadas
- `CHANGELOG.md` — este arquivo
- `docs/sessions/` — pasta para logs de sessão

### Modificado
- `public/mb-finance-completo.html` — removidos 4 blocos `<style>` e 8 blocos `<script>` inline; HTML caiu de 2712 para 1597 linhas; caminhos de imagens e páginas atualizados
- `CLAUDE.md` — documentada a refatoração e o padrão para replicar nas outras pages
- `app/blog/[slug]/page.tsx` — caminhos de imagem e links de página atualizados
- `app/sobre/page.tsx` — caminhos de imagem atualizados

### Removido
- PNGs/JPGs da raiz de `public/` (movidos para `public/images/`)
- HTMLs secundários da raiz de `public/` (movidos para `public/pages/`)

---

## Antes de 2026-04-14 — Histórico anterior

_(não documentado — projeto existia antes da adoção do CHANGELOG)_

Principais marcos conhecidos:
- Blog migrado para Next.js com Upstash Redis
- Página `/sobre` migrada para Next.js
- Home mantida em HTML estático (estratégia Strangler Fig)
- Overflow horizontal mobile corrigido
- Smooth scroll com Lenis adicionado

---

## 2026-06-16 - Correcao da rota de Abril da MB News

### Corrigido
- `vercel.json` - adicionados rewrites para publicar `/pages/*` a partir de `public/pages/*` e `/images/*` a partir de `public/images/*`.
- `https://mbnews.vercel.app/pages/mb-news-abril-2026.html` - rota validada em producao com `200 OK` apos novo deploy.

---

## 2026-06-16 - Ajuste de reposicionamento de imagens

### Adicionado
- `index.html` - botao `Ajustar imagem` na foto da Maria Eduarda, com sliders horizontal e vertical.
- `index.html` - botao `Ajustar fotos` no podio Total Pass, com sliders por competidor.

### Modificado
- `index.html` - imagens passam a usar variaveis CSS de `object-position` para ajuste em tempo real.

### Removido
- `index.html` - botoes e paineis de reposicionamento foram desativados depois de travar os enquadramentos salvos.

---

## 2026-07-21 - Inicio do admin da MB News

### Adicionado
- `app/admin/mb-news/page.tsx` - nova rota administrativa da MB News.
- `components/admin/MbNewsAdminApp.tsx` - interface para criar, editar, excluir e salvar edicoes.
- `app/api/mb-news/editions/route.ts` - endpoint administrativo protegido por token.
- `lib/mb-news-store.ts` - persistencia das edicoes com Upstash Redis e fallback JSON local.
- `types/mb-news.ts` - tipos estruturados para edicoes e blocos da MB News.
- `content/mb-news-editions.json` - arquivo local inicial para desenvolvimento.

### Validado
- `npm run lint`
- `npm run build`

---

## 2026-07-23 — Prévia MB News Junho

### Adicionado
- Seção coletiva de promoções da equipe de Máquinas de Cartão.
- Seção corporativa sobre o momento de integração em clima de Copa.
- Cards de preparação para aniversariantes, contratações e ranking Total Pass.
- Ilustrações temporárias para os espaços das fotos ainda não disponíveis no workspace.

### Modificado
- `index.html` atualizado para a edição #003 de Junho de 2026.
- Edição de Maio preservada em `public/pages/mb-news-maio-2026.html`.

### Atualizado
- Fotos e três vídeos originais da Copa aplicados à edição de junho.
- Textos de promoções revisados com Mayko Hentzy, Natallia, Juliana Leite e Karoline.
- Efetivações de Thalles, Pedro Xavier e Lucas Trajano adicionadas.
- Galeria de promoções atualizada com as fotos reais de Mayko/Juliana/Natallia, Karoline e Thalles.
- Galeria de promoções convertida em carrossel acessível com imagem e texto sincronizados.
- Texto específico da efetivação de Thalles adicionado.
- Controles do carrossel simplificados com setas laterais centralizadas e indicadores sem nomes.
- Slides de Lucas Trajano e Pedro Xavier adicionados com fotos e textos sobre a efetivação para CLT.
- Nome de Natalia Araujo corrigido e sua posição alterada para acima de Juliana no primeiro slide.
- Fotos principais da Copa habilitadas para ampliação em tela cheia e download do arquivo original.
- Nova seção de aniversariantes de junho adicionada com dez retratos otimizados, galeria responsiva, ampliação e download.
- Galeria dos aniversariantes convertida em carrossel automático contínuo; ampliação removida e controle de pausa adicionado.
- Ranking TotalPass publicado com Renata Batista em 1º, Maria Seixas em 2º e Julia Lopes e Rodrigo Gadelha empatados em 3º.
- Bloco de novas contratações removido da edição de junho.
- Carrossel dos aniversariantes reorganizado em duas fileiras animadas, com cinco retratos por fileira e movimentos em sentidos opostos.
- Texto explicativo do carrossel de aniversariantes removido, com o botao de pausa mantido a direita.
- Secao `RH & Bem-estar` de maio reativada na edicao de junho, com cards de canais e orientacoes e link na navegacao.
- Quantidade de check-ins adicionada aos quatro cards do ranking TotalPass.
- Fundo tematico de academia e tag TotalPass adicionados a secao do ranking.

---

## 2026-08-12 — MB News Julho

### Adicionado
- Seção de plano de saúde para inclusão de dependentes e cônjuges, com tabela de valores e passo a passo no Bot Ben.
- Lista dos 11 aniversariantes de julho.
- Botões de download para o Calendário Nacional de Vacinação 2026 e informativos das campanhas de HPV e câncer do colo do útero.

### Modificado
- `index.html` atualizado para a edição #004 de Julho de 2026.
- Ranking TotalPass atualizado com Maria Seixas, Antônio Augusto e Luana Alves.
- Promoções e efetivações de Willian Amaral, Arthur, Evellyn, Julia Ramos, Julia Goulart e Beatriz Assumpção incluídas na edição.
- Seção de aniversariantes atualizada para o carrossel de duas faixas da edição de junho, com os seis retratos fornecidos para julho.
- Animação dos aniversariantes ajustada para iniciar independentemente do JavaScript externo e com ciclo mais perceptível.
- Carrossel dos seis aniversariantes de julho consolidado em uma única faixa.
- Pausa automática ao passar o cursor sobre os aniversariantes removida; o controle manual foi mantido.
- Retratos de Maria Seixas, Antônio Augusto e Luana Alves adicionados ao pódio TotalPass de julho.
