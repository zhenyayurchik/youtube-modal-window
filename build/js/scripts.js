"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal(_ref) {
    var first = _ref.first,
        last = _ref.last;

    _classCallCheck(this, Modal);

    this.firstFocusableElement = first;
    this.lastFocusableElement = last;
  }

  _createClass(Modal, [{
    key: "tab",
    value: function tab(e) {
      if (e.shiftKey) {
        if (document.activeElement === this.firstFocusableElement) {
          this.lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === this.lastFocusableElement) {
          this.firstFocusableElement.focus();
          e.preventDefault();
        }
      }

      this.firstFocusableElement.focus();
    }
  }, {
    key: "open",
    value: function open() {
      document.querySelector('.modal-background').style.display = "flex";
    }
  }, {
    key: "close",
    value: function close() {
      document.querySelector('.modal-background').style.display = "none";
    }
  }]);

  return Modal;
}();

var modal = new Modal({
  first: document.getElementById('first'),
  last: document.getElementById('last')
});
document.getElementById('btn').addEventListener("click", function () {
  modal.open();
});
document.querySelector('.modal-content__close-btn').addEventListener("click", function () {
  modal.close();
});
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    modal.close();
  }

  if (e.key === 'Tab' || e.keyCode === 9) {
    modal.tab(e);
  }
});