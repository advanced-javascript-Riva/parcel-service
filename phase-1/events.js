'use strict';
//Global Event Pool (shared by all modules)

//creating class that has all capabilities of event emitter
const EventEmitter = require('events');
//creating log method
class Logger extends EventEmitter {
    log(message, arg) {
        //I need to be able to pass args into console.log
        if(arg !== undefined) {
            console.log(message, arg);
        } else {
            console.log(message);
        }
    } 
}
let instance =  new Logger();
module.exports = instance;

