
      
function Start(){
    setTimeout(generateTable1,1000,3, 1, '.O1');
    setTimeout(generateTable1,1000,4, 2, '.O2');
    setTimeout(generateTable2,1000,3, 1, '.O3');
    setTimeout(generateTable2,1000,4, 2, '.O4');
    setTimeout(invizbortab,1000,3,4,'.O5');
    setTimeout(Rotate,1000,'.O5');
    setTimeout(invizbortab,1000,3,4,'.O6');
    setTimeout(Rotate,1000,'.O6');
    rotateTable1(2500,'.O2');
    rotateTable1(2500,'.O4');
    setTimeout(moveTableVert,4000,3000,400,'.O4');
    setTimeout(moveTableOriz,7000,3000,500,'.O3');
    setTimeout(moveTableOriz,10000,3000,300,'.O4');
    setTimeout(moveTableVert,13000,3000,200,'.O4');
    setTimeout(Coloane,16000,3,4,'.O4');
    setTimeout(Rotate,16000,'.O4');
    setTimeout(Coloane,16000,3,4,'.O3');
    for(var i = 0;i<12;i++){
      setTimeout(Tab5inviz,18000+i*1000,3,4,'.O5');
      setTimeout(Tab6inviz,18000+i*1000,3,4,'.O6'); 
      setTimeout(numerotare,18000+i*1000,0,i+1);
      setTimeout(numerotare2,18000+i*1000,0,i+1);
      setTimeout(numitor,18000+i*1000,i+1,'.numitor');
    }
    $('.O5').empty()
    $('.O6').empty()
    for(var i = 8;i<12;i++){
      setTimeout(Tab5inviz,32000+(i-8)*1000,3,4,'.O5');
      setTimeout(Tab6inviz,32000+(i-8)*1000,3,4,'.O6');  
      setTimeout(numerotare,32000+(i-8)*1000,8,i+1);
      setTimeout(numarator,32000+(i-8)*1000,i-7,'.numarator');
    }

 for(var i = 5;i<11;i++){
      setTimeout(Tab6inviz,36000+(i-5)*1000,3,4,'.O6'); 
      setTimeout(numerotare3,36000+(i-5)*1000,i);
      setTimeout(numarator,36000+(i-5)*1000,i,'.numarator');
    }

    setTimeout('backfromtoturial()',44000);

    
    
    // setTimeout('backfromtoturial()',18000);
}
$(document).ready(function(){
  Start();
   // $('.O2').delay(10000).transition({ rotate: '90deg' });

      // $('.O3').animate({top:400}, 5000);
      // // $('.numitornumarator1').hide().delay(1000).fadeIn(1000);
      
      // // $('.numitornumarator1').hide().delay(3000).fadeOut(0);
     
      // // $('.numitornumarator2').hide().delay(4000).fadeIn(1000);
      
      // // $('.guide').animate({height: new_height}, 1000);
        
      });

function generateTable1(total_rows, colored_rows, selector){
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

function generateTable2(total_rows, colored_rows, selector){
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
    $td.css('background-color', 'none');
    if (colored_rows > 0) {
      $td.css('background-color', 'none');
      colored_rows--;
    }
  }
  $(selector).empty();
  $(selector).append($table);
}


function numarator(numarator,selector){
var $p = $('<p>');
$p.text(numarator);
$(selector).empty();
$(selector).append($p);
}
      
function numitor(numitor,selector){
var $p = $('<p>');
$p.text(numitor);
$(selector).empty();
$(selector).append($p);
}

function backfromtoturial(){
window.location="../home/start.html";
}

function rotateTable1(delay,selector){
$(selector).delay(delay).transition({ rotate: '90deg' });
}

function moveTableOriz(time,leftpx,selector){
$(selector).animate({left:leftpx}, time);
}

function moveTableVert(time,toppx,selector){
$(selector).animate({top:toppx}, time);
}

function Coloane(rows,cols,selector){
    var $table = $('<table>')
    for (var i = 0; i < rows; i++) {
      var $tr = $('<tr>');
      for(var j = 0; j < cols; j++){
      var $td = $('<td>');
      $td.css('background-color', 'none');
      $td.addClass('e');
      $tr.append($td);
      }
      $table.append($tr);
    }
    $(selector).empty()
    $(selector).append($table);   
  }

function Tab5inviz(rows,cols,selector){
    var $table = $('<table>')
    for (var i = 0; i < rows; i++) {
      var $tr = $('<tr>');
      for(var j = 0; j < cols; j++){
      var $td = $('<td>');
      $td.css('background-color', 'none');
      $td.addClass('m');
      $td.css('border','3px solid transparent');
      $tr.append($td);
      }
      $table.append($tr);
    }

    $(selector).empty();
    $(selector).append($table);   
  }

function Tab6inviz(rows,cols,selector){
    var $table = $('<table>')
    for (var i = 0; i < rows; i++) {
      var $tr = $('<tr>');
      for(var j = 0; j < cols; j++){
      var $td = $('<td>');
      $td.css('background-color', 'none');
      $td.addClass('q');
      $td.css('border','3px solid transparent');
      $tr.append($td);
      }
      $table.append($tr);
    }

    $(selector).empty()
    $(selector).append($table);   
  }

function invizbortab(rows,cols,selector){
    var $table = $('<table>')
    for (var i = 0; i < rows; i++) {
      var $tr = $('<tr>');
      for(var j = 0; j < cols; j++){
      var $td = $('<td>');
      $td.css('background-color', 'none');
      $td.addClass('m');
      $td.css('border','3px solid transparent');
      $tr.append($td);
      }
      $table.append($tr);
    }

    $(selector).empty()
    $(selector).append($table);   
  }  

  function numerotare(j,i){
  var z=1;
  for(var index=j;index<i;index++,z++)
  $('.m:eq(' + index + ')').text(z);
  }

  function numerotare2(j,i){
  var z=1;
  for(var index=j;index<i;index++,z++)
  $('.q:eq(' + index + ')').text(z);
  }

  function Rotate(selector){
  $(selector).css( 'transform', 'rotate(0deg)' );
  }


  function numerotare3(index){
    var indexcell = 2;
    for(var p=5;p<=index;p++){
    $('.q:eq(' + indexcell + ')').text(p);
    if(p%2!=0)
    {
      indexcell+=1;
    }else
    {
      indexcell+=3;
    }
    }

  }

function backfromtoturial(){
window.location="../lvl3_adunare.html";
}