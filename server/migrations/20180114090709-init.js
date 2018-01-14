'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    return db.createTable('events', {
        id: { type: 'string', primaryKey: true },
        name: 'string',
        link: 'string',
        city: 'string',
        time: 'timestamp',
        attendees: 'int',
        event_group: 'jsonb',
    });
};

exports.down = function (db) {
    return db.dropTable('events');
};

exports._meta = {
    version: 1
};
