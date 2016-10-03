/**
 * Author: Nhut Le
 * Display object:
 */

var Displayer = function(document) {
  'use strict';

  var $result, $equal, $numbers, $operators, $clear, $clearAll;

  $result    = document.getElementById('result');
  $equal     = document.getElementById('equal');
  $numbers   = document.getElementById('numbers')
                       .querySelectorAll('a:not(#clear):not(#clear_all)');
  $operators = document.getElementById('operators')
                       .querySelectorAll('a:not(#equal)');
  $clear     = document.getElementById('clear');
  $clearAll  = document.getElementById('clear_all');

  /**
   * Initialize Displayer
   */
  var initialize  = function() {
    // default value of result is zero
    $result.innerHTML = '0';

    /**
     * Attach click events to numbers
     */
    $numbers.forEach(function(element) {
      element.addEventListener('click', function() {
        Calculator.addOperand(this.text);
      });
    });

    /**
     * Attach click events to operators
     */
    $operators.forEach(function(element) {
      element.addEventListener('click', function() {
        Calculator.addOperation(this.text);
      });
    });

    /**
     * Attach click events to the rest
     */
    $equal.addEventListener('click', Calculator.calculate);
    $clear.addEventListener('click', Calculator.clear);
    $clearAll.addEventListener('click', Calculator.clearAll);
  };

  initialize();

  /**
   * Show result
   * @param  {String} result
   */
  var showResult = function(result) {
    $result.innerHTML = result;
  };

  return {
    showResult: showResult
  };
}(document);