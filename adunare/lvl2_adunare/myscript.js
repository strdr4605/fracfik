	var r = {m : 0,n : 0};
	var O1 = {m : 0,n : 0};
	var O2 = {m : 0,n : 0};
	var n = 0;
	var z = 0;
	var v = ['0','0','0','0','0','0','0','0','0','0'];
	var n_v = 0;
	var v_d = 0;
	var v_n = 0;
function Start(){
	$('#textras').text('# Alege numitorul: ')
	vieti();
	$('.jos').text('');
	$('.sus').text('');
	$('#text').text('');
		O1.n = Math.floor(Math.random() * (4)) + 2;
		O1.m = Math.floor(Math.random() * (5)) + 1;
		O2.n = Math.floor(Math.random() * (4)) + 2;
		O2.m = Math.floor(Math.random() * (5)) + 1;
		O2.n = O1.n;
		$('.sus1').text(O1.m);
		$('.jos1').text(O1.n);
		$('.sus2').text(O2.m);
		$('.jos2').text(O2.n);
		for(var i = 0; i < 5; i++){
			var y = '.A:eq(' + i + ')';
			z += i;
			generateTableAns(i+1,y);
		}

		TableAns1()
}
$(document).ready(function(){
Start();
}); // Sfirsit Document ready


//Generarea Intrebarii
function generateTableQue(total_rows, colored_rows, selector){
	total_rows = total_rows || 1;
	colored_rows = colored_rows || 1;
	selector = selector || "body";
	var $table = $('<table>')
	for (var i = 0; i < total_rows; i++) {
		var $tr = $('<tr>');
		var $td = $('<td>');
		$('table tr td').css('width : 200px;');
		$tr.append($td);
		$table.append($tr);
		$td.text(' ');
		$td.css('background-color', 'white');
		if (colored_rows > 0) {
			$td.css('background-color', 'orange');
			colored_rows--;
		}
	}
	$(selector).empty()
	$(selector).append($table);
}
//Generarea raspunsului partea 1
function generateTableAns(total_rows, selector){
	total_rows = total_rows || 1;
	selector = selector || "body";
	var $table = $('<table>')
	for (var i = 0; i < total_rows; i++) {
		var $tr = $('<tr>');
		var $td = $('<td>');
		$('table tr td').css('width : 200px;');
		$tr.append($td);
		$table.append($tr);
		$td.css('background-color', 'white');
		$td.addClass('e');
	}
	$(selector).empty()
	$(selector).append($table);
}
// Selectare Raspuns 1 si generare Raspuns 2
	function TableAns1(){
			$('.e').off('mouseover');
			$('.e').off('mouseleave');
			$('.e').off('click');
			$(".A").on({
				click :	function(){
						var index = $( ".A" ).index( this );
						for(var j = 0; j < 5; j++){
							var yy = '.A:eq(' + j + ')';
							generateTableAns(index+1,yy);
					}
					$('.A').off('mouseover');
					$('.A').off('mouseleave');
					$('.A').off('click');
					r.n = index + 1;
				$(this).css("border","black solid 2px");
				TableAns2()
				},
				mouseover : function(){
					var index = $( ".A" ).index( this );
					var y = '.A:eq('+index+')';
					$(y).css("border","red solid 3px");
					$('.jos').text(index+1);
				},
				mouseleave : function(){
					var index = $( ".A" ).index( this );
					var y = '.A:eq('+index+')';
					$(y).css("border","black solid 2px");
					$('.jos').text('');
				}
			});
	}

// Selectare Raspuns 2

	function TableAns2(){
			$('#textras').text('# Alege numărătorul: ')
			$(".e").on({
				click :	function(){
						var index = $( ".e" ).index( this );
					$('.e').off('mouseover');
					$('.e').off('mouseleave');
					$('.e').off('click');
					r.m = index+1;
					var a = r.m / r.n;
					var b = (O1.m + O2.m) / O2.n;
			//if(r.m == (O1.m + O2.m) && O2.n == r.n) $('#text').text('Corect'); else $('#text').text('Gresit');
			if(a == b){
					 $('#text').text('Corect');
					 v[n_v] = 1; n_v++; v_d++;
					} else {
					 		 $('#text').text('Gresit');
				 		 	v[n_v] = -1; n_v++; v_n++;
							}
					 if(n_v == 10){
								// if(v_d > 7)alert("Bravo, ai trecut primul nivel cu rezultatul "+v_d+" corect, "+v_n+" gresit");
								// 	else alert("Ne pare rau, nu ai trecut primul nivel cu rezultatul "+v_d+" corect, "+v_n+" gresit");
								localStorage.setItem("v_d",v_d);
								var nivel = localStorage.getItem("nivel");
								var user = localStorage.getItem("user");
								window.location.replace("rezultat.html?user="+user+"&nivel="+nivel+"&result="+v_d);
								}
			 setTimeout(Start, 1000);
				},
				mouseover : function(){
					var index = $( ".e" ).index( this );
					for(var i = 0; i <= index;i++){
							var y = '.e:eq('+i+')';
							$(y).css("background-color","orange");
							$('.sus').text(index+1);
							}
				},
				mouseleave : function(){
					var index = $( ".e" ).index( this );
					for(var i = 0; i <= index;i++){
							var y = '.e:eq('+i+')';
							$(y).css("background-color","white");
							$('.sus').text('');
							}

				}
			});
	}

function vieti(){
	for(var i = 0; i < 10; i++){
		if(v[i] == '1')
			$('.v:eq('+i+')').css('background-image', 'url("images_lvl2/corect.png")');
			//$('.v:eq('+i+')').css("background-color","green");
			else if(v[i] == '-1')
				$('.v:eq('+i+')').css('background-image', 'url("images_lvl2/gresit.png")');
				//$('.v:eq('+i+')').css("background-color","red");
					else
						//$('.v:eq('+i+')').text('');
						$('.v:eq('+i+')').css("background-color","white");
	}
}


///////////////////////////////////////////////////////////////////////////////////  Stas


var stop = 1;
var image = null; // object

function doMove() {
  if (stop < 120){
  image.style.left = parseInt(image.style.left)+8+'px';
  if(image.style.left=='300px'){
  alert("Finished");
  }else{
  setTimeout(doMove,20); // call doMove in 20msec
  }
stop++;
}
}

function init() {
  image = document.getElementById('image'); // get the "foo" object
  image.style.left = '0px'; // set its initial position to 0px
  doMove(); // start animating
}



// Timer
function startTimer(duration, display) {
	setTimeout(wind,101000);
    var start = Date.now(),
        diff;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        display.textContent = diff;

    };
    timer();
    setInterval(timer, 1000);
}
window.onload = function () {
    var fiveMinutes = 100,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
function wind(){
	localStorage.setItem("v_d",v_d);
	var nivel = localStorage.getItem("nivel");
	var user = localStorage.getItem("user");
	window.location.replace("rezultat.html?user="+user+"&nivel="+nivel+"&result="+v_d);
}
