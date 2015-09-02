'use strict';

var pathToObject = function(path, value) {
    var depths = path.split('.');
    var obj = {};

    toSubObject(depths, obj);

    function toSubObject(sub) {
        var shifted = depths.shift();
        sub[shifted] = {};

        if (depths.length) {
            toSubObject(sub[shifted]);
        } else {
            sub[shifted] = value || {};
        }
    }

    return obj;
};

pathToObject.value = function(obj, path, value) {
    var depths = path.split('.');
    var val = undefined;

    setDeep(obj);

    function setDeep(subObject) {
        var shifted = depths.shift();

        if (depths.length) {
            setDeep(subObject[shifted]);
        } else {
            if (value) {
                subObject[shifted] = value;
            } else {
                val = subObject[shifted];
            }
        }
    }

    return val || obj;
};

module.exports = pathToObject;