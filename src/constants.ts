import * as dotenv from 'dotenv';

dotenv.config();

export const DATABASE_SERVICE =
  process.env.DATABASE_SERVICE ||
  'mongodb+srv://LucasDev:16022405@cluster0.ire6g.mongodb.net/umbler?retryWrites=true&w=majority';

export const PORT = process.env.PORT || 3000;
