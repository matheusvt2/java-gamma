#### Links uteis
http://www.torneseumprogramador.com.br/

#### Anotações e Definições
> TDD e BDD são metodologias de desenvolvimento ágil. \
No TDD (Test Driven Development) o desenvolvimento deve ser guiado a testes, onde um teste unitário deve ser escrito antes que uma funcionalidade do sistema o seja. \
No BDD (Behaviour Driven Development) o desenvolvimento deve ser guiado aos comportamentos que o sistema deve apresentar. Desta forma, um comportamento (requisito/especificação) é priorizado em relação ao teste unitário, o que não exclui a execução do fluxo do TDD neste processo. \
![imagem1][tdd_x_bdd]

[tdd_x_bdd]: doc/images/tdd_bdd.png "A figura apresenta o fluxo do TDD e BDD"

#### Comandos 
- Instalação do nodejs e npm
```
sudo apt install nodejs  
sudo apt install npm  
npm install express-generator -g #(instalação do express no diretorio global) 
```
- Criação da estrutura do projeto
```
express --view=ejs integracao_continua #(cria um template ejs para o projeto integracao_continua) 
npm install #(instala os pacotes padrões do nodejs para o ejs) 
nmp start #(sobe o servidor na porta default, para trocar a porta -> export PORT=9999)
```

- Instalação do Jasmine (teste unitário)
```
npm install --save-dev jasmine #(programa para testes - usar na raiz do projeto) 
node_modules/.bin/jasmine init #(cria os arquivos do jasmine)
node_modules/.bin/jasmine spec/support/models/clientes_spec.js #(executa o arquivo de teste no destino)
```
- Instalação do Cucumber (teste integrado)
```
npm install --save-dev cucumber 
node_modules/.bin/cucumber-js features #(executa o arquivo de teste no destino)
```
- Instalação do selenium (teste integrado)
```
npm install --save-dev selenium-webdriver #(na pasta do projeto)
```

Obs.: --save-dev é para marcar como dependencia de desenvolvimento no arquivo package.json

Obs2.: dá para configurar no package.json para o NMP inicial os testes, no caso: npm run tdd / npm run bdd