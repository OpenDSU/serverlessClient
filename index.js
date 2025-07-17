const ServerlessClient = require('./ServerlessClient');
const PendingCallMixin = require('./utils/PendingCallMixin');
const getBaseURL = require('./utils/getBaseURL');

async function createServerlessAPIClient(userId, endpoint, serverlessId, pluginName, options) {
    const client = new ServerlessClient(userId, endpoint, serverlessId, pluginName, options);
    return await client.init();
}

module.exports = {
    createServerlessAPIClient,
    PendingCallMixin,
    getBaseURL
};
