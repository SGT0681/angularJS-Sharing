angular.module('keyboard_input_manager', []).

service('kbservice', [function () {
  this.events = {};

  this.on = function (event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  };

  this.emit = function (event, data) {
    var callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach(function (callback) {
        callback(data);
      });
    }
  };

  this.restart = function (event) {
    event.preventDefault();
    this.emit('restart');
  };

  this.keepPlaying = function (event) {
    event.preventDefault();
    this.emit('keepPlaying');
  };
}]);
