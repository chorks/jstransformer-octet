'use strict';

var octet = require('octet');
var merge = require('merge');
var Promise = require('promise');

exports.name = 'octet';
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var result = octet(str, merge(options, locals));
  if (result.err) {
    throw new Error(result.err);
  }
  else {
    return result.res;
  }
};

exports.renderAsync = function (str, options, locals) {
  return new Promise(function (fulfill, reject) {
    octet(str, merge(options, locals), function (err, output) {
      if (err) {
        return reject(err);
      }
      else {
        return fulfill(output);
      }
    });
  });
};