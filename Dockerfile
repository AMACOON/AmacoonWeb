# Imagem base com Node.js
FROM node:16

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e yarn.lock para o diretório de trabalho do container
COPY package.json ./
COPY yarn.lock ./

# Instalar as dependências do projeto
RUN yarn install

# Instalar o pacote 'serve' globalmente
RUN yarn global add serve

# Copiar os arquivos restantes do diretório atual para o diretório de trabalho do container
COPY . .

# Compilar o projeto
RUN yarn build

# Iniciar o servidor 'serve'
CMD ["serve", "-s", "dist", "-l", "3000"]
