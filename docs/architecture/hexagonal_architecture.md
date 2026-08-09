# Arquitetura Hexagonal

O MC-SITES nasce com fronteiras simples para preservar o dominio e evitar acoplamento prematuro ao Django.

## Camadas

### Domain

Python puro. Contem entidades, value objects e portas de repositorio. Nao importa Django, ORM, HTTP, templates nem PostgreSQL.

### Application

Orquestra casos de uso e servicos de aplicacao. Depende do Domain e recebe portas/implementacoes por composicao.

### Infrastructure

Implementa adaptadores concretos. Aqui ficam Django ORM, admin, migrations, repositorios concretos e integracoes externas.

### Presentation

Recebe entrada HTTP, define URLs, views e forms. Chama casos de uso da Application e renderiza templates.

## Fluxo

```text
Browser
   ↓
Presentation
   ↓
Application
   ↓
Domain
   ↑
Ports
   ↓
Infrastructure
   ↓
PostgreSQL
```

## Dependencias Permitidas

- Presentation pode depender de Application e adaptadores de Infrastructure.
- Application pode depender de Domain.
- Infrastructure pode depender de Application e Domain para implementar portas.
- Domain nao depende de nenhuma camada externa.

## Dependencias Proibidas

- Domain importando `django.*`, ORM, HTTP, templates ou banco.
- Application acessando diretamente Django ORM.
- Presentation concentrando regra de negocio complexa.
- Infrastructure vazando detalhes de banco para Domain.
