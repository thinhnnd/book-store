import * as dotenv from 'dotenv';

dotenv.config();

const config = process.env;
const hourADay = 3600 * 24;

export const CommonConst = {
  //type
  jwt: {
    //type of nested object
    expiredDate: hourADay * (+process.env.JWT_EXPIRED_DATE || 7), // ORS
    secret: process.env.JWT_SECRET,
  },
};
