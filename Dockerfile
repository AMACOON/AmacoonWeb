# Imagem base com Node.js
FROM node:16 AS builder

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e yarn.lock para o diretório de trabalho do container
COPY package.json ./
COPY yarn.lock ./

# Instalar as dependências do projeto
RUN yarn install

# Copiar os arquivos restantes do diretório atual para o diretório de trabalho do container
COPY . .

# Compilar o projeto
RUN yarn build

# Construir a imagem final com a imagem Distroless como base
FROM gcr.io/distroless/nodejs:16

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o código compilado do estágio anterior para o diretório de trabalho do container
COPY --from=builder /app/dist ./dist

# Definir a porta que o servidor irá utilizar
EXPOSE 3000

# Definir o comando de inicialização do servidor
CMD ["dist/server.js"]
