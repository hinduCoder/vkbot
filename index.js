const VkBot = require('node-vk-bot-api');
const Markup = require('node-vk-bot-api/lib/markup');

const bot = new VkBot("bcaebb1294bba8f5068e0a1915c302dfc11cbdb9b31c46b401e343a4e80d366743fe9356f6c3e3379b6d0");

bot
.command('скайп', (ctx) => {
  ctx.reply('Самый лучший файлообменник', null, Markup.keyboard([[{ action: { type: 'vkpay', hash: 'action=pay-to-group&amount=10&group_id=87664481&aid=6637537'}  }]]).oneTime()) //
});

bot.command('тест', ctx => {
    ctx.reply('Какой самый лучший файлоообменник', null, Markup.keyboard(['вайбер', "вотс апп", "депозит файлс", "скайп"]))
});

bot.command(['вайбер', "вотс апп", "депозит файлс"], context => context.reply("Нет"))

bot.startPolling()