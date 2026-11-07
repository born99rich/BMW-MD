const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'XMDIAAAAAAAAA82Wy47rNhKGX2XAbRux7pINNBBdfWv5btnuwSxoiZZoS5RMUrblwA8R9LoX2WeTbBIgL9WPEMjdnXMwSA56cM5itKIoquqrn8Uq/gBIjhkaoAq0fwAFxUfIUT3kVYFAG1jldosoaIAIcgjaoGN6Y0l82CFB2NuP5GFtSZ3jmT52mTzKlpO5PR5QV9v13NX6HlwboCg3KQ6/YDDfLNcLrCqb0tr1j2Nxx7pZXzc7ZZOo1uWirkp6HDneMA7YPbjWFiGmmMRukaAMUZgOUDWGmH4MXxqZwcCu+JhXC35ZWlJx6haT5G4190edC1ydVVLuFaPlL8yP4cOim8YLKhXmgMDuZK8I5zgcKUq3G/dFnz0eW06R+mgm7cJXfIZjgqJehAjHvPqw7siPk51POupmOlOC2YoP19Y4J96lsLWOl8jLE7wz8KAVeL2PgbtDU5/hUlgvSZ8cTnvXc7FW9vqimRb5OKFQuNBKp+v9NP8cfEzfc2X/v+hu+A5SHtbqdj4qol1TanVtB85VYSWffdR0ZjPay8uJ+0Ay92P4yfAkpmKVkjIdwBOD/Ynj4Qkuzsvz8Dxfp1p2YRnfzZ1g/Qkf8pJ+UeQoLGeCXnVStJ766qOpLFNvUMVk2IkFRs8syDnpdyYnc504vbkWjyxZHbG7RFSH0qXnyFmeTANVhDvMAgdvRmaZJvH9LaI9qnoRaIvXBqAoxoxTyHFObnOG0AAwOs5QSBG/yQvIaNxbhP5duhsRN6UmF83ZFFvT6XRYaWWgGZOWElc+ewjie9AABc1DxBiKupjxnFY+YgzGiIH2v287VQdNUZZz1MdRvR+GJqu6pGmy0FK171McgQbY0jzzEWhzWqIGuK2TTV3XbNlWFdHQBU/wbEWp3UHKcYgLSDhoA1DTRxQxhkns51EtbW3x2gDZK8ccZ4hxmBWgLeotRdBEQVGuja9EM23N0UXZbLmq4nmSq2vfCE39ejRZkF1HczRNtDzD0g3rG6EZX42mu5pi2GrLMiTFkVzNlf9v0GRJ1kRFUwxdF2SzZZnSt0HTvj7XHMvSRU8zXNGTVUXwXP3boOnS9T8NQNCZv1bWuh4YotwAW0wZX5CySHMYvdfdv77CMMxLwmcVCe16gChoi5+mEeeYxKwOtySQhgk+IjuBnIH2FqYM/VWEEEXRe6RvjdV+JTfMbm+6crugpq8N3YSQZFltKZqhCKLUVqXv2Xen2iwsiu8I4qBxC/i/da0XvkpLYG0LvDw//fjy/PT7y/PTHy/PT7/96+X56aeX56dfX56ffn55fvql1uwtltp1hDjEKQNtYD+sFrI2eXBHq/Q4DDsdcx2bdmyCT7G/1/nXOhoeLuejIdK4mlzsCl9gmhcRm98tt4eDmgbjjQwdU99b+5Vx/zdGQBvcNfHQCca4tQ2Wot4t+v2ycMJD6Tn5KCaTYLPu3yXNdOVr2XpMj26zvLgzWYGGZgfqXBdDIpyK4SyEWXeepPb2VFz8W1NogAgdcYg+d+Y8CLuNY6KLmWXlahbYhz7OhsNJaE/i7jjW44rRiWpK0DftZIFW3dNd027ZuBC6g7zvhp0pPPTK/VzBq3Vl9JJxolnJ6bUD3Tpg+nbzwG+9Ad9etxjdGvnb/vzT9r3y1kkoXBuf/fp2I/iHrmqtBszYNIdQ8ff+ieVMKuBgtXGbKdEO5WMwl1pSfBqp5qPXBNf6OBQp5NucZqANcJHkBIEGoHlZ53SPbPMv+LJNoWeb8a6ON4WMm5/Oyd+VLLEBssosihmH/P18AbN+eou6z9UmxjQvupAldfYf8m2wB9c/AYQKLbs1CwAA',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "Born Rich",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "233594684012",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BMW MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/071f797dda6aef5ae3877.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

