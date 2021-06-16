import { Telegraf } from 'telegraf';
import { BotSessionContext } from '../context/context';
import cnt from '../constants';

export class ProfileHandlers {
  public static getHandlers(bot: Telegraf<BotSessionContext>): void {
    bot.action(cnt.inlineKeyboards.profile.history.callback, async ctx => {
      await ctx.answerCbQuery();
      return ctx.reply('Will be history hear');
    });

    bot.action(cnt.inlineKeyboards.profile.spend.callback, async ctx => {
      await ctx.answerCbQuery();
      return ctx.reply(`Let's spend money`);
    });

    bot.action(cnt.inlineKeyboards.profile.play.callback, async ctx => {
      await ctx.answerCbQuery();
      return ctx.reply(`Let's play game`);
    });
  }
}
