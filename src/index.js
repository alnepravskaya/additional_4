module.exports = function multiply(a, b) {
	if (a === '0' || b === '0') {
		return '0';
	}
	var aa = a.split('').reverse();
	var bb = b.split('').reverse();

	var result = [];

	for (var i = 0; i < aa.length; i++) {
		for (var j = 0; j < bb.length; j++) {
			var m = aa[i] * bb[j];
			result[i + j] = (result[i + j]) ? result[i + j] + m : m;
		}
	}

	for (var i = 0; i < result.length; i++) {
		var num = result[i] % 10;
		var step = Math.floor(result[i] / 10);
		result[i] = num;

		if (result[i + 1]) {
			result[i + 1] += step;
		}
		else if (step != 0) {
			result[i + 1] = step;
		}
	}


	return result.reverse().join('');
}

