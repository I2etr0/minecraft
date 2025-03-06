# Используем официальный образ Node.js (LTS версия)
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install mineflayer
RUN npm install --save mineflayer-pvp

# Копируем исходный код приложения
COPY . .

# Открываем порт (например, 3000)
EXPOSE 25565

# Команда для запуска приложения
CMD ["node", "mybot.js"]  
# Или "node index.js" если нет сборки