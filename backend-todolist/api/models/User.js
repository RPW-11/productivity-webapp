/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    token: {
      type: 'string',
    },

    // relation to task
    tasks: {
      collection: 'task',
      via: 'ownerId',
    },
    // relation to tag
    tag: {
      collection: 'tag',
      via: 'ownerId',
    }

  },

  beforeCreate: function (values, callBack){
    // Hash password
    sails.helpers.passwords.hash(values.password).exec((err, hashedPassword) => {
      if (err) {return callBack(err);}
      values.password = hashedPassword;
      return callBack();
    })
  },

  // don't return password
  customToJSON: function() {
    return _.omit(this, ['password']);
  }

};

