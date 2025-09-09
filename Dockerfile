# Etapa 1: Build
FROM node:20-alpine AS builder

# Directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json / yarn.lock
COPY package*.json ./
# o si usas Yarn:
# COPY yarn.lock package.json ./

# Instalamos dependencias
RUN npm install
# o con Yarn: RUN yarn install --frozen-lockfile

# Copiamos todo el proyecto
COPY . .

# Generamos el cliente de Prisma
RUN npx prisma generate

# Construimos Next.js
RUN npm run build
# o con Yarn: RUN yarn build

# Etapa 2: Producción
FROM node:20-alpine AS runner
WORKDIR /app

# Copiamos solo lo necesario desde la build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

# Exponemos el puerto
EXPOSE 3000

# Variable de entorno de producción
ENV NODE_ENV=production

# Comando para iniciar Next.js
CMD ["npm", "start"]
# o con Yarn: CMD ["yarn", "start"]
