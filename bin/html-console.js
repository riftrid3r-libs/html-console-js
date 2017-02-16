/*
 
/    __| |   _   | |   \|   |
HTML|    |  | |  | |        |
\______| |_______| |___|\___|
S       O         L         E.js
Author: riftrid3r
Description: console output in jsfiddle.
Copyright: Drew Billings
use: You must include this header. 
doc: css: .cline{}
     html: <div id="clog"></div>
     
*/
function htmlConsole(){
  var resultPage = "<div class=\"wrapper\"><div class=\"console-tabs\"><span id=\"consoleButton\" class=\"tab selected\">Console</span><span id=\"hButton\" class=\"tab\">Render</span></div><div id=\"clog\" class=\"console-page\"></div></div>";
  $('body').prepend( resultPage )


  $("#consoleButton").click(function() {
    $("#clog").addClass("display-block").removeClass("display-none");
    $("#consoleButton").addClass("selected");
    $("#hPage").addClass("display-none").removeClass("display-block");
    $("#hButton").removeClass("selected");
    $(".wrapper-shrink").addClass("wrapper").removeClass("wrapper-shrink")
  });

  $("#hButton").click(function() {
    $("#clog").addClass("display-none").removeClass("display-block");
    $("#consoleButton").removeClass("selected");
    $("#hButton").addClass("selected");
    $(".wrapper").addClass("wrapper-shrink").removeClass("wrapper");
  });
  consoleLine = "<p class=\"cline\"> </p>";
  console = {
    log: function(text) {
      $("#clog").append($(consoleLine).html("J$ " + text));
    }
  };

  
  console.log("HTMLConsole.js by riftrid3r");	
};



