
      
function Start(){
    setTimeout(generateTable,1000,1, 1, '.O');
    setTimeout(numarator,1000,1, '.numar');
    setTimeout(numarator,1000,1, '.numitor');
    setTimeout(generateTable,4000,5, 5, '.O');
    setTimeout(numarator,4000,5, '.numar');
    setTimeout(numarator,4000,5, '.numitor');
    setTimeout(generateTable,7000,5, 4, '.O');
    setTimeout(numarator,7000,4, '.numar');
    setTimeout(numarator,7000,5, '.numitor');
    setTimeout(generateTable,10000,5, 3, '.O');
    setTimeout(numarator,10000,3, '.numar');
    setTimeout(numarator,10000,5, '.numitor');
    setTimeout(generateTable,13000,5, 2, '.O');
    setTimeout(numarator,13000,2, '.numar');
    setTimeout(numarator,13000,5, '.numitor');
    setTimeout(generateTable,16000,5, 1, '.O');
    setTimeout(numarator,16000,1, '.numar');
    setTimeout(numarator,16000,5, '.numitor');
    // setTimeout('backfromtoturial()',18000);
}
$(document).ready(function(){
Start();
      $('.numitornumarator1').hide().delay(1000).fadeIn(1000);
      
      $('.numitornumarator1').hide().delay(3000).fadeOut(0);
     
      $('.numitornumarator2').hide().delay(4000).fadeIn(1000);
      $('.numarator').click(function()
      {
        var curr_font_size = $('.numarator').css('font-size');
        var curr_top = $('.numarator').css('top');
        var curr_height = $('.guide').css('height');
        var new_font_size = parseFloat(curr_font_size) + 10;
        var new_top = parseFloat(curr_top) + 100;
        var new_height = parseFloat(curr_height) + 100;
        $('.numarator').animate({fontSize: new_font_size,top: new_top, width: new_height}, 1000);
        $('.guide').animate({height: new_height}, 1000);
        
      });
}); 

function generateTable(total_rows, colored_rows, selector){
  total_rows = total_rows || 1;
  colored_rows = colored_rows || 1;
  selector = selector || "body";
  var $table = $('<table>');
  for (var i = 0; i < total_rows; i++) {
    var $tr = $('<tr>');
    var $td = $('<td>');
    $('table tr td').css('width : 200px');
    $tr.append($td);
    $table.append($tr);
    $td.text(' ');
    $td.css('background-color', 'white');
    if (colored_rows > 0) {
      $td.css('background-color', 'orange');
      colored_rows--;
    }
  }
  $(selector).empty();
  $(selector).append($table);
}

function numarator(numarator,selector){
numarator = numarator;
var $p = $('<p>');
$p.text(numarator);
$(selector).empty();
$(selector).append($p);
}
      
function numitor(numitor,selector){
numitor = numitor;
var $p = $('<p>');
$p.text(numitor);
$(selector).empty();
$(selector).append($p);
}
function backfromtoturial(){
window.location="../home/start.html";
}