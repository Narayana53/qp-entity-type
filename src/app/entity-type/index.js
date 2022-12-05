'use strict';

const { entityTypeCreateSchema } = require('./schemas/entitytypecreate');

const { CREATE: entityTypeCreate } = require('./controllers/entity-type');

module.exports = async fastify => {
  fastify.route({
    method: 'POST',
    url: '/create',
    schema: entityTypeCreateSchema,
    handler: entityTypeCreate
  });

  fastify.route({
    method: 'GET',
    url: '/list',
    schema: {},
    handler: entityTypeCreate
  });

};
