FROM httpd:2.4.54

ENV NODE_VERSION=16.13.0

RUN apt update && apt install -y curl

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN npm install -g @angular/cli

RUN mkdir /tmp/teste-mov-front-joao

COPY ./ /tmp/teste-mov-front-joao

RUN  cd /tmp/teste-mov-front-joao && \
     npm install && \
     ng build --configuration production && \
     cp -R /tmp/teste-mov-front-joao/dist/teste-mov-front-joao/* /usr/local/apache2/htdocs/

WORKDIR /usr/local/apache2/htdocs/
