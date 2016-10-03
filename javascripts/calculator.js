/**
 * Author: Nhut Le
 * Calculator object: to handle calculation functions
 */
var Calculator = function() {
  'use strict';

  var current, memory, operation;

  current   = ''; // current input
  memory    = ''; // last result
  operation = ''; // +-*:

  /**
   * Add operands to current input
   * @param {String} operand
   */
  var addOperand = function(operand) {
    current += operand;

    Displayer.showResult(current);
  };

  /**
   * Add operation
   * @param {String} op +-*:
   */
  var addOperation = function(op) {
    if (operation !== '') {
      calculate();
    }

    memory    = current;
    operation = op;
    current   = '';

    Displayer.showResult(memory);
  };

  /**
   * Manipulate calculation
   */
  var calculate = function() {
    memory  = parseFloat(memory);
    current = parseFloat(current);

    if (isNaN(memory) || isNaN(current)) {
      return;
    }

    if (operation === '+') {
      current = memory + current;
    }

    if (operation === '-') {
      current = memory - current;
    }

    if (operation === '*') {
      current = memory * current;
    }

    if (operation === '/') {
      if (current === 0) { // divided by zero
        current = 'Error';
      } else {
        current = memory / current;
      }
    }

    operation = '';
    memory    = '';

    Displayer.showResult(current);
  };

  /**
   * Reset current input
   */
  var clear = function() {
    current = '';

    Displayer.showResult(current);
  };

  /**
   * Reset the calculator
   */
  var clearAll = function() {
    current   = '';
    memory    = '';
    operation = '';

    Displayer.showResult(current);
  };

  return {
    addOperand: addOperand,
    addOperation: addOperation,
    calculate: calculate,
    clear: clear,
    clearAll: clearAll
  };
}();