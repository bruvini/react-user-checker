# Define a imagem base
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json (ou apenas o package.json se não tiver o lock)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos restantes do projeto para o diretório de trabalho
COPY . .

# Expõe a porta que o Node vai rodar (React normalmente roda na porta 3000)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
