'use strict';

const { errorHandler } = require('../errors/handler');
const entityTypeRoutes = require('./entity-type');

module.exports = async fastify => {
  fastify.setErrorHandler(errorHandler);
  fastify.register(entityTypeRoutes, { prefix: '/v2/entity-type' });
};
