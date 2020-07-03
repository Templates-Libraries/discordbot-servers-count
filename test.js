const fetch = require('./');
fetch(
    "УКАЖИТЕ_ТОКЕН_АККАУНТА_ПОЛЬЗОВАТЕЛЯ",
    "УКАЖИТЕ_АЙДИ_БОТА"
).then(console.info).catch(console.error);

/*
{
    id: '464272403766444044',
    username: 'SD.C Monitoring',
    avatar: '7028854564a4da9394f22966b8c76e2f',
    discriminator: '9896',
    public_flags: 0,
    bot: true,
    approximate_guild_count: 10500
}
*/