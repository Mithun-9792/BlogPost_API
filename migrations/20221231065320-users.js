"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db) {
    return db.createTable("users", {
        id: { primaryKey: true, type: "int", autoIncrement: true },
        name: { type: "string", notNull: true },
        email: { type: "string", notNull: true },
        password: { type: "string", notNull: true },
    });
};

exports.down = function(db) {
    return db.dropTable("users");
};

exports._meta = {
    version: 1,
};