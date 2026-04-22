# Publicar Artigo — MB Finance Blog

Publica um rascunho gerado no blog MB Finance via API (Upstash Redis).

## Uso
`/publicar [arquivo] [--destaque]`

### Exemplos
```
/publicar drafts/capital-de-giro-para-empresa.md
/publicar drafts/melhor-conta-pj-2025.md --destaque
```

## O Que Este Comando Faz

1. **Valida o arquivo** — confirma que o rascunho existe e tem os metadados necessários
2. **Exibe resumo** — mostra título, slug, categoria, SEO title e meta description para revisão
3. **Pede confirmação** — não publica automaticamente sem aprovação
4. **Publica no blog** — chama `redis_publisher.py` que envia para a API do blog
5. **Confirma URL** — exibe o link final do artigo publicado

## Processo

### Passo 1: Verificar arquivo
Confirme que o arquivo existe em `drafts/` e contém os campos obrigatórios:
- `**Title**:` — título do artigo
- `**URL Slug**:` — slug da URL
- `**Meta Title**:` — título SEO (50-60 chars)
- `**Meta Description**:` — descrição SEO (150-160 chars)
- `**Target Keyword**:` — palavra-chave principal
- `**Excerpt**:` — resumo para o card do blog
- `**Category**:` — uma das categorias válidas

### Passo 2: Rodar o publisher
```bash
cd /path/to/seomachine

# Publicar normalmente
python redis_publisher.py "$FILE_PATH"

# Publicar como destaque
python redis_publisher.py "$FILE_PATH" --featured

# Apenas visualizar sem publicar
python redis_publisher.py "$FILE_PATH" --dry-run
```

### Passo 3: Confirmar publicação
Exibir a URL final:
```
✅ Publicado: https://mbfinance-sites.vercel.app/blog/[slug]
```

## Categorias Válidas
| Chave | Label |
|-------|-------|
| credito | Crédito |
| gestao | Gestão |
| conta-pj | Conta PJ |
| mercado | Mercado |
| antecipacao | Antecipação |
| noticias | Notícias |

## Variáveis de Ambiente (.env)
```
MBFINANCE_SITE_URL=https://mbfinance-sites.vercel.app
BLOG_ADMIN_TOKEN=mbfinance2026
```

## Troubleshooting

### "Título não encontrado"
Adicione `**Title**: Seu título` no início do arquivo .md

### "401 Unauthorized"
Verifique se `BLOG_ADMIN_TOKEN` no `.env` está correto (`mbfinance2026`)

### "Connection error"
Confirme que o site está no ar: https://mbfinance-sites.vercel.app/api/blog/posts
