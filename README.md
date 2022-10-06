# TesteMovFrontJoao

## Preparação para utilização
Esta aplicação foi desenvolvida em Angular +14. Ela entra em contato com a API desenvolvida em Laravel através do projeto teste-mov-back-joao. Para que esta tenha um desempenho satisfatório é necessário que o docker do projeto do backend esteja também em execução.

Vale constar que, há muitas diferenças de acordo com a distribuição linux utilizada para a configuração do ambiente para que este funcione. Com isso estou colocando um arquivo de configuração Dockerfile na pasta .docker a fim de ser possível a operacionalização em qualquer distribuição Linux ou até Windows e Mac.

## Preparação do Docker
Caso não haja o docker instalado em seu ambiente, é necessário que seja instalado, executando os comandos de acordo com o seu ambiente

### Instalação do Docker
Execute o seguinte comando para instalar o Docker:
```
sudo wget -qO- https://get.docker.com/ | sh
```

Após a execução é interessante que dê a permissão para que o docker possa rodar os comandos sem necessidade de estar rodando como root (utilizando o sudo). Para tal, execute o seguinte comando:
```
sudo gpasswd -a ${USER} docker
```

Agora necessitamos verificar se o Docker Engine está instalado e funcionando corretamente rodando a imagem "hello-world":
```
sudo service docker start
sudo docker run hello-world
```
Este comando irá baixar a imagem de teste e rodar em um container. Quando executar o container, ele irá apenas apresentar uma mensagem e finalizar.

## Efetuando o build da imagem
Após isso será necessário efetuar o build da imagem a partir do Dockerfile.
Para isso, acesse a pasta raiz do projeto e execute o seguinte comando:
```
docker build . -t teste-movida-front-joao -f ./.docker/Dockerfile
```
Após o comando ser executado verifique o nome que foi dado a esta imagem, conforme consta na seguinte linha, sendo o retorno do seu terminal. 
Exemplo:
> => => naming to **docker.io/library/teste-movida-front-joao**                  0.0s

Este é o nome da imagem a ser utilizada para subir o projeto do backend.

**IMPORTANTE!** Quando você efetua o build da imagem, é efetuado a cópia dos arquivos do projeto para dentro da imagem do Docker, ou seja, qualquer modificação nos arquivos não é automaticamente replicada para a imagem, necessitando efetuar um novo build para tal.

## Executando o frontend a partir da imagem

Com a imagem já "buildada", agora é possível efetuar a execução do backend. Recomendo a utilização do comando abaixo:
```
docker run -p 80:80 [NOME DA IMAGEM]
```
Vale constar que é necessário substituir **[NOME DA IMAGEM]** pelo nome da imagem que foi registrada no comando anterior. No meu caso ficará assim:
```
docker run -p 80:80 docker.io/library/teste-movida-front-joao
```
