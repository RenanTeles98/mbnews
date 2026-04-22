# MB Finance — SEO Machine Setup

## Configuração Completa

### 1. Instalar Python
Baixe em: https://www.python.org/downloads/
- Marque "Add Python to PATH" durante a instalação

### 2. Instalar dependências
Abra o terminal na pasta `seomachine/` e rode:
```bash
pip install requests python-dotenv
```

Para usar as funcionalidades avançadas (pesquisa de palavras-chave):
```bash
pip install -r data_sources/requirements.txt
```

### 3. Verificar configuração
O arquivo `.env` já está configurado com os dados da MB Finance.
Confirme que a URL do site está correta:
```
MBFINANCE_SITE_URL=https://mbfinance-sites.vercel.app
BLOG_ADMIN_TOKEN=mbfinance2026
```

---

## Como Criar um Artigo

### Passo 1 — Pesquisar o tema
```
/research capital de giro para empresa
```

### Passo 2 — Escrever o artigo
```
/write capital de giro para empresa
```
O artigo é salvo automaticamente em `drafts/`.

### Passo 3 — Revisar
Abra o arquivo em `drafts/` e revise o conteúdo.

### Passo 4 — Publicar
```
/publicar drafts/nome-do-arquivo.md
```
Ou como destaque:
```
/publicar drafts/nome-do-arquivo.md --destaque
```

---

## Estrutura de Pastas
```
seomachine/
├── drafts/          ← Rascunhos gerados (edite aqui antes de publicar)
├── published/       ← Arquivos publicados (arquivo histórico)
├── research/        ← Briefs de pesquisa
├── context/         ← Identidade MB Finance (voz, SEO, keywords)
├── redis_publisher.py  ← Script de publicação no blog
└── .env             ← Credenciais (não commitar)
```

## Categorias Disponíveis
- `credito` — Crédito Empresarial
- `conta-pj` — Conta PJ
- `gestao` — Gestão Financeira
- `antecipacao` — Antecipação de Recebíveis
- `mercado` — Mercado Financeiro
- `noticias` — Notícias
