'use strict';

/**
 * cleaning-product service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cleaning-product.cleaning-product');
