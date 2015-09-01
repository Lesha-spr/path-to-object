'use strict';

module.exports = function(path, value) {
    var depths = path.split('.');
    var obj = {};

    toSubObject(depths, obj);

    function toSubObject(arr, sub) {
        var shifted = arr.shift();
        sub[shifted] = {};

        if (arr.length) {
            toSubObject(arr, sub[shifted]);
        } else {
            sub[shifted] = value || {};
        }
    }

    return obj;
};