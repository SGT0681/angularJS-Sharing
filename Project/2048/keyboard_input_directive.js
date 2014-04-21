angular.module('keyboard_input_directive', ['keyboard_input_manager']).

directive('kbEvent', ['kbservice', function (kbservice) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var self = this;

      var map = {
        38: 0, // Up
        39: 1, // Right
        40: 2, // Down
        37: 3, // Left
        75: 0, // Vim up
        76: 1, // Vim right
        74: 2, // Vim down
        72: 3, // Vim left
        87: 0, // W
        68: 1, // D
        83: 2, // S
        65: 3  // A
      };

      element.bind('keydown', function (event) {
        var modifiers = event.altKey || event.ctrlKey || event.metaKey ||
                        event.shiftKey;
        var mapped    = map[event.which];

        if (!modifiers) {
          if (mapped !== undefined) {
            event.preventDefault();
            scope.$apply(kbservice.emit("move", mapped));
          }
        }

        // R key restarts the game
        if (!modifiers && event.which === 82) {
          scope.$apply(kbservice.emit("restart"));
        }
      });
    }
  };
}]);
