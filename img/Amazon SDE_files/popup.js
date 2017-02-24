<!--
//Disable right mouse click Script
var message="Not Allowed!";
var isDoSubmitEnabled = true;
var checkMinimumWordsWritten = true;
///////////////////////////////////

function clickIE4(){
if (event.button==2){
//alert(message);
return false;
}
}

function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
//alert(message);
return false;
}
}
}

if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}

//document.oncontextmenu=new Function("alert(message);return false")
document.oncontextmenu=new Function("return false");


// --> 


function enableKeyboard()
{
	jQuery.hotkeys.remove('esc');
	jQuery.hotkeys.remove('tab');
	jQuery.hotkeys.remove('space');
	jQuery.hotkeys.remove('return');
	jQuery.hotkeys.remove('backspace');
	jQuery.hotkeys.remove('scroll');
	jQuery.hotkeys.remove('capslock');
	jQuery.hotkeys.remove('numlock');
	jQuery.hotkeys.remove('pause');
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
	jQuery.hotkeys.remove('f1');
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
	jQuery.hotkeys.remove('f12');
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
	jQuery.hotkeys.remove('Ctrl+backspace');
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
	jQuery.hotkeys.remove('Ctrl+f1');
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
	jQuery.hotkeys.remove('Ctrl+f12');
	jQuery.hotkeys.remove('Shift+esc');
	jQuery.hotkeys.remove('Shift+tab');
	jQuery.hotkeys.remove('Shift+space');
	jQuery.hotkeys.remove('Shift+return');
	jQuery.hotkeys.remove('Shift+backspace');
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
	jQuery.hotkeys.remove('Shift+f1');
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
	jQuery.hotkeys.remove('Alt+esc');
	jQuery.hotkeys.remove('Alt+tab');
	jQuery.hotkeys.remove('Alt+space');
	jQuery.hotkeys.remove('Alt+return');
	jQuery.hotkeys.remove('Alt+backspace');
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
	jQuery.hotkeys.remove('Alt+f1');
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
	jQuery.hotkeys.remove('Alt+f12');
}


            
function disableKeysMozilla(){
	//jQuery('#platform-details').html('<code>' + navigator.userAgent + '</code>');
	jQuery.hotkeys.add('esc',function (){return false;});
	jQuery.hotkeys.add('tab',function (){return false;});
	jQuery.hotkeys.add('space',function (){return false;});
	jQuery.hotkeys.add('return',function (){return false;});
	jQuery.hotkeys.add('backspace',function (){return false;});
	jQuery.hotkeys.add('scroll',function (){return false;});
	jQuery.hotkeys.add('capslock',function (){return false;});
	jQuery.hotkeys.add('numlock',function (){return false;});
	jQuery.hotkeys.add('pause',function (){return false;});
	jQuery.hotkeys.add('insert',function (){return false;});
	jQuery.hotkeys.add('home',function (){return false;});
	jQuery.hotkeys.add('del',function (){return false;});
	jQuery.hotkeys.add('end',function (){return false;});
	jQuery.hotkeys.add('pageup',function (){return false;});
	jQuery.hotkeys.add('pagedown',function (){return false;});
	jQuery.hotkeys.add('left',function (){return false;});
	jQuery.hotkeys.add('up',function (){return false;});
	jQuery.hotkeys.add('right',function (){return false;});
	jQuery.hotkeys.add('down',function (){return false;});
	jQuery.hotkeys.add('f1',function (){return false;});
	jQuery.hotkeys.add('f2',function (){return false;});
	jQuery.hotkeys.add('f3',function (){return false;});
	jQuery.hotkeys.add('f4',function (){return false;});
	jQuery.hotkeys.add('f5',function (){return false;});
	jQuery.hotkeys.add('f6',function (){return false;});
	jQuery.hotkeys.add('f7',function (){return false;});
	jQuery.hotkeys.add('f8',function (){return false;});
	jQuery.hotkeys.add('f9',function (){return false;});
	jQuery.hotkeys.add('f10',function (){return false;});
	jQuery.hotkeys.add('f11',function (){return false;});
	jQuery.hotkeys.add('f12',function (){return false;});
	jQuery.hotkeys.add('a',function (){return false;});
	jQuery.hotkeys.add('b',function (){return false;});
	jQuery.hotkeys.add('c',function (){return false;});
	jQuery.hotkeys.add('d',function (){return false;});
	jQuery.hotkeys.add('e',function (){return false;});
	jQuery.hotkeys.add('f',function (){return false;});
	jQuery.hotkeys.add('g',function (){return false;});
	jQuery.hotkeys.add('h',function (){return false;});
	jQuery.hotkeys.add('i',function (){return false;});
	jQuery.hotkeys.add('j',function (){return false;});
	jQuery.hotkeys.add('k',function (){return false;});
	jQuery.hotkeys.add('l',function (){return false;});
	jQuery.hotkeys.add('m',function (){return false;});
	jQuery.hotkeys.add('n',function (){return false;});
	jQuery.hotkeys.add('o',function (){return false;});
	jQuery.hotkeys.add('p',function (){return false;});
	jQuery.hotkeys.add('q',function (){return false;});
	jQuery.hotkeys.add('r',function (){return false;});
	jQuery.hotkeys.add('s',function (){return false;});
	jQuery.hotkeys.add('t',function (){return false;});
	jQuery.hotkeys.add('u',function (){return false;});
	jQuery.hotkeys.add('v',function (){return false;});
	jQuery.hotkeys.add('w',function (){return false;});
	jQuery.hotkeys.add('x',function (){return false;});
	jQuery.hotkeys.add('y',function (){return false;});
	jQuery.hotkeys.add('z',function (){return false;});
	jQuery.hotkeys.add('Ctrl+a',function (){return false;});
	jQuery.hotkeys.add('Ctrl+b',function (){return false;});
	jQuery.hotkeys.add('Ctrl+c',function (){return false;});
	jQuery.hotkeys.add('Ctrl+d',function (){return false;});
	jQuery.hotkeys.add('Ctrl+e',function (){return false;});
	jQuery.hotkeys.add('Ctrl+f',function (){return false;});
	jQuery.hotkeys.add('Ctrl+g',function (){return false;});
	jQuery.hotkeys.add('Ctrl+h',function (){return false;});
	jQuery.hotkeys.add('Ctrl+i',function (){return false;});
	jQuery.hotkeys.add('Ctrl+j',function (){return false;});
	jQuery.hotkeys.add('Ctrl+k',function (){return false;});
	jQuery.hotkeys.add('Ctrl+l',function (){return false;});
	jQuery.hotkeys.add('Ctrl+m',function (){return false;});
	jQuery.hotkeys.add('Ctrl+n',function (){return false;});
	jQuery.hotkeys.add('Ctrl+o',function (){return false;});
	jQuery.hotkeys.add('Ctrl+p',function (){return false;});
	jQuery.hotkeys.add('Ctrl+q',function (){return false;});
	jQuery.hotkeys.add('Ctrl+r',function (){return false;});
	jQuery.hotkeys.add('Ctrl+s',function (){return false;});
	jQuery.hotkeys.add('Ctrl+t',function (){return false;});
	jQuery.hotkeys.add('Ctrl+u',function (){return false;});
	jQuery.hotkeys.add('Ctrl+v',function (){return false;});
	jQuery.hotkeys.add('Ctrl+w',function (){return false;});
	jQuery.hotkeys.add('Ctrl+x',function (){return false;});
	jQuery.hotkeys.add('Ctrl+y',function (){return false;});
	jQuery.hotkeys.add('Ctrl+z',function (){return false;});
	jQuery.hotkeys.add('Shift+a',function (){return false;});
	jQuery.hotkeys.add('Shift+b',function (){return false;});
	jQuery.hotkeys.add('Shift+c',function (){return false;});
	jQuery.hotkeys.add('Shift+d',function (){return false;});
	jQuery.hotkeys.add('Shift+e',function (){return false;});
	jQuery.hotkeys.add('Shift+f',function (){return false;});
	jQuery.hotkeys.add('Shift+g',function (){return false;});
	jQuery.hotkeys.add('Shift+h',function (){return false;});
	jQuery.hotkeys.add('Shift+i',function (){return false;});
	jQuery.hotkeys.add('Shift+j',function (){return false;});
	jQuery.hotkeys.add('Shift+k',function (){return false;});
	jQuery.hotkeys.add('Shift+l',function (){return false;});
	jQuery.hotkeys.add('Shift+m',function (){return false;});
	jQuery.hotkeys.add('Shift+n',function (){return false;});
	jQuery.hotkeys.add('Shift+o',function (){return false;});
	jQuery.hotkeys.add('Shift+p',function (){return false;});
	jQuery.hotkeys.add('Shift+q',function (){return false;});
	jQuery.hotkeys.add('Shift+r',function (){return false;});
	jQuery.hotkeys.add('Shift+s',function (){return false;});
	jQuery.hotkeys.add('Shift+t',function (){return false;});
	jQuery.hotkeys.add('Shift+u',function (){return false;});
	jQuery.hotkeys.add('Shift+v',function (){return false;});
	jQuery.hotkeys.add('Shift+w',function (){return false;});
	jQuery.hotkeys.add('Shift+x',function (){return false;});
	jQuery.hotkeys.add('Shift+y',function (){return false;});
	jQuery.hotkeys.add('Shift+z',function (){return false;});
	jQuery.hotkeys.add('Alt+a',function (){return false;});
	jQuery.hotkeys.add('Alt+b',function (){return false;});
	jQuery.hotkeys.add('Alt+c',function (){return false;});
	jQuery.hotkeys.add('Alt+d',function (){return false;});
	jQuery.hotkeys.add('Alt+e',function (){return false;});
	jQuery.hotkeys.add('Alt+f',function (){return false;});
	jQuery.hotkeys.add('Alt+g',function (){return false;});
	jQuery.hotkeys.add('Alt+h',function (){return false;});
	jQuery.hotkeys.add('Alt+i',function (){return false;});
	jQuery.hotkeys.add('Alt+j',function (){return false;});
	jQuery.hotkeys.add('Alt+k',function (){return false;});
	jQuery.hotkeys.add('Alt+l',function (){return false;});
	jQuery.hotkeys.add('Alt+m',function (){return false;});
	jQuery.hotkeys.add('Alt+n',function (){return false;});
	jQuery.hotkeys.add('Alt+o',function (){return false;});
	jQuery.hotkeys.add('Alt+p',function (){return false;});
	jQuery.hotkeys.add('Alt+q',function (){return false;});
	jQuery.hotkeys.add('Alt+r',function (){return false;});
	jQuery.hotkeys.add('Alt+s',function (){return false;});
	jQuery.hotkeys.add('Alt+t',function (){return false;});
	jQuery.hotkeys.add('Alt+u',function (){return false;});
	jQuery.hotkeys.add('Alt+v',function (){return false;});
	jQuery.hotkeys.add('Alt+w',function (){return false;});
	jQuery.hotkeys.add('Alt+x',function (){return false;});
	jQuery.hotkeys.add('Alt+y',function (){return false;});
	jQuery.hotkeys.add('Alt+z',function (){return false;});
	jQuery.hotkeys.add('Ctrl+esc', function (){return false;});
	jQuery.hotkeys.add('Ctrl+tab', function (){return false;});
	jQuery.hotkeys.add('Ctrl+space', function (){return false;});
	jQuery.hotkeys.add('Ctrl+return', function (){return false;});
	jQuery.hotkeys.add('Ctrl+backspace', function (){return false;});
	jQuery.hotkeys.add('Ctrl+scroll', function (){return false;});
	jQuery.hotkeys.add('Ctrl+capslock', function (){return false;});
	jQuery.hotkeys.add('Ctrl+numlock', function (){return false;});
	jQuery.hotkeys.add('Ctrl+pause', function (){return false;});
	jQuery.hotkeys.add('Ctrl+insert', function (){return false;});
	jQuery.hotkeys.add('Ctrl+home', function (){return false;});
	jQuery.hotkeys.add('Ctrl+del', function (){return false;});
	jQuery.hotkeys.add('Ctrl+end', function (){return false;});
	jQuery.hotkeys.add('Ctrl+pageup', function (){return false;});
	jQuery.hotkeys.add('Ctrl+pagedown', function (){return false;});
	jQuery.hotkeys.add('Ctrl+left', function (){return false;});
	jQuery.hotkeys.add('Ctrl+up', function (){return false;});
	jQuery.hotkeys.add('Ctrl+right', function (){return false;});
	jQuery.hotkeys.add('Ctrl+down', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f1', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f2', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f3', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f4', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f5', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f6', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f7', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f8', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f9', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f10', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f11', function (){return false;});
	jQuery.hotkeys.add('Ctrl+f12', function (){return false;});
	jQuery.hotkeys.add('Shift+esc', function (){return false;});
	jQuery.hotkeys.add('Shift+tab', function (){return false;});
	jQuery.hotkeys.add('Shift+space', function (){return false;});
	jQuery.hotkeys.add('Shift+return', function (){return false;});
	jQuery.hotkeys.add('Shift+backspace', function (){return false;});
	jQuery.hotkeys.add('Shift+scroll', function (){return false;});
	jQuery.hotkeys.add('Shift+capslock', function (){return false;});
	jQuery.hotkeys.add('Shift+numlock', function (){return false;});
	jQuery.hotkeys.add('Shift+pause', function (){return false;});
	jQuery.hotkeys.add('Shift+insert', function (){return false;});
	jQuery.hotkeys.add('Shift+home', function (){return false;});
	jQuery.hotkeys.add('Shift+del', function (){return false;});
	jQuery.hotkeys.add('Shift+end', function (){return false;});
	jQuery.hotkeys.add('Shift+pageup', function (){return false;});
	jQuery.hotkeys.add('Shift+pagedown', function (){return false;});
	jQuery.hotkeys.add('Shift+left', function (){return false;});
	jQuery.hotkeys.add('Shift+up', function (){return false;});
	jQuery.hotkeys.add('Shift+right', function (){return false;});
	jQuery.hotkeys.add('Shift+down', function (){return false;});
	jQuery.hotkeys.add('Shift+f1', function (){return false;});
	jQuery.hotkeys.add('Shift+f2', function (){return false;});
	jQuery.hotkeys.add('Shift+f3', function (){return false;});
	jQuery.hotkeys.add('Shift+f4', function (){return false;});
	jQuery.hotkeys.add('Shift+f5', function (){return false;});
	jQuery.hotkeys.add('Shift+f6', function (){return false;});
	jQuery.hotkeys.add('Shift+f7', function (){return false;});
	jQuery.hotkeys.add('Shift+f8', function (){return false;});
	jQuery.hotkeys.add('Shift+f9', function (){return false;});
	jQuery.hotkeys.add('Shift+f10', function (){return false;});
	jQuery.hotkeys.add('Shift+f11', function (){return false;});
	jQuery.hotkeys.add('Shift+f12', function (){return false;});
	jQuery.hotkeys.add('Alt+esc', function (){return false;});
	jQuery.hotkeys.add('Alt+tab', function (){return false;});
	jQuery.hotkeys.add('Alt+space', function (){return false;});
	jQuery.hotkeys.add('Alt+return', function (){return false;});
	jQuery.hotkeys.add('Alt+backspace', function (){return false;});
	jQuery.hotkeys.add('Alt+scroll', function (){return false;});
	jQuery.hotkeys.add('Alt+capslock', function (){return false;});
	jQuery.hotkeys.add('Alt+numlock', function (){return false;});
	jQuery.hotkeys.add('Alt+pause', function (){return false;});
	jQuery.hotkeys.add('Alt+insert', function (){return false;});
	jQuery.hotkeys.add('Alt+home', function (){return false;});
	jQuery.hotkeys.add('Alt+del', function (){return false;});
	jQuery.hotkeys.add('Alt+end', function (){return false;});
	jQuery.hotkeys.add('Alt+pageup', function (){return false;});
	jQuery.hotkeys.add('Alt+pagedown', function (){return false;});
	jQuery.hotkeys.add('Alt+left', function (){return false;});
	jQuery.hotkeys.add('Alt+up', function (){return false;});
	jQuery.hotkeys.add('Alt+right', function (){return false;});
	jQuery.hotkeys.add('Alt+down', function (){return false;});
	jQuery.hotkeys.add('Alt+f1', function (){return false;});
	jQuery.hotkeys.add('Alt+f2', function (){return false;});
	jQuery.hotkeys.add('Alt+f3', function (){return false;});
	jQuery.hotkeys.add('Alt+f4', function (){return false;});
	jQuery.hotkeys.add('Alt+f5', function (){return false;});
	jQuery.hotkeys.add('Alt+f6', function (){return false;});
	jQuery.hotkeys.add('Alt+f7', function (){return false;});
	jQuery.hotkeys.add('Alt+f8', function (){return false;});
	jQuery.hotkeys.add('Alt+f9', function (){return false;});
	jQuery.hotkeys.add('Alt+f10', function (){return false;});
	jQuery.hotkeys.add('Alt+f11', function (){return false;});
	jQuery.hotkeys.add('Alt+f12', function (){return false;});
}

function disableKeysIE(){
	//jQuery('#platform-details').html('<code>' + navigator.userAgent + '</code>');
	jQuery.hotkeys.add('esc',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('tab',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('space',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('return',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('backspace',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('scroll',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('capslock',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('numlock',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('pause',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('insert',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('home',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('del',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('end',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('pageup',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('pagedown',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('left',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('up',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('right',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('down',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f1',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f2',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f3',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f4',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f5',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f6',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f7',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f8',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f9',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f10',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f11',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f12',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('a',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('b',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('c',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('d',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('e',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('f',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('g',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('h',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('i',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('j',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('k',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('l',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('m',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('n',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('o',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('p',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('q',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('r',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('s',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('t',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('u',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('v',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('w',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('x',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('y',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('z',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+a',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+b',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+c',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+d',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+e',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+g',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+h',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+i',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+j',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+k',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+l',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+m',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+n',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+o',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+p',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+q',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+r',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+s',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+t',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+u',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+v',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+w',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+x',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+y',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+z',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+a',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+b',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+c',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+d',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+e',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+g',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+h',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+i',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+j',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+k',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+l',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+m',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+n',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+o',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+p',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+q',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+r',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+s',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+t',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+u',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+v',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+w',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+x',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+y',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+z',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+a',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+b',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+c',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+d',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+e',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+g',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+h',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+i',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+j',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+k',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+l',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+m',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+n',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+o',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+p',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+q',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+r',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+s',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+t',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+u',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+v',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+w',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+x',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+y',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+z',function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+esc', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+tab', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+space', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+return', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+backspace', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+scroll', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+capslock', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+numlock', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+pause', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+insert', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+home', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+del', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+end', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+pageup', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+pagedown', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+left', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+up', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+right', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+down', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f1', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f2', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f3', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f4', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f5', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f6', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f7', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f8', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f9', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f10', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f11', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Ctrl+f12', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+esc', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+tab', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+space', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+return', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+backspace', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+scroll', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+capslock', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+numlock', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+pause', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+insert', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+home', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+del', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+end', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+pageup', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+pagedown', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+left', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+up', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+right', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+down', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f1', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f2', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f3', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f4', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f5', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f6', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f7', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f8', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f9', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f10', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f11', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Shift+f12', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+esc', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+tab', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+space', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+return', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+backspace', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+scroll', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+capslock', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+numlock', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+pause', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+insert', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+home', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+del', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+end', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+pageup', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+pagedown', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+left', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+up', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+right', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+down', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f1', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f2', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f3', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f4', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f5', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f6', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f7', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f8', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f9', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f10', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f11', function (){window.event.keyCode = 555;});
	jQuery.hotkeys.add('Alt+f12', function (){window.event.keyCode = 555;});
}

/* Disbaleing Keyboard */
if ( jQuery.browser.msie || jQuery.browser.opera || jQuery.browser.safari ) {
   jQuery(document).ready(disableKeysIE);
}else{
	jQuery(document).ready(disableKeysMozilla);
}

/*        
function doDummySubmit()
{
	//alert('timeUp');
	document.dummy.actionButton.value='ModuleTimeOut'; //'TimeUp';
	document.dummy.action='doTest.php';
	document.dummy.submit();
	
}
*/


	
	
var str1 = " <span><span class=\"ico\"></span>" ;
var str2 = "</span>";
var str3 = "<a><span class=\"ico\"></span>";
var str4= " </a>";



var timerID = 0;
var tStart  = null;
var curHour = 0;
var curMinutes = 0;
var curSeconds =0;
var timerDispayDiv;
var showAlert =0;
var curHourDisp = '';
var curMinutesDisp = '';
var curSecondsDisp = '';
function UpdateTimer() {
   disableKeyboard=1;
   if(timerID) {
      clearTimeout(timerID);
      clockID  = 0;
   }

  
	if (curSeconds > 0){
	    curSeconds = curSeconds - 1;
	}else{
		if(curMinutes > 0){
			curMinutes = curMinutes - 1;
			curSeconds = 59;
		}else{
			if (curHour > 0 ){
			 curHour = curHour - 1
			 curMinutes = 59
			 curSeconds = 59
			}else{
				tS();
				if(showAlert == 1 && document.frmMain.actionButton.value!="ShowModuleDescription" && document.frmMain.actionButton.value!="getFirstQuestion" && document.frmMain.actionButton.value!="ShowSamplePage" ){
					//alert("The time of this module has finished. Press 'OK' to proceed.");
					$('#divModuleTimeOut').show();
					return;
				}
				document.getElementById(timerDispayDiv).innerHTML =  "";
				var queryString = document.dummy.queryString.value;
				doDummySubmit(queryString);
				//doDummySubmit();
				return;
				
			}
		}
	}
	curHourDisp = curHour < 10 ?   "0" + parseInt(curHour,10) : parseInt(curHour,10);
	curMinutesDisp = curMinutes < 10 ?   "0" + parseInt(curMinutes,10) : parseInt(curMinutes,10);
	curSecondsDisp = curSeconds < 10 ?   "0" + parseInt(curSeconds,10) : parseInt(curSeconds,10);
    //document.getElementById(timerDispayDiv).innerHTML = "<span class='ico timeRemainingT'></span><strong>"+curHourDisp+":"+curMinutesDisp+":"+curSecondsDisp+"</strong>"; 
	 var alertMin = $('#alertMin').val();
	  var alertSec = $('#alertSec').val();
	  var alertHr = $('#alertHr').val();
	  //alert(curHourDisp +'<-'+ alertHr);
	  if(parseInt(curHourDisp) <= parseInt(alertHr)) {
	    //alert(curMinutesDisp +'<-'+ alertMin);
	    if(parseInt(curMinutesDisp) < parseInt(alertMin)) {
	      //alert(alertMin);  
	      document.getElementById(timerDispayDiv).innerHTML = "<span class='ico timeRemainingT'></span><strong style='color: red;'>"+curHourDisp+":"+curMinutesDisp+":"+curSecondsDisp+"</strong>"; 
	    } else if(parseInt(curMinutesDisp) == parseInt(alertMin) && parseInt(curSecondsDisp) <= parseInt(alertSec)) {
	      document.getElementById(timerDispayDiv).innerHTML = "<span class='ico timeRemainingT'></span><strong style='color: red;'>"+curHourDisp+":"+curMinutesDisp+":"+curSecondsDisp+"</strong>"; 
	    } else {
	      document.getElementById(timerDispayDiv).innerHTML = "<span class='ico timeRemainingT'></span><strong>"+curHourDisp+":"+curMinutesDisp+":"+curSecondsDisp+"</strong>"; 
	    }
	  }else {
	    document.getElementById(timerDispayDiv).innerHTML = "<span class='ico timeRemainingT'></span><strong>"+curHourDisp+":"+curMinutesDisp+":"+curSecondsDisp+"</strong>"; 
	  }
	
   timerID = setTimeout("UpdateTimer()", 1000);
}

function moduleTimeOutSubmit(){
     var loadingmsg = $('#LoadingMsg').val();
	$( ".aExitOK" ).parent().html( loadingmsg );
	document.getElementById(timerDispayDiv).innerHTML =  "";
	var queryString = document.dummy.queryString.value;
	doDummySubmit(queryString);
	//doDummySubmit();
	return;
}

function timerStart(initHr, initMin, initSec, timerDiv, sa) {
   //tStart   = new Date();
   	curHour = initHr;
	curMinutes = initMin;
	curSeconds =initSec;
	/*if(location.pathname === "/testCenter.php"){
	(function(){$.post("ServerTimerValidation.php",
		        {
		          "curHr":parseInt(curHour), "curMin":parseInt(curMinutes), "curSec":parseInt(curSeconds)
		        },
		        function(data,status){
		var timerObj=$.parseJSON(data);
		if(timerObj.flag === undefined){
		curHour=timerObj.curHr;
		curMinutes=timerObj.curMin;
		curSeconds=timerObj.curSec;
		}
	});})();
	}*/
	timerDispayDiv = timerDiv;
	showAlert = sa;
    document.getElementById(timerDispayDiv).innerHTML = "<span class='ico timeRemainingT'></span><strong>"+curHour+":"+curMinutes+":"+curSeconds+"</strong>";
    timerID  = setTimeout("UpdateTimer()", 1000);
}

function  tS() {
   if(timerID) {
      clearTimeout(timerID);
      timerID  = 0;
   }

   tStart = null;
}

function  timerReset() {
   tStart = null;
   document.getElementById(timerDispayDiv).innerHTML = "00:00:00";
}


function simplePreload()
{ 

  var args = simplePreload.arguments;

  document.imageArray = new Array(args.length);

  for(var i=0; i<args.length; i++)

  {

    document.imageArray[i] = new Image;

    document.imageArray[i].src = args[i];

  }

}

function showHelp(moduleID)
{

  var LeftPosition=(screen.width)?(screen.width-900)/2:100;TopPosition=(screen.height)?(screen.height-600)/2:100;
  var settings='width=1000,height=550,top='+TopPosition+',left='+LeftPosition+',scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
 var winName='amcatHelp';
 win=window.open('help.php?moduleID='+moduleID,winName,settings);
}

function showModuleHelp()
{
 var LeftPosition=(screen.width)?(screen.width-800)/2:100;TopPosition=(screen.height)?(screen.height-600)/2:100;
  var settings='width=1024,height=575,top='+TopPosition+',left='+LeftPosition+',scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
 var winName='amcatHelp';
 var divText = document.getElementById("answerExplanationDiv").outerHTML;
 win=window.open('',winName,settings);
 var doc = win.document;
 doc.open();
 doc.write(divText);
 doc.close();
 
}
/*
function doCheckType(obj,type,len){
   var reDigit;
   if(type==1){
    if(len>0)
     reDigit="^\\d{1,"+len+"}$"; //not allowed digits more than len (limited no of digits allowed)
    else
     reDigit=/^\d+$/; //allowed digits (unlimited no of digits allowed)
   }
   else if(type==2){
    if(len>0)
     reDigit="^([0-9]+)([\.]?)([0-9]{0,"+len+"})$"; //not allowed dot again (float type upto len decimal place)
    else
     reDigit=/^([0-9]+)([\.]?)([0-9]*)$/; //not allowed dot again (float type upto unlimited decimal places)
   }

  if (obj.value.search(reDigit)==-1) //if match failed
  	return false;
 else
 	return true;
}*/

//simplePreload( 'images/next_small.gif','images/next_small_grey.gif','images/help_small.gif' ,'images/help_small_grey.gif' ,'images/confirmAnswer_small.gif','images/confirmAnswer_small_grey.gif','images/testExit_small.gif','images/testExit_small_grey.gif','images/moduleExit_small.gif','images/moduleExit_small_grey.gif','images/border/t_11.gif','images/border/t_13.gif','images/border/t_12.gif','images/border/t_13.gif','images/border/t_14.gif','images/border/t_15.gif','images/border/t_fon_left.gif','images/border/t_21.gif','images/border/t_fon_right.gif','images/border/t_23.gif','images/border/t_fon_left.gif','images/border/t_31.gif','images/border/t_fon_right.gif','images/border/t_33.gif','images/border/t_41.gif','images/border/t_fon_bot.gif','images/border/t_42.gif','images/border/t_fon_bot.gif','images/border/t_44.gif','images/border/t_45.gif','images/skip_small.gif','images/skip_small_grey.gif','images/exit_small.gif','images/exit_small_grey.gif' ); 




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1)
		 return false;
		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr)
		 return false;
		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr)
		 return false;
		if (str.indexOf(at,(lat+1))!=-1)
		 return false;
		if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot)
		 return false;
		if (str.indexOf(dot,(lat+2))==-1)
		 return false;
		if (str.indexOf(" ")!=-1)
		 return false;
		 
 		 return true;
}


var msg="";
var msgModule="";
var minQuestionsToAttempt="";


function doConfirmTestExit(act)
{ 
	//jq_confirmBox('Test Exit', act, msg);
	$('#divExitTest').css('display',"block");
}

function checkLanguage ()
{

	var languagecode = $("input:radio[name=progLangSelector]:checked").val() ;
	
	if( languagecode == 2 )
	{
		$("#SelectedLanguageMsg").html (msgToJAVAStatmt);

	}	
	if( languagecode == 3 )
	{
		$("#SelectedLanguageMsg").html (msgToCPPStatmt);
	}
	
	if( languagecode == 1 )
	{
		$("#SelectedLanguageMsg").html (msgToCStatmt);
	}
	
	if( languagecode == 4 )
	{
		$("#SelectedLanguageMsg").html (msgToPYTHONStatmt);
	}
	
	if( languagecode == 6 )
	{
		$("#SelectedLanguageMsg").html (msgToCSHARPStatmt);
	}
	
	$("#languageSelect").show();	
    return true;	
}   

function doSubmitTestAlt (act)
{
    disableNavigation();
	document.frmMain.actionButton.value=act;
	
	if(typeof document.frmMain.curHr != 'undefined'){
		 document.frmMain.curHr.value=curHour;
	     document.frmMain.curMin.value=curMinutes;
	     document.frmMain.curSec.value=curSeconds;
	}
	//document.frmMain.action='doTest.php'
	document.frmMain.submit();
	return true;

}

function doSubmitTest(act)
{ 
  var languagecode = $("input:radio[name=progLangSelector]:checked").val();
  if (typeof languagecode !='undefined') 
 {  
	  if( act.localeCompare("ShowSamplePage") == 0)
	  {
	    checkLanguage();
		return true;
	  }	
 }	  
	
	tS();
	disableNavigation();
	document.frmMain.actionButton.value=act;
	
	if(typeof document.frmMain.curHr != 'undefined'){
		 document.frmMain.curHr.value=curHour;
	     document.frmMain.curMin.value=curMinutes;
	     document.frmMain.curSec.value=curSeconds;
	}
	//document.frmMain.action='doTest.php'
	document.frmMain.submit();
	return true;
}
//setInterval('serverTimeValCall()',60000);

function serverTimeValCall(){
	if(typeof document.frmMain != 'undefined') {
		if (typeof document.frmMain.submitAnswer != 'undefined') {
			$.post("ServerTimerValidation.php",
				{
				  "curHr":parseInt(curHour), "curMin":parseInt(curMinutes), "curSec":parseInt(curSeconds)
				},
				function(data,status){
					var timerObj=$.parseJSON(data);
				if(timerObj.flag === undefined){
					curHour=timerObj.curHr;
					curMinutes=timerObj.curMin;
					curSeconds=timerObj.curSec;
				}
				});
		}
	}
}

function disableNavigation(){
	
	var Next = $('#Next').val();
	var ConfirmAnswer =  $('#ConfirmAnswer').val();
	var NextQuestion = $ ('#NextQuestion').val();
	var Submit= $('#Submit').val();
	var ModuleExit =  $('#ModuleExit').val();;
	var TextExit = $('#TestExit').val();
	var Help =  $('#Help').val();
	var Proceed = $('#Proceed').val();

	
	if(document.getElementById('tdNext')){
		$("#tdNext").removeClass("continue btn wauto").addClass("continue disabledbtn btn wauto");
		$('#tdNext').attr('onclick','').unbind('click');

	document.getElementById('tdNext').innerHTML= str1.concat(Next,str2);
	
		
	}
	
	if(document.getElementById('tdConfirmAnswer')){
	    $("#tdConfirmAnswer").removeClass("confirm btn").addClass("confirm disabledbtn btn");
		$('#tdConfirmAnswer').attr('onclick','').unbind('click');
		//$('#tdConfirmAnswer').prop("onclick", null);
		document.getElementById('tdConfirmAnswer').innerHTML=str1.concat(ConfirmAnswer,str2);
	
	}	
	
	if(document.getElementById('tdNextQuestion')){
		$("#tdNextQuestion").removeClass("continue btn").addClass("continue disabledbtn btn");
		$('#tdNextQuestion').attr('onclick','').unbind('click');
		//$('#tdNextQuestion').prop("onclick", null);
		var moduleID = $('#moduleID').val();
	    if(moduleID == 652 || moduleID == 942 || moduleID == 1955 || moduleID == 2088){
			document.getElementById('tdNextQuestion').innerHTML=str1.concat(Submit,str2);
		}else {
			document.getElementById('tdNextQuestion').innerHTML=str1.concat(NextQuestion,str2);	
		}
		
	}
	
	if(document.getElementById('tdExitModule')){
	    //$("#tdExitModule").removeClass("module_exit_v").addClass("module_exit_a");
	    document.getElementById('tdExitModule').innerHTML=str3.concat(ModuleExit,str4);
	}
	
	if(document.getElementById('tdExitTest')){
		//$("#tdExitTest").removeClass("test_exit_v").addClass("test_exit_a");
		document.getElementById('tdExitTest').innerHTML=str3.concat(TextExit,str4);
	}
	
	if(document.getElementById('tdShowHelp')){
	    //$("#tdShowHelp").removeClass("help_v").addClass("help_a");
	    document.getElementById('tdShowHelp').innerHTML=str3.concat(Help,str4);
	}
	
	if(document.getElementById('tdSaveProfile')){
		document.getElementById('tdSaveProfile').innerHTML='';
	    document.getElementById('tdSaveProfile').innerHTML="<IMG src='images/next_small_grey.gif' border='0'/>";
	}
	
	if(document.getElementById('breakScreen')){
		document.getElementById('breakScreen').innerHTML='';
	   
	}
	if(document.getElementById('tdNextModule')){
	   //document.getElementById('tdNextQuestion').innerHTML='';
	   //document.getElementById('tdNextQuestion').innerHTML="<IMG src='images/next_small_grey.gif' border='0'/>";
	   $("#tdNextModule").removeClass("continue btn wauto").addClass("continue disabledbtn btn wauto");
	   $('#tdNextModule').attr('onclick','').unbind('click');
	   document.getElementById('tdNextModule').innerHTML=str1.concat(Proceed,str2);
	   // $("#tdConfirmAnswer").removeClass("confirm btn").addClass("confirm disabledbtn btn");
	//document.getElementById('tdConfirmAnswer').innerHTML='<span><span class="ico"></span>Confirm Answer</span>';
		
	}

	//alert('hiiii');
	return true;
}

function jq_confirmBox(label, act, msgModule){
	$.confirm({
			'title'		: label,
			'message'	: msgModule,
			'buttons'	: {
				'CANCEL'	: {
					'class'	: 'cancel',
					'action': function(){}	// Nothing to do in this case. You can as well omit the action property.
						},
				'OK'	: {
					'class'	: 'ok',
					'action': function(){
						disableNavigation();
						document.frmMain.actionButton.value=act;
						document.frmMain.submit();
						return true;
					}
				}

			}
		});
}

function doConfirmModuleExit(act)
{	
	//jq_confirmBox('Module Exit', act, msgModule);
	$('#divExitModule').css('display',"block");
}



function exitOK(act) {
	//alert('act val = '+ act);
	doOptionDisable();
	disableNavigation();
	var loadingmsg = $('#LoadingMsg').val();
		
	$( ".aExitOK" ).parent().html(loadingmsg);
	tS();

	$('#exitOKID').attr('onclick','').unbind('click');
	$('#cancel').attr('onclick','').unbind('click');
	document.frmMain.actionButton.value=act;
	document.frmMain.submit();
	return true;	
}


function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));
   
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
 
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
   
    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}

function doDummySubmit(queryString)
{
	//alert('timeUp');
	disableNavigation();
	timeIntervalT = 600000;
	setTimeout("UpdateTimert()", timeIntervalT);
	if(typeof document.frmMain.actionButton== 'undefined'){
		var queryString = document.frmMain.queryString.value;
		var action = document.frmMain.action;
		action += queryString;
		//alert(queryString);
		document.frmMain.action = action;
		document.frmMain.submit();
	}else if(document.frmMain.actionButton.value==""){
	   doOptionDisable();
	   document.dummy.actionButton.value='ModuleTimeOut'; //'TimeUp';
	   document.dummy.action='doTest.php'+queryString;
	   if(document.dummy.moduleID.value == 18) { // typing changes
		        document.dummy.id = "dummyFormID";
			$('<input>').attr({
					type: 'hidden',
					id: 'source',
					name: 'source',
					value: ''
				}).appendTo('#dummyFormID');	
			
			$('<input>').attr({
					type: 'hidden',
					id: 'sID',
					name: 'sID',
					value: ''
				}).appendTo('#dummyFormID');
			
			$('<input>').attr({
					type: 'hidden',
					id: 'saveCode',
					name: 'saveCode',
					value: ''
				}).appendTo('#dummyFormID');	
			
			$('<input>').attr({
					type: 'hidden',
					id: 'curHour',
					name: 'curHour',
					value: ''
				}).appendTo('#dummyFormID');
			
			$('<input>').attr({
					type: 'hidden',
					id: 'curMinutes',
					name: 'curMinutes',
					value: ''
				}).appendTo('#dummyFormID');	
			
			$('<input>').attr({
					type: 'hidden',
					id: 'curSeconds',
					name: 'curSeconds',
					value: ''
				}).appendTo('#dummyFormID');
			
			$('<input>').attr({
					type: 'hidden',
					id: 'subCategoryID',
					name: 'subCategoryID',
					value: ''
				}).appendTo('#dummyFormID');	
			
			$('<input>').attr({
					type: 'hidden',
					id: 'tableName',
					name: 'tableName',
					value: ''
				}).appendTo('#dummyFormID');
			
			document.dummy.source.value = document.frmMain.rdoAnswer.value;
			//alert('source = ' + document.dummy.source.value);
			document.dummy.sID.value = document.frmMain.qID.value;
			document.dummy.saveCode.value = 1;
			
			document.dummy.curHour.value = '00';
			document.dummy.curMinutes.value = '00';
			document.dummy.curSeconds.value = '00';
			
			document.dummy.subCategoryID.value = document.frmMain.subCatID.value;
			document.dummy.tableName.value = document.frmMain.tblName.value;
			
	   } else if(document.dummy.moduleID.value == 335 || document.dummy.moduleID.value == 364) { // Data Entry 
			doSubmit('ModuleTimeOut');
			return true;
	   }
       //document.dummy.action='doTest.php';
	   document.dummy.submit();
	}else if(document.frmMain.actionButton.value=="StartModule"){
	   document.dummy.actionButton.value='StartModule'; //'TimeUp';
	   document.dummy.action='doTest.php'+queryString;
	   //document.dummy.action='doTest.php'; 
	   document.dummy.submit();
	}else if(document.frmMain.actionButton.value=="ShowSamplePage"){
	   //document.dummy.actionButton.value='ShowModuleDescription'; //'TimeUp';
	   document.frmMain.action='doTest.php'+queryString;
	   //document.dummy.action='doTest.php'; 
	   document.frmMain.submit();
	}else if(document.frmMain.actionButton.value=="getFirstQuestion"){
	   document.frmMain.actionButton.value='NextQuestion';
	   document.frmMain.action='doTest.php'+queryString;
	   //document.dummy.action='doTest.php'; 
	   document.frmMain.submit();
	}
	
	
}

function doSubmitForm(queryString){	
	var action = document.frmMain.action;
	action += queryString;
	//alert(queryString);
	document.frmMain.action = action;
	document.frmMain.submit();
	return true;
}

function doOptionDisable(){
	
	//$(':radio').attr('disabled', 'disabled');
	
	if(document.getElementById('a'))
		document.getElementById('a').disabled=true;
	if(document.getElementById('b'))
		document.getElementById('b').disabled=true;
	if(document.getElementById('c'))
		document.getElementById('c').disabled=true;
	if(document.getElementById('d'))
		document.getElementById('d').disabled=true;
	if(document.getElementById('e'))
		document.getElementById('e').disabled=true;
	 var arr= document.getElementsByName('qID[]');
	 if(typeof arr.length != 'undefined'){
		 for(var i=1; i<=arr.length;i++){
			 var str="rdoAnswerV"+i+"";	
			 var chk=document.getElementsByName(str);		
			 for(var j=0;j<chk.length;j++){		 
			   chk[j].disabled=true;		       	    
			 }
			   
		 }
	 }
	 
	 if(typeof document.getElementById('qID2') != 'undefined' && document.getElementById('qID2') != null){	
		 if(document.getElementById('a2'))
		    document.getElementById('a2').disabled=true;
		 if(document.getElementById('b2'))
			document.getElementById('b2').disabled=true;
		 if(document.getElementById('c2'))
			document.getElementById('c2').disabled=true;
		 if(document.getElementById('d2'))
			document.getElementById('d2').disabled=true;
		 if(document.getElementById('e2'))
			document.getElementById('e2').disabled=true;
	}
	
	
	return true;
}

function doTabsDisable() {
	//alert("hi1");
	//$('#greyImage').html('Submit');
	// Commented by Garima :: 05th Nov 2012
	//$("#compileDiv").html('<a title="Compile Code"><img id="compileImg" src="images/compileRun_grey.gif" /></a>');
	
	var finalLastSid = $('#finalLastSid').val();
	var sID = $("#qID").val();
	
	//$('#greyImage').removeClass('btnsm btns bblue bssubmt customBtn').addClass('btnsm btns bblue bssubmt customBtn disabledbtn2');
	if(finalLastSid == sID) {	
		$('#greyImage').html(msgToSubmit);
	} else {
		//$('#greyImage').removeClass('btnsm btns orange bssubmt customBtn').addClass('btnsm btns orange bssubmt customBtn disabledbtn2');
		//$('#greyImage').removeClass('btnsm btns blue bssubmt customBtn').addClass('btnsm btns blue bssubmt customBtn disabledbtn2');
		//$('#greyImage').html(msgToNext_Ques);	
	}
	
	//$("#saveCode").html(msgToSave);
	//alert("hi2");
	$('#problemTab').removeAttr("href");
	//alert("hi3");
	$('#testcasesTab').removeAttr("href");
	//alert("hi4");
	$('#outputTab').removeAttr("href");
	//alert("hi5");
	$('#algoTab').removeAttr("href");
	
	
}

function doTabsEnable() {
	//alert("hi1");
	
	
	//alert("hi2");
	$('#problemTab').attr("href","#");
	//alert("hi3");
	$('#testcasesTab').attr("href","#");
	//alert("hi4");
	$('#outputTab').attr("href","#");
	//alert("hi5");
	$('#algoTab').attr("href","#");
	
	
}


function doSubmit(act,showCheckBox)
{ 
	if(isDoSubmitEnabled === true) {
	
	if (typeof(showCheckBox)==='undefined') { 
		showCheckBox = false;
	}
    if(showCheckBox)
    {
    	if(!document.getElementById("chkbox").checked)   
        	{ 	
        		$('#clickChkbox').css('display',"block");
        		return false;
        	}    	
    }
    
	if(document.frmMain.moduleID.value == 652 || document.frmMain.moduleID.value == 942 || document.frmMain.moduleID.value == 1955 || document.frmMain.moduleID.value == 2088) {
		//alert('heree');exit;
	//if(document.frmMain.divWithEditor.value == 1) {	
			//if(CKEDITOR.instances.rdoAnswer.getData() != '') {
			if(checkMinimumWordsWritten) {
				if(!isMinimumWordsWritten()) {
					var str = $('#writexWordCountPopUpText').html();
					str = str.replace("%WordCount%", $('#display_count').html().trim());
					$('#writexWordCountPopUp').html(str);
					$('#writexConfirmSubmit').css('display',"block");
		        		return false;
				}
			}
		      if($('#rdoAnswer').val() != '') {
				  var tempVal = $('#rdoAnswer').val();
			//var tempVal = jQuery(CKEDITOR.instances.rdoAnswer.getData()).text();			
			$('#rdoAnswer').val(tempVal);
			$('#rdoAnswerCompiled').val(tempVal);
			document.frmMain.rdoAnswer.value = tempVal;	
		}
		
	}
	document.frmMain.actionButton.value=act;
	document.frmMain.submitAnswer.value=1;
		
	
	var arr= document.getElementsByName('qID[]');
	
	if(typeof arr.length != 'undefined' && arr.length>0){
		var k=0;
		var rdoAnswer_arr=new Array();
		 for(var i=1; i<=arr.length;i++){
			var attr = '#'+i;
			if($(attr).attr("attrtype") == "select"){
				 rdoAnswer_arr[k]=  $(attr).val();
			 } else{
				 var str="rdoAnswerV"+i+"";	
				 var chk=document.getElementsByName(str);		
				 for(var j=0;j<chk.length;j++){					
					 if(chk[j].checked)
						rdoAnswer_arr[k]=  chk[j].value;														
				 }
			}
			   k++;
		 }	
		document.frmMain.rdoAnswer.value= rdoAnswer_arr; 
	}else if(typeof document.frmMain.rdoAnswerV != 'undefined' && document.frmMain.rdoAnswerV.length != null){
		//alert(document.frmMain.rdoAnswerV.length);
		for(i=0; i< document.frmMain.rdoAnswerV.length; i++){
			if(document.frmMain.rdoAnswerV[i].checked)
				//document.frmMain.rdoAnswer.value= i+1;
				document.frmMain.rdoAnswer.value= document.getElementsByName("rdoAnswerV")[i].value;
		}
	// added at 190310  ------------------------------

		if(typeof document.getElementById('qID2') != 'undefined' && document.getElementById('qID2') != null){			  
			for(i=0; i< document.frmMain.rdoAnswerV2.length; i++){
			   if(document.frmMain.rdoAnswerV2[i].checked)
				 document.frmMain.rdoAnswer2.value= document.getElementsByName("rdoAnswerV2")[i].value;
			}		    
		}
	 
	  //---------------------------------------------
	}
	
	
	
	document.frmMain.curHr.value=curHour;
	document.frmMain.curMin.value=curMinutes;
	document.frmMain.curSec.value=curSeconds;
	
	tS();
	doOptionDisable();
	disableNavigation();
	
	prevSecs =0;
	if(parseInt(previousHr,10) >0)
	{
		prevSecs += (parseInt(previousHr,10)*60*60);
	}
	if(parseInt(previousMin,10) >0)
	{  
		prevSecs += (parseInt(previousMin,10)*60);
	}
	if(parseInt(previoudSec,10) >0)
	{
		prevSecs += parseInt(previoudSec,10);
	}
	curSecs =0;
	if(parseInt(curHour,10) >0)
	{
		curSecs += (parseInt(curHour,10)*60*60);
	}
	if(parseInt(curMinutes,10) >0)
	{
		curSecs += (parseInt(curMinutes,10)*60);
	}
	if(parseInt(curSeconds,10) >0)
	{
		curSecs += parseInt(curSeconds,10);
	}
	isDoSubmitEnabled = false;
	document.frmMain.timeTaken.value = (prevSecs - curSecs);
	//document.frmMain.action='doTest.php'
	$("body").append("<div class='loader'></div>");
	document.frmMain.submit();
	return true;
	}
}

// Function which will be called for programming module where the answer need to be saved in different manner. - Added by Garima
var lastQuestSubmitFlag = 0;
function lastquestionsubmit ()
{
  $('#moduleSubmissionDiv').hide();
  $('#specialtext').html(msgToPleasewait+"!!! ");
 lastQuestSubmitFlag = 1; 
 doSubmitCompProg('NextQuestion', editor.getValue(), $('#lastSid').val());
}

function getDummyDeltaData() {
		var d1 = new Date();
		var currentTime = Math.round(d1.getTime());
		var dummyDelta = {};
		dummyDelta.start    = {'row' : '0', 'column' : '0'};
		dummyDelta.end      = {'row' : '0', 'column' : '0'};
		dummyDelta.action   = 'insert';
		dummyDelta.lines    = [];
		var dummyObj = {};
		dummyObj.delta = dummyDelta;
		dummyObj.time = currentTime;
		dummyObj.mode = 'ace/mode/text';
		return dummyObj;
}

function doSubmitCompProg(act, srcCode, sid)
{ 
	//console.log("here");
	if( typeof autoSaveCode == 'function' && typeof editor == 'object' && typeof getDeltaData == 'function') {		
		var deltaData = getDeltaData();
		var dummyDeltaData = getDummyDeltaData();
		deltaData.data.push(dummyDeltaData);
		deltaData = btoa(encodeURIComponent(JSON.stringify(deltaData)));
		var input = document.createElement('input');
		input.type = 'hidden';
		input.name = 'deltaData';
		input.value = deltaData;
		document.frmMain.appendChild(input);
		mainObj = new Array();
	}
	if(act == "back"){		
		$('#backQuestion').val(sid);
		document.frmMain.actionButton.value="NextQuestion";
		var compareCode = new String($('#rdoAnswerCompare').val());
		compareCode = compareCode.trim();
		var compareCode1 = new String(srcCode);
		compareCode1 = compareCode1.trim();
		var compareNum = compareStrings(compareCode1, compareCode);
		if(compareNum != 0)
		{			
			document.frmMain.answerCompareFlag.value= 1;
		} 
	}else {

		if($('#lastSid').val() == sid){
			if(lastQuestSubmitFlag == 0){
				//var response = jq_confirmBoxSubmitLastQuest("Last Question Submit","Are you sure you want to submit?<br /><br />This module shall end once you submit the question. Please ensure you have completed the test.<br />You will not be able to review the questions after you submit this question.", act, srcCode, sid);					
				//alert('hello');

				$('#divSubmitModule').show();
				
				return false;					
			}
		}
		document.frmMain.actionButton.value=act;
		//console.log('Act='+act);
		//document.frmMain.backQuestion.value=0;
	}
	document.frmMain.submitAnswer.value=1;
	//document.frmMain.isSubmit.value=1;	
	
	document.frmMain.rdoAnswer.value= srcCode; 
	
	//alert('curHour = '+curHour);
	//alert('curMinutes = '+curMinutes);
	//alert('curSeconds = '+curSeconds);
	document.frmMain.curHr.value=curHour;
	document.frmMain.curMin.value=curMinutes;
	document.frmMain.curSec.value=curSeconds;
	tS();
	doTabsDisable();
	var finalLastSid = $('#finalLastSid').val(); 
	if(finalLastSid == sid){
		$('#greyImage').removeClass('btnsm btns orange bssubmt customBtn').addClass('btnsm btns bssubmt customBtn disabledbtn2');
	} else {
		$('#greyImage').removeClass('btnsm btns bblue bssubmt customBtn').addClass('btnsm btns bssubmt customBtn disabledbtn2');
		$('#greyImage').removeClass('btnsm btns orange bssubmt customBtn').addClass('btnsm btns bssubmt customBtn disabledbtn2');
	}
	$('#greyImage').attr('onclick','').unbind('click');
	
	prevSecs =0;
	if(parseInt(previousHr,10) >0)
	{
		prevSecs += (parseInt(previousHr,10)*60*60);
	}
	if(parseInt(previousMin,10) >0)
	{  
		prevSecs += (parseInt(previousMin,10)*60);
	}
	if(parseInt(previoudSec,10) >0)
	{
		prevSecs += parseInt(previoudSec,10);
	}
	curSecs =0;
	if(parseInt(curHour,10) >0)
	{
		curSecs += (parseInt(curHour,10)*60*60);
	}
	if(parseInt(curMinutes,10) >0)
	{
		curSecs += (parseInt(curMinutes,10)*60);
	}
	if(parseInt(curSeconds,10) >0)
	{
		curSecs += parseInt(curSeconds,10);
	}
	

	document.frmMain.timeTaken.value = (prevSecs - curSecs);
	//document.frmMain.action='doTest.php'
	$('#pageLoadingDiv').show();
	document.frmMain.submit();
	return true;
}



function doConfirm(){

	 var Next = $('#Next').val();
	var ConfirmAnswer =  $('#ConfirmAnswer').val();
	var NextQuestion = $ ('#NextQuestion').val();
	var Submit= $('#Submit').val();


	
	var arr= document.getElementsByName('qID[]');
   if(typeof arr.length != 'undefined'){
	 for(var i=1; i<=arr.length;i++){
	 
		 var str="rdoAnswerV"+i+"";
		 var flag=false;	 
		 var chk=document.getElementsByName(str);
		 var select_element = '#'+i;
		 
		 //alert('hello' + $(select_element).attr("attrtype"));
		 
		 if($(select_element).attr("attrtype") == "select"){
			
			var value = $(select_element).val();
			if(value != "") {
				
				flag=true;
				
				/*=====================================================*/
				// Dynamic Test Form changes
				if($('#moduleType').val() == 3 && value != '') {
					
					//alert(value);
					$.ajax({
						type: "POST",
						async: false,
						url: "checkTestForms.php",
						data: {tfBasedOnResponse: 1, selectValue: value},
						success: function(msg){
							//alert('msg = '+msg);
							if(parseInt(msg) == 1) {
								flag=true;
							} else {
							
								var AlertJS =  $('#AlertJS').val();;
								alert(AlertJS);
								flag=false;	
							}
						}
						
					});
					//alert('flag = '+flag);
				}
				/*=====================================================*/
				
				
				
			}
		 } else{
			 for(var j=0;j<chk.length;j++){
				 if(chk[j].checked)
				   flag=true;		    
			 }
		}
		
	     if(!flag){		   
		   	return false;
			
		 }
	 }
  }
/*	  document.getElementById('tdConfirmAnswer').innerHTML='';
	  document.getElementById('tdConfirmAnswer').innerHTML="<a href='#' class='' onClick='javascript: return doEnableNext();'><IMG src='images/confirmAnswer_small.gif' border='0' /></a>";
	  document.getElementById('tdNextQuestion').innerHTML='';
	  document.getElementById('tdNextQuestion').innerHTML="<IMG src='images/next_small_grey.gif' border='0'/>";
*/
	  /*:::::::::::::::::::::::::::::::::::::::::::::*/
/*		$(".secQnText").removeClass("red");
		if($('input:radio[name=rdoAnswerV]:checked').val() == '1') {
			$("#a.secQnText").addClass("red");
		} 
		if($('input:radio[name=rdoAnswerV]:checked').val() == '2') {
			$("#b.secQnText").addClass("red");
		}
		if($('input:radio[name=rdoAnswerV]:checked').val() == '3') {
			$("#c.secQnText").addClass("red");
		} 
		if($('input:radio[name=rdoAnswerV]:checked').val() == '4') {
			$("#d.secQnText").addClass("red");
		}
		if($('input:radio[name=rdoAnswerV]:checked').val() == '5') {
			$("#e.secQnText").addClass("red");
		}
*/	  /*:::::::::::::::::::::::::::::::::::::::::::::*/
	  
	  $("#tdConfirmAnswer").removeClass("confirm disabledbtn btn").addClass("confirm btn");
	  $("#tdConfirmAnswer").click(doEnableNext);
	  document.getElementById('tdConfirmAnswer').innerHTML=str1.concat(ConfirmAnswer,str2);
	  
	  $("#tdNextQuestion").removeClass("continue btn").addClass("continue disabledbtn btn");
	  $('#tdNextQuestion').attr('onclick','').unbind('click');
	  
	  var moduleID = $('#moduleID').val();
	  if(moduleID == 652 || moduleID == 942 || moduleID == 1955 || moduleID == 2088 ){
	  	document.getElementById('tdNextQuestion').innerHTML=str1.concat(Submit,str2);
	  } else {
		document.getElementById('tdNextQuestion').innerHTML=str1.concat(NextQuestion,str2);  
	  }
	  
	  //$("#tdNextQuestion").removeClass("next_v").addClass("next_a");
	  //document.getElementById('tdNextQuestion').innerHTML='<a>Next</a>';
	  
	  //document.getElementById('tdNextQuestion').innerHTML='';
	  //document.getElementById('tdNextQuestion').innerHTML="<IMG src='images/next_small_grey.gif' border='0'/>";


	  return true;
}


function doEnableNext(){
   
    
	
var ConfirmAnswer =  $('#ConfirmAnswer').val();
var NextQuestion = $ ('#NextQuestion').val();
var Submit= $('#Submit').val();
isDoSubmitEnabled = true;
/*	document.getElementById('tdConfirmAnswer').innerHTML='';
	document.getElementById('tdConfirmAnswer').innerHTML="<IMG src='images/confirmAnswer_small_grey.gif' border='0'/>";
	document.getElementById('tdNextQuestion').innerHTML='';
	document.getElementById('tdNextQuestion').innerHTML="<a href='#' class='' onClick='javascript: return doSubmit(\"NextQuestion\");'><IMG src='images/next_small.gif' border='0'/></a>";*/
	  
	$("#tdConfirmAnswer").removeClass("confirm btn").addClass("confirm disabledbtn btn");
	$('#tdConfirmAnswer').attr('onclick','').unbind('click');
	document.getElementById('tdConfirmAnswer').innerHTML=str1.concat(ConfirmAnswer,str2);
	
	$("#tdNextQuestion").removeClass("continue disabledbtn btn").addClass("continue btn");
	//$("#tdNextQuestion").click(doSubmit("NextQuestion")); //      click(doSubmit);
	$('#tdNextQuestion').bind('click',function(){doSubmit('NextQuestion')});
    
	var moduleID = $('#moduleID').val();
	if(moduleID == 652 || moduleID == 942 || moduleID == 1955 || moduleID == 2088){
		document.getElementById('tdNextQuestion').innerHTML=str1.concat(Submit,str2);
	} else {
		document.getElementById('tdNextQuestion').innerHTML=str1.concat(NextQuestion,str2);	
	}
	
	
	//document.getElementById('tdNextQuestion').innerHTML="<a href='#' onClick='javascript: return doSubmit(\"NextQuestion\");'>Next</a>";  
}


// profile-1 ----------------------------------------------------------------------------------------------------------------------

function doValidateProfile1(act){
	var err	= "";
	
	if(document.frmMain.txtFirstname.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter your First Name";
	}else if(!document.frmMain.txtFirstname.value.match(/^[\sa-zA-Z.]+$/)){
		err	+= "\n * First Name expected to be in alphabets";
	}
	
	if(document.frmMain.txtMiddlename.value.replace(/^\s+/,'').replace(/\s+$/,'') !="" && !document.frmMain.txtMiddlename.value.match(/^[\sa-zA-Z.]+$/)){
		err	+= "\n * Middle Name expected to be in alphabets";
	}	
	
	
	if(document.frmMain.txtLastname.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter your Last Name";
	}else if(!document.frmMain.txtLastname.value.match(/^[\sa-zA-Z.]+$/)){
		err	+= "\n * Last Name expected to be in alphabets";
	}	
	
	if (!isDate()){
		err	+= "\n * Please supply a valid Date of Birth";		
	}
	
	if(document.frmMain.txtPrimEmail.value==""){
		err	+= "\n * Please enter your Primary Email address";
	}else if(echeck(document.frmMain.txtPrimEmail.value)==false){
				err	+= "\n * Invalid Primary Email address";
	}
	if(document.frmMain.txtAltEmail.value==""){
		err	+= "\n * Please enter your Alternate Email address";
	}else if(echeck(document.frmMain.txtAltEmail.value)==false){
				err	+= "\n * Invalid Alternate Email address";
	}
		
	
	
	/*if(document.frmMain.txtMobile.value.replace(/^\s+/,'').replace(/\s+$/,'')=="" && document.frmMain.txtLandline.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please provide atleast one contact number";
	}*/
	
	if(document.frmMain.txtMobile.value.replace(/^\s+/,'').replace(/\s+$/,'') !="" && !document.frmMain.txtMobile.value.match(/^[0-9]{10}$/)){
	    err	+= "\n * Mobile No. expected to be a 10 digit number";
	}
	if(document.frmMain.fatherMobileNo.value.replace(/^\s+/,'').replace(/\s+$/,'') =="" ){
	    err	+= "\n * Please enter Father's Mobile Number";
	}
	
	if(document.frmMain.fatherMobileNo.value.replace(/^\s+/,'').replace(/\s+$/,'') !="" && !document.frmMain.fatherMobileNo.value.match(/^(\+){0,1}[0-9\-\s\,]{7,30}$/)){
	    err	+= "\n * Invalid Father's Mobile Number";
	}
	if(document.frmMain.txtLandline.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
	    err	+= "\n * Please enter Home Town Phone Number";
	}
	

	if(document.frmMain.txtLandline.value.replace(/^\s+/,'').replace(/\s+$/,'')!="" && !document.frmMain.txtLandline.value.match(/^(\+){0,1}[0-9\-\s\,\(\)]{7,30}$/)){
	    err	+= "\n * Invalid Home Town Phone Number";
	}
	
	/*if(document.frmMain.txtLandline.value.replace(/^\s+/,'').replace(/\s+$/,'')!="" && !document.frmMain.txtLandline.value.match(/^(\+){0,1}[0-9\-\s]+$/)){
	    err	+= "\n * Landline No. expected in a proper format";
	}*/
	
	
	if(err!=""){
		alert(err);
		return false;
	}else{
		doSubmitTest(act);
		return true;
	}
	
}
function isDate(){
	var daysInMonth = DaysArray(12)	
     year=parseInt(document.frmMain.lst_dob_Year.options[document.frmMain.lst_dob_Year.selectedIndex].value);
	month=parseInt(document.frmMain.lst_dob_Month.options[document.frmMain.lst_dob_Month.selectedIndex].value);
	day=parseInt(document.frmMain.lst_dob_Day.options[document.frmMain.lst_dob_Day.selectedIndex].value);	
	if ( (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){	
		return false
	}	
return true
}


function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}


// profile-2 -----------------------------------------------------------------------------------------------------------------------

function doValidateProfile2(act)
{
	var err	= "";
	
	if(document.frmMain.txtPAddress.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter Street/Area of your permanent address";
	}
	if(document.frmMain.txtPCity.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter the City that constitutes your permanent address";
	}else if(!document.frmMain.txtPCity.value.match(/^[a-zA-Z\s]+$/)){
	    err	+= "\n * Invalid City Name in permanent address";
	}
	
	if(document.frmMain.optPState.value==""){
		err	+= "\n * Please Select a State that constitutes your permanent address";
	}
	
	if(document.frmMain.txtPZipcode.value.replace(/^\s+/,'').replace(/\s+$/,'')!="" && !document.frmMain.txtPZipcode.value.match(/^[1-9][0-9]{5}$/)){
		err	+= "\n *  Pincode in permanent address is expected to be a 6 digit number";
	}
	
	if(document.frmMain.txtCAddress.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter Street/Area of your current address";
	}
	if(document.frmMain.txtCCity.value==""){
		err	+= "\n * Please enter the City that constitutes your current address";
	}else if(!document.frmMain.txtCCity.value.match(/^[a-zA-Z\s]+$/)){
	    err	+= "\n * Invalid City Name in current address";
	}
	if(document.frmMain.optCState.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please Select a State that constitutes your current address";
	}
	
	
	if(document.frmMain.txtCZipcode.value.replace(/^\s+/,'').replace(/\s+$/,'')!="" && !document.frmMain.txtCZipcode.value.match(/^[1-9][0-9]{5}$/)){
		err	+= "\n *  Pincode in current address is expected to be a 6 digit number";
	}
	
	if(err!=""){
		alert(err);
		return false;
	}else{
		doSubmitTest(act);
		return true;
	}
	
}

function do_addressCopy(val)
{ 
 	if(val){
		if(document.frmMain.txtPAddress.value!=""){
			document.frmMain.txtCAddress.value = document.frmMain.txtPAddress.value;	
		}
		if(document.frmMain.txtPCity.value!=""){
			document.frmMain.txtCCity.value = document.frmMain.txtPCity.value;
		}
		if(document.frmMain.optPState.value!=""){
			for(var i=0; i < document.frmMain.optCState.options.length; i++)
			{
				if(document.frmMain.optCState.options[i].value ==  document.frmMain.optPState.value)
					document.frmMain.optCState.options[i].selected = true;
				else
					document.frmMain.optCState.options[i].selected = false;
			}
		}
		if(document.frmMain.txtPZipcode.value!=""){
			document.frmMain.txtCZipcode.value = document.frmMain.txtPZipcode.value;
		}
	}else{	  
		document.frmMain.txtCAddress.value = "";		
		document.frmMain.txtCCity.value = "";		
		document.frmMain.optCState.options[0].selected = true;		
		document.frmMain.txtCZipcode.value = "";	
	}	
	return true;
}


// profile-3_1  ------------------------------------------------------------------------------------------------------


function doCheckAllCheckBoxes(chkObj, matchLen, matchWith)
{
	//alert(chkObj.checked);
	if(chkObj.checked)
	{
		//check All Modules	
		
		for(ec =0; ec < document.frmMain.elements.length; ec++)
		{
			if(document.frmMain.elements[ec].id.substr(0,matchLen)==matchWith)
			{
				document.frmMain.elements[ec].checked=true;
			}
		}
		//	chkTestModule_{$modules[myModule]->moduleID}
		
	}
	else
	{
		//uncheck All Modules
		for(ec =0; ec < document.frmMain.elements.length; ec++)
		{
			if(document.frmMain.elements[ec].id.substr(0,matchLen)==matchWith)
			{
				document.frmMain.elements[ec].checked=false;
			}
		}
	}
}



function doValidateProfile3_1(act)
{
	var err	= "";
	/*
	if( document.frmMain.txtSalaryExpected !='')
	{
		if (!doCheckType(document.frmMain.txtSalaryExpected, 2, 2))
		{
			err += 'Please Enter a Valid Value for Expected Salary.\n Ex.(xx.xx)';
		}
	}
	*/
	if(err!=""){
		alert(err);
		return false;
	}else{
		doSubmitTest(act);
		return true;
	}
	
}


// profile-3 -----------------------------------------------------------------------------------------------------------------------------------


function doValidateProfile3(act)
{
	var err	= "";
	if(document.frmMain.lst_available_job_Month.value!="" && document.frmMain.lst_available_job_Year.value=="" ){
	   err	+= "\n * Please select Job Joining Year";
	}
	if(document.frmMain.lst_available_job_Month.value=="" && document.frmMain.lst_available_job_Year.value!="" ){
	    err	+= "\n * Please select Job Joining Month";
	}
	if(document.frmMain.lst_available_intern_Month.value!="" && document.frmMain.lst_available_intern_Year.value==""){
	     err	+= "\n * Please select Available for Internship After Year";
	}
	if(document.frmMain.lst_available_intern_Month.value=="" && document.frmMain.lst_available_intern_Year.value!=""){
	      err	+= "\n * Please select Available for Internship After Month";
	}
	
	if(document.frmMain.lst_available_job_Month.value!="" && document.frmMain.lst_available_job_Year.value!="" && document.frmMain.lst_available_intern_Month.value!="" && document.frmMain.lst_available_intern_Year.value!=""){		  
    if((document.frmMain.lst_available_intern_Year.value>document.frmMain.lst_available_job_Year.value ||(document.frmMain.lst_available_intern_Year.value==document.frmMain.lst_available_job_Year.value && document.frmMain.lst_available_intern_Month.value>document.frmMain.lst_available_job_Month.value))){
		  err	+= "\n * Job Joining Date must be greater than internship Availability date";
		}
	}
	
	if(document.frmMain.txtOtherPreferedCities.value.replace(/^\s+/,'').replace(/\s+$/,'')!="" && !document.frmMain.txtOtherPreferedCities.value.match(/^[a-zA-Z\s\,.]+$/)){
	   err	+= "\n * Please enter Cites separated by commas (,)";
	}
	
	if(err!=""){
		alert(err);
		return false;
	}else{
		doSubmitTest(act);
		return true;
	}
	
}


// profile-4 ----------------------------------------------------------------------------------------------------------------------------

function doValidateProfile4(act)
{
	var err	= "";
	document.frmMain.txtBYear_10.value=document.frmMain.txtBYear_10_Year.value;
	document.frmMain.txtBYear_12.value=document.frmMain.txtBYear_12_Year.value;
	
	
	if(document.frmMain.txtBName_10.value.replace(/^\s+/,'').replace(/\s+$/,'')=="" ){
		err	+= "\n * Please enter the Board Name for 10th Class";
	}else if(document.frmMain.txtBName_10.value.match(/^[^a-zA-Z]+$/)){
		err	+= "\n * 10th Board Name expected to be characters";
	}
	if(document.frmMain.txtBYear_10.value==""){
		err	+= "\n * Please select the Year of Passing for 10th Class";
	}
	
	
	if(document.frmMain.txtBMarks_10.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter the % marks obtained in 10th board";
	}else if(!document.frmMain.txtBMarks_10.value.match(/^[1-9][0-9](\.[0-9]{1,2}){0,1}$/)){
		err	+= "\n * 10th board Marks expected to be %marks";
	}
	
	
	if(document.frmMain.txtBName_12.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter the Board Name for 12th Class";
	}else if(document.frmMain.txtBName_12.value.match(/^[^a-zA-Z]+$/)){
		err	+= "\n * 12th Board Name expected to be characters";
	}
	
	if(document.frmMain.txtBYear_12.value==""){
		err	+= "\n * Please select the Year of Passing for 12th Class";
	}
	
	if(document.frmMain.txtBYear_12.value!="" && document.frmMain.txtBYear_10.value!="" && (document.frmMain.txtBYear_12.value-document.frmMain.txtBYear_10.value)<1){
		err	+= "\n * 12th passing year must be greater than 10th passing year";
	}	
	
	if(document.frmMain.txtBMarks_12.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter the % marks obtained in 12th board";
	}else if(!document.frmMain.txtBMarks_12.value.match(/^[1-9][0-9](\.[0-9]{1,2}){0,1}$/)){
		err	+= "\n * 12th board Marks expected to be %marks";
	}	
	
	if(!document.frmMain.lastattendedSchool[0].checked && !document.frmMain.lastattendedSchool[1].checked){
	   err	+= "\n * Please select your last schooling class";
	}
	if(document.frmMain.txtSName.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter the name of your last school";
	}	
	if(document.frmMain.txtSCity.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please enter the name of City of your last school";
	}else if(!document.frmMain.txtSCity.value.match(/^[a-zA-Z\s]+$/)){
		 err	+= "\n * Invalid City Name";
	}
	if(document.frmMain.optSState.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please Select the State of your last school";
	}
	if(document.frmMain.txtSZipcode.value.replace(/^\s+/,'').replace(/\s+$/,'')!=""&& !document.frmMain.txtSZipcode.value.match(/^[1-9][0-9]{5}$/)){
		err	+= "\n *  Pinode expected to be a 6 digit number";
	}	
	
	if(err!=""){
		alert(err);
		return false;
	}else{
		doSubmitTest(act);
		return true;
	}
	
}



//  profile-5  ------------------------------------------------------------------------------------------------------------------------------

function doValidateProfile5(act)
{
	var err	= "";
	if(document.getElementById('lstCollegeName_0').value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please select your College";
	}   
   
    if(document.getElementById("lstCollegeName_0").options[document.getElementById("lstCollegeName_0").selectedIndex].value==0){   
	   if(document.frmMain.txtOtherCollege.value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		  err	+= "\n * Please enter College Name";
	   }	  
	}
	
	if(document.getElementById('lstCollegeDegree_0').value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please select your Degree";
	}
	
	if(document.getElementById('lstCollegeSubject_0').value==""){
		err	+= "\n * Please select your stream";
	}
	document.getElementById('txtCollegeJoinYear_0').value=document.frmMain.txtCollegeJoinYear_0_Year.value;
	if(document.getElementById('txtCollegeJoinYear_0').value==""){
		err	+= "\n * Please select your college joining year";
	}
	document.getElementById('txtCollegeCompletionYear_0').value=document.frmMain.txtCollegeCompletionYear_0_Year.value;
	if(document.getElementById('txtCollegeCompletionYear_0').value==""){
		err	+= "\n * Please select your college completion year";
	}
	if(document.getElementById('txtCollegeJoinYear_0').value >=document.getElementById('txtCollegeCompletionYear_0').value){
	  err	+= "\n * College completion year must be greater than college joining year";
	}
	if(document.getElementById('txtCollegeOverAll_0').value.replace(/^\s+/,'').replace(/\s+$/,'')==""){
		err	+= "\n * Please provide your aggregate Percentage in college until now";
	}else if(!document.getElementById('txtCollegeOverAll_0').value.match(/^[1-9][0-9](\.[0-9]{1,2}){0,1}$/)){
		err	+= "\n * Aggregate Percentage expected to be %marks";
	}
	
	if(document.getElementById('txtCollegePerc1Year_0').value.replace(/^\s+/,'').replace(/\s+$/,'')!="" && !document.getElementById('txtCollegePerc1Year_0').value.match(/^[1-9][0-9](\.[0-9]{1,2}){0,1}$/)){
		err	+= "\n * Ist Year aggregate percentage expected to be %marks";
	}
	if(document.getElementById('txtCollegePerc2Year_0').value.replace(/^\s+/,'').replace(/\s+$/,'')!="" && !document.getElementById('txtCollegePerc2Year_0').value.match(/^[1-9][0-9](\.[0-9]{1,2}){0,1}$/)){
		err	+= "\n * IInd Year aggregate percentage expected to be %marks";
	}
	if(document.getElementById('txtCollegePerc3Year_0').value.replace(/^\s+/,'').replace(/\s+$/,'')!="" && !document.getElementById('txtCollegePerc3Year_0').value.match(/^[1-9][0-9](\.[0-9]{1,2}){0,1}$/)){
		err	+= "\n * IIIrd Year aggregate percentage expected to be %marks";
	}
	if(document.getElementById('txtCollegePerc4Year_0').value.replace(/^\s+/,'').replace(/\s+$/,'')!="" && !document.getElementById('txtCollegePerc4Year_0').value.match(/^[1-9][0-9](\.[0-9]{1,2}){0,1}$/)){
		err	+= "\n * Final Year aggregate percentage expected to be %marks";
	}
	
	if(err!=""){
		alert(err);
		return false;
	}else{
		document.getElementById('chkCollege_0').value = 1;
		doSubmitTest(act);
		return true;
	}
	
}


// profile-6  --------------------------------------------------------------------------------------------------------


function doValidateProfile6(act)
{
	var err	= "";
	
	if(err!=""){
		alert(err);
		return false;
	}else{
			doSubmitTest(act);
		return true;
	}
	
}


function addProjectDetailsRow() 
{
var mytable = document.getElementById("tblProject");
var mytbody = document.getElementById("tbdProject");
var trID = parseInt(mytable.rows.length);
var tdID="";
/* Get the objects whose values have to be passed as well */
//alert(trID);
var msg="You are about to add a Project. Are you sure?";
 if (window.confirm(msg)) 
 {
	var myNewtbody = document.createElement("tbody");
	myNewtbody.id = "myTbody";
	var docFragment = document.createDocumentFragment();
	var trElem, tdElem, txtNode;

	trElem = document.createElement("tr");
	trElem.id = 'trPrjID'+(trID+1);
		
	tdElem 	= document.createElement("td");
	tdElem.align='left';
	tdElem.height=260;

	var newProject= "";
	newProject = "<BR/><table width='90%' class='text11' cellpadding='1' cellspacing='0' border='0' bgcolor='#25B35A' style='border:solid 1px #25B35A;' id='tblProject_"+(trID+1)+"'><tr><td><table width='100%' class='text11' cellpadding='2' cellspacing='0' border='0' bgcolor='#FFFFFF'><tr><td colspan='3' align='left'><input id='chkProjects_"+trID+"' type='hidden' name='chkProjects[]' class='flat' value='"+trID+"'>&nbsp;<strong>"+(trID+1)+".</strong></td></tr><tr><td align='left'><em>Project Name:</em></td><td align='left'><em>Guide/Instructor Name:</em></td><td align='left' nowrap><em>Duration:<small>[in months]</small></em></td></tr><tr><td align='left'><input type='text' name='txtProjectName_[]' class='flat' size='35' value=''></td><td align='left'><input type='text' name='txtProjectGuideName_[]' class='flat' size='35' value=''></td><td align='left'><input type='text' name='txtProjectDuration_[]' class='flat' size='6' value=''></td></tr><tr><td align='left' colspan='2'><em>Institution Name: <small>[project done in]</small></em></td><td align='left'>&nbsp;</td></tr><tr><td align='left' colspan='2'><input type='text' name='txtProjectInstitution_[]' class='flat' size='40' value='' /></td><td align='left'>&nbsp;</td></tr><tr><td align='left' colspan='2'><em>Project Details:</em></td><td align='left'>&nbsp;</td></tr><tr><td align='left' colspan='2'><textarea name='txtProjectDetails_[]' class='flat' cols='60' rows='4'></textarea></td><td align='left' valign='top'>&nbsp;</td></tr></table></td></tr></table>";
	

	tdElem.innerHTML = newProject;
	trElem.appendChild(tdElem);
	docFragment.appendChild(trElem);
	//myNewtbody.appendChild(docFragment);
	mytbody.appendChild(docFragment);
	//mytable.appendChild(myNewtbody, mytbody);
	mytable.appendChild(mytbody);
	mytable.Height	= "100%"; 
  
 } else {
  return true;
}

}
function removeProjecRow(objID,objName) {
	var msg = 'You are about to remove a '+objName+'.\nAre you sure?';
	if (window.confirm(msg)) {
		var obj =document.getElementById(objID);
		//var id = obj.parentNode.parentNode.rowIndex
		var id =(obj.rows.length-1);
		if(id > 0)
			document.getElementById(objID).deleteRow(id)
		else
		{
			alert("Can't Delete.");
			return true;
		}
		
	}
} 

// profile-7  ----------------------------------------------------------------------------------------------------------------


function doValidateProfile7(act){
	var err	= "";	
	if(err!=""){
		alert(err);
		return false;
	}else{
			doSubmitTest(act);
		return true;
	}
	
}


function showHelpCompiler(moduleID)
{
	//alert('hiii'+moduleID);
  var LeftPosition=(screen.width)?(screen.width-800)/2:100;TopPosition=(screen.height)?(screen.height-600)/2:100;
  var settings='width=800,height=600,top='+TopPosition+',left='+LeftPosition+',scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
 var winName='amcatHelp';
 
 /*if(moduleID == 161) {*/
 if(moduleID == 161 || moduleID == 167 || moduleID == 168 || moduleID == 251 || moduleID == 254 || moduleID == 257) {	 
 	win=window.open('FAQ_java.html',winName,settings);
 } else {
 	win=window.open('FAQ_cpp.html',winName,settings);
 }
 
}

function showQRImage()
{
	tb_show('', '#TB_inline?height=230&width=220&inlineId=QR_image', null);
 
}
function submitAndDisable(queryString){
	$('#introPageDiv').removeAttr('onclick');
	$('#submitReg').attr('class','confirm disabledbtn w95-btn btn');
	doSubmitForm(queryString);
}



function compareStrings(string,string1)
{
	var compareCode = new String(string);
	compareCode = compareCode.trim();
	var compareCode1 = new String(string1);
	compareCode1 = compareCode1.trim();
	var compareNum = 0;
	if(compareCode1.length == compareCode.length)
	{
		l = Math.min(compareCode1.length, compareCode.length);
		for( i=0; i<l; i++) {
			if( compareCode1.charAt(i) != compareCode1.charAt(i)) 
				compareNum++;
				break;
		}
		
	}else {
		compareNum = 1;
	}
	return compareNum;
}

function strtrim() {
	return this.replace(/^\s+/,'').replace(/\s+$/,'');
}
String.prototype.trim = strtrim;

function jq_confirmBoxSubmitLastQuest(label, msgModule, act, srcCode, sid){
	$.confirm({
			'title'		: label,
			'message'	: msgModule,
			'buttons'	: {				
					'Yes'	: {
						'class'	: 'ok',
						'action': function(){
							lastQuestSubmitFlag = 1;
							doSubmitCompProg(act, srcCode, sid);
						}	// Nothing to do in this case. You can as well omit the action property.
					},
					'NO'	: {
						'class'	: 'cancel',
						'action': function(){
							lastQuestSubmitFlag = 0;
						}
					}
			}
		});
}
function showModuleSpecificHelpPopup(moduleID) {
	//alert(moduleID);
	if(moduleID == 259) {
		//var moduleDirectionContent = $('#moduleDirectionContent').val();
		$("#helpContentDiv").load('amazonHelp.html');//(moduleDirectionContent);
		//var amcatID = $('#amcatID').val();
		//$('#helpAmcatID').html(amcatID);
		
		
		/*$.ajax({
			type: "GET",
			url: "ajax_Main.php?a=showModuleDirection&moduleID="+moduleID,
			success: function(msg){
				alert(msg);
				$('#helpSpanID').html('Module Instructions');
				$("#helpContentDiv").html(msg);
				//var amcatID = $('#amcatID').val();
				//$('#helpAmcatID').html(amcatID);
				$('#divHelp').show();	
			}
		});
		*/
  } else {
	  // show module direction	
	  $.ajax({
		type: "GET",
		async: false,
		url: "help.php?moduleID="+moduleID,		
		success: function(msg){
			$("#helpContentDiv").html(msg);
			$('#divHelp').show();	
		}
		
	});
	  //$("#helpContentDiv").load('help.html');
	  //$('#divHelp').show();	  
  }
    var helpword = $('#Help').val();
  $('#helpSpanID').html(helpword);
  $('#divHelp').show();			
}


function showModuleHelpPopup(moduleID)
{
//alert('moduleID = '+moduleID);
  // This function will display either module specific help or module direction
    var moduleInstructions = $('#ModuleInstructions').val();
  if(moduleID == 259) {
	var moduleDirectionContent = $('#moduleDirectionContent').val();
	$('#helpSpanID').html(moduleInstructions);
	$("#helpContentDiv").html(moduleDirectionContent);

	//var amcatID = $('#amcatID').val();
	//$('#helpAmcatID').html(amcatID);
	$('#divHelp').show();	
	
	/*$.ajax({
		type: "GET",
		url: "ajax_Main.php?a=showModuleDirection&moduleID="+moduleID,
		success: function(msg){
			alert(msg);
			$('#helpSpanID').html('Module Instructions');
			$("#helpContentDiv").html(msg);
			//var amcatID = $('#amcatID').val();
			//$('#helpAmcatID').html(amcatID);
			$('#divHelp').show();	
		}
	});
	*/
	
	
	
	
  } else {
	  // show module direction	
	  //$("#helpContentDiv").load('help.html');
	  //$('#divHelp').show();	
	  var moduleDirectionContent = $('#moduleDirectionContent').val();
		$('#helpSpanID').html(moduleInstructions);
		$("#helpContentDiv").html(moduleDirectionContent);
	
		//var amcatID = $('#amcatID').val();
		//$('#helpAmcatID').html(amcatID);
		$('#divHelp').show();
  }
  
}


function showTestHelpPopup() {
	//$('.header').html('<h3><a class="close" href="#"></a>Test Instructions</h3>');
       var testInstructions = $('#TestInstructions').val();
	$('#helpSpanID').html(testInstructions);
	$("#helpContentDiv").load('help.html');
	$('#divHelp').show();	
	//$('.close').bind('click',function(){closePopup()});
}


function showQuestionHelpPopup() {
	//$('.header').html('<h3><a class="close" href="#"></a>Test Instructions</h3>');
	var testInstructions = $('#QuestionHelp').val();
	$('#helpSpanID').html(testInstructions);
	$("#queshelpContentDiv").html(document.getElementById("answerExplanationDiv").outerHTML);
	$('#divQuestionHelp').show();	
	//$('.close').bind('click',function(){closePopup()});
}


function showDisclaimerPopup(companyID) {

   var disclaimerText = $('#Disclaimer').val();
	//$('.header').html('<h3><a class="close" href="#"></a>Test Instructions</h3>');
	//alert('show disclaimer = '+companyID);
	$.ajax({
		type: "GET",
		url: "ajax_Main.php?a=showDisclaimer&companyID="+companyID,
		success: function(msg){
			//alert(msg);
			$('#helpSpanID').html(disclaimerText);
			$("#helpContentDiv").html(msg);
			$('#divHelp').show();	
		}
	});
	
	
	//$('.close').bind('click',function(){closePopup()});
}
 
function doResume(act,queryString)
{
	var act = 'showCandidatesList';
	document.frmMain.todo.value=act;
	document.frmMain.action='testCenter.php'+queryString;
	document.frmMain.submit();
	return true;
}

function isMinimumWordsWritten() {
	var wordCount = $('#display_count').html();
	if(wordCount < 100 ) {
		return false;
	} else {
		return true;
	}
}

function disableWordCountCheckAndSubmit() {
	checkMinimumWordsWritten = false;
	doSubmit('NextQuestion');
}

$(document).ready(function() 
{ var wordCounts = {}; $("#rdoAnswer").keyup(function() { var matches = this.value.match(/\b/g); 
wordCounts[this.id] = matches ? matches.length / 2 : 0; var finalCount = 0; $.each(wordCounts, function(k, v) { finalCount += v; }); 
	
	var moduleID = $("#moduleID").val();
	var maxLimit;
	if(moduleID == 2119){
		maxLimit = 1600;
	}else if(moduleID == 2183){
		maxLimit = 600;
	}else{
		maxLimit = 300;
	}
	
	if(finalCount >maxLimit)
	{ alert("You have reached maximum limit! Rest of the words will be trimmed");
		  $("#warning").css('display','block');
   	}
	else
	{
		 $("#warning").css('display','none');
	}
$('#display_count').html(finalCount); }).keyup(); }); 
