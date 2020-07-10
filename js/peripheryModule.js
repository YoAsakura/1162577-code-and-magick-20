'use strict';

// Модуль рандомного числа
(function () {
  var randomInteger = function (min, max) {
    var rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  };

  window.MathModule = {
    randomInteger: randomInteger
  };
})();

// Модуль колорации мага
(function () {
  window.colorize = function (element, arrElement, input) {
    element.addEventListener('click', function () {
      if (element.tagName.toLowerCase() === 'div') {
        var randomColor = arrElement[window.MathModule.randomInteger(0, arrElement.length)];
        element.style.backgroundColor = randomColor;
        input.value = randomColor;
      } else {
        randomColor = arrElement[window.MathModule.randomInteger(0, arrElement.length)];
        element.style.fill = randomColor;
        input.value = randomColor;
      }
    });
  };
})();
