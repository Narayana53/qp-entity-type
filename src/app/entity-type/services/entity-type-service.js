'use strict';

const entityTypeCreate = async (fastify, { request }) => {
  const { email, password } = request.body;
  return { email, password };
};


const entityTypeList = async (fastify, { request }) => {
  const { email, password } = request.body;
  return { email, password };
};

module.exports = { entityTypeCreate, entityTypeList};
