const str = require( './strings.js' );

const config = {
    TELEGRAM_BOT_TOKEN: '7088824514:AAHWUDRm_W12L2VPnDZzggmnsdh4KG5gngs',
    OPENWEATHER_TOKEN: 'bd5e378503939ddaee76f12ad7a97608',
    SQLITE_DB_PATH: './db/telegramDB.db',
    REQUIRED_PARAMS: 4,
    PREDICTION_NUMBER: 6,
    ICONS: {
        SUN: '\u2600',
        CLOUD: '\u2601',
        RAIN: '\u2614',
        PART_CLOUDY: '\u26C5',
        SNOW: '\u2744',
        HOT_SPRINGS: '\u2668',
        WARNING: '\u26A0',
        RAY: '\u26A1'
    },
    KEYBOARD: {

        HOURS: {
            keyboard: [
                [ '0', '1', '2', '3', '4', '5' ],
                [ '6', '7', '8', '9', '10', '11' ],
                [ '12', '13', '14', '15', '16', '17' ],
                [ '18', '19', '20', '21', '22', '23' ]
            ],
            resize_keyboard: true
        },

        MINUTES: {
            keyboard: [
                [ '00', '10', '20' ],
                [ '30', '40', '50' ],
            ],
            resize_keyboard: true
        },

        LOCATION: {
            keyboard: [
                [ {
                    text: str.sendLocation,
                    request_location: true
                } ]
            ],
            resize_keyboard: true
        }

    },
    RETRY: 300000 // 5 minutes
};

// Exports config object
module.exports = config;
