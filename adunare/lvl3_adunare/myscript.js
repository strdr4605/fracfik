	var r = {m : 0,n : 0};
	var O1 = {m : 0,n : 0};
	var O2 = {m : 0,n : 0};
	var v = ['0','0','0','0','0','0','0','0','0','0'];
	var n = 0;
	var adevar = 0;
	var rinduri = 1;
	var coloane = 1;
	var n_v = 0;
	var v_d = 0;
	var v_n = 0;
function Start(){
	$('#textras').text('# Alege numitorul: ')
		vieti();
	$('#main').css('background-color', 'white');
	$('#main2').css('background-color', 'white');
	adevar = 0;
	rinduri = 1;
	coloane = 1;
	Rinduri(1,1,'#main');
	Rinduri(1,1,'#main2');

	$('.jos').text('');
	$('.sus').text('');
	$('#text').text('');
		O1.n = Math.floor(Math.random() * (4)) + 2;
		O1.m = Math.floor(Math.random() * (O1.n - 1)) + 1;
		O2.n = Math.floor(Math.random() * (4)) + 2;
		O2.m = Math.floor(Math.random() * (O2.n - 1)) + 1;

		generateTableQue(O1.n, O1.m, '.O'+':eq(0)')
		generateTableQue(O2.n, O2.m, '.O'+':eq(1)')
		for(var i = 0; i < 5; i++){
			var y = '.A:eq(' + i + ')';
			var zz = '.B:eq(' + i + ')';
			Verticala_Orizontala(i+1,y);
			Verticala_Orizontala(i+1,zz);
		}
		Orizontala();
		Verticala();
}


$(document).ready(function(){
Start();
}); // Sfirsit Document ready

//Generarea raspunsului partea 1
function  Verticala_Orizontala(total_rows, selector){
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
	}
	$(selector).empty()
	$(selector).append($table);
}


	function Orizontala(){
		$('.A').show();
			$(".A").on({
				click :	function(){
						var index = $( ".A" ).index( this );

					$('.A').off('mouseover');
					$('.A').off('mouseleave');
					$('.A').off('click');
					rinduri = index + 1;
					adevar++;
					if(adevar == 2)Select_e();
				$(this).css("border","black solid 1.5px");
				$('.A').hide();
				},
				mouseover : function(){
					var index = $( ".A" ).index( this );
					var y = '.A:eq('+index+')';
					$(y).css("border","red solid 1.5px");
					Rinduri(index+1,coloane,'#main');
					Rinduri(index+1,coloane,'#main2');

				},
				mouseleave : function(){
					var index = $( ".A" ).index( this );
					var y = '.A:eq('+index+')';
					Rinduri(1,coloane,'#main');
					Rinduri(1,coloane,'#main2');

					$(y).css("border","black solid 1.5px");
				}
			});
	}


	function Verticala(){
		$('.B').show();
			$(".B").on({
				click :	function(){
						var index = $( ".B" ).index( this );

					$('.B').off('mouseover');
					$('.B').off('mouseleave');
					$('.B').off('click');
					coloane = index + 1;
					adevar++;
					if(adevar == 2)Select_e();
				$(this).css("border","black solid 1.5px");
				$('.B').hide();
				},
				mouseover : function(){
					var index = $( ".B" ).index( this );
					var y = '.B:eq('+index+')';
					$(y).css("border","red solid 1.5px");
					Coloane(rinduri,index+1,'#main');
					Coloane(rinduri,index+1,'#main2');

				},
				mouseleave : function(){
					var index = $( ".B" ).index( this );
					var y = '.B:eq('+index+')';
					Coloane(rinduri,1,'#main');
					Coloane(rinduri,1,'#main2');

					$(y).css("border","black solid 1.5px");
				}
			});
	}


	function Rinduri(rows,cols,selector){
		var $table = $('<table>')
		for (var i = 0; i < rows; i++) {
			var $tr = $('<tr>');
			for(var j = 0; j < cols; j++){
			var $td = $('<td>');
			$td.css('background-color', 'white');
			$td.addClass('e');
			$tr.append($td);
			}
			$table.append($tr);
		}
		$(selector).empty()
		$(selector).append($table);
	}

	function Coloane(rows,cols,selector){
		var $table = $('<table>')
		for (var i = 0; i < rows; i++) {
			var $tr = $('<tr>');
			for(var j = 0; j < cols; j++){
			var $td = $('<td>');
			$td.css('background-color', 'white');
			$td.addClass('e');
			$tr.append($td);
			}
			$table.append($tr);
		}
		$(selector).empty()
		$(selector).append($table);
	}

	function Select_e(){
		$('#textras').text('# Alege numaratorul: ')
		r.n = rinduri * coloane;
		$('.jos').text(r.n);
			$(".e").on({
				click :	function(){
					var index = $( ".e" ).index( this );
					$('.e').off('mouseover');
					$('.e').off('mouseleave');
					$('.e').off('click');
					var a = r.m / r.n;
					var b = (O1.m * O2.n + O2.m * O1.n) / (O2.n * O1.n);
			//if(r.m == (O1.m + O2.m) && O2.n == r.n) $('#text').text('Corect'); else $('#text').text('Gresit');
			if(a == b){
					 v[n_v] = 1;
					 n_v++;
					 v_d++;
					} else {
				 		 	v[n_v] = -1;
				 		 	n_v++;
				 		 	v_n++;
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
							}
							r.m = index+1;
							$('.sus').text(r.m);
				},
				mouseleave : function(){
					var index = $( ".e" ).index( this );
					for(var i = 0; i <= index;i++){
							var y = '.e:eq('+i+')';
							$(y).css("background-color","white");
							}
							$('.sus').text('');
				}
			});
	}


	//////////////////////////////

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


function vieti(){
	for(var i = 0; i < 10; i++){
		if(v[i] == '1')
			$('.v:eq('+i+')').css('background-image', 'url("images_lvl3/corect.png")');
			//$('.v:eq('+i+')').css("background-color","green");
			else if(v[i] == '-1')
				$('.v:eq('+i+')').css('background-image', 'url("images_lvl3/gresit.png")');
				//$('.v:eq('+i+')').css("background-color","red");
					else
						//$('.v:eq('+i+')').text('');
						$('.v:eq('+i+')').css("background-color","white");
	}
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
