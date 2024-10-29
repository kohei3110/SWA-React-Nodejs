const { app } = require('@azure/functions');

app.http('health', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'health',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        return { body: `UP` };
    }
});
