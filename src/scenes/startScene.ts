import { Scenes } from 'telegraf';
import cnt from '../constants';
import { BotSessionContext } from '../context/context';
import { mainKeyboard, keyboardAgree } from '../keyboards';
import { User } from '../models/user/user.model';

export const startScene = new Scenes.BaseScene<BotSessionContext>(cnt.startSceneId);

startScene.enter(async ctx => {
  const user = await User.findByTgId(ctx.from?.id || 0);
  if (user) {
    return ctx.scene.leave();
  }

  try {
    return await ctx.replyWithMarkdown(cnt.strings.startMessage, keyboardAgree);
  } catch (error) {
    console.log('===================== Enter ERROR ======================', error);
  }

  return;
});

startScene.action(cnt.inlineKeyboards.agement.button.callback, async ctx => {
  await ctx.answerCbQuery();

  if (ctx.from) {
    const user = new User({
      userId: ctx.from.id,
      userName: getUserName(ctx),
    });

    await user.save();
  }

  return ctx.scene.leave();
});

startScene.leave(async ctx => {
  return ctx.reply(cnt.strings.welcome, mainKeyboard.resize());
});

startScene.use(async ctx => {
  try {
    await ctx.telegram.sendChatAction(ctx.chat?.id || 0, 'typing');
    return await ctx.replyWithMarkdown(cnt.strings.startMessage, keyboardAgree);
  } catch (error) {
    console.log(error);
  }

  return;
});

function getUserName(ctx: BotSessionContext): string | undefined {
  return ctx.from?.username || ctx.from?.first_name;
}
