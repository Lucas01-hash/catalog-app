import * as dotenv from 'dotenv';

dotenv.config();

export const DATABASE_SERVICE =
  process.env.DATABASE_SERVICE ||
  'mongodb+srv://LucasDev:16022405@cluster0.ire6g.mongodb.net/umbler?retryWrites=true&w=majority';

export const PORT_SERVER = Number(process.env.PORT_SERVER) || 3000;
export const PORT_WEBSOCKETS = Number(process.env.PORT_WEBSOCKETS) || 5500;
