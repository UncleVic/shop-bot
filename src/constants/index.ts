export default {
  startSceneId: 'START_SCENE_ID',
  strings: {
    startMessage: 'Перед началом использования бота, ознакомьтесь с нашими условиями покупки здесь: [*ссылка на документ*](https://google.com)',
    welcome: 'Добро пожаловать в эзотерический магазин 🎴11:11 Просмотрите наш каталог товаров ниже👇',
    aboutCompany: 'И это все о нас!',
    support: 'Для перехода в чат теххподержки, нажмите пожалуйста эту кнопку👇',
    infoChannelId: '@machints',
    subscribeMessage: '📢 Подпишитесь на наш канал, чтобы получить промо-код на одну бесплатную доставку и возможность отслеживать новые промо-коды',
    promocode: '🎉 Благодарим вас за подписку! Ваш промо-код (скидка/ тд, на выбор заказчика): *промокод* Введите ваш промо-код в комментарии к заказу!',
  },
  replyKeyboards: {
    main: {
      catalog: 'Каталог 🗂',
      profile: 'Личный кабинет 🏡',
      promo: 'Промо-код 🌟',
      voucher: 'Ваучеры 🎟',
      about: 'О нас 🎴',
      basket: 'Моя корзина 🛒',
      support: 'Поддержка 👨‍💻',
    },
  },
  inlineKeyboards: {
    profile: {
      history: {
        text: 'История заказов 🧾',
        callback: 'order-history',
      },
      spend: {
        text: 'Потратить баллы 🛍',
        callback: 'spend-points',
      },
      play: {
        text: 'Сыграть в игру 🕹',
        callback: 'play-game',
      },
    },
    agement: {
      button: {
        text: 'Я принимаю ✅',
        callback: 'agree',
      },
    },
    support: {
      button: {
        text: 'Перейти в техподдержку',
        url: 'https://t.me/coldbrew1337',
      },
    },
    infoSubscribe: {
      infoChannel: {
        text: 'Подписаться',
        url: 'https://t.me/machints',
      },
      subscribed: {
        text: 'Я подписался ✅',
        callback: 'subscribed',
      },
    },
  },
};
