import { Telegraf, Telegram } from 'telegraf';
import { BotSessionContext } from '../context/context';
import cnt from '../constants';
import { keyboardProfile, keyboardSupport, keyboardSubscribe } from '../keyboards';
import { User } from '../models/user/user.model';
import { Message } from 'telegraf/typings/core/types/typegram';

export class MainKeyboardHandlers {
  public static getHandlers(bot: Telegraf<BotSessionContext>): void {
    // Кнопка Каталог
    bot.hears(cnt.replyKeyboards.main.catalog, async ctx => {
      return ctx.reply('Will show the catalog to you');
    });

    // Кнопка Личный кабинет
    bot.hears(cnt.replyKeyboards.main.profile, async ctx => {
      const user = await User.findByTgId(ctx.from?.id || 0);

      if (user) {
        const link = `https://t.me/${ctx.botInfo.username}?start=${user._id}`;

        return ctx.replyWithMarkdown(
          `Приветствую, ${user.userName}❗️
Ваш баланс: ${user.balance || 0} гривен 🏮
Деревьев посажено: ${user.trees || 0} 🌳
Реферальная ссылка: [${link}](${link})
Друзей в боте: ${user.friends || 0} 👥
Передавайте вашу ссылку своим друзьями и получайте бонусные баллы 🏮 за первую покупку приглашенного❗️`,
          keyboardProfile
        );
      } else {
        return ctx.reply(`Пользователь с id=${ctx.from?.id} не существует`);
      }
    });

    // Кнопка Промокод
    bot.hears(cnt.replyKeyboards.main.promo, async ctx => {
      return MainKeyboardHandlers.checkUserMember(ctx);
    });

    // Кнопка Ваучеры
    bot.hears(cnt.replyKeyboards.main.voucher, async ctx => {
      return ctx.reply('Will show the voucher to you');
    });

    // Кнопка О нас
    bot.hears(cnt.replyKeyboards.main.about, async ctx => {
      return ctx.reply(cnt.strings.aboutCompany);
    });

    // Кнопка Корзина
    bot.hears(cnt.replyKeyboards.main.basket, async ctx => {
      return ctx.reply('Will show the backet to you');
    });

    // Кнопка Поддержка
    bot.hears(cnt.replyKeyboards.main.support, async ctx => {
      return ctx.reply(cnt.strings.support, keyboardSupport);
    });

    bot.action(cnt.inlineKeyboards.infoSubscribe.subscribed.callback, async ctx => {
      await ctx.answerCbQuery();
      return MainKeyboardHandlers.checkUserMember(ctx);
    });
  }

  private static async checkUserMember(ctx: BotSessionContext): Promise<Message.TextMessage> {
    const member = await MainKeyboardHandlers.getChatMember(ctx.telegram, ctx.from?.id || 0);
    if (!member) {
      return ctx.reply(cnt.strings.subscribeMessage, keyboardSubscribe);
    }

    return ctx.reply(cnt.strings.promocode);
  }

  private static async getChatMember(telegram: Telegram, userId: number): Promise<boolean> {
    try {
      await telegram.getChatMember(cnt.strings.infoChannelId, userId);
      return true;
    } catch (_error) {
      return false;
    }
  }
}
