
# Rick and Morty Characters

Este é um projeto simples em React que exibe uma lista de personagens do popular desenho animado *Rick and Morty*. O site consome a API pública [Rick and Morty API](https://rickandmortyapi.com/) para buscar os dados dos personagens e permite que o usuário filtre esses personagens pelo nome em tempo real.

![image](https://github.com/user-attachments/assets/532f9fe2-68d0-4daa-acda-4f5aad7afd66)
![image](https://github.com/user-attachments/assets/a582ebea-d70a-494e-be42-069d25be3ecc)



## Funcionalidades

- **Listagem de Personagens**: Exibe uma lista de personagens da série Rick and Morty.
- **Pesquisa em Tempo Real**: Permite que o usuário filtre os personagens pelo nome usando uma barra de pesquisa.
- **Tratamento de Erros**: Se ocorrer algum erro ao buscar os dados da API, uma mensagem de erro amigável é exibida na tela.

## Como Usar

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn instalado

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/rick-and-morty-characters.git
   cd rick-and-morty-characters
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

### Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   ou

   ```bash
   yarn start
   ```

2. Abra o navegador e acesse `http://localhost:3000` para ver o projeto em ação.

### Estrutura do Código

- **`App.js`**: Componente principal que faz a requisição à API, armazena os dados dos personagens e gerencia o estado de pesquisa e erros.
- **`index.css`** e **`App.css`**: Arquivos de estilo para personalizar a aparência do site.

### Explicação do Funcionamento

- **Busca de Personagens**: Ao carregar a página, o aplicativo faz uma requisição para a API de Rick and Morty e obtém uma lista de personagens. Esses personagens são armazenados em um estado React (`rick`).
- **Filtragem de Personagens**: O usuário pode digitar na barra de pesquisa para filtrar os personagens exibidos na tela. O filtro é aplicado em tempo real enquanto o usuário digita.
- **Tratamento de Erros**: Se ocorrer um erro durante a requisição à API (como problemas de rede ou uma URL inválida), uma mensagem de erro é exibida na interface, informando ao usuário que algo deu errado.

### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir a interface do usuário.
- **Fetch API**: Utilizada para fazer a requisição à API de Rick and Morty.
- **CSS**: Para estilização básica do site.

### Próximos Passos

- Melhorar o design do site.
- Adicionar paginação para navegar entre as diferentes páginas de personagens.
- Implementar mais filtros, como por espécie ou status dos personagens.
- Adicionar testes unitários para garantir a estabilidade do código.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

---


