'use strict';

const { headers, errorSchemas } = require('../../common/qp-schema');

const createEntityTypeRequestSchema = {
  tags: ['Entity Type'],
  summary: 'This api creates a Enitity Type',
  description: `<h3> This API let users to create an entity type </h3>`,
  headers,
  body: {
    "type": "object",
    "properties": {
      "docType": {
        "default": "EntityType",
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "displayName": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "status": {
        "type": "string"
      },
      "domain": {
        "type": "string"
      },
      "platform_version": {
        "type": "number"
      },
      "metrics_schema": {
        "type": "array",
        "items": {
          "type": "object"
        }
      },
      "entity_default_properties": {
        "type": "array",
        "items": {
          "type": "object"
        }
      },
      "metric_default_properties": {
        "type": "array",
        "items": {
          "type": "object"
        }
      },
      "derived_properties": {
        "type": "array",
        "items": {
          "type": "object"
        }
      },
      "tenantId": {
        "type": "string"
      },
      "tags": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "output": {
        "default": "elastic",
        "type": "string"
      },
      "metrics_ingestion": {
        "default": true,
        "type": "boolean"
      },
      "entity_ingestion": {
        "default": true,
        "type": "boolean"
      },
      "global": {
        "default": false,
        "type": "boolean"
      },
      "re_filesystem": {
        "default": false,
        "type": "boolean"
      },
      "_search_after": {
        "type": "array"
      },
      "_total_count": {
        "type": "number"
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
      "lastUpdated": {
        "type": "string",
        "format": "date-time"
      },
      "createdBy": {
        "type": "string"
      },
      "createdByName": {
        "type": "string"
      },
      "version": {
        "type": "number"
      },
      "updatedBy": {
        "type": "string"
      },
      "updatedByName": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "displayName",
      "status",
      "domain",
      "output",
      "metrics_ingestion",
      "entity_ingestion",
      "global",
      "re_filesystem"
    ],
    "additionalProperties": false
  }
};

const createEntityTypeResponseSchema = {
  type: 'object',
  properties: createEntityTypeRequestSchema.body.properties
};



const entityTypeCreateSchema = {
  ...createEntityTypeRequestSchema,
  response: {
    200: createEntityTypeResponseSchema,
    ...errorSchemas
  }
};


const entityTypeListRequestSchema = {
  tags: ['Entity Type'],
  summary: 'This api read all the list of Enitity Type',
  description: `<h3> This API let users to get all entity types </h3>`,
  headers
}

const entityTypeListSchema = {
  ...entityTypeListRequestSchema,
  response: {
    200: [createEntityTypeResponseSchema],
    ...errorSchemas
  }
};

module.exports = { entityTypeCreateSchema, entityTypeListSchema };
