# Desafio Front-end ClubPetro: Sistema Antifraude

Esse projeto foi iniciado com  [Create React App](https://github.com/facebook/create-react-app).

Para rodar a aplicação, acesse o diretório e digite:

### `npm start`

Roda o app no modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para ver no Browser.

### Funcionamento esperado da aplicação

Após iniciar a aplicação a seguinte tela será exibida:

![Tela Inicial](img/01.png)

Ao clicar no botão do status de uma venda, é possível classificá-la:

![Modal de Classificação da Venda](/img/02.png)

Em seguida o sistema pede uma confirmação de acordo com a classificação:

![Modal de Confirmação 1](/img/03.png)

As vendas classificadas são inseridas em suas respectivas tabelas:

![Tela Vendas Classificadas](/img/04.png)

É possível desfazer uma classificação clicando no botão de status:

![Modal de Confirmação 2](/img/05.png)

A venda, então, volta a ser suspeita:

![Classificação Desfeita](/img/06.png)


### Versões de recursos utilizados

* ReactJS 16.12.0
* Node JS 13.6.0
* npm 6.13.4
* Dashboard Template Material-UI