import { Scenes, Telegraf } from 'telegraf';
import mongoose from 'mongoose';
import { session } from 'telegraf-session-mongodb';
import { Env } from './lib/env';
import { BotSessionContext } from './context/context';
import { startScene } from './scenes/startScene';
import { Handlers } from './handlers';
import * as http from 'http';

export class App {
  private bot: Telegraf<BotSessionContext>;

  constructor() {
    this.bot = new Telegraf<BotSessionContext>(Env.getStr('BOT_TOKEN'));
  }

  public async start(): Promise<void> {
    await mongoose.connect(Env.getStr('MONGO_URI'), { useNewUrlParser: true, useUnifiedTopology: true });

    this.bot.use(session(mongoose.connection.db, { sessionName: 'session', collectionName: 'sessions' }));

    const stage = new Scenes.Stage([startScene]);
    this.bot.use(stage.middleware());

    Handlers.getHandlers(this.bot);

    this.checkHealth();

    await this.bot.launch();

    // Enable graceful stop
    process.once('SIGINT', () => this.bot.stop('SIGINT'));
    process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
  }

  /**
   * Check health
   */
  private checkHealth() {
    http
      .createServer((_req, res) => {
        res.writeHead(200);
        res.end('OK');
      })
      .listen(3000);
  }
}
