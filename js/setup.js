'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var selectMageName = function () {
  var randomName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];

  return randomName;
};

var selectMageCoat = function () {
  var randomCoat = COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)];

  return randomCoat;
};

var selectMageEyes = function () {
  var randomYeys = WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)];

  return randomYeys;
};

var wizards = [
  {
    name: selectMageName(),
    coatColor: selectMageCoat(),
    eyesColor: selectMageEyes()
  },

  {
    name: selectMageName(),
    coatColor: selectMageCoat(),
    eyesColor: selectMageEyes()
  },
  {

    name: selectMageName(),
    coatColor: selectMageCoat(),
    eyesColor: selectMageEyes()
  },
  {

    name: selectMageName(),
    coatColor: selectMageCoat(),
    eyesColor: selectMageEyes()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;


  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
