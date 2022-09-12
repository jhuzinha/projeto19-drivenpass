## DRIVENPASS - Gerenciador de senhas. 

Nessa API o usuário poderá salvar os dados (criptografado) de quantas  **Credencial** , __Cartão__,  __Nota Segura__  e __Wifi__ o usuário quiser.  Sempre que precisar, caso esteja logado, poderá solicitar os dados cadastrado de cada um deles.  

**Tecnologias Usadas:**	 
- Typescript; 
- PostgreSQL com Prisma; 

**Tipo de arquitetura usada:**	 

- Arquitetura em Camadas; 

 

### **ROTAS:**
- [Usuário](#Usuário)
- [Credencial](#Credencial) 
- [Notas Seguras](#Notas-Seguras)
- [Cartão](#Cartão)
- [Wifi](#Wifi)

  

### Usuário: 
Rotas de login e cadastro do usuário. End Points entre parênteses. 
- **Cadastro (/signup):** <br>
  Nessa rota a API espera receber no body da requisição:
 
   ```
    {
    "email": "",
    "password": ""
    }
    ```
  
    A senha tem que ser forte, ou seja: 
    - Possuir pelo menos uma letra maiuscula;
    - Ser mais que 10 caracteres;
    - Possuir pelo menos um letra minuscula;
    - Possuir pelo menos um dígito numérico;
    - Não possuir espaços em branco; 
  
  **Retornos:** <br> 
  Caso o email já esteja cadastrado a API retornará com status 409 (Conflito) <br>
  Caso algum dos requisitos especificados acima não sejam cumpridos será retornado status 422 (Joi Validation)<br>
  Caso esteja tudo correto será retornado o status 201 (Criado com sucesso)<br>
  
- **Login (/signin)**: <br>
   Nessa rota a API espera receber no body da requisição:
 
   ```
    {
    "email": "",
    "password": ""
    }
    ```
    **Retornos:** <br>
    Caso o email não esteja cadastrado retornará status 401 (Não autorizado) <br>
    Caso a senha não bata com o email cadastrado será retornado o status 401 (Não autorizado) <br>
    Caso esteja tudo correto será retornado o status 200 e o token do usuário <br>
    
### Credencial: 
Rotas verificada por Bearer Token  <br>
Caso o usuário nao esteja logado será retornado status 401  (Não autorizado) <br>
- **Criar(/credential/create):**
  Para criar uma credential a API espera receber por body:

  ```
  {
    "title": "",
    "url": "",
    "userName": "",
    "password": ""
  }
  ```
  **Retornos:** <br>
   Caso algum dos campos acima não sejam enviados será retornado o status 422 (Joi Validation) <br>
   Caso já exista um titulo de credencial cadastrada, no nome do usuário logado, igual ao passado no body será retornado o status 409 (Conflito) <br>
   Caso esteja tudo correto será retornado o status 201 (Criado com sucesso) <br>
 
- **Buscar(/credential):** <br>
  Caso seja realizada a requisição GET nesse end point será retornada todas as credenciais do usuário logado no formato:
  ```
  { 
  "id":"",
  "title":"",
  "url": ""
  }
  ```

  Caso seja passado o id da credencial por query params, por exemplo: (/credencial?id=1). Será retornado todos os dados da credencial em questão no formato: 
  ```
  { 
  "id":"",
  "title":"",
  "url": "",
  "userName": "",
  "password": "",
  "userId": ""
  }
  ```
  **Retornos:** <br>
  Caso o id passado, por query params, não seja do usuário logado será retornado o status 404 (Não encontrado);<br>
  Caso seja passado um id, por query params, não exista status 404 (Não encontrado);<br>
  Caso o id esteja correto será retornado o status 200 + o body exemplificado acima.<br>
  
- **Deletar(/credential/{id}/delete):** <br>
A API espera receber o id da credencial por params. Caso não seja passado o id será retornado erro 404 (Não encontrado);<br>
  **Retornos:** <br>
  Caso o id passado, por params, não seja do usuário logado será retornado o status 404 (Não encontrado);<br>
  Caso seja passado um id, por params, não exista status 404 (Não encontrado);<br>
  Caso o id esteja correto será retornado o status 200;<br>

### Notas Seguras: 
Rotas verificada por Bearer Token  <br>
Caso o usuário nao esteja logado será retornado status 401  (Não autorizado) <br>
- **Criar(/safenote/create):** <br>
 Para criar uma nota segura a API espera receber por body:

  ```
  {
    "title": "",
    "note": ""
  }
  ```
  
  **Retornos:** <br>
   Caso algum dos campos acima não sejam enviados será retornado o status 422 (Joi Validation) <br>
   Caso já exista um titulo de credencial cadastrada, no nome do usuário logado, igual ao passado no body será retornado o status 409 (Conflito) <br>
   Caso esteja tudo correto será retornado o status 201 (Criado com sucesso) <br>
   
- **Buscar(/safenote):** <br>
  Caso seja realizada a requisição GET nesse end point será retornada todas as credenciais do usuário logado no formato:
    ```
    {
      "title": "",
      "note": ""
    }
    ```

  Caso seja passado o id da nota por query params, por exemplo: (/safenote?id=1). Será retornado todos os dados da nota em questão no formato: 
    ```
    {
      "title": "",
      "note": ""
    }
    ```

    **Retornos:** <br>
    Caso o id passado, por query params, não seja do usuário logado será retornado o status 404 (Não encontrado);<br>
    Caso seja passado um id, por query params, não exista status 404 (Não encontrado);<br>
    Caso o id esteja correto será retornado o status 200 + o body exemplificado acima.<br>

 - **Deletar(/safenote/{id}/delete):** <br>
  A API espera receber o id da nota por params. Caso não seja passado o id será retornado erro 404 (Não encontrado);<br>
    **Retornos:** <br>
    Caso o id passado, por params, não seja do usuário logado será retornado o status 404 (Não encontrado);<br>
    Caso seja passado um id, por params, não exista status 404 (Não encontrado);<br>
    Caso o id esteja correto será retornado o status 200;<br>

### Cartão: 
Rotas verificada por Bearer Token  <br>
Caso o usuário nao esteja logado será retornado status 401  (Não autorizado) <br>
- **Criar(/card/create):** <br>
 Para criar uma nota segura a API espera receber por body:

  ```
  {
    "title": "",
    "number": "",
    "nameCard": "",
    "codeSecurity":"" ,
    "expirationDate":"" ,
    "password": "",
    "isVirtual": "",
    "type": ""
  }
  ```
  isVirtual espera receber um booleano. Type espera receber 'credit', 'debit' ou 'both'.
  
  **Retornos:** <br>
   Caso algum dos campos acima não sejam enviados será retornado o status 422 (Joi Validation) <br>
   Caso já exista um titulo de credencial cadastrada, no nome do usuário logado, igual ao passado no body será retornado o status 409 (Conflito) <br>
   Caso esteja tudo correto será retornado o status 201 (Criado com sucesso) <br>
   
- **Buscar(/card):** <br>
  Caso seja realizada a requisição GET nesse end point será retornada todas as credenciais do usuário logado no formato:
  ```
  {
    "id":"",
    "title": "",
    "isVirtual": ""
  }
  ```

  Caso seja passado o id da nota por query params, por exemplo: (/card?id=1). Será retornado todos os dados da nota em questão no formato: 
  ```
  {
    "id": "",
    "title": "",
    "number": "",
    "nameCard": "",
    "codeSecurity":"" ,
    "expirationDate":"" ,
    "password": "",
    "isVirtual": "",
    "type": ""
  }
  ```

   **Retornos:** <br>
   Caso o id passado, por query params, não seja do usuário logado será retornado o status 404 (Não encontrado);<br>
   Caso seja passado um id, por query params, não exista status 404 (Não encontrado);<br>
   Caso o id esteja correto será retornado o status 200 + o body exemplificado acima.<br>

- **Deletar(/card/{id}/delete):** <br>
  A API espera receber o id do card por params. Caso não seja passado o id será retornado erro 404 (Não encontrado);<br>
    **Retornos:** <br>
    Caso o id passado, por params, não seja do usuário logado será retornado o status 404 (Não encontrado);<br>
    Caso seja passado um id, por params, não exista status 404 (Não encontrado);<br>
    Caso o id esteja correto será retornado o status 200;<br>


### Wifi: 
Rotas verificada por Bearer Token  <br>
Caso o usuário nao esteja logado será retornado status 401  (Não autorizado) <br>
- **Criar(/wifi/create):** <br>
 Para criar uma nota segura a API espera receber por body:

  ```
  {
    "title": "",
    "name": "",
    "password": ""
  }
  ```
  
  **Retornos:** <br>
   Caso algum dos campos acima não sejam enviados será retornado o status 422 (Joi Validation) <br>
   Caso esteja tudo correto será retornado o status 201 (Criado com sucesso) <br>
   
- **Buscar(/wifi):** <br>
  Caso seja realizada a requisição GET nesse end point será retornada todas as credenciais do usuário logado no formato:
  ```
  {
    "id":"",
    "title": "",
    "name": ""
  }
  ```

  Caso seja passado o id da nota por query params, por exemplo: (/wifi?id=1). Será retornado todos os dados da nota em questão no formato: 
   ```
  {
    "id":"",
    "title": "",
    "name": "",
    "password": ""
  }
    ```

   **Retornos:** <br>
   Caso o id passado, por query params, não seja do usuário logado será retornado o status 404 (Não encontrado);<br>
   Caso seja passado um id, por query params, não exista status 404 (Não encontrado);<br>
   Caso o id esteja correto será retornado o status 200 + o body exemplificado acima.<br>

- **Deletar(/wifi/{id}/delete):** <br>
  A API espera receber o id do wifi por params. Caso não seja passado o id será retornado erro 404 (Não encontrado);<br>
    **Retornos:** <br>
    Caso o id passado, por params, não seja do usuário logado será retornado o status 404 (Não encontrado);<br>
    Caso seja passado um id, por params, não exista status 404 (Não encontrado);<br>
    Caso o id esteja correto será retornado o status 200;<br>
