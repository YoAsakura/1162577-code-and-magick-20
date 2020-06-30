'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};

var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards.push({
    name: WIZARD_NAMES[randomInteger(0, WIZARD_NAMES.length)] + WIZARD_SURNAMES[randomInteger(0, WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomInteger(0, COAT_COLORS.length)],
    eyesColor: WIZARD_EYES[randomInteger(0, WIZARD_EYES.length)]
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

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var fieldSetupUserName = document.querySelector('.setup-user-name');
var inputEyes = document.getElementsByName('eyes-color')[0];
var inputFireball = document.getElementsByName('fireball-color')[0];
var inputCoat = document.getElementsByName('coat-color')[0];

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = WIZARD_EYES[randomInteger(0, WIZARD_EYES.length)];
  inputEyes.value = wizardEyes.style.fill;
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[randomInteger(0, COAT_COLORS.length)];
  inputCoat.value = wizardCoat.style.fill;
});

wizardFireball.addEventListener('click', function () {
  var randomHexColor = FIREBALL_COLORS[randomInteger(0, FIREBALL_COLORS.length)];
  wizardFireball.style.background = randomHexColor;
  inputFireball.value = randomHexColor;
});

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

fieldSetupUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

fieldSetupUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});
