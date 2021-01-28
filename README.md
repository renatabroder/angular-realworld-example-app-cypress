# Testes E2E com Cypress na aplicação *RealWorld*

O projeto base para o desenvolvimento dos testes é o [RealWorld](https://github.com/gothinkster/angular-realworld-example-app), desenvolvido em Angular.

Na pasta [cypress/integration](https://github.com/renatabroder/angular-realworld-example-app-cypress/tree/main/cypress/integration) encontram-se os testes E2E para verificação do funcionamento correto das funcionalidades da aplicação.

Para executá-los, primeiro devem-se instalar a dependências necessárias para o projeto rodar:

    $ npm install

Em seguida iniciar a aplicação com o comando:

    $ npm start

Uma vez que a aplicação tiver sido carregada, abrir a GUI do Cypress com o comando:

    $ npx cypress open

ou pode-se optar por rodar os testes pela linha de comando utilizando:

    $ npx cypress run --spec nome.spec.js
    
