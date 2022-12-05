'use strict';
const { uuid } = require('../../../lib');

const { entityTypeCreate, entityTypeList  } = require('../services/entity-type-service');

async function CREATE(request, reply) {

  // validate the Throghtling, schema, tenant
  const { data } = await entityTypeCreate(this, { request });
  // validate the response and send back 
  reply.code(201).send(request.body);

};

async function READ(request, reply) {


  // validate the Throghtling, schema, tenant
  const { data } = await entityTypeCreate(this, { request });
  // validate the response and send back 
  reply.code(201).send(request.body);
};




module.exports = { CREATE, READ };
