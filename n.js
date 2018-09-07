var unit_arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var teens_arr =['eleven', 'twelve', 'thirteen', 'fourteen', 'fiftween', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens_arr = ['ten','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const getUnit = ( n ) => unit_arr[ n ];
const getTeens = ( n ) => teens_arr[ n ];
const getTens = ( n ) => tens_arr[ n ];

function numToWordsThreeDigit(input){
	if (input < 11) {
		return getUnit(input - 1);
	}else if (input < 21){
		return getTeens(input - 11);
	}else if (input < 100){
		let ten = String(input).substr(0,1);
		let unit = String(input).substr(1, 1);
		return getTens(Number(ten) -1) + ' ' +  getUnit(unit - 1);
	}else {
		let hundred = String(input).substr(0, 1);
		let ten = String(input).substr(1, 2);
		let unit = String(input).substr(2, 1);
		if (Number(ten) <= 10) {
			
			if (Number(unit) !== 0) {
				return getUnit(Number(hundred) - 1) + ' hundred and ' + getUnit(unit -1);
			} else {
				
				return getUnit(Number(hundred) - 1) + ' hundred and ' + getTens(0);
			}
		}else if (Number(ten) >10 && Number(ten) < 20) {
			return getUnit(Number(hundred) - 1) + ' hundred and ' + getTeens(Number(ten) -11) ;
		}else if (Number(ten) >=20) {
			if (Number(unit) !== 0){console.log('unit', unit);
				return getUnit(Number(hundred) - 1) + ' hundred and ' + getTens(Math.round(Math.floor(Number(ten)/10)) -1) + ' ' + getUnit(unit -1);
			}else{
				return getUnit(Number(hundred) - 1) + ' hundred and ' + getTens(Math.round(Math.floor(Number(ten)/10)) -1);
			}
		}
	}
}

console.log(numToWordsThreeDigit(2));
console.log(numToWordsThreeDigit(12));
console.log(numToWordsThreeDigit(22));
console.log(numToWordsThreeDigit(202));
console.log(numToWordsThreeDigit(210));
console.log(numToWordsThreeDigit(212));
console.log(numToWordsThreeDigit(220));
console.log(numToWordsThreeDigit(222));
console.log(numToWordsThreeDigit(232));
console.log(numToWordsThreeDigit(992));

function convert(n){
	let mlln = Math.round(Math.floor(n/1000000));
	console.log('mlln ', mlln);
	let thsd = Math.round(Math.floor(n % 1000000/1000)); 
	let hdrd = n % 1000;
	console.log('hdrd', hdrd);
	return numToWordsThreeDigit(mlln) + ' million ' + numToWordsThreeDigit(thsd) + ' thousand ' + numToWordsThreeDigit(hdrd);
}

console.log(convert(239));
console.log(convert(999999999));

module.exports = convert;