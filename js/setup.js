'use strict';

// Создание констант и передача их в глобальную область видимости
(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.valueMage = {
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    COAT_COLORS: COAT_COLORS,
    WIZARD_EYES: WIZARD_EYES,
    FIREBALL_COLORS: FIREBALL_COLORS
  };
})();

// Функция добавление 4-х рандомных магов.
(function () {
  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: window.valueMage.WIZARD_NAMES[window.MathModule.randomInteger(0, window.valueMage.WIZARD_NAMES.length)] + window.valueMage.WIZARD_SURNAMES[window.MathModule.randomInteger(0, window.valueMage.WIZARD_SURNAMES.length)],
      coatColor: window.valueMage.COAT_COLORS[window.MathModule.randomInteger(0, window.valueMage.COAT_COLORS.length)],
      eyesColor: window.valueMage.WIZARD_EYES[window.MathModule.randomInteger(0, window.valueMage.WIZARD_EYES.length)]
    });
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var b = 0; b < wizards.length; b++) {
    fragment.appendChild(renderWizard(wizards[b]));
  }

  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');
})();

// Функция изменения цвета элементов мага и заполнение полей из их значений.
(function () {
  var inputEyes = document.getElementsByName('eyes-color')[0];
  var inputFireball = document.getElementsByName('fireball-color')[0];
  var inputCoat = document.getElementsByName('coat-color')[0];
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  window.colorize(wizardEyes, window.valueMage.WIZARD_EYES, inputEyes);
  window.colorize(wizardCoat, window.valueMage.COAT_COLORS, inputCoat);
  window.colorize(wizardFireball, window.valueMage.FIREBALL_COLORS, inputFireball);
})();
