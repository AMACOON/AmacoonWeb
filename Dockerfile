# # Imagem base com Node.js
# FROM node:16

# # Definir o diretório de trabalho dentro do container
# WORKDIR /app

# # Copiar package.json e yarn.lock para o diretório de trabalho do container
# COPY package.json ./
# COPY yarn.lock ./

# # Instalar as dependências do projeto
# RUN yarn install

# # Instalar o pacote 'serve' globalmente
# RUN yarn global add serve

# # Copiar os arquivos restantes do diretório atual para o diretório de trabalho do container
# COPY . .

# # Compilar o projeto
# RUN yarn build

# # Iniciar o servidor 'serve'
# CMD ["serve", "-s", "dist", "-l", "3000"]


# Etapa de compilação
FROM node:16 as builder

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

# Etapa de execução
FROM node:16-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Instalar apenas o pacote 'serve' necessário para servir a aplicação
RUN yarn global add serve

# Copiar os artefatos da construção do estágio 'builder'
COPY --from=builder /app/dist /app/dist

# Iniciar o servidor 'serve'
CMD ["serve", "-s", "dist", "-l", "3000"]
