(function() {
  'use strict';

  window.onload = function() {
    var $plus = document.getElementById('plus'),
      $minus = document.getElementById('minus'),
      $times = document.getElementById('times'),
      $divide = document.getElementById('divide'),
      $equal = document.getElementById('equal');

    var firstInput = 0;
    var nextInput = 0;
    var $total = document.getElementById('total');

    var $numbers = document.getElementById('numbers').getElementsByTagName('a');

    for (var i = 0, j = $numbers.length; i < j; i++) {
      $numbers[i].addEventListener('click', function() {
        firstInput = this.text;
        $total.innerHTML = firstInput;
      });
    }

    $plus.addEventListener('click', function() {

    })
  }
})();
