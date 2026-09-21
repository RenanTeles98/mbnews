# CHANGELOG.md — Histórico de Mudanças

> Formato: [versão ou data] — O que mudou

## 2026-09-21 - Conteúdos de setembro

### Entrevista de Amanda
- Substituído o bloco simples da entrevista por uma experiência guiada com perfil, foto, frase-chave e acordeão de perguntas.
- Resumidas as oito respostas da Amanda preservando trajetória, liderança, vida pessoal e conselho final.
- Aplicada a identidade visual amarela do Setembro Amarelo à seção.

### Adicionado
- Seção de promovidos com seis destaques: Henrique Goldstein, Rodrigo Netto, Lucas Martins, Maria Seixas, Marcela Pita e Higor Campos.
- Seção de aniversariantes de setembro com os quinze nomes enviados.
- Módulo visível de saúde mental para o Setembro Amarelo, preparado para receber as fotos dos encontros.
- Links de navegação para Promovidos, Aniversariantes e Saúde mental.

### Modificado
- `public/pages/mb-news-setembro-2026.html`: carrossel de reconhecimentos reconfigurado para os conteúdos de setembro e carrossel de aniversariantes liberado.
- `public/assets/css/mb-news-setembro.css`: identidade amarela aplicada também aos promovidos, aniversariantes e módulo de saúde mental.
- Contagem e Palavra do Mês da edição atualizadas para refletir os novos conteúdos.

### Observação
- Foram usados cartões de iniciais quando não havia retratos; as fotos dos encontros serão inseridas quando recebidas.

## 2026-09-21 - Guia de uso do TotalPass

### Adicionado
- Seção TotalPass de setembro liberada com o pódio existente.
- Módulo `Como usar o TotalPass` logo após o pódio, com destaque visual de cadastro e passo a passo.
- Link de navegação para TotalPass.

### Modificado
- `public/pages/mb-news-setembro-2026.html`: incluídos quatro passos de cadastro, orientação de plano/check-in e imagem de apoio.
- `public/assets/css/mb-news-setembro.css`: criada a composição responsiva do guia, alinhada à linguagem visual do TotalPass.
- Contagem do hero atualizada para refletir o novo conteúdo.

### Observação
- A arte exata enviada na conversa ainda precisa ser anexada como PNG/JPG para substituir a reprodução HTML/CSS.

## 2026-09-21 - Guia do TotalPass mais compacto

### Modificado
- Reduzido o módulo de agosto e setembro para um card complementar, com cabeçalho e composição visual compactos.
- Mantido o passo a passo principal de cadastro, plano e check-in.
- Removidos no mobile a foto auxiliar e os passos duplicados para reduzir a altura da seção.
- Centralizada no CSS da edição de setembro a cor da chamada “Como usar o TotalPass”.

### Validação
- Playwright confirmou módulo visível, 401px no desktop, 698px no mobile, sem overflow, erros de console ou recursos ausentes nas duas edições.

## 2026-09-21 - Fotos dos promovidos de setembro

### Adicionado
- Seis retratos oficiais em `public/images/mb-news/setembro/promovidos/`.

### Modificado
- `public/pages/mb-news-setembro-2026.html`: cards de iniciais substituídos pelas fotos de Henrique Goldstein, Rodrigo Netto, Lucas Martins, Maria Seixas, Marcela Pita e Higor Campos.
- `public/assets/css/mb-news-setembro.css`: enquadramentos individuais aplicados para preservar os rostos e os balões de reconhecimento.

### Validação
- Playwright confirmou seis imagens carregadas ao navegar pelos slides, seis nomes ativos, mobile sem overflow e ausência de erros ou recursos ausentes.

## 2026-09-21 - TotalPass oculto em setembro

### Modificado
- Seção `#totalpass` da edição de setembro temporariamente ocultada com o atributo `hidden`.
- Link TotalPass removido da navegação de setembro.
- Conteúdo e estilos preservados para possível reativação.

## 2026-09-21 - Guia do TotalPass também em agosto

### Adicionado
- Módulo `Como usar o TotalPass` na edição de agosto, logo abaixo do pódio.
- `public/assets/css/mb-news-totalpass-howto.css` com os estilos compartilhados do guia.

### Modificado
- `index.html`: incluído o passo a passo de cadastro, plano e check-in no TotalPass de agosto.
- Mantida a mesma experiência visual e responsiva da edição de setembro.

### Observação
- A arte original ainda depende do envio do arquivo PNG/JPG para substituição da reprodução HTML/CSS.

## 2026-09-21 - Aniversariantes de agosto

### Adicionado
- Dez nomes de aniversariantes na seção `#aniversariantes` da edição de agosto.
- `public/assets/css/mb-news-birthdays.css` com cartões nominais responsivos usando iniciais e ícone de bolo.

### Modificado
- `index.html`: carrossel de aniversariantes reativado, contador atualizado e mensagem de celebração revisada.
- Mantido o loop contínuo e o controle manual de pausa do carrossel de julho.

### Observação
- Os cartões de iniciais são provisórios até o recebimento das fotos oficiais pelo RH.

## 2026-09-21 - Identidade de setembro e correção editorial de agosto

### Adicionado
- `public/assets/css/mb-news-setembro.css` com a identidade amarela do Setembro Amarelo.
- Laço amarelo em pontos de identificação da edição de setembro.
- Indicação de filme de setembro reorganizada no formato editorial de agosto.

### Modificado
- `public/pages/mb-news-setembro-2026.html`: hero, navegação, Palavra do Mês, indicação de filme e entrevista receberam o tratamento amarelo.
- `index.html`: Palavra do Mês de agosto foi reescrita para refletir reconhecimento, aprendizados, bem-estar e conquistas do mês.
- Corrigidos caminhos de duas imagens na edição histórica de setembro.

## 2026-09-21 - Indicação de filme da edição de agosto

### Adicionado
- Seção editorial sobre `O Lobo de Wall Street`, com cartaz e aprendizados comerciais.
- Cartaz local em `public/images/mb-news/agosto/o-lobo-de-wall-street-pt.jpg`.
- `public/assets/css/mb-news-film.css` com o layout responsivo da indicação.

### Modificado
- `index.html`: menu, CTA do hero, contagem de conteúdos e editorial atualizados para incluir a indicação de filme.

## 2026-09-21 - Nova experiência da entrevista de agosto

### Adicionado
- Perfil visual da entrevistada Thays Florencio com sua foto oficial.
- Frase-chave e acordeão acessível com as seis perguntas da entrevista.
- `public/assets/css/mb-news-interview.css` e `public/assets/js/ui/mb-news-interview.js`.

### Modificado
- `index.html`: a seção `#entrevista` passou de blocos corridos para uma composição editorial responsiva, com uma resposta aberta por vez.

## 2026-09-21 - Carrossel de destaques de agosto da MB News

### Adicionado
- Fotos oficiais dos seis destaques em `public/images/mb-news/agosto/destaques/`.
- Carrossel individual com foto, setor e texto editorial curto para cada pessoa.
- Estilos e comportamento do carrossel em arquivos externos de CSS e JavaScript.

### Modificado
- `index.html`: a seção `#destaques` passou de cards agrupados para seis slides individuais.
- Navegação do carrossel atualizada para seis posições, com suporte a setas, dots e teclado.

---

## 2026-09-16 - Edicoes de agosto e setembro da MB News

### Adicionado
- `index.html`: destaques dos setores e entrevista completa de Thays Florencio na edicao de agosto.
- `public/pages/mb-news-setembro-2026.html`: nova edicao navegavel de setembro, com indicacao de filme e entrevista de Amanda Vieira.
- `public/images/mb-news/setembro/um-senhor-estagiario.png`: cartaz extraido do material editorial recebido.

### Modificado
- Edicoes historicas de abril a julho: setembro passou a aparecer como edicao disponivel no menu mensal.

## 2026-09-16 - Origens adicionais para iframe

### Modificado
- `vercel.json`: adicionadas as origens local e de IP solicitadas a diretiva CSP `frame-ancestors`, mantendo o dominio Calling autorizado.

## 2026-09-04

### Modificado
- `vercel.json`: a incorporacao por iframe foi restrita a `https://calling.mbfinance.com.br`.

## 2026-09-01

### Modificado
- `vercel.json`: o projeto passou a aceitar incorporacao em iframe por qualquer origem, com `frame-ancestors *` e sem `X-Frame-Options: SAMEORIGIN`.

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

## 2026-09-11 — Padrão visual do TotalPass de agosto

- Aplicado à seção de agosto o mesmo layout de pódio usado em julho.
- Mantida a hierarquia visual dos cards sem reutilizar retratos de outros meses.
- Corrigido o alinhamento do pódio e aplicadas as fotos existentes de Antonio Augusto e Maria Seixas.
- Adicionada a foto enviada de Douglas Reis ao pódio de agosto.

## 2026-09-11 — Correção da navegação histórica da MB News

- Restaurada a edição completa de julho.
- Corrigidos os links mensais de abril, maio, junho e julho.
- Agosto voltou a ser acessível pela raiz sem ser tratado como mês futuro nas edições anteriores.

## 2026-09-11 — Ajuste do plano de saúde em agosto

- Mantidos copy, tabela e passo a passo do Bot Ben conforme a edição anterior.
- Atualizado o prazo de inclusão para 15/09 e informada a nova janela de janeiro de 2027.

## 2026-09-10 — Correção do acesso à edição de julho

- Criada a página histórica `public/pages/mb-news-julho-2026.html`.
- Corrigido o link de julho na navegação mensal da edição de agosto.
- Restaurados os dados principais de julho e os links dos materiais de saúde.

## 2026-09-10 — MB News Agosto

- Preparada a edição #005 de agosto em `index.html`.
- Incluídos os conteúdos de plano de saúde, Instituto Cury/NR-1, terapia, TotalPass e RH & Bem-estar.
- Ocultadas promoções de julho e sinalizados dados pendentes de validação do RH.

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
- Corrigida a regra que ocultava os retratos do pódio TotalPass de julho.
- Reorganizado o passo a passo do Bot Ben para leitura clara das opções de plano de saúde.
- Títulos das campanhas anuais de saúde ajustados para alto contraste.
- Rota pública de downloads criada para permitir baixar os três PDFs da edição de julho.

---

## 2026-08-13 — Carrossel de reconhecimentos de julho

### Modificado
- Os cards de texto de promoções e efetivações foram substituídos por um carrossel manual com fotos oficiais.
- Arthur e Evellyn são apresentados juntos no mesmo slide, com os setores de Relacionamento e Hunter; Julia Luiza e Julia Goulart foram reunidas no destaque de Abertura de Contas.
- O reconhecimento de Beatriz Assumpção passou a apresentar sua trajetória até a promoção para Especialista de T&D.
- A foto conjunta oficial de Julia Luiza e Julia Goulart substituiu os dois retratos individuais no carrossel.
- A altura dos cards do carrossel foi padronizada no desktop.
- Incluído o histórico de estágio e efetivação da Evellyn para Hunter de Adquirência.
- Corrigido o destaque do Arthur para Farmer de Adquirência, com sua trajetória por projetos internos.
- Esclarecida a promoção da Beatriz de Adquirência para Treinamento e Desenvolvimento.
- Separadas as informações de vacinação das campanhas de HPV e câncer do colo do útero; removidos os downloads incorretos e atualizados os textos de prevenção.
- Carrossel de Reconhecimento reordenado: Beatriz Assumpção primeiro e Willian Amaral por último.
- Calendário 2026, HPV e Câncer de Colo do Útero passaram a usar cards lado a lado de mesmo peso visual.
- Resumido o card Calendário 2026 para equilibrar o volume de conteúdo e a altura visual dos três cards de saúde.
- Padronizados o ícone e o espaçamento do card Calendário 2026.
- Padronizados o tamanho dos títulos dos três cards de saúde e removido o rótulo auxiliar do Calendário 2026.
- Reposicionado o ícone do Calendário 2026 acima do título.
