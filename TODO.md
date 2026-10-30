# TODO.md — Tarefas Pendentes

> Prioridade: 🔴 Crítico | 🟡 Importante | 🟢 Backlog

---

## Concluído — 2026-10-30 — Dia das Crianças em outubro

- [x] Adicionar a seção responsiva e incluir o link no menu e no rodapé.
- [x] Incorporar o player de prévia do vídeo do Drive com carregamento sob demanda; manter o original de 97 MB fora dos assets estáticos.
- [x] Com confirmação do usuário de que o vídeo está público, liberar `drive.google.com` na diretiva CSP `frame-src`.
- [x] Publicar a edição e o CSS (deploy `dpl_8T8MdFWnEMyxt1dGR79Xd9C5EhmU`, commit `f9e4a22`) e liberar o frame do Drive na CSP (deploy `dpl_z9TiLGGDqvn5QJy3LbmymCAA8r2S`, commit `7d3cb79`); ambos `READY`.
- [ ] Conferir a reprodução do vídeo em um navegador.

## Em andamento — 2026-10-30 — Galeria do Dia das Crianças

- [x] Receber e conferir a pasta do Drive: quatro fotos JPEG e dois vídeos.
- [x] Baixar as quatro fotos para `public/images/mb-news/outubro/dia-das-criancas/`.
- [x] Incluir os dois vídeos do Drive em players verticais 9:16 e adicionar a galeria responsiva de fotos.
- [ ] Publicar a atualização e confirmar os arquivos em produção.

## Concluído — 2026-10-30 — Cor verde no selo TotalPass

- [x] Aplicar verde-menta ao texto, ícone e borda do selo TotalPass em outubro.
- [x] Atualizar o parâmetro de versão do CSS e publicar.
- [x] Confirmar edição e CSS em produção; deploy `dpl_HxPLwT6HVi1Kcpq56Pb4aA9azEPC` (`READY`), commit `dad8237`.

## Concluído — 2026-10-30 — Fundo do TotalPass em outubro

- [x] Aplicar à seção de outubro a imagem de academia e a sobreposição usadas em setembro.
- [x] Atualizar o parâmetro de versão do CSS para evitar cache antigo.
- [x] Publicar e confirmar edição, CSS e imagem em produção.
- [x] Deploy `dpl_7Gki5VNzPb4Vm3eCmLXh5xUkNFXW` (`READY`), commit `186be1d`.

## Concluído — 2026-10-30 — Ranking TotalPass de outubro

- [x] Inserir os três nomes e contagens (21, 20 e 17 check-ins) no pódio da edição de outubro.
- [x] Aplicar a composição visual do pódio TotalPass de setembro.
- [x] Salvar os três retratos da pasta do Drive em `public/images/mb-news/outubro/totalpass/`.
- [x] Publicar e confirmar a edição, o CSS e as fotos em produção.
- [x] Deploy `dpl_9HLVmNHhfVwnNksEeEiMJsau8iBR` (`READY`), commit `9905124`.

## Concluído — 2026-10-29 — Novembro indisponível na MB News

- [x] Desativar o botão Novembro nas edições públicas de abril a outubro.
- [x] Retirar da pasta pública a página de novembro, sua folha CSS e o cartaz.
- [x] Publicar na Vercel e confirmar a URL de novembro com 404 e outubro com 200.
- [x] Manter a edição recuperável no histórico Git, commit anterior `1838de4`.
- [x] Deploy `dpl_2qi4bpuq21SmSKmQ8m3dxvvm4Ypn` (`READY`), commit `d4569eb`.

## Concluído — 2026-10-29 — Edição atual na página raiz

- [x] Trocar a edição de agosto fixa por seleção da edição do mês atual no fuso de São Paulo.
- [x] Quando o mês atual ainda não estiver publicado, abrir a edição publicada mais recente (outubro enquanto novembro segue indisponível).
- [x] Publicar e confirmar a raiz, assets, outubro (200) e novembro (404) em produção.
- [x] Deploy `dpl_ERLCkYgvrwYhsULdP1bLK1Qz8rf5` (`READY`), commit `e646554`.

## Concluído — 2026-10-28 — Uploads e visualizador do MB Momentos

- [x] Mostrar confirmação destacada para envios bem-sucedidos e mensagens de erro acessíveis.
- [x] Impedir a repetição da mesma seleção e tornar tentativas repetidas de upload idempotentes no D1.
- [x] Evitar cartões duplicados ao paginar e bloquear solicitações simultâneas da mesma página.
- [x] Fechar a prévia sem fechar o modal do álbum.
- [x] Compilar e publicar a versão 8 no Sites; commit `a7f1465`, deployment `appgdep_6ae256827f408191b85301538a6021b4` concluído.

## Concluído — 2026-10-28 — Cache de fotos do álbum

- [x] Ativar cache privado do navegador para imagens inline por 24 horas, com revalidação depois do prazo.
- [x] Manter vídeos e downloads originais sem cache.
- [x] Compilar e publicar a versão 7 no Sites; commit `c426e44`, deployment `appgdep_6ae2521c8eb881918f1e24223afbd93e` concluído.

As fotos podem ser reutilizadas pelo mesmo navegador ao voltar ao álbum durante o período de cache.

## Concluído — 2026-10-28 — Prévia de fotos HEIC/HEIF

- [x] Exibir HEIC/HEIF nos cartões do álbum e no visualizador ampliado usando uma prévia JPEG no navegador.
- [x] Carregar o decodificador sob demanda e preservar o original para download.
- [x] Compilar e publicar a versão 6 no Sites; commit `e0e39a3`, deployment `appgdep_6ae25104aa308191915ee453151609a8a` concluído.

Próximo passo: conferir as fotos HEIC já recebidas no painel e no álbum compartilhado.

## Concluído — 2026-10-28 — Moderação do MB Momentos

- [x] Manter novos uploads pendentes até aprovação explícita no painel `/admin`.
- [x] Restringir álbum público, arquivo e feed da MB News a registros aprovados.
- [x] Adicionar fila de pendências e ações de aprovar, revogar e apagar com confirmação.
- [x] Preservar os registros existentes como aprovados na migração do D1.
- [x] Compilar e publicar a versão 5 pelo Sites; commit `06a8bd7`, deploy `appgdep_6ae249c98fe48191b3327798e44ee6d6` concluído.

Próximos itens do evento: receber data e horário, revisar em aparelho celular e selecionar registros para a edição de outubro.

## Concluído — 2026-10-28 — Especial de Halloween em outubro

- [x] Integrar ao fim de outubro as cinco indicações de filmes, com sinopses, tipos, níveis de terror e cartazes do PDF.
- [x] Criar carrossel acessível com navegação manual e estilos externos; incluir atalho no menu e no rodapé.
- [x] Manter a edição disponível localmente em `http://localhost:8080/pages/mb-news-outubro-2026.html`.
- [x] Receber aprovação do usuário e publicar na Vercel pelo commit `e9865da` (deploy `dpl_CHyQ2rXpNS7G5yXx8174N79auQdS`, `READY`).
- [x] Confirmar em produção HTTP 200 para as duas páginas, CSS, JS e cartazes.

## Concluído — 2026-10-28 — Filme de novembro

- [x] Criar página de novembro com indicação de *Caramelo*, texto do Novembro Azul e cartaz local.
- [x] Disponibilizar novembro na navegação da home e das edições de abril a outubro.
- [x] Criar e iniciar `npm run preview:mb-news` para abrir a MB News localmente.
- [x] Publicar junto da atualização de outubro pelo commit `e9865da`; deploy Vercel `dpl_CHyQ2rXpNS7G5yXx8174N79auQdS` está `READY`.
- [x] Confirmar página e cartaz com HTTP 200 em produção.

Escopo desta tarefa: somente a indicação de filme pedida pelo usuário; entrevista e outros textos do PDF não foram integrados.

## Prioridade atual — 2026-10-27 — Eventos e Outubro Rosa

- [x] Trocar nome por legenda opcional, aceitar envio sem esses dados no servidor e publicar carrossel contínuo somente das fotos aprovadas abaixo do formulário.

- [x] Aplicar logo oficial de Downloads no MB Momentos, preservando PNG original e ajustando tamanho responsivo; publicação e hash remoto confirmados.

- [x] Simplificar a página para uma seção com texto direto e formulário lado a lado; álbum em janela e campo de legenda removido. Publicada versão 2 do Sites.

- [x] Criar site separado e reutilizável para eventos mensais, começando pelo Outubro Rosa.
- [x] Publicar convite, upload de fotos/vídeos, álbum compartilhado e painel restrito à organização.
- [x] Gerar QR Code e texto para compartilhar o convite no grupo.
- [x] Implementar seleção de fotos autorizadas para MB News e revogação ao ocultar.
- [x] Validar APIs, TypeScript, build e acesso HTTP da publicação Sites.
- [x] Confirmar a publicação da integração na MB News: commit cbb75ae, Vercel READY, página/JS/CSS HTTP 200 e CSP correta.
- [ ] Receber data e horário do encontro; atualizar o convite pelo painel ou pela API autenticada.
- [ ] Revisar a experiência em celular real, incluindo envio de arquivos grandes e codecs MOV/HEVC.
- [ ] Selecionar os registros do evento para a edição de outubro.
- [ ] Definir com a organização o prazo de retenção dos álbuns e a rotina de exclusão definitiva antes de acumular novos meses.
- [ ] Backlog: miniaturas, compressão e transcodificação de vídeo se o volume justificar.

## Atualizacao 2026-10-23 - Nova foto do Davi

- [x] Substituida a foto do Davi no reconhecimento de outubro por DAVi Promocao lider.jpeg enviada pelo usuario. Copia original sem recompressao em public/images/mb-news/outubro/promovidos/davi-promocao-lider.jpeg (1200x1600); HTML atualizado com novo caminho, dimensoes e texto alternativo. Layout e enquadramento CSS existentes preservados. Publicado no commit eaf550f, enviado para main; deploy Vercel confirmado. Pagina e nova foto HTTP 200 em producao. Proximo passo: receber ranking TotalPass.

## Atualizacao 2026-10-16 - Fotos dos aniversariantes completas

- [x] Adicionada foto original de Luiza Gabriela Hilario Alves da Silva (1080x1350), identificada pelo nome completo na pasta sincronizada do Drive e copiada sem recompressao para public/images/mb-news/outubro/aniversariantes/luiza-gabriela-hilario-alves-da-silva.png. Outubro agora tem 12 aniversariantes com foto, incluindo as novas fotos de Melissa e Taynara. Alterados HTML, tres imagens e documentacao. Publicado no commit 1ae5707, push na main e deploy Vercel confirmados. Pagina e tres fotos novas HTTP 200; 12 cards com foto e nenhum com iniciais em producao. Proximo passo: receber ranking TotalPass.

## Atualizacao 2026-10-16 - Fotos de Melissa e Taynara

- [x] Incluidas fotos de Melissa Melo Costa e Taynara Leticia Barros Tavares nos cards existentes de outubro. Originais JPEG 1200x1600 copiados sem recompressao da pasta sincronizada do Drive para public/images/mb-news/outubro/aniversariantes; HTML atualizado com dimensoes e alt. Total permanece 12: 11 fotos e um card com iniciais (Luiza Gabriela). Busca pelo conector sem resultados; arquivos identificados pelos nomes completos na pasta sincronizada. Alteracao local, sem deploy nesta etapa. Proximo passo: publicar atualizacao e receber foto de Luiza Gabriela e ranking TotalPass.

## Atualizacao 2026-10-16 - Inclusao de Rodrigo Gomes

- [x] Incluido Rodrigo Gomes, 23/10, no carrossel de outubro, com foto original Rodrigo Gomes.JPG da pasta sincronizada do Drive copiada sem recompressao para public/images/mb-news/outubro/aniversariantes/rodrigo-gomes.jpg (4032x3024). Contagens atualizadas para 12. Ano de nascimento omitido seguindo o padrao editorial. Alterados HTML, imagem e documentacao. Publicado no commit 680a078; push em main e deploy Vercel confirmados. Pagina e foto HTTP 200, Rodrigo com 23/10 e 12 cards em producao. Proximo passo: receber tres fotos e ranking TotalPass pendentes.

## Atualizacao 2026-10-16 - Aniversariantes atualizados

- [x] Removido o card de Camila Lourenco Alves dos aniversariantes de outubro por solicitacao do usuario. Contagem editorial e acessivel atualizada de 12 para 11. Alterado public/pages/mb-news-outubro-2026.html e documentacao. Publicado no commit b043059 pela integracao GitHub/Vercel, com status de sucesso. Producao HTTP 200: 11 cards, contagem 11 e Camila ausente. Proximo passo: receber tres fotos e ranking TotalPass pendentes.

## Atualizacao 2026-10-16 - Nova foto da Laiane

- [x] Substituida a foto da entrevista da Laiane pela imagem WhatsApp Image 2026-10-16 at 09.30.37.jpeg enviada pelo usuario. Arquivo original copiado sem recompressao para public/images/mb-news/outubro/entrevista/laiane-sousa.jpg; dimensoes 720x1280 no HTML, texto alternativo atualizado, enquadramento em center 46% e cache de imagem/CSS renovado. Publicada: commit 5f66b1b, deploy Vercel confirmado, pagina e foto HTTP 200; hash SHA-256 remoto igual ao original enviado. Proximo passo: materiais editoriais pendentes.

## Atualizacao 2026-10-15 - Rascunho da edicao de outubro

- [x] Edicao de outubro publicada em producao em 15/10/2026. Commit 437c9bc enviado para main; Vercel confirmou sucesso no deploy EJiUVPA3vQEn7FRL627p9gkHQEyc. https://mbnews.vercel.app/pages/mb-news-outubro-2026.html e 28 recursos responderam HTTP 200. Conferidos entrevista com oito perguntas, Davi primeiro, cinco dropdowns de saude, 12 aniversariantes e acesso pela home. Pendencias: tres fotos e ranking TotalPass.

- [x] Publicacao da edicao de outubro autorizada pelo usuario em 15/10. Conferidos 28 recursos locais, ancoras, IDs, sintaxe dos scripts, navegacao do reconhecimento e acordeao da entrevista. Publicacao por commit na main e integracao GitHub/Vercel; confirmacao em producao pendente.

- [x] Incluida entrevista de Laiane Sousa apos Outubro Rosa, seguindo componente dos meses anteriores: perfil com foto, frase extraida do relato e oito respostas expansiveis. Texto integral do OUTUBRO ROSA.docx preservado em primeira pessoa, sem acrescentar cargo ou informacoes clinicas. Foto Laiane Sousa.JPG identificada na listagem do Drive e copiada da pasta sincronizada para public/images/mb-news/outubro/entrevista/laiane-sousa.jpg. HTML/CSS atualizados e reutilizados CSS/JS compartilhados; links no menu e rodape. Proximo passo: revisar a entrevista localmente e continuar materiais pendentes.

- [x] Reconhecimento agora inicia com Davi Abraao; Gabriel Meruzzi ocupa o segundo slide. Atualizados indicadores, rotulos, anuncio acessivel, prioridade das fotos e enquadramentos associados. Alterados HTML/CSS de outubro. Proximo passo: revisao local e materiais pendentes.

- [x] Alinhados os tres itens da sustentabilidade com a mesma classe, coluna de icones, espacamento e divisorias. Removidos fundo rosa especial, padding interno adicional e negrito exclusivo do kit. Alterados HTML/CSS de outubro; proximo passo: revisao local e materiais pendentes.

- [x] Recomposta a sustentabilidade de outubro em painel visual: ilustracao SVG de garrafa e caneca, duas orientacoes de uso no dia a dia e destaque de kit de boas-vindas para novos integrantes. Paleta rosa e marinho, Inter e conteudo factual preservados. Alterados HTML/CSS e criado public/images/mb-news/outubro/reusable-bottle-mug.svg. Proximo passo: revisar a previa e incorporar os materiais pendentes.

- [x] Ajustado individualmente o enquadramento dos cards de Larissa Helena e Thais Tamyris: aproximacao visual de 1.4x com origem em 50% 60%, reduzindo parede acima da cabeca e destacando rosto e ombros. Arquivos originais preservados; alterados CSS e cache do HTML. Proximo passo: revisar previa local e receber fotos restantes.

- [x] Conferida resolucao dos nove retratos: larguras de 960 a 4032 pixels, copias sem reducao. Beatriz e Larissa inspecionadas visualmente; parte do JPEG ja tem menos detalhe na origem. Cards ampliados para quatro retratos por largura desktop e 196px no celular, movimento desacelerado de 36 para 72 segundos e dimensoes explicitas nas imagens. Nenhum detalhe facial foi gerado ou alterado. HTML e CSS atualizados; proximo passo: revisar previa e substituir originais comprimidos se necessario.

- [x] Incluidos os 12 aniversariantes de outubro da tabela, com nomes e dias/mes, no carrossel de fotos usado nos meses anteriores. Copiadas nove fotos da pasta sincronizada do Drive para public/images/mb-news/outubro/aniversariantes, apos conferir a listagem do conector. Luiza Gabriela, Melissa Melo Costa e Taynara Leticia seguem com iniciais por falta de foto correspondente. Criado JS externo com loop, pausa e respeito a movimento reduzido. Proximo passo: receber as tres fotos restantes e os dados do TotalPass.

- [x] Fotos de Gabriel e Davi agora preenchem toda a area do carrossel: padding removido em todos os breakpoints, imagens em cover e sem bordas internas. Enquadramentos individuais priorizam os rostos. Alterados CSS e referencia de cache no HTML. Proximo passo: revisao local e demais conteudos pendentes.

- [x] Refinado o reconhecimento de outubro: fotos integrais com proporcoes preservadas sobre fundo rosa suave; setas na barra inferior. Ampliados os textos com quatro meses de estagio antes da efetivacao de Gabriel e quase tres anos de casa de Davi, agora Supervisor de TI. Alterados HTML e CSS; proximo passo: revisar a previa e incorporar materiais pendentes.

- [x] Refinada a secao de saude: lista unica com divisorias, cinco titulos fechados, destaque rosa do item aberto e chamada rosa escura. Foto alinhada a base da lista no desktop; ordem mobile: introducao, foto e dropdowns. Fontes foram integradas aos respectivos itens, incluindo a Lei 15.377/2026 no item de direitos. Alterados HTML e CSS de outubro; proximo passo: revisao local e novos conteudos.

- [x] Substituidos os popovers de saude por cinco dropdowns empilhados em uma unica coluna junto da introducao. Fechados por padrao, mostram somente os titulos; orientacoes e fontes aparecem ao expandir. Alterados HTML e CSS de outubro. Proximo passo: revisar a previa local e incorporar conteudos pendentes.

- [x] Criar pagina editorial de outubro com identidade rosa e conteudo inicial do documento recebido.
- [x] Alinhar tipografia e estrutura visual ao padrao das edicoes anteriores, alterando a paleta para rosa.
- [x] Criar e aplicar fundo original inspirado na fita rosa enviada, preservando a estrutura e a tipografia existentes.
- [x] Reduzir a opacidade da imagem do hero para 16% e manter o enquadramento responsivo.
- [x] Inserir foto vertical de conscientizacao na secao de Outubro Rosa.
- [x] Integrar a foto ao texto introdutorio e destacar sinais de atencao ao lado dela; reorganizar os demais topicos para leitura em grade responsiva.
- [x] Refinar a hierarquia visual dos cards de saude e destacar os links para fontes oficiais.
- [x] Criar carrossel responsivo de reconhecimento com Gabriel Meruzzi (efetivado) e Davi Abraao (promovido a Supervisor de TI), usando as fotos enviadas.
- [x] Converter os cinco cards de saude em gatilhos acessiveis para popovers, preservando os textos e as fontes oficiais.
- [x] Habilitar o acesso a outubro pela home editorial e pelas edicoes de abril a setembro.
- [x] Marcar aniversariantes e ranking TotalPass como pendentes, sem inventar nomes ou resultados.
- [ ] Incorporar os conteudos adicionais que serao enviados para outubro.
- [x] Incluir os nomes e datas dos aniversariantes de outubro.
- [ ] Adicionar fotos de Luiza Gabriela, Melissa Melo Costa e Taynara Leticia quando disponibilizadas.
- [ ] Atualizar o ranking TotalPass depois do fechamento em 31/10 e do envio dos dados.
- [x] Revisar recursos locais, ancoras, sintaxe e interacoes antes da publicacao.
- [x] Confirmar commit enviado e deploy de outubro em producao.

## Atualizacao 2026-10-05 - Padronizacao dos nomes das marcas

- [x] Padronizar mencoes textuais para `MB Finance` e `MB News` nas paginas, componentes, metadados, mensagens, conteudo SEO e documentacao.
- [x] Ajustar os logotipos do cabecalho, destaque de abertura e rodape da home editorial e das edicoes mensais.
- [x] Preservar slugs, rotas, nomes de assets e caminhos de arquivos usados pelo codigo.
- [x] Revisar as ocorrencias restantes para distinguir texto de marca de identificadores tecnicos.

## Atualizacao 2026-10-05 - Ajuste final do ranking TotalPass

- [x] Remover o card de primeiros passos da edicao de setembro.
- [x] Publicar a remocao e confirmar que o card nao aparece mais na pagina publica.
- [x] Receber o link da pasta do Drive e localizar as tres fotos correspondentes.
- [x] Substituir as iniciais pelos retratos de Maria Seixas, Antonio Costa e Rodrigo Gomes.
- [x] Publicar a atualizacao das fotos e confirmar que os tres arquivos sao servidos pela pagina.

## Atualizacao 2026-10-05 - Ranking TotalPass de setembro

- [x] Incluir os tres colaboradores e as frequencias recebidas do usuario.
- [x] Ordenar o ranking por frequencia decrescente: 19, 18 e 17 check-ins.
- [x] Usar iniciais nos cards, sem associar fotos de outras pessoas.
- [x] Publicar e confirmar o ranking na edicao de setembro.

## Atualizacao 2026-09-24 - Espacamento do passo a passo de agendamento

- [x] Aumentar o espaco entre o texto introdutorio e a lista de etapas.
- [x] Atualizar a versao do CSS para invalidar cache do navegador.
- [x] Publicar a correcao e confirmar que a edicao publicada carrega a nova regra de espacamento.
- [ ] Conferir o resultado visual em um navegador de celular.

## Atualizacao 2026-09-24 - Correcao da orientacao de agendamento

- [x] Remover da edicao de setembro a nota interna sobre validacao do RH antes da publicacao.
- [x] Orientar leitores a confirmar o fluxo atualizado de agendamento nos canais oficiais da SulAmerica.
- [x] Publicar a correcao da edicao de setembro.

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
- [ ] Validar o fluxo oficial de agendamento SulAmérica nas edições que apresentarem o passo a passo.
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
