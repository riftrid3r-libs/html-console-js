/*
 
/    __| |   _   | |   \|   |
HTML|    |  | |  | |        |
\______| |_______| |___|\___|
S       O         L         E.js
Author: Drew Billings
Description: console output in jsfiddle.
Copyright: Drew Billings
use: You must include this header.
depends: jquery
doc: css: .cline{}
     html: <div id="clog"></div>
*/

var consoleLine = "<p class=\"cline\"></p>";

console = {
  log: function(text) {
    $("#clog").append($(consoleLine).html(text));
  }
};

