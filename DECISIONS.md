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

## ADR-040: Reutilizar o layout de pódio do TotalPass de julho em agosto

**Data:** 2026-09-11
**Status:** Implementado

### Decisão

Aplicar a classe e a composição visual de pódio da edição de julho à seção de agosto, mantendo o campeão central elevado e os demais cards nas laterais.

### Motivo

O layout de julho apresenta os cards com uma hierarquia visual mais clara e foi solicitado como padrão para agosto.

### Consequências

Os dados permanecem específicos de agosto. As fotos existentes de Antonio Augusto e Maria Seixas foram reutilizadas, e o retrato enviado pelo usuário foi adicionado ao card de Douglas Reis.

## ADR-039: Restaurar a edição completa de julho e corrigir o fluxo mensal

**Data:** 2026-09-11
**Status:** Implementado

### Decisão

Usar a versão completa de julho anterior à preparação de agosto como conteúdo da página histórica de julho. Atualizar todos os menus mensais para links diretos entre as edições já disponíveis.

### Motivo

A página resumida de julho não preservava a edição editorial original, e os menus de abril, maio, junho e julho ainda tratavam meses já publicados como futuros.

### Consequências

As edições históricas permanecem independentes e navegáveis, enquanto a raiz continua representando agosto.

## ADR-038: Manter o bloco de plano de saúde igual ao mês anterior

**Data:** 2026-09-11
**Status:** Implementado

### Decisão

Reutilizar a redação, os valores por faixa etária e o fluxo do Bot Ben da edição anterior. Alterar apenas a comunicação do prazo para 15/09 e informar a nova janela de janeiro de 2027.

### Motivo

O usuário solicitou continuidade editorial e somente uma atualização na regra de prazo.

## ADR-037: Criar rota histórica própria para julho

**Data:** 2026-09-10
**Status:** Implementado

### Decisão

Manter a edição de julho em uma página HTML histórica própria (`public/pages/mb-news-julho-2026.html`) e apontar o botão mensal diretamente para ela.

### Motivo

O botão estava apontando para `/`, fazendo o usuário retornar à edição de agosto. Uma rota própria preserva o conteúdo mensal e permite acesso independente.

## ADR-036: Preparar a edição de agosto sem inventar dados do RH

**Data:** 2026-09-10
**Status:** Implementado

### Decisão

Aplicar somente os dados fechados no briefing de agosto. Valores do plano, aniversariantes, fluxo SulAmérica e calendário vacinal permanecem como pendências explícitas até validação do RH.

### Motivo

O arquivo de briefing identifica esses trechos como placeholders. Publicar valores, nomes ou orientações não confirmados poderia gerar comunicação interna incorreta.

### Consequências

A estrutura editorial já está pronta em `index.html`, mas a publicação final depende do retorno do RH.

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

## ADR-042: Separar as edicoes de agosto e setembro da MB News

**Data:** 2026-09-16
**Status:** Aceita

### Decisao

Manter agosto na pagina principal existente e criar uma rota historica propria para setembro, distribuindo o material conforme a indicacao explicita de mes no documento recebido.

### Motivo

A abordagem preserva a navegacao e o conteudo ja publicado de agosto, permite acessar as duas edicoes ao mesmo tempo e evita criar respostas para a entrevista de Amanda que nao foram fornecidas.

### Alternativas Consideradas

- **Misturar os dois meses na mesma pagina:** prejudicaria a leitura editorial e a navegacao por edicao.
- **Preencher a entrevista de Amanda por inferencia:** inventaria informacoes pessoais e profissionais.
- **Criar rota historica para setembro (escolhida):** mantem cada conteudo no mes definido e usa somente o material disponivel.

---

## ADR-041: Autorizar origens adicionais para incorporacao por iframe

**Data:** 2026-09-16
**Status:** Implementado

### Decisao

Expandir `frame-ancestors` na Content Security Policy global da Vercel para `https://calling.mbfinance.com.br`, `http://localhost:8090`, `http://localhost:8091` e `http://187.77.253.55:8100`.

### Motivo

Essas sao as origens solicitadas para incorporar o projeto por iframe. A lista explicita mantem a protecao contra incorporacao por origens nao autorizadas.

### Alternativas consideradas

Manter somente o dominio Calling ou usar `frame-ancestors *`; ambas foram descartadas porque nao atendem ao conjunto solicitado ou ampliam a permissao alem do necessario.

---

## ADR-035: Permitir incorporacao do projeto em iframe

**Data:** 2026-09-01
**Status:** Atualizado em 2026-09-04

### Decisao

Remover `X-Frame-Options: SAMEORIGIN` e incluir `frame-ancestors https://calling.mbfinance.com.br` na Content Security Policy global da Vercel.

### Motivo

O cabecalho `X-Frame-Options` bloqueava qualquer incorporacao por dominio diferente do proprio site. A origem autorizada foi definida como `https://calling.mbfinance.com.br`, eliminando a liberacao ampla e reduzindo o risco de clickjacking.

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

Atualização: o ícone do Calendário 2026 segue a escala de 24 px dos demais cards e usa um espaçamento interno de 12 px para manter o título e a leitura alinhados.

Atualização: os três títulos usam 1,18 rem e altura de linha de 1,25; o rótulo redundante “Calendário 2026” foi removido.

Atualização: o ícone do calendário foi colocado acima do título para repetir a mesma hierarquia visual das campanhas.

## ADR-035: Exibir um colaborador por slide nos destaques de agosto

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Transformar a seção de destaques dos setores em um carrossel manual com um slide por pessoa, usando a foto oficial à esquerda e um texto editorial curto à direita no desktop. No mobile, a foto fica acima do texto.

### Motivo

Os cards agrupados apresentavam apenas nomes e setores. Um retrato por slide cria reconhecimento individual, dá espaço para uma mensagem específica e mantém a interação já conhecida de setas, indicadores e teclado.

### Alternativas consideradas

- Manter os seis cards em grid: descartado porque reduz o destaque visual das fotos.
- Agrupar duas pessoas por slide: descartado porque repete a limitação da composição atual.
- Criar autoplay: descartado nesta etapa para manter o controle de leitura e evitar que o texto mude antes de ser lido.

### Observação editorial

Os textos incluídos são uma primeira versão baseada apenas nos nomes e setores fornecidos. Devem ser revisados pelo RH antes do deploy.

## ADR-042: Dar protagonismo visual à entrevista de agosto

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Apresentar a entrevista de Thays Florencio com sua foto em um cartão de perfil, uma frase-chave em destaque e seis perguntas em acordeão. A primeira resposta começa aberta, sem autoplay, e o acordeão permite apenas uma resposta aberta por vez.

### Motivo

Os blocos corridos dificultavam a escaneabilidade e não deixavam claro quem era a entrevistada. O retrato cria identificação imediata, enquanto o acordeão organiza a leitura sem remover nenhum conteúdo da entrevista.

### Alternativas consideradas

- Manter os blocos de texto: descartado porque preservava a baixa hierarquia visual percebida na seção.
- Transformar cada pergunta em slide de carrossel: descartado porque respostas longas exigem comparação e leitura no próprio contexto.
- Abrir todas as respostas: descartado para evitar uma parede de texto e dar ritmo à exploração.

### Observação editorial

As respostas foram preservadas; o título, a frase-chave e o resumo do cartão são textos de apresentação e devem ser revisados pelo RH antes do deploy.

## ADR-043: Apresentar a indicação de filme como conteúdo editorial

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Adicionar `O Lobo de Wall Street` como uma seção própria da edição de agosto, com cartaz em destaque, texto completo, ampliação pelo lightbox e uma síntese dos aprendizados comerciais.

### Motivo

A indicação é um conteúdo de leitura, não apenas um link. O cartaz cria um ponto de entrada visual e a estrutura em duas colunas conecta a experiência de lazer aos temas de vendas, negociação e comunicação.

### Alternativas consideradas

- Inserir a indicação apenas no editorial: descartado porque esconderia o conteúdo e reduziria sua descoberta.
- Reutilizar o bloco genérico de evento: descartado porque a indicação precisava de uma hierarquia própria para cartaz e texto.
- Usar um carrossel: descartado porque o conteúdo tem uma narrativa contínua e deve ser lido no próprio ritmo.

### Observação editorial

O texto foi inserido a partir do briefing enviado. A imagem e a copy devem passar pela revisão final de Comunicação/RH antes do deploy.

## ADR-044: Usar identidade amarela na edição de setembro

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Aplicar uma identidade visual amarela à edição de setembro, usando o laço amarelo como marcador recorrente e mantendo o azul-marinho como base de contraste. Reutilizar também a composição editorial da indicação de filme criada para agosto.

### Motivo

Setembro Amarelo precisa ser reconhecido desde a entrada da página, não apenas dentro do texto do filme. A paleta amarela cria unidade entre hero, navegação e seções, enquanto o azul-marinho evita perda de legibilidade e mantém a relação com a marca MB News.

### Alternativas consideradas

- Aplicar amarelo apenas na seção do filme: descartado porque deixaria o tema isolado e pouco reconhecível na edição.
- Trocar todo o azul da página por amarelo: descartado porque reduziria o contraste e romperia a identidade base da MB News.
- Usar o laço apenas como texto: descartado porque o símbolo visual recorrente facilita o reconhecimento rápido da campanha.

### Observação editorial

A Palavra do Mês de agosto foi reescrita para refletir agosto; a redação final das duas mensagens deve ser revisada por Comunicação/RH.

## ADR-045: Usar cartões de iniciais até receber as fotos dos aniversariantes

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Reativar o carrossel de aniversariantes de agosto com dez cartões nominais, usando iniciais e ícone de bolo enquanto os retratos oficiais não forem fornecidos.

### Motivo

O pedido trouxe os nomes, mas não trouxe fotos correspondentes. Os cartões preservam a experiência visual e o movimento do carrossel de julho sem associar imagens de outras pessoas aos aniversariantes corretos.

### Alternativas consideradas

- Reutilizar fotos de julho: descartado porque criaria associações visuais incorretas.
- Manter a seção oculta: descartado porque os nomes já estão disponíveis e a celebração faz parte do conteúdo de agosto.
- Gerar retratos artificiais: descartado porque não representaria os colaboradores reais.

### Observação editorial

Os cartões devem ser substituídos por fotos oficiais quando o RH enviar os retratos, mantendo os nomes e a estrutura do carrossel.

## ADR-046: Liberar os conteúdos de setembro com placeholders visuais seguros

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Publicar os módulos de promovidos, aniversariantes e saúde mental em setembro usando cartões de iniciais onde não há retratos disponíveis, mantendo o espaço de saúde mental preparado para receber as fotos dos encontros.

### Motivo

O conteúdo textual já foi fornecido, mas as fotos dos encontros ainda serão enviadas e não há retratos correspondentes para todas as pessoas. Os placeholders preservam a hierarquia visual, evitam associações incorretas e permitem que a edição seja revisada agora.

### Alternativas consideradas

- Manter os módulos ocultos até receber todas as fotos: descartado porque os textos de setembro já estão prontos para publicação.
- Reutilizar fotos de outros meses: descartado porque as imagens não representariam os novos destaques.
- Publicar os blocos sem identidade visual: descartado porque quebraria a experiência amarela do Setembro Amarelo.

### Observação editorial

As fotos dos encontros de saúde mental devem entrar assim que forem recebidas, sem alterar a estrutura do módulo.

## ADR-047: Reproduzir o guia de cadastro do TotalPass sem depender de arquivo ausente

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Adicionar o guia `Como usar o TotalPass` como módulo HTML/CSS responsivo logo após o pódio, usando o conteúdo visual da referência enviada e uma imagem de apoio já existente no projeto.

### Motivo

A referência foi recebida apenas embutida na conversa e não existe como arquivo local para ser copiada para `public/images`. A reprodução mantém o conteúdo, a hierarquia e a estética do material sem inserir uma URL que resultaria em 404.

### Alternativas consideradas

- Apontar para um caminho de imagem ainda inexistente: descartado porque deixaria um recurso quebrado.
- Usar uma imagem gerada para substituir a arte: descartado porque não preservaria fielmente o material enviado.
- Esperar sem liberar o módulo: descartado porque o passo a passo já pode ser útil e revisado no layout final.

### Observação editorial

Quando a arte original for enviada como PNG/JPG, ela pode substituir a reprodução mantendo o contêiner e a navegação da seção.

## ADR-048: Compartilhar o guia do TotalPass entre agosto e setembro

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Reutilizar o mesmo módulo `Como usar o TotalPass` nas edições de agosto e setembro, com estilos compartilhados em `public/assets/css/mb-news-totalpass-howto.css` para a edição de agosto.

### Motivo

O guia havia sido inserido apenas em setembro, mas o pódio também está presente em agosto. Compartilhar a composição evita que a experiência fique diferente entre as duas edições e corrige a ausência percebida no mês de agosto.

### Alternativas consideradas

- Criar uma versão diferente para agosto: descartado porque o conteúdo e o fluxo de cadastro são os mesmos.
- Copiar todos os estilos para o CSS de agosto: descartado porque aumentaria a duplicação e dificultaria ajustes futuros.
- Manter agosto apenas com o pódio: descartado porque o passo a passo é útil logo após o ranking.

### Observação editorial

As duas edições ainda usam a reprodução HTML/CSS enquanto a arte original não estiver disponível como arquivo local.

## ADR-049: Tratar o guia do TotalPass como conteúdo complementar

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Reduzir o módulo `Como usar o TotalPass` nas duas edições, usando um cabeçalho compacto, uma composição visual menor e apenas um passo a passo principal. No mobile, ocultar a foto auxiliar e os passos duplicados do mini-card.

### Motivo

O guia é útil como apoio, mas não deve ocupar o mesmo peso visual do pódio ou criar uma segunda seção hero. A redução mantém as instruções acessíveis e melhora a hierarquia da página.

### Alternativas consideradas

- Remover o guia inteiro: descartado porque o cadastro e o check-in continuam sendo informações úteis.
- Manter o layout grande: descartado porque prolongava a seção e repetia instruções.
- Exibir somente a arte original: descartado enquanto o arquivo enviado não estiver disponível localmente.

### Observação editorial

Quando a arte original for anexada, ela pode substituir a composição visual menor sem reabrir a seção como um bloco hero.

## ADR-050: Usar fotos oficiais no carrossel de promovidos de setembro

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Substituir os cards de iniciais do carrossel de promovidos de setembro pelos seis retratos recebidos na pasta de promoções, mantendo os textos e a navegação já existentes.

### Motivo

As imagens identificam diretamente cada profissional reconhecido e tornam a seção mais humana e relevante, sem alterar a estrutura editorial do carrossel.

### Alternativas consideradas

- Manter as iniciais: descartado porque as fotos oficiais estavam disponíveis.
- Usar uma foto genérica por slide: descartado porque poderia associar a imagem à pessoa errada.
- Alterar o carrossel para uma grade fixa: descartado porque os controles atuais funcionam bem para seis destaques.

### Observação editorial

As fotos são carregadas sob demanda nos slides ocultos para manter o carregamento inicial mais leve; cada retrato foi associado pelo nome do arquivo recebido.

## ADR-051: Ocultar temporariamente o TotalPass de setembro

**Data:** 2026-09-21
**Status:** Implementado

### Decisão

Ocultar a seção `#totalpass` apenas na edição de setembro com o atributo HTML `hidden` e retirar seu link da navegação, preservando o conteúdo para uma possível reativação.

### Motivo

O usuário solicitou retirar o módulo por enquanto. Ocultar a seção mantém o trabalho já realizado recuperável e evita apagar conteúdo que pode voltar a ser aprovado depois.

### Alternativas consideradas

- Apagar todo o conteúdo: descartado porque dificultaria a reativação.
- Manter o link apontando para uma seção oculta: descartado porque prejudicaria a navegação.
- Ocultar também agosto: descartado porque o pedido foi específico para setembro.
