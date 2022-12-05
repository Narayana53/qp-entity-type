'use strict';

const entityTypeCreate = async (fastify, { request }) => {
  const { email, password } = request.body;
  return { email, password };
};


const entityTypeList = async (fastify, { request }) => {
  return { email: 1, password: 2 };
};

module.exports = { entityTypeCreate, entityTypeList};
