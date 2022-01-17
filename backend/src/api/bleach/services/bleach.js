'use strict';

/**
 * bleach service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bleach.bleach');
