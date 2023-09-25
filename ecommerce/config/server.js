module.exports = ({ env }) => ({
  host: env('HOST', 'https://ideal-robot-776p764xqr73wrxp.github.dev/'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
