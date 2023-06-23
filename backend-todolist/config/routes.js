/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'POST /api/v1/user/signup'  : { action: 'user/signup' },
    'POST /api/v1/user/login'   : { action: 'user/login' },

    // task
    'POST /api/v1/task'         : { action: 'task/create' },
    'GET /api/v1/task'          : { action: 'task/find'},
    'PATCH /api/v1/task'        : { action: 'task/update-one'},
    'DELETE /api/v1/task'       : { action: 'task/delete'},
    
    // tag
    'GET /api/v1/tag'           : { action : 'tag/find' },
    'POST /api/v1/tag'          : { action: 'tag/create'},
    'PATCH /api/v1/tag'         : { action: 'tag/update-one'},
};
