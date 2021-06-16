import { Markup } from 'telegraf';
import cnt from '../constants';

export const mainKeyboard = Markup.keyboard([
  [cnt.replyKeyboards.main.catalog, cnt.replyKeyboards.main.profile],
  [cnt.replyKeyboards.main.promo, cnt.replyKeyboards.main.voucher],
  [cnt.replyKeyboards.main.about, cnt.replyKeyboards.main.basket],
  [cnt.replyKeyboards.main.support],
]);

export const keyboardProfile = Markup.inlineKeyboard([
  [{ text: cnt.inlineKeyboards.profile.history.text, callback_data: cnt.inlineKeyboards.profile.history.callback }],
  [{ text: cnt.inlineKeyboards.profile.spend.text, callback_data: cnt.inlineKeyboards.profile.spend.callback }],
  [{ text: cnt.inlineKeyboards.profile.play.text, callback_data: cnt.inlineKeyboards.profile.play.callback }],
]);

export const keyboardSupport = Markup.inlineKeyboard([Markup.button.url(cnt.inlineKeyboards.support.button.text, cnt.inlineKeyboards.support.button.url)]);

export const keyboardAgree = Markup.inlineKeyboard([{ text: cnt.inlineKeyboards.agement.button.text, callback_data: cnt.inlineKeyboards.agement.button.callback }]);

export const keyboardSubscribe = Markup.inlineKeyboard([
  [Markup.button.url(cnt.inlineKeyboards.infoSubscribe.infoChannel.text, cnt.inlineKeyboards.infoSubscribe.infoChannel.url)],
  [{ text: cnt.inlineKeyboards.infoSubscribe.subscribed.text, callback_data: cnt.inlineKeyboards.infoSubscribe.subscribed.callback }],
]);
