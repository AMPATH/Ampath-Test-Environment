"use strict";
module.exports = function() {
    var obj = {
                application : {
                        host : '0.0.0.0',
                        port : 8016,
                        key: '',
                        cert: '',
                        tls: false
                },
                database : {
                        host     : '192.168.100.86',
                        user     : 'openmrs',
                        password : 'Admin123',
                        port     : 3306,
                        database : 'amrs',
                        multipleStatements: true
                }
        };
        if (!obj.application['host']) {
                throw new Error('Missing constant application.host.');
        } else if (!obj.application['port']) {
                throw new Error('Missing constant application.port.');
        } else if (!obj.database['host']) {
                throw new Error('Missing constant database.host.');
        } else if (!obj.database['user']) {
                throw new Error('Missing constant database.user.');
        } else if (!obj.database['password']) {
                throw new Error('Missing constant database.password.');
        } else if (!obj.database['database']) {
                throw new Error('Missing constant database.database.');
        }
        return obj;

}();