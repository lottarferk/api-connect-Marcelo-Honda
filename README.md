# API Connect

API REST desenvolvida como MVP para a gestão de usuários de uma plataforma de conexões, permitindo criar, listar, buscar, atualizar e remover registros através de endpoints HTTP.

## Tecnologias utilizadas

- Node.js
- Express

## Como executar o projeto localmente

1. Clone o repositório:
git clone URL_DO_SEU_REPOSITORIO

2. Acesse a pasta do projeto:
cd api-connect

3. Instale as dependências:
npm install

4. Inicie o servidor:
node server.js

5. O servidor estará disponível em:
http://localhost:3000

## Endpoints disponíveis

| Método | Rota | Descrição | Status de sucesso |
|--------|------|-----------|--------------------|
| POST | /api/usuarios | Cria um novo usuário | 201 Created |
| GET | /api/usuarios | Lista todos os usuários | 200 OK |
| GET | /api/usuarios/:id | Busca um usuário pelo ID | 200 OK |

## Exemplo de requisição (POST)

Corpo da requisição:
{
  "nome": "Maria Silva",
  "email": "maria@email.com"
}

Resposta de sucesso:
{
  "data": {
    "id": 1,
    "nome": "Maria Silva",
    "email": "maria@email.com"
  }
}

Resposta de erro (campo ausente):
{
  "error": {
    "message": "Nome e email são obrigatórios"
  }
}

---
