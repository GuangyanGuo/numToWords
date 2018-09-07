var unit_arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var teens_arr =['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens_arr = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const getUnit = ( n ) => unit_arr[ n ];
const getTeens = ( n ) => teens_arr[ n ];
const getTens = ( n ) => tens_arr[ n ];

function numToWordsThreeDigit(input) {
	
		let hundred = Math.round(Math.floor(input/100));
		let ten = Math.round(Math.floor(input % 100/10)); 
		let unit = input % 10;
	
		let u='';
		let t = '';
		let h= hundred? getUnit(hundred - 1) + ' hundred ': '';
		
		if (ten ===0 && unit ===0){
			t = '';
			u = '';
		} else if (ten ===0 && unit !==0){
			t = '';
			u = (ten||hundred)? 'and ' + getUnit(unit -1) : getUnit(unit -1);
		} else if (ten===1 && unit !==0) {
			t = (h!=='') ? 'and ' + getTeens( unit - 1) : getTeens( unit - 1);
		}else if (ten===1 && unit ===0) {
			t = (h!=='') ? 'and ' + getTens( ten - 1 ) : getTens( ten - 1 );
		} else if ( ten > 1) {
			t = (h!=='') ? 'and ' + getTens(ten - 1) : getTens(ten - 1)  ;
			u = unit? ' ' + getUnit(unit - 1) : '';
		}
		let word = (h + t + u).trim(); 
		return word;
	
}



function convert(n){
	if (isNaN(n) || (n < 0) || n>999999999) return 'Please provide a number between 0 and 999999999.'
	let mlln = Math.round(Math.floor(n/1000000));
	
	let thsd = Math.round(Math.floor(n % 1000000/1000)); 
	let hdrd = n % 1000;
	
	let m = mlln? numToWordsThreeDigit(mlln) + ' million, ' : '';
	let t = thsd? numToWordsThreeDigit(thsd) + ' thousand, ' : '';
	let h = hdrd? numToWordsThreeDigit(hdrd) : '';
	
	let w = m + t + h;
	
	if (w.endsWith(', ')){
		w = w.substr(0, w.length-2);
	}

	if (w.includes(',') && !w.includes(' and')) {
		w = w.replace(',' , ' and');
	}

	if (w=='' && n===0) w='zero';

	return w;
}


module.exports = convert;