$(document).ready(function () {

    var input = '';
    var temp = [];
    var dot = false;
    var memory = '';

    $('.button').on('click', function () {
        var val = $(this).text();
        //console.log(val);

        if ((val >= 0 && val <= 9)) {
            input += val;
            $('.display').text(input);
            //console.log('number');

        } else if (val === '.' && !dot) {
            input += val;
            dot = true;
            $('.display').text(input);

        } else if (val === 'C') {
            temp = [];
            input = '';
            dot = false;
            $('.display').text('');

        } else if (val === 'M=') {
            memory = $('.display').text();

        } else if (val === 'M>') {
            input = memory;
            $('.display').text(memory);

        } else if (val === '=') {
            temp.push(input);
            var result = String(solve(temp));
            result = result.substring(0, 10);
            $('.display').text(result);
            input = result;
            temp = [];
            dot = false;

        } else if (val !== '.') {
            temp.push(input);
            console.log(input);
            temp.push(val);
            dot = false;
            input = '';
            //$('.display').text('');
        }


        //input += val;
        //console.log(result);
    });
});

function solve (entries) {
    var res = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];

      if (symbol === '+') { res += nextNum; }
      else if (symbol === '-') { res -= nextNum; }
      else if (symbol === '*') { res *= nextNum; }
      else if (symbol === '/') { res /= nextNum; }

      i++;
    }

    return res;


}
