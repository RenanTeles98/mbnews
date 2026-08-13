# DECISIONS.md â€” Registro de DecisÃµes TÃ©cnicas

> Cada decisÃ£o importante fica registrada aqui com contexto e alternativas.
> Formato: ADR (Architecture Decision Record)

---

## ADR-001: HTML estÃ¡tico como pÃ¡gina principal em vez de migrar tudo para Next.js

**Data:** 2026-04-14
**Status:** Aceita
**Decisores:** Dono do projeto + IA

### Contexto

O site nasceu como HTML puro. Migrar tudo de uma vez para Next.js seria arriscado e desnecessÃ¡rio para o estÃ¡gio atual do projeto.

### DecisÃ£o

Manter a home em HTML estÃ¡tico (`public/mb-finance-completo.html`) e adotar a estratÃ©gia **Strangler Fig**: migrar gradualmente para Next.js conforme a necessidade surgir.

### Alternativas Consideradas

- **MigraÃ§Ã£o total para Next.js:** unificaria a base, mas com alto risco e esforÃ§o desproporcional
- **Strangler Fig (escolhida):** permite evoluÃ§Ã£o incremental com risco controlado

### ConsequÃªncias

- O site continua no ar durante a evoluÃ§Ã£o
- Dois padrÃµes coexistem temporariamente (HTML legado + Next.js)

---

## ADR-002: Clean Architecture no JavaScript do HTML legado

**Data:** 2026-04-14
**Status:** Aceita
**Decisores:** Dono do projeto + IA

### Contexto

O `mb-finance-completo.html` tinha estilos e scripts inline demais, dificultando manutenÃ§Ã£o e reaproveitamento.

### DecisÃ£o

Extrair CSS e JS do HTML, organizando o JavaScript em `infra/`, `use-cases/` e `ui/` dentro de `public/assets/`.

### Alternativas Consideradas

- **Bundler com mÃ³dulos ES:** mais robusto, mas com complexidade desnecessÃ¡ria para o estÃ¡gio atual
- **Arquivos separados por responsabilidade (escolhida):** simples, sem build step e suficiente para o volume atual

### ConsequÃªncias

- HTML mais limpo
- CSS e JS editÃ¡veis sem voltar a colocar lÃ³gica inline

---

## ADR-003: Upstash Redis para armazenamento do blog

**Data:** 2026-04-14
**Status:** Aceita

### Contexto

O blog precisava de persistÃªncia compatÃ­vel com o ambiente serverless da Vercel.

### DecisÃ£o

Usar Upstash Redis (Vercel KV) em produÃ§Ã£o, com fallback para JSON local em desenvolvimento.

### ConsequÃªncias

- SoluÃ§Ã£o simples e suficiente para o volume atual de posts

---

## ADR-004: Vercel como plataforma de deploy

**Data:** 2026-04-14
**Status:** Aceita

### Contexto

O projeto precisa de hospedagem compatÃ­vel com Next.js, pÃ¡ginas estÃ¡ticas e deploy contÃ­nuo simples.

### DecisÃ£o

Deploy no Vercel com CI/CD automÃ¡tico via push para `master`.

### ConsequÃªncias

- Push para `master` gera deploy automÃ¡tico
- Rollback fica disponÃ­vel no painel da Vercel

---

## ADR-005: Google Sheets como CRM de leads (via Apps Script)

**Data:** 2026-04-14
**Status:** Aceita

### Contexto

Os leads precisavam cair em uma ferramenta simples e acessÃ­vel ao dono do projeto.

### DecisÃ£o

Enviar leads para Google Sheets via Google Apps Script, com fallback local em `localStorage`.

### ConsequÃªncias

- OperaÃ§Ã£o simples para o dono
- Menos complexidade do que introduzir um CRM completo

---

## ADR-006: Ajustes visuais pontuais nas pÃ¡ginas legais permanecem locais atÃ© a refatoraÃ§Ã£o

**Data:** 2026-04-15
**Status:** Aceita
**Decisores:** Dono do projeto + IA

### Contexto

As pÃ¡ginas legais ainda usam CSS local no prÃ³prio HTML. Surgiu uma demanda pequena e imediata para aumentar a opacidade do texto auxiliar do hero em `public/pages/termos-de-uso.html` e `public/pages/politica-de-privacidade.html`.

### DecisÃ£o

Aplicar o ajuste visual diretamente no CSS local existente dessas pÃ¡ginas, sem ampliar o escopo para a refatoraÃ§Ã£o estrutural completa nesta sessÃ£o.

### Alternativas Consideradas

- **Extrair CSS agora para `public/assets/`:** mais alinhado ao padrÃ£o final, mas desproporcional para um ajuste pontual
- **Ajuste local no arquivo atual (escolhida):** resolve imediatamente com risco baixo e sem mexer na arquitetura

### ConsequÃªncias

- MantÃ©m rapidez para correÃ§Ãµes visuais pequenas nas pÃ¡ginas legais legadas
- A refatoraÃ§Ã£o completa dessas pÃ¡ginas continua pendente

---

## ADR-007: O bloco "Escala" da timeline do Sobre volta ao eixo visual padrÃ£o

**Data:** 2026-04-15
**Status:** Aceita
**Decisores:** Dono do projeto + IA

### Contexto

No bloco `Escala` (`2020-2022`) da timeline em `public/pages/sobre.html`, o texto estava no lado oposto do Ã­cone e o checkpoint havia sido deslocado para baixo da linha horizontal, criando desalinhamento visual em relaÃ§Ã£o aos demais marcos.

### DecisÃ£o

Recolocar o bloco `Escala` no fluxo padrÃ£o da timeline: conteÃºdo Ã  esquerda, Ã­cone Ã  direita e checkpoint alinhado novamente ao eixo horizontal principal.

### Alternativas Consideradas

- **Manter o layout invertido e ajustar sÃ³ o checkpoint:** corrigiria parcialmente o problema, mas preservaria um padrÃ£o inconsistente no bloco
- **Voltar ao layout padrÃ£o (escolhida):** simplifica a composiÃ§Ã£o e melhora a leitura visual da sequÃªncia

### ConsequÃªncias

- O bloco `Escala` fica consistente com a linguagem visual dos outros marcos da timeline
- O eixo da timeline volta a parecer contÃ­nuo e intencional

---

## ADR-008: SimplificaÃ§Ã£o do Menu Administrativo do Blog

**Data:** 2026-04-20
**Status:** Aceita
**Decisores:** Dono do projeto + IA

### Contexto

O menu administrativo do blog (`public/pages/blog-admin.html`) continha as seÃ§Ãµes "Podcast" e "Banners". "Podcast" ainda era um placeholder ("Em breve") e "Banners" causava certa confusÃ£o semÃ¢ntica.

### DecisÃ£o

Remover o item "Podcast" e renomear "Banners" para "Publicidade" para melhor alinhamento com a finalidade de gerenciar slots de anÃºncios.

### ConsequÃªncias

- Menu mais limpo e focado no conteÃºdo atual.
- Melhor clareza sobre a funcionalidade de gerenciamento de anÃºncios.


---

## ADR-009: Implementação do Calendário Editorial e Status de Agendamento
**Data:** 2026-04-20
**Status:** Aceita
**Decisores:** Dono do projeto + IA

### Contexto
O usuário precisava de uma forma visual de planejar o conteúdo mensal do blog e agendar posts para datas e horários futuros para automação.

### Decisão
Implementar uma aba de **Calendário Editorial** (visão de matriz mensal) no painel administrativo e expandir o schema de posts para incluir um campo 'time'. Implementar uma lógica de status baseada na data atual:
- **Publicado:** Data no passado e 'published' true.
- **Agendado:** Data no futuro e 'published' true.
- **Rascunho:** 'published' false.

### Consequências
- Maior controle editorial sobre o fluxo de postagens.
- Exigência de ajuste no frontend do blog (Next.js) para filtrar posts agendados e não exibi-los antes do tempo.

---

## ADR-010: Integração de Gerador de Conteúdo IA e Radar Google Trends
**Data:** 2026-04-20
**Status:** Aceita
**Decisores:** Dono do projeto + IA

### Contexto
O fluxo de criação de conteúdo era manual e dependia de pesquisas externas de tendências. O usuário desejava centralizar a inteligência de pauta dentro do CMS.

### Decisão
Implementar uma aba "Gerador (IA)" que combina:
1. **Radar Google Trends:** Injeção de widgets oficiais do Google Trends via Iframe dinâmico para monitorar termos do nicho (Crédito, Mercado, etc).
2. **Gerador de Ideias:** Sistema de sugestão de pautas baseado nos pilares da MB Finance.
3. **Escrita Assistida:** Integração com o editor de posts para transformar ideias em rascunhos com um clique.

### Consequências
- Aumento drástico na produtividade editorial.
- Dependência de scripts externos (Google Trends) que podem ter políticas de CORS ou carregamento variável.
- Necessidade de futura expansão da base de prompts/tópicos para manter a relevância das sugestões.

---

## ADR-011: Unificakuo do Canal de Recrutamento (Inhire portal)

**Data:** 2026-04-20
**Status:** Aceita

### Contexto
## ADR-012: Padronização de Links de Recrutamento (Inhire)

**Data:** 2026-04-18
**Status:** Implementado

### Contexto
A MB Finance utiliza um portal externo de recrutamento (Inhire). Houve a necessidade de redirecionar todos os links legados de 'Trabalhe Conosco' que apontavam para âncoras internas (#vagas) ou caminhos relativos inexistentes.

### Decisão
Substituir todas as referências ao link de recrutamento nos rodapés (Next.js e HTML Legado) pela URL absoluta: `https://mbfinance.inhire.app/vagas`.

### Consequências
- Fluxo de candidatos centralizado no portal oficial.
- Eliminação de links quebrados em páginas secundárias.
- Recuperação estrutural da página de Termos de Uso (que apresentava corrupção de markup no rodapé).

## ADR-013: Arquitetura de Isolamento de Abas (Admin Dashboard)

**Data:** 2026-04-22
**Status:** Implementado

### Contexto
Após a modularização do `blog-admin.html`, as seções administrativas (Métricas, Blog, Newsletter, etc.) estavam sendo renderizadas simultaneamente ou sobrepostas, causando confusão visual e falhas na interação ("tudo misturado").

### Decisão
Implementar um padrão de **Single Page Application (SPA)** simplificado usando CSS e JS:
1. **Container Mestre:** Criar um `#admin-body` que envolve todas as telas.
2. **Abas Isoladas:** Cada seção administrativa deve ser um filho direto de `#admin-body` com a classe `.admin-screen`.
3. **Lógica Visual:**
   - `.admin-screen { display: none; }`
   - `.admin-screen.active { display: block; }` (ou `flex` para posts).
4. **Orquestração:** O `admin-core.js` gerencia a alternância de classes `active` tanto nos containers de tela quanto nos botões de navegação.

### Consequências
- **Positivas:** Isolamento total entre funcionalidades; navegação limpa e previsível; facilidade para adicionar novas telas.
- **Negativas:** Requer cuidado extra com o balanço de tags `div` durante refatorações.

---

## ADR-014: Ajuste pontual de copy da MB News no HTML atual

**Data:** 2026-04-30
**Status:** Implementado
**Decisores:** Dono do projeto + IA

### Contexto

O texto editorial da MB News precisava trocar a referência de semana para mês e remover uma estrutura com travessões que deixava o texto com aparência artificial.

### Decisão

Aplicar o ajuste diretamente em `index.html`, onde a edição atual da MB News está publicada, sem alterar estrutura, estilos ou componentes.

### Alternativas Consideradas

- **Refatorar a MB News antes do ajuste:** esforço desproporcional para uma alteração de conteúdo.
- **Ajuste direto no HTML atual (escolhida):** resolve a demanda imediata com baixo risco.

### Consequências

- O conteúdo fica alinhado ao recorte mensal da edição.
- A estrutura da página permanece estável para publicação rápida.

---

## ADR-015: Revisão editorial ampla sem refatoração estrutural

**Data:** 2026-04-30
**Status:** Implementado
**Decisores:** Dono do projeto + IA

### Contexto

O dono do projeto pediu uma revisão dos textos do site para seguir o tom mais natural aplicado na MB News: menos estrutura artificial, menos travessões e menos promessas genéricas.

### Decisão

Aplicar a revisão diretamente nos textos visíveis de maior impacto, preservando a estrutura HTML/React atual. Páginas legais longas foram mantidas com tom jurídico. Artigos extensos do blog ficaram para uma rodada separada, por exigirem cuidado de SEO e consistência editorial.

### Alternativas Consideradas

- **Reescrever todo o conteúdo, incluindo artigos e termos legais:** maior abrangência, mas com risco de mexer em SEO, precisão jurídica e conteúdo longo sem validação.
- **Revisão focada nas páginas e componentes de maior visibilidade (escolhida):** melhora rapidamente a percepção do site com menor risco.

### Consequências

- A linguagem do site fica mais direta, humana e consistente.
- A estrutura técnica não muda, reduzindo risco de regressão visual.
- Fica pendente uma revisão específica dos artigos longos e a normalização de encoding dos HTMLs legados.

---

## ADR-016: Atualização editorial da MB News de maio sem inventar dados pendentes

**Data:** 2026-06-11
**Status:** Implementado
**Decisores:** Dono do projeto + IA

### Contexto

A edição de maio da MB News precisava incluir novas pautas internas, mas algumas informações vieram incompletas: fotos oficiais e porcentagem alcançada da trimestral.

### Decisão

Atualizar `index.html` com o conteúdo editorial disponível e usar placeholders explícitos para os itens pendentes, sem reutilizar foto antiga como se fosse atual e sem inventar a porcentagem da trimestral. Após envio da foto da Maria Eduarda, mover o arquivo para `public/images/` e referenciar a imagem pública no HTML.

### Alternativas Consideradas

- **Inventar ou estimar a porcentagem:** rejeitado por risco de publicar dado interno incorreto.
- **Reutilizar foto antiga do bloco de promoções:** rejeitado por risco de confundir a edição atual.
- **Publicar placeholders claros (escolhida):** permite avançar a edição e mantém pendências visíveis para troca posterior.

### Consequências

- A edição fica pronta para validação com todas as pautas estruturadas.
- A promoção da Maria Eduarda usa a foto oficial e o cargo correto: de Analista de Negócios para Líder de Qualidade.
- O bloco de promoção usa layout lado a lado no desktop e empilhado no mobile para valorizar a foto e manter leitura confortável.
- O texto da promoção fica fora de card/caixa para alinhar melhor com a imagem e evitar sensação de elemento flutuante.
- A foto da promoção da Maria Eduarda usa moldura 3:4 com largura máxima controlada para preservar o enquadramento sem dominar a seção.
- Os textos visíveis da promoção passam a usar `Maria Eduarda`, sem o sobrenome Mendes, conforme ajuste editorial.
- A seção da promoção evita repetir nome e cargo em todos os elementos, alternando título, transição de cargo e texto de reconhecimento para melhorar fluidez.
- Fotos do ranking Total Pass são copiadas para `public/images/` e exibidas como avatares circulares para seguir a regra de imagens públicas do projeto.
- O primeiro colocado do Total Pass recebe tratamento visual de destaque para reforçar o reconhecimento do campeão.
- O pódio do Total Pass usa avatares e cards maiores para melhorar leitura e reduzir perda visual percebida em fotos pequenas.
- O pódio do Total Pass usa três colunas no desktop e uma coluna no mobile para equilibrar destaque e responsividade.
- O enquadramento dos avatares do Total Pass é controlado por variáveis CSS (`--avatar-x` e `--avatar-y`) aplicadas em cada card, permitindo ajuste fino sem alterar os arquivos de imagem.
- A função visual `Ajustar fotos` foi desativada novamente para manter o pódio limpo; o enquadramento permanece fixo por variáveis CSS no HTML.
- O grid do pódio usa `align-items: start` para impedir que os cards da Julia e do Raphael fiquem artificialmente altos por causa do card maior do campeão.
- As fotos da Julia e do Raphael foram aumentadas para melhorar proporção entre avatar, texto e área branca dos cards secundários.
- A posição visual do pódio no desktop usa `order` em CSS para colocar Antonio Costa no centro sem alterar a ordem semântica do conteúdo no HTML.
- Edições já publicadas da MB News devem ficar acessíveis como páginas de arquivo em `public/pages/`, e o menu mensal deve apontar para essas páginas em vez de bloquear meses anteriores.
- O bloco de aniversariantes foi removido da edição de maio por solicitação editorial.
- A porcentagem oficial ainda precisa ser fornecida para fechar a publicação final.

---

## ADR-017: Rewrites para rotas estaticas da MB News

**Data:** 2026-06-16
**Status:** Implementado
**Decisores:** Dono do projeto + IA

### Contexto

A edicao arquivada de Abril foi criada em `public/pages/mb-news-abril-2026.html`, mas a Vercel esta configurada com `outputDirectory: "."`. Nesse modo, o arquivo ficava acessivel em `/public/pages/mb-news-abril-2026.html`, enquanto a navegacao apontava para `/pages/mb-news-abril-2026.html`, gerando 404.

### Decisao

Adicionar rewrites no `vercel.json` para mapear `/pages/:path*` para `/public/pages/:path*` e `/images/:path*` para `/public/images/:path*`.

### Alternativas Consideradas

- **Mover HTMLs arquivados para uma pasta `pages/` na raiz:** rejeitado porque conflita com a regra do projeto de manter HTMLs secundarios em `public/pages/`.
- **Alterar os links para `/public/pages/...`:** rejeitado por deixar URLs publicas menos limpas e expor detalhe interno da estrutura.
- **Usar rewrites (escolhida):** preserva a organizacao do projeto e mantem URLs publicas simples.

### Consequencias

- A MB News pode continuar criando arquivos em `public/pages/`.
- URLs publicas permanecem no padrao `/pages/...`.
- Imagens referenciadas como `/images/...` tambem sao servidas corretamente no deploy estatico atual.

---

## ADR-018: Controles visuais para enquadramento de fotos da MB News

**Data:** 2026-06-16
**Status:** Implementado
**Decisores:** Dono do projeto + IA

### Contexto

O usuario pediu para reativar a funcionalidade de reposicionamento das imagens do podio Total Pass e incluir o mesmo recurso na foto da Maria Eduarda.

### Decisao

Adicionar botoes de ajuste com sliders horizontais e verticais que alteram variaveis CSS de `object-position` em tempo real.

### Alternativas Consideradas

- **Editar as imagens originais:** rejeitado para preservar os arquivos enviados.
- **Criar recortes fixos novos:** rejeitado porque o usuario precisa ajustar visualmente o enquadramento.
- **Usar sliders por imagem (escolhida):** permite ajuste rapido sem alterar tamanho de cards ou proporcao das molduras.

### Consequencias

- A foto da Maria Eduarda e os avatares do Total Pass podem ser reposicionados diretamente na pagina.
- O layout permanece estavel, pois os controles alteram somente as variaveis de posicionamento da imagem.
- Apos validacao visual, os controles podem ser removidos e os valores finais podem permanecer travados nas variaveis CSS inline.

---

## ADR-019: MVP administrativo da MB News em Next.js com store Upstash/JSON

**Data:** 2026-07-21
**Status:** Implementado
**Decisores:** Dono do projeto + IA

### Contexto

O dono do projeto quer uma area administrativa para dar acesso a outra pessoa e permitir cadastro manual de conteudos da MB News sem editar HTML diretamente.

### Decisao

Criar uma primeira vertical do CMS da MB News dentro do Next.js, em `/admin/mb-news`, com:
- modelo estruturado de edicoes em `types/mb-news.ts`;
- endpoint protegido por token em `/api/mb-news/editions`;
- persistencia em `lib/mb-news-store.ts`, reaproveitando Upstash Redis quando configurado e JSON local em desenvolvimento;
- interface administrativa para metadados, hero, editorial, blocos de conteudo e preview rapido.

### Alternativas Consideradas

- **Editar HTML manualmente:** rejeitado porque nao resolve o acesso administrativo para terceiros.
- **Migrar diretamente para Supabase completo:** melhor como destino, mas exigiria credenciais e configuracao externa antes de entregar valor.
- **MVP com Upstash/JSON (escolhida):** aproveita a infraestrutura existente e cria a base do CMS sem bloquear em servicos externos novos.

### Consequencias

- A MB News passa a ter uma estrutura administrativa propria.
- A pagina publica ainda precisa ser conectada ao novo store.
- O token simples deve ser substituido por Supabase Auth antes de liberar acesso recorrente para outra pessoa.
- Upload permanente de imagens ainda precisa ser implementado em Supabase Storage ou Vercel Blob.

---

## ADR-020: Publicar prévia de junho com conteúdo confirmado e imagens temporárias

**Data:** 2026-07-23
**Status:** Implementado

### Contexto

A edição de junho precisava ser visualizada antes de todas as pautas e arquivos de imagem estarem disponíveis no repositório.

### Decisão

Preservar maio como página de arquivo e publicar junho na página principal apenas com os dados já confirmados. Usar ilustrações temporárias nos espaços das fotos e sinalizar aniversariantes, contratações e ranking Total Pass como conteúdos em preparação.

### Consequências

- A estrutura visual pode ser validada imediatamente.
- Nenhum nome, resultado ou dado interno pendente é inventado.
- As fotos originais deverão substituir os SVGs temporários antes do fechamento editorial.
- As mídias da Copa devem ser publicadas em caminhos próprios sob `public/images/mb-news/junho/` e `public/videos/mb-news/junho/`, com nomes de arquivo estáveis e sem espaços.
- O bloco de promoções deve usar carrossel manual, sem reprodução automática, com controles visíveis, navegação por teclado, atualização de texto sincronizada e respeito a `prefers-reduced-motion`.

---

## ADR-021: Reutilizar o lightbox da revista na galeria da Copa

**Data:** 2026-07-24
**Status:** Implementado

### Decisão

Reutilizar a visualização ampliada já existente no `index.html` para as duas fotos principais da Copa, adicionando gatilhos semânticos, nome acessível, gerenciamento de foco e download do arquivo original. Os vídeos ficam fora do lightbox para preservar seus controles nativos.

### Motivo

A solução mantém a interface consistente com a revista, evita duplicação de componentes e separa claramente a ação de visualizar fotos da ação de reproduzir vídeos.

---

## ADR-022: Publicar aniversariantes sem nomes não confirmados

**Data:** 2026-07-24
**Status:** Implementado

### Decisão

Publicar os dez retratos em uma celebração coletiva, sem atribuir nomes ou datas, porque o ZIP recebido continha apenas imagens numeradas. Reutilizar o lightbox para ampliação e download e converter os PNGs para JPEG com qualidade 88 para reduzir o peso da página.

### Consequências

- Nenhuma identidade ou data é inferida a partir das fotos.
- Os arquivos publicados foram reduzidos de aproximadamente 12,5 MB para 1,26 MB no total.
- Nomes e datas poderão ser acrescentados aos cartões quando houver uma relação oficial do RH.

---

## ADR-023: Usar movimento contínuo com controle de pausa nos aniversariantes

**Data:** 2026-07-24
**Status:** Implementado

### Decisão

Substituir a grade clicável por um carrossel horizontal contínuo, sem lightbox. Repetir visualmente o conjunto de retratos para criar uma transição sem cortes, ocultando a cópia dos leitores de tela. Disponibilizar pausa manual e desativar a animação quando `prefers-reduced-motion` estiver ativo.

### Motivo

O movimento contínuo atende ao formato solicitado sem transformar as fotos em ações de clique. O controle de pausa e a alternativa sem animação evitam que o conteúdo em movimento prejudique a leitura ou a acessibilidade.

---

## ADR-024: Representar empate com dois cartões de terceiro lugar

**Data:** 2026-07-24
**Status:** Implementado

### Decisão

Exibir Renata Batista em primeiro lugar, Maria Seixas em segundo e dois cartões equivalentes de terceiro lugar para Julia Lopes e Rodrigo Gadelha. No desktop, o primeiro lugar recebe elevação visual; no celular, os cartões seguem a ordem lógica da classificação.

### Motivo

O empate precisa ser comunicado por texto e posição, sem depender apenas da cor. A ordem lógica no HTML também preserva a leitura correta por tecnologias assistivas.

---

## ADR-025: Dividir os aniversariantes em duas faixas de cinco retratos

**Data:** 2026-07-27
**Status:** Implementado

### Decisao

Separar os dez aniversariantes em dois grupos logicos de cinco cards e animar as faixas horizontalmente em sentidos opostos. Duplicar cada grupo apenas para garantir o ciclo visual continuo, ocultando as copias dos leitores de tela. Um unico botao pausa ou retoma as duas faixas.

### Motivo

A composicao torna evidente que existem dez pessoas, distribui melhor os retratos e cria movimento sem expor uma barra de rolagem. Como a animacao foi solicitada explicitamente, ela permanece ativa no layout; o usuario pode interrompe-la a qualquer momento pelo controle visivel.

Atualizacao de interface: o texto explicativo foi retirado a pedido do responsavel pela revista; o botao de pausa foi preservado e alinhado a direita.

Atualizacao editorial: a secao completa `RH & Bem-estar` foi mantida entre maio e junho para reforcar canais permanentes de orientacao, com acesso direto pela navegacao da edicao.

Atualizacao de dados: os check-ins foram exibidos separadamente da colocacao para manter a leitura do ranking e do volume de participacao igualmente clara.

Atualizacao visual: uma imagem de academia foi aplicada como fundo com sobreposicao azul-petroleo para relacionar a secao ao TotalPass sem reduzir o contraste dos textos e cards.

---

## ADR-026: Disponibilizar materiais de saúde de julho como downloads locais

**Data:** 2026-08-12
**Status:** Implementado

### Decisão

Publicar o calendário nacional de vacinação e os informativos das campanhas de HPV e câncer do colo do útero em `public/downloads/mb-news/julho-2026/`, com botões de download direto na edição.

### Motivo

Manter os arquivos dentro do projeto evita links externos instáveis e permite que o material preparado pelo RH seja acessado pela equipe de forma simples. As campanhas usam cores distintas e títulos explícitos, para que a informação não dependa apenas de cor.

### Consequências

- Os PDFs permanecem disponíveis mesmo se as fontes externas mudarem.
- O botão do calendário oferece a versão completa e os atalhos por faixa etária apontam para o mesmo documento enquanto não forem fornecidos arquivos separados.

---

## ADR-027: Reutilizar o carrossel de junho para aniversariantes de julho

**Data:** 2026-08-12
**Status:** Implementado

### Decisão

Substituir a lista textual de aniversariantes de julho pelo carrossel com duas faixas animadas já utilizado em junho. Usar exclusivamente os seis retratos fornecidos pelo RH e preservar o botão de pausa e `prefers-reduced-motion`.

### Motivo

O padrão já é familiar para a equipe e mantém os retratos em destaque, sem utilizar imagens de pessoas que não foram fornecidas para esta edição.

### Atualização

A classe que inicia a animação foi movida para o HTML, enquanto o JavaScript ficou responsável apenas pela duplicação visual e pelo botão de pausa. A chamada da biblioteca de ícones também passou a ser condicional, evitando que uma falha externa interrompa a animação.

### Atualização de layout

Com seis retratos disponíveis, os cards foram reunidos em uma única faixa. Isso reduz a altura da seção e mantém o carrossel contínuo, pois o grupo é duplicado pelo script existente.

### Correção de interação

A pausa por hover foi removida porque, em uso comum, o cursor permanece sobre a área dos cards e interrompe o movimento sem deixar claro o motivo. A pausa agora ocorre apenas pelo botão com rótulo visível.

---

## ADR-028: Aplicar retratos oficiais ao pódio TotalPass de julho

**Data:** 2026-08-12
**Status:** Implementado

### Decisão

Publicar os três retratos fornecidos pelo RH nos cards de Maria Seixas, Antônio Augusto e Luana Alves, preservando o layout e a classificação já aprovados.

### Motivo

Os retratos tornam o reconhecimento mais pessoal e completam visualmente o pódio sem alterar os dados de check-ins existentes.

### Correção

Foi removida a regra temporária que ocultava `.totalpass-photo` na edição de julho, criada quando o pódio ainda não possuía retratos. Os cards retomam sua estrutura padrão: foto acima e informações abaixo.

---

## ADR-029: Agrupar cada instrução do Bot Ben em um único bloco de leitura

**Data:** 2026-08-12
**Status:** Implementado

### Decisão

Encapsular o conteúdo textual de cada etapa em um elemento próprio, mantendo o número como marcador separado à esquerda.

### Motivo

As opções em negrito eram itens independentes do layout flexível e se distribuíam de forma confusa. O agrupamento preserva a ordem do procedimento e torna a leitura imediata.

---

## ADR-030: Usar títulos brancos nos cards coloridos de campanhas anuais

**Data:** 2026-08-12
**Status:** Implementado

### Decisão

Definir explicitamente a cor branca nos títulos das campanhas de HPV e câncer do colo do útero.

### Motivo

O título herdava o azul escuro da interface e perdia contraste sobre os fundos roxo e rosa. Branco mantém uma leitura nítida e coerente com o restante do conteúdo dos cards.

---

## ADR-031: Criar rewrite público para downloads da MB News

**Data:** 2026-08-12
**Status:** Implementado

### Decisão

Mapear URLs iniciadas por `/downloads/` para `public/downloads/` no `vercel.json`.

### Motivo

O projeto é publicado com a raiz como saída estática, por isso arquivos dentro de `public/` dependem de rewrites para manter URLs públicas limpas. Sem essa regra, os links de PDF retornavam 404.

---

## ADR-032: Reutilizar o carrossel manual de junho para os reconhecimentos de julho

**Data:** 2026-08-13
**Status:** Implementado

### Decisão

Usar o componente de carrossel manual já presente em `index.html` para exibir quatro telas de reconhecimentos de julho, com texto sincronizado por slide.

### Motivo

O padrão já possui controles acessíveis por botões e teclado, evita criar uma nova interação e dá o devido destaque às fotos oficiais. Arthur e Evellyn foram agrupados pela foto compartilhada, preservando seus setores individuais. Julia Luiza e Julia Goulart compartilham outro slide porque pertencem a Abertura de Contas e têm a mesma trajetória de efetivação.

Atualização: a composição de duas fotos individuais das Julias foi substituída pela foto conjunta oficial enviada posteriormente, mantendo o mesmo slide e texto.

Atualização: as telas do carrossel passaram a ter altura fixa de 610px no desktop, com adaptação automática preservada no mobile, para manter consistência visual entre os reconhecimentos.

Atualização: o slide compartilhado por Arthur e Evellyn passou a detalhar a trajetória individual da Evellyn, preservando o setor de Arthur e a foto conjunta.

Atualização: o setor do Arthur foi corrigido de Relacionamento para Farmer de Adquirência, com o texto sobre sua passagem por projetos internos antes da efetivação.

Atualização: a promoção da Beatriz foi explicitada como uma transição de Adquirência para Treinamento e Desenvolvimento, evitando a interpretação de que sua efetivação ocorreu diretamente em T&D.

---

## ADR-033: Separar vacinação das campanhas de prevenção

**Data:** 2026-08-13
**Status:** Implementado

### Decisão

Manter na vacinação apenas o download do Calendário Nacional de Vacinação e apresentar as campanhas de HPV e câncer do colo do útero como conteúdos independentes, sem links de download.

### Motivo

As campanhas possuem finalidade educativa própria e não devem ser confundidas com o calendário vacinal. A referência trabalhista foi corrigida para o art. 473, XII, da CLT, conforme a Lei nº 15.377/2026.

Atualização: o carrossel de Reconhecimento foi ordenado para abrir com Beatriz Assumpção e fechar com Willian Amaral, inclusive nos indicadores e na navegação por setas/teclado.

---

## ADR-034: Igualar o peso visual dos conteúdos de saúde

**Data:** 2026-08-13
**Status:** Implementado

### Decisão

Exibir Calendário 2026, Campanha Anual HPV e Campanha Anual Câncer de Colo do Útero como três cards irmãos em uma grade de três colunas no desktop.

### Motivo

Os três conteúdos são informativos e têm a mesma relevância editorial; a grade evita que o calendário pareça um conteúdo principal e as campanhas apareçam como complementares.

Atualização: o resumo do Calendário 2026 substitui a listagem extensa por faixa etária; o PDF continua como fonte do detalhamento completo e os três cards ficam visualmente proporcionais.
