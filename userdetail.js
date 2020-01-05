$(document).ready(function(){
$('#name').focusout(function(){
  check_name();
});
$('#nickname').focusout(function(){
  check_nick();
});
$('#fathername').focusout(function(){
  check_father_name();
});
$('#mothername').focusout(function(){
  check_mother_name();
});
$('#mob').focusout(function(){
  check_mobile();
});
$('#address').focusout(function(){
  check_add();
});
$('#acter').focusout(function(){
  check_acter_name();
});
$('#food').focusout(function(){
  check_food_name();
});
$('#song').focusout(function(){
  check_song_name();
});
$('#movie').focusout(function(){
  check_movie_name();
});
$('#hobbie').focusout(function(){
  check_hobbie();
});
$('#friend').focusout(function(){
  check_friend_name();
});
$('#teacher').focusout(function(){
  check_teacher_name();
});
$('#dream').focusout(function(){
  check_dream_name();
});
$('#serial').focusout(function(){
  check_serial_name();
});
$('#game').focusout(function(){
  check_game();
});
$('#us').focusout(function(){
  check_us_name();
});
$('#col').focusout(function(){
  check_col();
});
function check_name(){
  var check_name=$('#name').val();
  if(check_name<4&&check_name==""){
    $('#err_name').show();
    $('#name').css("border-color","red");
    $('#err_name').css("color","red");
    $('#err_name').html("**please enter the name**");
    return true;
  }
  else{
    $('#err_name').hide();
      $('#name').css("border-color","blue");
      return false;
  }
}
function check_nick(){
  var check_name=$('#nickname').val();
  if(check_name<4&&check_name==""){
    $('#err_nick_name').show();
    $('#nickname').css("border-color","red");
    $('#err_nick_name').css("color","red");
    $('#err_nick_name').html("**please enter the nickname**");
    return true;
  }
  else{
    $('#err_nick_name').hide();
      $('#nickname').css("border-color","blue");
      return false;
  }
}
function check_father_name(){
  var check_name=$('#fathername').val();
  if(check_name==""){
    $('#err_father_name').show();
    $('#fathername').css("border-color","red");
    $('#err_father_name').css("color","red");
    $('#err_father_name').html("**please enter the mother name**");
    return true;
  }
  else{
    $('#err_father_name').hide();
      $('#fathername').css("border-color","blue");
      return false;
  }
}
function check_mother_name(){
  var check_name=$('#mothername').val();
  if(check_name==""){
    $('#err_mother_name').show();
    $('#mothername').css("border-color","red");
    $('#err_mother_name').css("color","red");
    $('#err_mother_name').html("**please enter the mother name**");
    return true;
  }
  else{
    $('#err_mother_name').hide();
      $('#mothername').css("border-color","blue");
      return false;
  }
}
function check_mobile(){
  var check_name=$('#mob').val().length;
  if(check_name<10 ||check_name>10){
    $('#err_mobile').show();
    $('#mob').css("border-color","red");
    $('#err_mobile').css("color","red");
    $('#err_mobile').html("**please enter the valid mobile number**");
    return true;
  }
  else{
    $('#err_mobile').hide();
      $('#mob').css("border-color","blue");
      return false;
  }
}
function check_add(){
  var check_name=$('#address').val();
  if(check_name<18){
    $('#err_address').show();
    $('#address').css("border-color","red");
    $('#err_address').css("color","red");
    $('#err_address').html("**please enter your address between greater than 8 char**");
    return true;
  }
  else{
    $('#err_address').hide();
      $('#address').css("border-color","blue");
      return false;
  }
}
function check_acter_name(){
  var check_name=$('#acter').val();
  if(check_name==""){
    $('#err_acter').show();
    $('#acter').css("border-color","red");
    $('#err_acter').css("color","red");
    $('#err_acter').html("**please enter the food name**");
    return true;
  }
  else{
    $('#err_acter').hide();
      $('#acter').css("border-color","blue");
      return false;
  }
}
function check_food_name(){
  var check_name=$('#food').val();
  if(check_name==""){
    $('#err_food').show();
    $('#food').css("border-color","red");
    $('#err_food').css("color","red");
    $('#err_food').html("**please enter the food name**");
    return true;
  }
  else{
    $('#err_food').hide();
      $('#food').css("border-color","blue");
      return false;
  }
}
function check_song_name(){
  var check_name=$('#song').val();
  if(check_name==""){
    $('#err_song').show();
    $('#song').css("border-color","red");
    $('#err_song').css("color","red");
    $('#err_song').html("**please enter the song name**");
    return true;
  }
  else{
    $('#err_song').hide();
      $('#song').css("border-color","blue");
      return false;
  }
}
function check_movie_name(){
  var check_name=$('#movie').val();
  if(check_name==""){
    $('#err_movie').show();
    $('#movie').css("border-color","red");
    $('#err_movie').css("color","red");
    $('#err_movie').html("**please enter the movie name **");
    return true;
  }
  else{
    $('#err_movie').hide();
      $('#movie').css("border-color","blue");
      return false;
  }
}
function check_hobbie(){
  var check_name=$('#hobbie').val();
  if(check_name==""){
    $('#err_hobbie').show();
    $('#hobbie').css("border-color","red");
    $('#err_hobbie').css("color","red");
    $('#err_hobbie').html("**please enter your hobbie**");
    return true;
  }
  else{
    $('#err_hobbie').hide();
      $('#hobbie').css("border-color","blue");
      return false;
  }
}
function check_friend_name(){
  var check_name=$('#friend').val();
  if(check_name==""){
    $('#err_friend').show();
    $('#friend').css("border-color","red");
    $('#err_friend').css("color","red");
    $('#err_friend').html("**please enter your teacher name**");
    return true;
  }
  else{
    $('#err_friend').hide();
      $('#friend').css("border-color","blue");
      return false;
  }
}
function check_teacher_name(){
  var check_name=$('#teacher').val();
  if(check_name==""){
    $('#err_teacher').show();
    $('#teacher').css("border-color","red");
    $('#err_teacher').css("color","red");
    $('#err_teacher').html("**please enter your teacher name**");
    return true;
  }
  else{
    $('#err_teacher').hide();
      $('#teacher').css("border-color","blue");
      return false;
  }
}
function check_dream_name(){
  var check_name=$('#dream').val();
  if(check_name==""){
    $('#err_dream').show();
    $('#dream').css("border-color","red");
    $('#err_dream').css("color","red");
    $('#err_dream').html("**please enter your dream**");
    return true;
  }
  else{
    $('#err_dream').hide();
      $('#dream').css("border-color","blue");
      return false;
  }
}
function check_serial_name(){
  var check_name=$('#serial').val();
  if(check_name==""){
    $('#err_serial').show();
    $('#serial').css("border-color","red");
    $('#err_serial').css("color","red");
    $('#err_serial').html("**please enter your favourite serial name*");
    return true;
  }
  else{
    $('#err_serial').hide();
      $('#serial').css("border-color","blue");
      return false;
  }
}
function check_game(){
  var check_name=$('#game').val();
  if(check_name==""){
    $('#err_game').show();
    $('#game').css("border-color","red");
    $('#err_game').css("color","red");
    $('#err_game').html("**please enter your hobbie**");
    return true;
  }
  else{
    $('#err_game').hide();
      $('#game').css("border-color","blue");
      return false;
  }
}
function check_us_name(){
  var check_name=$('#us').val();
  if(check_name==""){
    $('#err_us').show();
    $('#us').css("border-color","red");
    $('#err_us').css("color","red");
    $('#err_us').html("**please enter what you think about us**");
    return true;
  }
  else{
    $('#err_us').hide();
      $('#us').css("border-color","blue");
      return false;
  }
}
function check_col(){
  var check_name=$('#col').val();
  if(check_name==""){
    $('#err_col').show();
    $('#col').css("border-color","red");
    $('#err_col').css("color","red");
    $('#err_col').html("**please enter your college EXPERIENCE**");
    return true;
  }
  else{
    $('#err_col').hide();
      $('#col').css("border-color","blue");
      return false;
  }
}
$('#save').submit(function(){
  var login_user_name_err= check_name();
  var login_password_err= check_nick();
  var fathername_err=check_father_name();
  var mother_name_err=check_mother_name();
  var mobile_err=check_mobile();
  var add_err=check_add();
  var acter_err1=check_acter_name();
  var food_err1=check_food_name();
  var song_err1=check_song_name();
  var movie_err=check_movie_name();
  var hobbie_err=check_hobbie();
  var friend_err=check_friend_name();
  var teacher_err=check_teacher_name();
  var dream_err=check_dream_name();
  var serial_err=check_serial_name();
  var game_err=check_game();
  var us_err=check_us_name();
  var col_err=check_col();
  if(login_user_name_err==false && login_password_err==false&&fathername_err==false&&mother_name_err==false&&mobile_err==false
  &&add_err==false&&acter_err1==false&&food_err1==false&&song_err1==false&&movie_err==false&&hobbie_err==false&&friend_err==false
  &&teacher_error==false&&dream_err==false&&serial_err==false&&game_err==false&&us_err==false&&col_err==false){
    return true;
  }
  else{
    return false;
  }
});
});
