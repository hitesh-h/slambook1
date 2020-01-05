$(document).ready(function(){
  $('#err1').hide();
  $('#err2').hide();
$("#error1").hide();
$("#error2").hide();
$('#sign_text').focusout(function(){

      check_username1();
});
  $('#sign_pass').focusout(function(){
  check_password2();

  });
  $('#usertext').focusout(function(){
    check_username();

  });
  $('#userpass').focusout(function(){
    check_password();
  });
  function check_username1(){
    var usr=$('#sign_text').val().length;
    if(usr<8){
        $('#error1').show();
        $('#sign_text').css("border-color","red");
        $('#error1').css("color","red");
        $('#error1').html("**please enter the username **");
        return true;
    }
    else{
      $('#error1').hide();
        $('#sign_text').css("border-color","blue");
        return false;
    }
  }
  function check_password2(){
      var usr=$('#sign_pass').val().length;
      if(usr<8){
          $('#error2').show();
          $('#sign_pass').css("border-color","red");
          $('#error2').css("color","red");
          $('#error2').html("**please enter the pasword ");
          return true;
      }
      else{
        $('#error2').hide();
          $('#sign_pass').css("border-color","blue");
          return false;
      }
  }
  function check_username(){
    var usr=$('#usertext').val().length;
    if(usr<8){
        $('#err1').show();
        $('#usertext').css("border-color","red");
        $('#err1').css("color","red");
        $('#err1').html("**please enter the username between greater than 8 or less than 20**");
        return true;
    }
    else{
      $('#err1').hide();
        $('#usertext').css("border-color","blue");
        return false;
    }
  }
  function check_password(){
      var usr=$('#userpass').val().length;
      if(usr<8){
          $('#err2').show();
          $('#userpass').css("border-color","red");
          $('#err2').css("color","red");
          $('#err2').html("**please enter the pasword between greater than 8 or less than 20**");
          return true;
      }
      else{
        $('#err2').hide();
          $('#userpass').css("border-color","blue");
          return false;
      }
  }
  $('#form_submit').submit(function(){
    var login_user_name_err= check_username();
    var login_password_err= check_password();
    if(login_user_name_err==false && login_password_err==false){
      return true;
    }
    else{
      return false;
    }
  });
  $('#sign_submit').submit(function(){
    var login_user_name_err= check_username1();
    var login_password_err= check_password2();
    if(login_user_name_err==false && login_password_err==false){
      return true;
    }
    else{
      return false;
    }
  });
$("#button7").click(function(){
  $("#img4").css("display","none");
  $("#img1").css("display","block");
});
$("#button8").click(function(){
  $("#img4").css("display","none");
  $("#img3").css("display","block");
});
$("#button5").click(function(){
  $("#img3").css("display","none");
  $("#img4").css("display","block");
});
$("#button6").click(function(){
  $("#img3").css("display","none");
  $("#img2").css("display","block");
});
$("#button3").click(function(){
  $("#img2").css("display","none");
  $("#img3").css("display","block");
});
$("#button4").click(function(){
  $("#img2").css("display","none");
  $("#img1").css("display","block");
});
$("#button2").click(function(){
  $("#img1").css("display","none");
  $("#img4").css("display","block");
});
$("#button1").click(function(){
  $("#img1").css("display","none");
  $("#img2").css("display","block");
});
$("#signin").click(function(){
  $("#loginn").css("display","none");
  $("#signinn").css("display","block");
});
});
