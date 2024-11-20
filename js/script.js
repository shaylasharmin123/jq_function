


//jquery
$(document).ready(function(){

  alert("wellcome");

//show alert
  $('#alert1').on('click', function(){

    alert("welcome to my page");
    
  });

  //exmple 3:show /hide
   $('#btn_1').on('click', function(){

    $('h3').show();

  });
  $('#btn_2').on('click' , function(){

    $('h3').hide();

  });
  $('#btn_3').on('click' , function(){

    $('h3').toggle();

  });
  //exmple 4:fade in /fade out
   $('#btn_4').on('click', function(){

    $('h4').fadeIn();

  });
  $('#btn_5').on('click' , function(){

    $('h4').fadeOut();

  });
  $('#btn_6').on('click' , function(){

    $('h4').fadeToggle("slow");

  });
  //exmple 5:fade in /fade out
   $('#btn_7').on('dblclick', function(){

    $('h5').fadeIn();

  });
  $('#btn_8').on('dblclick' , function(){

    $('h5').fadeOut();

  });
  $('#btn_9').on('dblclick' , function(){
    $('h5').fadeToggle("slow");

  });
   //exmple 6:fade in /fade out
   $('#btn_10').on('mouseover', function(){

    $('h6').fadeIn();

  });
  $('#btn_11').on('mouseover' , function(){

    $('h6').fadeOut();

  });
  $('#btn_12').on('mouseover' , function(){
    $('h6').fadeToggle("slow");

  });

  //exmple 7:slide up /down
    $("#s1").on('click' , function(){

    $("#s2").slideUp("slow");

  });
  //exmple 8:slide up /down  
    $("#s3").on('click' , function(){

    $("#s4").slideDown("slow");

  });
    //exmple 9:slide up /down  
    $("#s5").on('click' , function(){

    $("#s6").slideToggle("slow");
  });   
//exmple 10:after  
    $("#btn_13").on('click' , function(){
    $("#p1").after("<p>Hello world!</p>");
    $("#p2").after("<p>Hello world!</p>");
  });
//exmple 11:animation  
    $("#btn_14").click(function(){
    $(".box").animate({left: '450px'});
  });

//example 12: stop()
    $("#st1").on('click' , function(){
    $("#st2").slideDown(5000);
  });
  $("#btn_15").on('click' , function(){
    $("#st2").stop();
  });
 //example 13: hide() 
 $("#btn_16").on('click' , function(){
    $("#p3").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
 //example 14: chaining 
 $("#btn_17").on('click' , function(){
    $("#p4").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });
//example 15: attr() method 
$("#btn_18").on('click' , function(){
    alert($("#w3s").attr("href"));
  });
//example 16: set() method 
 $("#btn_19").on('click' , function(){
    $("#p5").text("Hello world!");
  });
  $("#btn_20").on('click' , function(){
    $("#p6").html("<b>Hello world!</b>");
  });
  $("#btn_21").on('click' , function(){
    $("#p7").val("Dolly Duck");
  });
//example 17: append() method 
$("#btn_22").on('click' , function(){
    $("#p8").append(" <b>Appended text</b>");
    
  });
  $("#btn_23").on('click' , function(){
    $("#ol1").append("<li>Appended item</li>");
  });  
//example 18: prepend() method 
$("#btn_24").on('click' , function(){
    $("#p9").prepend("<b>Prepended text</b>. ");
  });
  $("#btn_25").on('click' , function(){
    $("#ol2").prepend("<li>Prepended item</li>");
  });
// example 19: remove() method 
$("#btn_26").on('click' , function(){
    $("#div1").remove();
  });
// example 20: enpty() method 
$("#btn_27").on('click' , function(){
    $("#div2").empty();
});
// example 21: addClass() method 
$("#btn_28").on('click' , function(){
    $("#head1, #head2, #p10").addClass("blue");
    $("#div3").addClass("important");
  });
// example 22: addClass() method 
$("#btn_29").click(function(){
    $("#head3").addClass("red");
  });
// example 23: removeClass() method 
$("#btn_30").on('click' , function(){
    $(".r1, .r2, .r3").removeClass("green");
  });
// example 24: removeClass() method 
$("#btn_31").on('click' , function(){
    $("#p11").toggleClass("yellow");
  });
// example 25: removeClass() method 
$("#btn_32").on('click' , function(){
    $("#p12").toggleClass("pink");
  });
// example 26:css() Method 
$("#btn_33").on('click' , function(){
    alert("Background color = " + $("#p13").css("background-color"));
  });
// example 27:css() Method 
$("#btn_34").on('click' , function(){
    $("#p14").css("background-color", "yellow");
  });

// example 28:css() Method 
$("#btn_35").on('click' , function(){
    $("#p15").css({"background-color": "yellow", "font-size": "200%"});
  });
// example 29:dimension() Method
$("#btn_36").on('click' , function(){
    var txt = "";
    txt += "Width of div: " + $("#div4").width() + "</br>";
    txt += "Height of div: " + $("#div4").height();
    $("#div4").html(txt);
  });
// example 30:dimension() Method
$("#btn_37").on('click' , function(){
    var txt = "";
    txt += "Width of div: " + $("#div5").width() + "</br>";
    txt += "Height of div: " + $("#div5").height() + "</br>";
    txt += "Inner width of div: " + $("#div5").innerWidth() + "</br>";
    txt += "Inner height of div: " + $("#div5").innerHeight();
    $("#div5").html(txt);
  });
// example 31:dimension() Method
$("#btn_38").hover(function(){
    $("#div6").width(400).height(400);
  });
// example 32:dimension() Method
$("#btn_39").on('dblclick' , function(){
    $("#div7").width(300).height(300);
  });
// example 33:event() Method
 $("#p16").on('click' , function(){
    $("#p16").hide();
});
 $("#p17").on('click' , function(){
    $("#p17").hide();
});
// example 34:event() Method
 $("#p18").on('dblclick' , function(){
    $("#p18").hide();
});
 $("#p19").on('dblclick' , function(){
    $("#p19").hide();
});
// example 35:mouseenter() Method
$("#p20").mouseenter(function(){
    alert("You entered p20!");
 });

// example 36:mouseleave() Method
$("#p21").mouseleave(function(){
    alert("Bye! You now leave p21 and you are awesome!!!!");
 });
// example 37:mousedown() Method
$("#p22").mousedown(function(){
    alert("Mouse down over p22!");
  });
// example 38:mousedown() Method
$("#p23").mouseup(function(){
    alert("Mouse up over p23!");
  });
// example 39:focus() Method
$("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
// example 40:hide(), show() Method
  $("#btn_40").on('click' , function(){
    $("#p24").hide();
  });
  $("#btn_41").on('click' , function(){
    $("#p24").show();
  });
// example 41:hide() Method
$("#btn_42").on('click' , function(){
    $("#p25").hide(1000);
  });
$("#btn_42").on('click' , function(){
    $("#p26").hide(1000);
  });
// example 42:toggle() Method
$("#btn_43").on('click' , function(){
    $("#p27").toggle(1000);
  });
$("#btn_43").on('click' , function(){
    $("#p28").toggle(1000);
  });
// example 43:fadeOut() Method
$("#btn_44").on('click' , function(){
    $("#div8").fadeOut();
    $("#div9").fadeOut("slow");
    $("#div10").fadeOut(3000);
  });
// example 44:fadetoggle() Method
 $("#btn_45").on('click' , function(){
    $("#div11").fadeToggle();
    $("#div12").fadeToggle("slow");
    $("#div13").fadeToggle(3000);
  });
// example 45:fadeto() Method
$("#btn_46").on('click' , function(){
    $("#div14").fadeTo("slow", 0.15);
    $("#div15").fadeTo("slow", 0.4);
    $("#div16").fadeTo("slow", 0.7);
  });
// example 46:Animation() Method
 $("#btn_47").on('click' , function(){
    $("#div17").animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });
// example 47:Animation() Method
$("#btn_48").on('click' , function(){
    $("#div18").animate({
      height: 'toggle'
    });
  });
// example 48:Animation() Method
 $("#btn_49").on('click' , function(){
    var div19 = $("#div19");  
    div19.animate({right: '100px'}, "slow");
    div19.animate({fontSize: '3em'}, "slow");
  });
// example 49:callback() Method
$("#btn_50").on('click' , function(){
    $("#p35").hide(1000);
    alert("The paragraph is now hidden");
  });

// example 50:chaining() Method
$("#btn_51").on('click' , function(){
    $("#p36").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });


});



