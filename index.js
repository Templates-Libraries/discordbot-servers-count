const v = 6;
const fetch = require("node-fetch");
module.exports = (token, botID) =>
    new Promise((resolve, reject) =>
        fetch(`https://discord.com/api/v${v}/oauth2/authorize?client_id=${botID}&scope=bot`, {
            headers: { Authorization: token }
        }).then(res => res.json()).then(({ bot }) => resolve(bot)).catch(reject)
    );