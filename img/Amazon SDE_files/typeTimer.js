var timerIDt = 0;
var tStartt  = null;
var curHourt = 0;
var curMinutest = 0;
var curSecondst =0;
var timerDispayDivt;
var showAlertt =0;
var timeIntervalT = 1000;
function UpdateTimert() {
   disableKeyboard=1;
   if(timerIDt) {
      clearTimeout(timerIDt);
      clockID  = 0;
   }

  
	if (curSecondst > 0){
	    curSecondst = curSecondst - 1;
	}else{
		if(curMinutest > 0){
			curMinutest = curMinutest - 1;
			curSecondst = 59;
		}else{
			if (curHourt > 0 ){
			 curHourt = curHourt - 1
			 curMinutest = 59
			}else{
				timerStopt();
				if(showAlertt == 1)
					alert("The time of this module has finished. Press 'OK' to proceed.");
				document.getElementById(timerDispayDivt).innerHTML =  "";
				doSubmit('NextQuestion');
				return;
				
			}
		}
	}
	if(curHourt < 10) curHourt = "0" + parseInt(curHourt,10);
  	if(curMinutest < 10) curMinutest = "0" + parseInt(curMinutest,10);
	if(curSecondst < 10) curSecondst = "0" + parseInt(curSecondst,10);
   document.getElementById(timerDispayDivt).innerHTML = "<em>Time Remaining For this Question:&nbsp;</em><strong>"+curHourt+":"+curMinutest+":"+curSecondst+"</strong>"; 
   
   timerIDt = setTimeout("UpdateTimert()", timeIntervalT);
}

function timerStartt(initHr, initMin, initSec, timerDiv, sa) {
   //tStartt   = new Date();
   
   	curHourt = initHr;
	curMinutest = initMin;
	curSecondst =initSec;
	timerDispayDivt = timerDiv;
	showAlertt = sa;
    document.getElementById(timerDispayDivt).innerHTML = "<em>Time Remaining For this Question:&nbsp;</em><strong>"+curHourt+":"+curMinutest+":"+curSecondst+"</strong>";
    timerIDt  = setTimeout("UpdateTimert()", 1000);
}

function  timerStopt() {
   if(timerIDt) {
      clearTimeout(timerIDt);
      timerIDt  = 0;
   }

   tStartt = null;
}

function  timerResett() {
   tStartt = null;
   document.getElementById(timerDispayDivt).innerHTML = "00:00:00";
}





function enableTypeKeyboard()
{
	//jQuery.hotkeys.remove('esc');
	jQuery.hotkeys.remove('tab');
	jQuery.hotkeys.remove('space');
	jQuery.hotkeys.remove('return');
	jQuery.hotkeys.remove('backspace');
	//jQuery.hotkeys.remove('scroll');
	jQuery.hotkeys.remove('capslock');
	jQuery.hotkeys.remove('numlock');
	//jQuery.hotkeys.remove('pause');
	jQuery.hotkeys.remove('insert');
	jQuery.hotkeys.remove('home');
	jQuery.hotkeys.remove('del');
	jQuery.hotkeys.remove('end');
	jQuery.hotkeys.remove('pageup');
	jQuery.hotkeys.remove('pagedown');
	jQuery.hotkeys.remove('left');
	jQuery.hotkeys.remove('up');
	jQuery.hotkeys.remove('right');
	jQuery.hotkeys.remove('down');
	/*jQuery.hotkeys.remove('f1');
	jQuery.hotkeys.remove('f2');
	jQuery.hotkeys.remove('f3');
	jQuery.hotkeys.remove('f4');
	//jQuery.hotkeys.remove('f5');
	jQuery.hotkeys.remove('f6');
	jQuery.hotkeys.remove('f7');
	jQuery.hotkeys.remove('f8');
	jQuery.hotkeys.remove('f9');
	jQuery.hotkeys.remove('f10');
	jQuery.hotkeys.remove('f11');
	jQuery.hotkeys.remove('f12');*/
	jQuery.hotkeys.remove('a');
	jQuery.hotkeys.remove('b');
	jQuery.hotkeys.remove('c');
	jQuery.hotkeys.remove('d');
	jQuery.hotkeys.remove('e');
	jQuery.hotkeys.remove('f');
	jQuery.hotkeys.remove('g');
	jQuery.hotkeys.remove('h');
	jQuery.hotkeys.remove('i');
	jQuery.hotkeys.remove('j');
	jQuery.hotkeys.remove('k');
	jQuery.hotkeys.remove('l');
	jQuery.hotkeys.remove('m');
	jQuery.hotkeys.remove('n');
	jQuery.hotkeys.remove('o');
	jQuery.hotkeys.remove('p');
	jQuery.hotkeys.remove('q');
	jQuery.hotkeys.remove('r');
	jQuery.hotkeys.remove('s');
	jQuery.hotkeys.remove('t');
	jQuery.hotkeys.remove('u');
	jQuery.hotkeys.remove('v');
	jQuery.hotkeys.remove('w');
	jQuery.hotkeys.remove('x');
	jQuery.hotkeys.remove('y');
	jQuery.hotkeys.remove('z');
	jQuery.hotkeys.remove('Ctrl+a');
	jQuery.hotkeys.remove('Ctrl+b');
	jQuery.hotkeys.remove('Ctrl+c');
	jQuery.hotkeys.remove('Ctrl+d');
	jQuery.hotkeys.remove('Ctrl+e');
	jQuery.hotkeys.remove('Ctrl+f');
	jQuery.hotkeys.remove('Ctrl+g');
	jQuery.hotkeys.remove('Ctrl+h');
	jQuery.hotkeys.remove('Ctrl+i');
	jQuery.hotkeys.remove('Ctrl+j');
	jQuery.hotkeys.remove('Ctrl+k');
	jQuery.hotkeys.remove('Ctrl+l');
	jQuery.hotkeys.remove('Ctrl+m');
	jQuery.hotkeys.remove('Ctrl+n');
	jQuery.hotkeys.remove('Ctrl+o');
	jQuery.hotkeys.remove('Ctrl+p');
	jQuery.hotkeys.remove('Ctrl+q');
	jQuery.hotkeys.remove('Ctrl+r');
	jQuery.hotkeys.remove('Ctrl+s');
	jQuery.hotkeys.remove('Ctrl+t');
	jQuery.hotkeys.remove('Ctrl+u');
	jQuery.hotkeys.remove('Ctrl+v');
	jQuery.hotkeys.remove('Ctrl+w');
	jQuery.hotkeys.remove('Ctrl+x');
	jQuery.hotkeys.remove('Ctrl+y');
	jQuery.hotkeys.remove('Ctrl+z');
	jQuery.hotkeys.remove('Shift+a');
	jQuery.hotkeys.remove('Shift+b');
	jQuery.hotkeys.remove('Shift+c');
	jQuery.hotkeys.remove('Shift+d');
	jQuery.hotkeys.remove('Shift+e');
	jQuery.hotkeys.remove('Shift+f');
	jQuery.hotkeys.remove('Shift+g');
	jQuery.hotkeys.remove('Shift+h');
	jQuery.hotkeys.remove('Shift+i');
	jQuery.hotkeys.remove('Shift+j');
	jQuery.hotkeys.remove('Shift+k');
	jQuery.hotkeys.remove('Shift+l');
	jQuery.hotkeys.remove('Shift+m');
	jQuery.hotkeys.remove('Shift+n');
	jQuery.hotkeys.remove('Shift+o');
	jQuery.hotkeys.remove('Shift+p');
	jQuery.hotkeys.remove('Shift+q');
	jQuery.hotkeys.remove('Shift+r');
	jQuery.hotkeys.remove('Shift+s');
	jQuery.hotkeys.remove('Shift+t');
	jQuery.hotkeys.remove('Shift+u');
	jQuery.hotkeys.remove('Shift+v');
	jQuery.hotkeys.remove('Shift+w');
	jQuery.hotkeys.remove('Shift+x');
	jQuery.hotkeys.remove('Shift+y');
	jQuery.hotkeys.remove('Shift+z');
	jQuery.hotkeys.remove('Alt+a');
	jQuery.hotkeys.remove('Alt+b');
	jQuery.hotkeys.remove('Alt+c');
	jQuery.hotkeys.remove('Alt+d');
	jQuery.hotkeys.remove('Alt+e');
	jQuery.hotkeys.remove('Alt+f');
	jQuery.hotkeys.remove('Alt+g');
	jQuery.hotkeys.remove('Alt+h');
	jQuery.hotkeys.remove('Alt+i');
	jQuery.hotkeys.remove('Alt+j');
	jQuery.hotkeys.remove('Alt+k');
	jQuery.hotkeys.remove('Alt+l');
	jQuery.hotkeys.remove('Alt+m');
	jQuery.hotkeys.remove('Alt+n');
	jQuery.hotkeys.remove('Alt+o');
	jQuery.hotkeys.remove('Alt+p');
	jQuery.hotkeys.remove('Alt+q');
	jQuery.hotkeys.remove('Alt+r');
	jQuery.hotkeys.remove('Alt+s');
	jQuery.hotkeys.remove('Alt+t');
	jQuery.hotkeys.remove('Alt+u');
	jQuery.hotkeys.remove('Alt+v');
	jQuery.hotkeys.remove('Alt+w');
	jQuery.hotkeys.remove('Alt+x');
	jQuery.hotkeys.remove('Alt+y');
	jQuery.hotkeys.remove('Alt+z');
	jQuery.hotkeys.remove('Ctrl+esc');
	jQuery.hotkeys.remove('Ctrl+tab');
	jQuery.hotkeys.remove('Ctrl+space');
	jQuery.hotkeys.remove('Ctrl+return');
	//jQuery.hotkeys.remove('Ctrl+backspace');
	jQuery.hotkeys.remove('Ctrl+scroll');
	jQuery.hotkeys.remove('Ctrl+capslock');
	jQuery.hotkeys.remove('Ctrl+numlock');
	jQuery.hotkeys.remove('Ctrl+pause');
	jQuery.hotkeys.remove('Ctrl+insert');
	jQuery.hotkeys.remove('Ctrl+home');
	jQuery.hotkeys.remove('Ctrl+del');
	jQuery.hotkeys.remove('Ctrl+end');
	jQuery.hotkeys.remove('Ctrl+pageup');
	jQuery.hotkeys.remove('Ctrl+pagedown');
	jQuery.hotkeys.remove('Ctrl+left');
	jQuery.hotkeys.remove('Ctrl+up');
	jQuery.hotkeys.remove('Ctrl+right');
	jQuery.hotkeys.remove('Ctrl+down');
	/*jQuery.hotkeys.remove('Ctrl+f1');
	jQuery.hotkeys.remove('Ctrl+f2');
	jQuery.hotkeys.remove('Ctrl+f3');
	jQuery.hotkeys.remove('Ctrl+f4');
	//jQuery.hotkeys.remove('Ctrl+f5');
	jQuery.hotkeys.remove('Ctrl+f6');
	jQuery.hotkeys.remove('Ctrl+f7');
	jQuery.hotkeys.remove('Ctrl+f8');
	jQuery.hotkeys.remove('Ctrl+f9');
	jQuery.hotkeys.remove('Ctrl+f10');
	jQuery.hotkeys.remove('Ctrl+f11');
	jQuery.hotkeys.remove('Ctrl+f12');*/
	jQuery.hotkeys.remove('Shift+esc');
	jQuery.hotkeys.remove('Shift+tab');
	jQuery.hotkeys.remove('Shift+space');
	jQuery.hotkeys.remove('Shift+return');
	//jQuery.hotkeys.remove('Shift+backspace');
	jQuery.hotkeys.remove('Shift+scroll');
	jQuery.hotkeys.remove('Shift+capslock');
	jQuery.hotkeys.remove('Shift+numlock');
	jQuery.hotkeys.remove('Shift+pause');
	jQuery.hotkeys.remove('Shift+insert');
	jQuery.hotkeys.remove('Shift+home');
	jQuery.hotkeys.remove('Shift+del');
	jQuery.hotkeys.remove('Shift+end');
	jQuery.hotkeys.remove('Shift+pageup');
	jQuery.hotkeys.remove('Shift+pagedown');
	jQuery.hotkeys.remove('Shift+left');
	jQuery.hotkeys.remove('Shift+up');
	jQuery.hotkeys.remove('Shift+right');
	jQuery.hotkeys.remove('Shift+down');
	/*jQuery.hotkeys.remove('Shift+f1');
	jQuery.hotkeys.remove('Shift+f2');
	jQuery.hotkeys.remove('Shift+f3');
	jQuery.hotkeys.remove('Shift+f4');
	jQuery.hotkeys.remove('Shift+f5');
	jQuery.hotkeys.remove('Shift+f6');
	jQuery.hotkeys.remove('Shift+f7');
	jQuery.hotkeys.remove('Shift+f8');
	jQuery.hotkeys.remove('Shift+f9');
	jQuery.hotkeys.remove('Shift+f10');
	jQuery.hotkeys.remove('Shift+f11');
	jQuery.hotkeys.remove('Shift+f12');
	jQuery.hotkeys.remove('Alt+esc');*/
	jQuery.hotkeys.remove('Alt+tab');
	jQuery.hotkeys.remove('Alt+space');
	jQuery.hotkeys.remove('Alt+return');
	//jQuery.hotkeys.remove('Alt+backspace');
	jQuery.hotkeys.remove('Alt+scroll');
	jQuery.hotkeys.remove('Alt+capslock');
	jQuery.hotkeys.remove('Alt+numlock');
	jQuery.hotkeys.remove('Alt+pause');
	jQuery.hotkeys.remove('Alt+insert');
	jQuery.hotkeys.remove('Alt+home');
	jQuery.hotkeys.remove('Alt+del');
	jQuery.hotkeys.remove('Alt+end');
	jQuery.hotkeys.remove('Alt+pageup');
	jQuery.hotkeys.remove('Alt+pagedown');
	jQuery.hotkeys.remove('Alt+left');
	jQuery.hotkeys.remove('Alt+up');
	jQuery.hotkeys.remove('Alt+right');
	jQuery.hotkeys.remove('Alt+down');
	/*jQuery.hotkeys.remove('Alt+f1');
	jQuery.hotkeys.remove('Alt+f2');
	jQuery.hotkeys.remove('Alt+f3');
	jQuery.hotkeys.remove('Alt+f4');
	jQuery.hotkeys.remove('Alt+f5');
	jQuery.hotkeys.remove('Alt+f6');
	jQuery.hotkeys.remove('Alt+f7');
	jQuery.hotkeys.remove('Alt+f8');
	jQuery.hotkeys.remove('Alt+f9');
	jQuery.hotkeys.remove('Alt+f10');
	jQuery.hotkeys.remove('Alt+f11');
	jQuery.hotkeys.remove('Alt+f12');*/
}


function disableTypeKeys(){
	     if ( jQuery.browser.msie || jQuery.browser.opera || jQuery.browser.safari ) {
	      jQuery(document).ready(disableKeysIE);
		}else{
			jQuery(document).ready(disableKeysMozilla);
		}
}