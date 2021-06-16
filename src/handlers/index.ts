import { Telegraf } from 'telegraf';
import { BotSessionContext } from '../context/context';
import cnt from '../constants';
import { ProfileHandlers } from './profileHandlers';
import { MainKeyboardHandlers } from './mainKeyboardHandlers';

export class Handlers {
  public static getHandlers(bot: Telegraf<BotSessionContext>): void {
    bot.start(async ctx => {
      return ctx.scene.enter(cnt.startSceneId, { referer: ctx.startPayload });
    });

    MainKeyboardHandlers.getHandlers(bot);

    ProfileHandlers.getHandlers(bot);
  }
}
