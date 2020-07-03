# discordbot-servers-count
Скрипт для получения количества серверов Discord бота

## Установка
Как зависимость:
```bash
$ npm install github:vladciphersky/discordbot-servers-count
```

В отдельную папку:
```bash
$ git clone https://github.com/vladciphersky/discordbot-servers-count.git # Либо скачайте с GitHub самостоятельно и поместите в папку с ботом
$ cd discordbot-servers-count
$ npm install # Это установит node-fetch
```

## Использование
```js
const serversCount = require('discordbot-servers-count');

// Promise
serversCount(
    "УКАЖИТЕ_ТОКЕН_АККАУНТА_ПОЛЬЗОВАТЕЛЯ",
    "УКАЖИТЕ_АЙДИ_БОТА"
).then((data) => console.log(data["approximate_guild_count"])).catch(console.error);

// async/await
const data = await serversCount(
    "УКАЖИТЕ_ТОКЕН_АККАУНТА_ПОЛЬЗОВАТЕЛЯ",
    "УКАЖИТЕ_АЙДИ_БОТА"
);
console.log(data["approximate_guild_count"])
```