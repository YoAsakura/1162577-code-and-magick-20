'use strict';
// Функция открытия и закрытия диалога, отмена закрытия окна при фокусе на поле.
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    if (setup.hasAttribute('style')) {
      setup.removeAttribute('style');
    }
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var fieldSetupUserName = document.querySelector('.setup-user-name');
  fieldSetupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  fieldSetupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

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

  // Функция перетаскивания окна.
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandle = setupDialogElement.querySelector('.upload');
  var LEFT_MOUSE_BUTTON = 0;

  dialogHandle.addEventListener('mousedown', function (evt) {
    if (evt.button === LEFT_MOUSE_BUTTON) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var dragged = false;
      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        dragged = true;

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
        setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
          var onClickPreventDefault = function (clickEvt) {
            clickEvt.preventDefault();
            dialogHandle.removeEventListener('click', onClickPreventDefault);
          };
          dialogHandle.addEventListener('click', onClickPreventDefault);
        }
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  });
})();
