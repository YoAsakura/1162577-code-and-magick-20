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

  // Функция добавление 4-х рандомных магов.
  var setup = document.querySelector('.setup');
  var popupMenu = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    popupMenu.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // Функция отмены дефолтной отправки формы
  window.load(successHandler, errorHandler);

  var form = popupMenu.querySelector('.setup-wizard-form');
  var submitHandler = function (evt) {
    window.save(new FormData(form), function () {
      popupMenu.classList.add('hidden');
    });
    evt.preventDefault();
  };

  form.addEventListener('submit', submitHandler);

  // Функция изменения цвета элементов мага и заполнение полей из их значений.
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
