# CONTEXT.md — Estado Atual do Projeto

> Última atualização: 2026-04-30
> Atualizado por: IA - Antigravity

---

## Estado Atual

### O que está funcionando

- [x] Home principal (`public/mb-finance-completo.html`) — refatorada com separação total de CSS/JS
- [x] CSS extraído para `public/assets/css/main.css`
- [x] JS modularizado em `public/assets/js/` (infra / use-cases / ui)
- [x] Imagens organizadas em `public/images/` (incluindo subpastas `premios/` e `icones-premios/`)
- [x] HTMLs secundários organizados em `public/pages/`
- [x] Caminhos atualizados em todos os arquivos após reorganização
- [x] Blog (`/blog`) rodando em Next.js com Upstash Redis em produção
- [x] Página `/sobre` rodando em Next.js
- [x] Smooth scroll com Lenis
- [x] Parallax no hero e na seção "Como Funciona"
- [x] Carrossel de parceiros (marquee animado)
- [x] Accordion de produtos e FAQ
- [x] Modal de lead com roteamento para WhatsApp
- [x] Modal de parceria
- [x] Menu mobile + dropdown de produtos
- [x] Botão WhatsApp fixo
- [x] Deploy no Vercel via push para master
- [x] `public/pages/termos-de-uso.html` com texto auxiliar do hero ajustado para branco com 90% de opacidade
- [x] `public/pages/politica-de-privacidade.html` com texto auxiliar do hero ajustado para branco com 90% de opacidade
- [x] Seção `Escala` da timeline em `public/pages/sobre.html` com texto e ícone invertidos e checkpoint alinhado ao eixo principal
- [x] Painel Administrativo do Blog (`public/pages/blog-admin.html`) totalmente funcional
- [x] Calendário Editorial Visual para planejamento mensal de posts
- [x] Sistema de Agendamento (campo de Hora + Status Inteligente: Publicado/Agendado/Rascunho)
- [x] Métricas do Google Analytics 4 integradas por post no painel administrativo
- [x] Gerador de Conteúdo IA integrado ao CMS para sugestão automática de pautas
- [x] Radar Google Trends (Real-time) acoplado ao painel administrativo para análise de nicho
- [x] Portal de Recrutamento padronizado (`https://mbfinance.inhire.app/vagas`) em todo o ecossistema (Next.js + Legado)
- [x] Conformidade LGPD concluída em todo o site (Banner de cookies + bloqueio de GA4)
- [x] Refinamento do Navbar (Fundo branco no hover e logo dinâmico)
- [x] **Tipografia do Hero**
  - Título principal alterado para Inter Bold (700) para maior autoridade visual.
- [x] **Layout de Produtos**
  - [x] Seção "Nossos Produtos" convertida para grid de duas colunas com cards independentes sólidos (fundo branco)
- [x] Atualização de marca: mb negócios e mb tributos (casing minúsculo) em todo o site.
- [x] Deploy para GitHub e Vercel concluído.

### O que está pendente / incompleto

- [ ] Filtrar posts agendados no Blog (Next.js) — atualmente todos aparecem independente da data futura
- [ ] `public/pages/sobre.html` ainda com CSS/JS inline — precisa refatorar
- [ ] `public/pages/blog.html` ainda com CSS/JS inline — precisa refatorar
- [ ] `public/pages/politica-de-privacidade.html` e `termos-de-uso.html` — refatorar
- [ ] Número de WhatsApp ainda fictício — substituir pelo número real
- [ ] Logos dos bancos parceiros — adicionar na seção de parceiros
- [ ] Links de redes sociais no rodapé — apontar para perfis reais
- [ ] Depoimentos fictícios — substituir por depoimentos reais
- [ ] Depoimentos fictícios — substituir por depoimentos reais

### O que está quebrado / com bug

_(nenhum bug conhecido em produção no momento)_

---

## Onde o trabalho parou (última sessão — 2026-04-20)

### Painel Administrativo (Blog CMS) - ESTABILIZADO
- **Arquitetura:** Modularizada em 9 arquivos JS em `public/assets/js/admin/`.
- **UI/UX:** Sistema de abas isolado via `.admin-screen` e `#admin-body`. Problemas de sobreposição resolvidos.
- **Menu:** Ordem de prioridade definida (Métricas > Blog > Newsletter > Publicidade).
- **Autenticação:** Ativa e persistente via `localStorage`.
- **Funcionalidades:** Analytics (GA4), Blog (CRUD), Newsletter (Advanced UI), Calendário Editorial, Gerador IA (Trends).

Arquivos modificados nesta sessão:
- `public/pages/blog-admin.html`
- `public/pages/termos-de-uso.html`
- `public/mb-finance-completo.html` (Vídeo de fundo atualizado para `cidade-sem-avioes.mp4`)
- `CONTEXT.md`
- `DECISIONS.md`
- `TODO.md`
- `docs/sessions/2026-04-20.md`

- [x] Modularização completa do Painel Administrativo (`public/pages/blog-admin.html`)
- [x] Separação da lógica em módulos: `state`, `utils`, `blog`, `newsletter`, `calendar`, `analytics`, `ai`, `banners` e `core`.
- [x] Limpeza total de scripts legados e duplicados no dashboard.

Próximo passo recomendado: Ajustar o endpoint do Blog no Next.js para respeitar a data/hora e não exibir posts agendados (futuros). Outro ponto fundamental é iniciar a refatoração das páginas de política de privacidade e termos de uso para o padrão modular.

---

## Sessão 2026-04-30 — Ajuste de copy MB News

- Atualizado o texto editorial da MB News em `index.html`.
- Trocado "Que semana incrível!" por "Que mês incrível!".
- Removidos travessões do bloco editorial e ajustada a escrita para um tom mais natural.
- Alterado o rótulo "Destaque da semana" para "Destaque do mês".

Arquivos modificados nesta sessão:
- `index.html`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-04-30.md`

Estado atual: ajuste de conteúdo concluído e pronto para publicação no GitHub/Vercel.

Próximo passo recomendado: validar visualmente a página MB News em produção após o deploy.

---

## Sessão 2026-04-30 — Revisão editorial ampla

- Revisada a copy principal do site para um tom mais natural, direto e menos artificial.
- Ajustados textos da MB News, home principal, páginas Sobre, Blog, Capital de Giro e MB Tributos.
- Ajustados textos dos componentes React/Next de hero, produtos, processo, CTA, newsletter, números, depoimentos e páginas `/blog` e `/sobre`.
- Removidas estruturas com travessão e promessas genéricas em textos visíveis, priorizando clareza, comparação de opções e atendimento humano.
- Textos legais longos foram preservados para manter tom jurídico.

Arquivos modificados nesta sessão:
- `index.html`
- `public/mb-finance-completo.html`
- `public/pages/blog.html`
- `public/pages/capital-de-giro.html`
- `public/pages/mb-tributos.html`
- `public/pages/sobre.html`
- `app/blog/page.tsx`
- `app/sobre/page.tsx`
- `components/CTASection.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/HowItWorks.tsx`
- `components/NewsletterSignup.tsx`
- `components/PainSolution.tsx`
- `components/Products.tsx`
- `components/Stats.tsx`
- `components/Testimonials.tsx`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-04-30.md`

Estado atual: revisão editorial concluída nos textos de maior visibilidade. O arquivo `public/pages/mb-tributos.html` ainda usa encoding legado e foi alterado apenas pontualmente.

Próximo passo recomendado: validar visualmente as páginas principais após o deploy e, em uma próxima sessão, normalizar encoding dos HTMLs legados.

---

## Sessão 2026-04-30 — Ajuste pontual MB News

- Adicionado ponto final no título "Saúde em dia: seus exames, seu direito." em `index.html`.
- Ajustada a pontuação dos três cards de direitos de saúde para remover pontos e vírgula isolados no layout.
- Ajustado o texto do passo 3 para manter "48h após a emissão" na mesma linha.
- Ajustado o bloco "Novo plano de saúde" para usar melhor a largura do quadro, ampliando o texto e distribuindo os cards internos em grid.
- Alterado o rótulo do atendimento do WhatsApp para "RH MB Finance".

Arquivos modificados nesta sessão:
- `index.html`
- `CONTEXT.md`
- `TODO.md`
- `docs/sessions/2026-04-30.md`

Estado atual: ajustes de pontuação, quebra de linha, aproveitamento de espaço no quadro e rótulo do WhatsApp concluídos.

Próximo passo recomendado: publicar o ajuste se desejar refletir em produção.

---

## Sessão 2026-06-11 — Atualização MB News Maio

- Atualizada a MB News em `index.html` para a edição #002 de Maio de 2026.
- Atualizados título, navegação, hero, editorial, rodapé e navegação flutuante.
- Incluídas as pautas: ranking Total Pass top 3, benefícios da atividade física, promoção da Maria Eduarda, novo site da MB Finance, RH no WhatsApp, canal de denúncia via bot, NR1, benefícios da terapia, absenteísmo/pontualidade e acompanhamento da trimestral.
- Inserida a foto oficial da Maria Eduarda em `public/images/maria-eduarda-lider-qualidade.jpeg`.
- Ajustado o bloco de promoção para exibir a foto da Maria Eduarda ao lado do texto, com enquadramento mais vertical para mostrar mais o corpo.
- Removida a caixa flutuante do texto da promoção, deixando a copy alinhada diretamente com a imagem.
- Refeito o ranking Total Pass com fotos circulares de Antonio Costa, Julia Goulart e Raphael Machado ao lado dos nomes.
- Card do Antonio Costa destacado como grande campeão do ranking Total Pass.
- Pódio do Total Pass ampliado, com cards, fotos e tipografia maiores para reduzir a sensação de imagem embaçada e reforçar o destaque do campeão.
- Removido o bloco de aniversariantes da edição de maio.
- A porcentagem da trimestral ficou como `--%` com aviso de atualização, pois o número oficial não foi informado.

Arquivos modificados nesta sessão:
- `index.html`
- `public/images/maria-eduarda-lider-qualidade.jpeg`
- `public/images/total-pass-antonio-costa.jpg`
- `public/images/total-pass-julia-goulart.png`
- `public/images/total-pass-raphael-machado.jpg`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-06-11.md`

Estado atual: conteúdo da edição de maio aplicado e pronto para validação visual. A promoção da Maria Eduarda já usa foto oficial, cargo correto e layout lado a lado com o texto. O único dado editorial pendente é a porcentagem da trimestral.

Próximo passo recomendado: informar a porcentagem oficial da trimestral para substituir `--%`.

---

## Sessão 2026-06-15 — Ajuste de proporção da foto da Duda

- Ajustada a moldura da foto da Maria Eduarda em `index.html` para proporção 3:4.
- Reduzida a largura máxima da imagem para evitar que ela ocupe altura excessiva no bloco de promoção.
- Mantido o layout lado a lado com o texto e comportamento responsivo no mobile.
- Atualizados os textos visíveis da promoção para usar `Maria Eduarda`, sem o sobrenome Mendes.
- Reescrita a seção da promoção para reduzir repetição de `Maria Eduarda` e `Líder de Qualidade`, usando o título `Nova Líder de Qualidade`.
- Ajustado o subtítulo da promoção para permanecer em uma linha no desktop.
- Ajustado o pódio do Total Pass para exibir os três cards lado a lado no desktop.
- Adicionadas variáveis CSS por card (`--avatar-x` e `--avatar-y`) para controlar o enquadramento individual das fotos do ranking.
- Desativado o botão `Ajustar fotos` no pódio Total Pass, removendo sliders e JavaScript do editor visual.
- Ajustado o grid do Total Pass para não esticar os cards da Julia e do Raphael até a altura do card do campeão.
- Aumentado o tamanho das fotos da Julia e do Raphael para equilibrar melhor imagem, texto e fundo dos cards.
- Reordenado visualmente o pódio Total Pass no desktop para manter Antonio Costa, grande campeão, no centro.
- Recuperada a edição de Abril de 2026 em `public/pages/mb-news-abril-2026.html`.
- Ajustada a navegação mensal para manter conteúdos publicados acessíveis independentemente do mês atual.

Arquivos modificados nesta sessão:
- `index.html`
- `public/pages/mb-news-abril-2026.html`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-06-15.md`

Estado atual: bloco da promoção da Maria Eduarda com imagem menor, em 3:4, texto mais fluido, menor repetição de nome/cargo e subtítulo em linha única no desktop. O pódio do Total Pass está lado a lado no desktop, com Antonio no centro, cards secundários mais proporcionais, avatares maiores para Julia/Raphael e enquadramento fixo por CSS no HTML. A edição de Abril permanece acessível pelo menu mensal, sem depender do mês atual.

Próximo passo recomendado: validar visualmente a seção da promoção em produção ou preview após deploy.


---

## Arquitetura resumida

- **Frontend principal:** HTML estático (`public/mb-finance-completo.html`) com CSS/JS externos em `public/assets/`
- **Framework:** Next.js 14 (App Router) — usado para blog e página sobre
- **Estilo:** Tailwind CSS + custom tokens + `main.css`
- **Animações:** Lenis (smooth scroll), CSS @keyframes, IntersectionObserver
- **Blog:** Next.js + Upstash Redis (produção) / JSON local (dev)
- **Analytics:** Google Analytics 4
- **Deploy:** Vercel (push para master = deploy automático)
- **Captação de leads:** Modal → WhatsApp (principal) + Google Sheets (backup)

---

## Branch e commits recentes

- Branch principal: `master`
- Último conjunto de commits: ajustes visuais nas páginas legais e na timeline do `sobre`
- Rollback disponível via Vercel dashboard ou `git revert`

---

## Sessao 2026-06-16 - Correcao de rota da edicao de Abril

- Corrigido erro 404 em `https://mbnews.vercel.app/pages/mb-news-abril-2026.html`.
- Identificado que a Vercel esta publicando o projeto como site estatico pela raiz (`outputDirectory: "."`), mantendo arquivos de `public/pages/` acessiveis originalmente em `/public/pages/`.
- Adicionados rewrites em `vercel.json` para mapear `/pages/:path*` para `/public/pages/:path*`.
- Adicionado rewrite para `/images/:path*` apontar para `/public/images/:path*`, mantendo os caminhos usados pelos HTMLs da MB News.
- Deploy de producao executado e validado com `200 OK` para a pagina de Abril, home e imagem publica.

Arquivos modificados nesta sessao:
- `vercel.json`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-06-16.md`

Estado atual: a edicao de Abril esta publicada e acessivel em `/pages/mb-news-abril-2026.html`; a edicao de Maio continua na home.

Proximo passo recomendado: validar visualmente pelo navegador e informar a porcentagem oficial da trimestral para fechar a edicao de Maio.

---

## Sessao 2026-06-16 - Ajuste visual de reposicionamento de imagens

- Reativada a funcionalidade de ajuste de fotos no podio Total Pass.
- Adicionado controle de reposicionamento para a imagem da Maria Eduarda.
- Os controles usam sliders de eixo horizontal e vertical e atualizam o `object-position` em tempo real.
- Mantido o tamanho dos cards e das imagens; o ajuste altera apenas o enquadramento.
- Build de producao executado com sucesso.

Arquivos modificados nesta sessao:
- `index.html`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-06-16.md`

Estado atual: botoes `Ajustar imagem` e `Ajustar fotos` estao visiveis na edicao de Maio e permitem reposicionar a foto da Maria Eduarda e os avatares do Total Pass.

Proximo passo recomendado: validar visualmente em producao apos deploy.

---

## Sessão 2026-08-12 — MB News Julho

- Atualizada a página pública `index.html` para a edição #004 de Julho de 2026.
- Incluídas as seis promoções/efetivações fornecidas pelo RH.
- Criada a seção de inclusão de dependentes e cônjuges no plano de saúde, com tabela de valores e acesso ao Bot Ben.
- Adicionada a lista dos 11 aniversariantes de julho com nome e dia.
- Atualizado o ranking TotalPass: Maria Seixas (19), Antônio Augusto (18) e Luana Alves (17).
- Criado o bloco de vacinação com download do calendário nacional e dos informativos das campanhas anuais de HPV e câncer do colo do útero.

Arquivos modificados nesta sessão:
- `index.html`
- `public/downloads/mb-news/julho-2026/`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-08-12.md`

Estado atual: edição de julho pronta para validação visual e publicação.

Próximo passo recomendado: validar os valores do plano de saúde e os três downloads no ambiente publicado.

Publicação: commit `42754f7` enviado para `main`; a página `https://mbnews.vercel.app/` respondeu com HTTP 200 e conteúdo de julho confirmado em produção.

Atualização: a seção de aniversariantes de julho passou a usar o mesmo carrossel de duas faixas da edição de junho, com seis retratos enviados pelo RH (Edelyn, Matheus, Mayko, Paula, Ricardo e Vanessa), controle de pausa e suporte a redução de movimento.

Correção: a classe de animação passou a existir diretamente no HTML e a inicialização de ícones externos foi protegida. Assim, o movimento das faixas não depende do carregamento do script de ícones; a velocidade foi ajustada para 18 segundos por ciclo.

Atualização: como a edição possui seis aniversariantes com retrato, o carrossel foi simplificado para uma única faixa animada.

Correção: removida a pausa automática ao passar o cursor sobre o carrossel. A faixa agora segue em movimento contínuo e só pausa pelo botão visível.

Atualização: adicionados os retratos enviados pelo RH para Maria Seixas, Antônio Augusto e Luana Alves no pódio TotalPass de julho.

Correção: removida uma regra legada que escondia a área de foto do pódio de julho; os três retratos agora ficam visíveis acima de cada card.

Correção: o passo a passo de inclusão no plano de saúde foi reorganizado para manter cada instrução em um único bloco de leitura, sem separar frases e opções do Bot Ben.

Correção visual: títulos das campanhas de HPV e câncer do colo do útero ajustados para branco, garantindo contraste com os fundos coloridos.

Correção de downloads: adicionada regra de rota em `vercel.json` para publicar arquivos de `public/downloads/` em `/downloads/`. Os três PDFs existiam no repositório, mas retornavam 404 em produção por falta desse mapeamento.

---

## Sessao 2026-07-27 - Aniversariantes em duas fileiras animadas

- Os dez retratos foram divididos em duas fileiras, com cinco pessoas em cada uma.
- As fileiras passam continuamente em sentidos opostos, sem barra de rolagem visivel.
- O controle unico de pausa/continuacao foi mantido para as duas animacoes.
- O tamanho dos cards foi ajustado para exibir cinco retratos completos no desktop e manter boa leitura no celular.

Arquivo funcional modificado: `index.html`.

Estado atual: secao pronta para validacao e publicacao.

Proximo passo recomendado: validar a velocidade das duas fileiras no site publicado.

Atualizacao: o texto explicativo acima do carrossel foi removido, mantendo apenas o controle de pausa alinhado a direita.

Atualizacao: a secao `RH & Bem-estar` da edicao de maio foi reativada em junho, incluindo os cards de canais e orientacoes e o atalho na navegacao.

Atualizacao: o ranking TotalPass passou a mostrar a quantidade de check-ins de cada pessoa classificada.

Atualizacao: a secao TotalPass recebeu fundo visual de academia e uma tag identificadora acima da headline.

---

## Sessao 2026-07-24 - Ampliacao e download das fotos da Copa

- As duas fotos principais da secao da Copa agora abrem em uma visualizacao ampliada.
- A visualizacao oferece download do arquivo original e fechamento pelo botao, pelo fundo ou pela tecla Escape.
- Os gatilhos das fotos foram implementados como botoes acessiveis por mouse e teclado.
- Os videos da mesma secao permaneceram com a interacao de reproducao existente.

Arquivos modificados nesta sessao:
- `index.html`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-07-24.md`

Estado atual: galeria da Copa com ampliacao e download funcionais em desktop e celular.

Proximo passo recomendado: validar o comportamento no dominio de producao apos o deploy.

---

## Sessao 2026-07-24 - Secao de aniversariantes de junho

- Adicionada uma secao completa para os dez aniversariantes de junho.
- Os retratos do ZIP recebido foram convertidos de PNG para JPEG otimizado e publicados em `public/images/mb-news/junho/aniversariantes/`.
- A galeria usa cinco colunas no desktop e duas no celular, sem rolagem horizontal.
- Todas as fotos podem ser ampliadas e baixadas pelo lightbox existente.
- O texto editorial, o destaque da abertura e a navegacao foram atualizados para incluir a nova pauta.
- Como o pacote nao continha nomes nem datas associados aos retratos, a comunicacao foi mantida coletiva para nao inventar informacoes.

Estado atual: secao pronta, validada localmente e aguardando confirmacao no deploy publico.

Proximo passo recomendado: adicionar nomes e datas quando o RH enviar a relacao oficial.

---

## Sessao 2026-07-24 - Carrossel automatico dos aniversariantes

- Removida a ampliacao das fotos dos aniversariantes.
- A grade estatica foi substituida por um carrossel horizontal continuo com os dez retratos.
- O movimento pausa ao passar o mouse e tambem pode ser controlado pelo botao `Pausar/Continuar`.
- Em dispositivos configurados para reduzir movimento, a animacao e desativada e a galeria passa a aceitar rolagem horizontal manual.
- O carrossel usa uma copia visual escondida de leitores de tela para manter a repeticao continua sem duplicar o conteudo acessivel.

Estado atual: carrossel automatico validado em desktop, celular e modo de movimento reduzido.

Proximo passo recomendado: validar a velocidade do carrossel no dominio de producao.

---

## Sessao 2026-07-24 - Ranking TotalPass

- Adicionada uma secao completa para o ranking TotalPass com quatro colaboradores.
- Classificacao publicada: Renata Batista em 1o, Maria Seixas em 2o e empate de Julia Lopes e Rodrigo Gadelha em 3o.
- As imagens 163, 164, 165 e 166 foram associadas aos nomes informados e convertidas para JPEG otimizado.
- O conjunto de imagens foi reduzido de aproximadamente 4,15 MB para 612 KB.
- O podio usa quatro colunas no desktop e ordem vertical por classificacao no celular.
- Removido o bloco visivel de novas contratacoes e as referencias editoriais a essa pauta.
- Removido o ranking TotalPass antigo e oculto, que continha dados de outra edicao.

Estado atual: ranking TotalPass pronto e validado localmente em desktop e celular.

Proximo passo recomendado: confirmar o deploy no dominio publico.

---

## Sessão 2026-07-23 — Prévia da MB News Junho

- Atualizada a página pública `index.html` para a edição #003 de Junho de 2026.
- Preservada a edição de Maio em `public/pages/mb-news-maio-2026.html`.
- Criado o bloco coletivo de promoções de Maykon Hentzy, Juliana Leite e Nathalia, da equipe de Máquinas de Cartão.
- Criado o bloco corporativo sobre o momento de integração em clima de Copa.
- Adicionados espaços de preparação para aniversariantes, contratações e ranking Total Pass.
- Como as fotos enviadas na conversa não foram disponibilizadas como arquivos no workspace, a prévia usa ilustrações temporárias em `public/images/`.
- As duas fotos e os três vídeos da Copa foram posteriormente encontrados na pasta `copa/`, organizados em `public/images/mb-news/junho/` e `public/videos/mb-news/junho/` e aplicados à página.
- A seção de promoções foi ampliada com os textos revisados de Mayko Hentzy, Natallia, Juliana Leite e Karoline, além das efetivações de Thalles, Pedro Xavier e Lucas Trajano.
- A seção de promoções passou a usar carrossel acessível, sincronizando cada imagem com seu respectivo texto e incluindo conteúdo específico para Thalles.
- Os controles do carrossel foram simplificados: setas nas laterais centrais e indicadores inferiores sem nomes visíveis.
- Lucas Trajano e Pedro Xavier foram adicionados ao carrossel com fotos e textos individuais sobre a efetivação de estagiário para CLT.
- Nome corrigido para Natalia Araujo e ordem do primeiro slide alterada para Mayko, Natalia e Juliana.

Estado atual: prévia de junho pronta para deploy e validação visual.

Próximo passo recomendado: completar aniversariantes, contratações e ranking Total Pass; adicionar fotos de Pedro Xavier e Lucas Trajano caso sejam disponibilizadas.

---

## Sessao 2026-07-21 - Inicio do Admin da MB News

- Criada a primeira base administrativa da MB News em Next.js.
- Adicionada a rota `/admin/mb-news` com tela para criar, editar, excluir e salvar edicoes.
- Adicionado modelo estruturado para edicoes da MB News com metadados, hero, editorial e blocos de conteudo.
- Adicionado endpoint `/api/mb-news/editions` protegido por token administrativo.
- Adicionada camada de persistencia em `lib/mb-news-store.ts`, usando Upstash Redis quando configurado e JSON local em desenvolvimento.
- Adicionado arquivo inicial `content/mb-news-editions.json`.
- Build de producao executado com sucesso.
- Servidor local iniciado em `http://localhost:3001/admin/mb-news` porque a porta 3000 ja estava ocupada.

Arquivos criados/modificados nesta sessao:
- `app/admin/mb-news/page.tsx`
- `app/api/mb-news/editions/route.ts`
- `components/admin/MbNewsAdminApp.tsx`
- `types/mb-news.ts`
- `lib/mb-news-store.ts`
- `content/mb-news-editions.json`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-07-21.md`

Estado atual: o CMS da MB News ja existe como MVP administrativo, mas ainda nao renderiza a pagina publica da MB News a partir do banco e ainda nao possui login de usuario com Supabase.

Proximo passo recomendado: conectar as edicoes publicadas a uma rota publica dinamica da MB News e, em seguida, substituir o token simples por Supabase Auth com permissoes de editor.

---

## Sessao 2026-06-16 - Travamento dos enquadramentos de imagem

- Removidos os botoes e paineis de reposicionamento da foto da Maria Eduarda e do podio Total Pass.
- Removido o JavaScript dos sliders de ajuste.
- Mantidos os valores de enquadramento salvos no HTML por variaveis CSS:
  - Maria Eduarda: `--photo-x:50%; --photo-y:55%;`
  - Antonio Costa: `--avatar-x:50%; --avatar-y:36%;`
  - Julia Goulart: `--avatar-x:50%; --avatar-y:34%;`
  - Raphael Machado: `--avatar-x:50%; --avatar-y:32%;`
- Build de producao executado com sucesso.

Arquivos modificados nesta sessao:
- `index.html`
- `CONTEXT.md`
- `TODO.md`
- `CHANGELOG.md`
- `docs/sessions/2026-06-16.md`

Estado atual: imagens travadas nos valores salvos em codigo, sem interface publica de ajuste.

Proximo passo recomendado: validar visualmente em producao apos deploy.

---

## Sessão 2026-08-13 — Carrossel de promoções de julho

- Substituídos os cards textuais de promoções/efetivações de julho pelo carrossel manual já adotado na edição de junho.
- Incluídas as fotos de Willian Amaral, Arthur e Evellyn (na mesma foto), Julia Luiza, Julia Goulart e Beatriz Assumpção.
- Arthur foi identificado como efetivado em Relacionamento e Evellyn como efetivada em Hunter.
- Julia Luiza e Julia Goulart foram reunidas em um único slide de Abertura de Contas, com o texto da trajetória compartilhada no Programa de Estágio.
- O slide de Beatriz recebeu a trajetória completa até a promoção para Especialista de T&D.
- Substituídas as duas fotos individuais das Julias pela nova foto conjunta enviada pelo RH.
- Padronizada a altura das telas do carrossel de reconhecimentos no desktop para preservar o mesmo tamanho entre todos os slides.
- Incluída a trajetória da Evellyn desde o estágio, com a efetivação para Hunter de Adquirência após 11 meses.
- Corrigido o setor do Arthur para Farmer de Adquirência e incluído o resumo de sua trajetória por projetos internos.
- Esclarecida a trajetória da Beatriz: efetivação em Adquirência e posterior promoção para Treinamento e Desenvolvimento.
- Reestruturada a seção de saúde: vacinação separada das campanhas de HPV e câncer do colo do útero; removidos os downloads indevidos dos cards de campanhas e os atalhos por faixa etária.
- Atualizados os textos informativos e inserido o direito de ausência para exames preventivos, com referência corrigida para o art. 473, XII, da CLT.
- Reordenado o carrossel de Reconhecimento: Beatriz Assumpção abre a sequência e Willian Amaral é o último destaque.

Arquivos modificados nesta sessão:
- `index.html`
- `public/images/mb-news/julho/promocoes/`
- `CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `CHANGELOG.md`
- `docs/sessions/2026-08-13.md`

Estado atual: o bloco de reconhecimento de julho está pronto para validação visual e publicação.

Próximo passo recomendado: conferir o enquadramento das quatro telas do carrossel no ambiente publicado após o deploy.
