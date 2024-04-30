const str = {

    /**
     *  Replace params in string.
     *  
     *  @param  {String} str           : String where replace.
     *  @param  {Array}  paramsReplace : Array of objects.
     *                                   [{
     *                                       key  : Name of the param in the template.
     *                                       value: Value for the param to be inserted.
     *                                   }]
     */
    
    insert( str, paramsReplace ){

        let finalStr;
        let objParam;

        for ( let i = 0, len = paramsReplace.length; i < len; i++ ) {
            objParam = paramsReplace[ i ];
            finalStr = str.replace( '{{' + objParam.key + '}}', objParam.value );
        }

        return finalStr;

    },

    // Strings
    subscribe: 'Subscribe to weather updates',
    subscriptionHour: 'What time do you want to receive the alert? (0-23)',
    subscriptionHourError: 'The time entered is incorrect. (0-23)',
    subscriptionMinute: 'In what minute? (0-59)',
    subscriptionMinuteError: 'The minutes entered are incorrect. (0-59)',
    subscriptionLocation: 'We need your location to send you the weather.',
    requestLocation: 'Please send me the location of where you want the weather forecast.\n\nPress the <b>Send Location</b> button if you want from your current position, or send me another location through the Telegram clip icon.',
    sendLocation: 'Send location',
    state: 'See my subscription',
    unsubscribe: 'Eliminate subscription',
    current: 'Check current time',
    welcome: 'Hello {{name}}! Welcome to the bot in charge of the weather service. What would you like to do?',
    showSubscription: 'We send you the weather information every day',
    at: 'at',
    weatherPrediction: 'Weather forecast',
    temperature: 'Temperature',
    subscriptionCompleted: 'Your subscription to weather alerts is complete. What do you want to do?',
    subscriptionRemoved: 'Your subscription to weather alerts has been cancelled. What do you want to do?',
    rain: 'Rain',

    for: 'for',
    cloud:'Cloud',
    LightRain:'Light Rain',
    snow: 'Snow'

};

// Export str object
module.exports = str;