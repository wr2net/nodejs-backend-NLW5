# Trilha NodeJS - NextLevelWeek #05

## Objetivo
Criar uma API com socket para um chat de atendimento ao cliente.


### Instalando as dependências:
`yarn install` ou `npm install`

### Rodando as Migrations
`yarn typeorm migration:run` ou `npm typeorm migration:run`

### Iniciando o servidor
`yarn dev` ou `npm dev`

### Realizando requisições para a API
Para realizar as requisições, utilize o programa [imsomnia](https://insomnia.rest/download). Após instalá-lo, importe o arquivo contido no diretório `insomnia` do projeto.

### Acessando a UI
`http://localhost:3333/pages/client`



#### Observação:
Através do Insomnia você pode habilitar e desabilitar a disponibilidade do chat na UI. \
Basta você trocar o valor da chav `chat` em Settings -> Update

`true` => habilita o chat \
`false` => desabilita o chat