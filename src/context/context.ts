import { Context, Scenes } from 'telegraf';

export interface SessionContextData {
  userAgreement: boolean;
}

export interface SceneSession {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __scenes: Scenes.SceneSessionData;
  user?: SessionContextData;
}

export interface BotSessionContext extends Context {
  session: SceneSession;
  scene: Scenes.SceneContextScene<Scenes.SceneContext<Scenes.SceneSessionData>, Scenes.SceneSessionData>;
}
