# SystemPlus - Gerenciamento de Vendas (Cadastro de Usuários) 

## Tecnologias Utilizadas: 
React Native, Stack Navigation(use Navigation), ApiRest (desenvolvida com Node/Express), Animations, AXIOS. 

## Repositório e Link da APi que eu mesma desenvolvi em Node.js 

Repositório: https://github.com/annebcandrade/api-register-node-users
Link APi: https://api-register-node-users.vercel.app


## Para executar o Aplicativo na sua IDE siga os seguintes comandos:
1- Instale o React Navigation: npm install @react-navigation/native 

2- instale dependências: npm install react-native-screens react-native-safe-area-context 

3- instale o Stack Navigation: npm install @react-navigation/native-stack 

4- Instale as animações: npm install react-native-animatable —save 

5- Instale o AXIOS para conectar com a APi: npm install Axios 

6- Instale o aplicativo Expo Go no seu celular se quiser usá-lo para ver o aplicativo rodando

7- rode o aplicativo com o comando: “npx Expo start” no terminal e leia o qrcode com seu celular. 



## Caso não consiga Executar o aplicativo na sua IDE, filmei a tela do meu celular, o aplicativo funcionando perfeitamente, segue abaixo o link do drive: 

https://drive.google.com/file/d/16uFkwddoXDMniRsSL9afC8mea3XUzqdi/view?usp=drivesdk

Ps. No vídeo, não aparece quando digito a senha(por estar filmando a tela) mas quando clico em cadastrar a senha aparece no histórico. 

## Como funciona a Aplicação? 
O aplicativo possui 3 telas, a primeira tela com o nome do aplicativo, ao clicar no botão “Acessar” o usuário navega para a segunda tela, a tela de cadastro com os inputs, os mesmos tem validação, ou seja, se algum campo estiver nulo ao clicar o botão “Cadastrar” ele emite um alerta “Preencha todos os campos”, se o e-mail não for válido(não tiver um @) emite o alerta “insira um e-mail válido” e se a senha for menor que 8 caracteres, emite um alerta “A senha deve ter no mínimo 8 carateceres) para que seja uma senha forte. Todos os campos sendo preenchidos da forma correta, ao clicar no botão “Cadastrar” o usuário é levado para a Terceira Página que contém o Histórico dos Cadastros, podendo clicar no botão “Excluir” para cada item da lista de registros, assim apagando aquele registro. 


## Passo A Passo da Aplicação(como foi feita) : 
Primeiro criei o aplicativo com Expo, depois instalei as dependências como (stack Navigation, AXIOS, animatable para animações e etc), depois baixei o Expo Go no meu celular para que ele servisse como emulador(lendo o qrcode disponível pelo terminal ao iniciar o app), depois criei toda estrutura do app, como pastas, rotas e etc colocando já o Navigation em cada página e também as animações que queria nas telas. 
Feito isso, conectei a APi e montei as rotas de Get e Post, a post que cria os usuários na tela Welcome e quando clica em Cadastrar, além de ir para outra tela de Results lá exibe os usuários pelo método GET. Finalizando, criei um botão Delete com o nome “Excluir” para apagar o registro selecionado. 

## Design 
Utilizei minha criatividade para que o aplicativo fosse agradável visualmente ao usuário, todas as telas com as mesmas cores e padrões.

## Também desenvolvi a mesma aplicação Web em React usando a mesma APi, com as mesmas funções e características. 

Link do Deploy da aplicação de Cadastros de Ususarios Web: https://registerusers.vercel.app


## Considerações Finais: 

Amei desenvolver cada parte desse desafio! Espero que gostem. Qualquer dúvida sobre o código ou aplicação, podem entrar em contato por e-mail ou WhatsApp. Grata pela oportunidade! 
