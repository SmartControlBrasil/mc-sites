# MC-SITES

Fundacao tecnica do MC-SITES: criacao de sites, landing pages, experiencias web, SEO, marketing digital, trafego pago, CRO, analytics e tecnologias internas para producao de sites.

## Stack

- Python 3.12+
- Django
- PostgreSQL
- psycopg
- python-dotenv

## Arquitetura

O projeto usa arquitetura hexagonal com quatro camadas:

- `domain`: Python puro, sem Django.
- `application`: casos de uso e orquestracao.
- `infrastructure`: adaptadores Django, ORM, admin e repositorios concretos.
- `presentation`: views, URLs, forms e templates.

Mais detalhes estao em `docs/architecture/hexagonal_architecture.md`.

## Pre-requisitos

- Python 3.12+
- PostgreSQL disponivel localmente ou em host configurado
- Banco esperado: `mc_sites`
- Usuario esperado: `mc_sites`

## Ambiente

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
cp .env.example .env
```

Edite `.env` com os valores reais do PostgreSQL. Nao versione senhas ou segredos.

## Configuracao

O ambiente local usa:

```bash
DJANGO_SETTINGS_MODULE=config.settings.development
```

As variaveis principais sao:

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG`
- `DJANGO_ALLOWED_HOSTS`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST`
- `DB_PORT`

## PostgreSQL

O banco oficial e PostgreSQL. SQLite nao e fallback de desenvolvimento.

Exemplo conceitual esperado:

```text
DB_NAME=mc_sites
DB_USER=mc_sites
DB_HOST=127.0.0.1
DB_PORT=5432
```

## Migrations

```bash
python manage.py makemigrations --check
python manage.py migrate
```

Execute `migrate` apenas quando o banco e as credenciais estiverem configurados.

## Servidor Local

```bash
python manage.py runserver
```

## Testes

```bash
python manage.py test
```

## Django Check

```bash
python manage.py check
```
