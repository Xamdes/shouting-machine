function prependList(stringOne,where,type){
  var returnString = "";
  returnString = returnString.concat("<", type, ">", stringOne, "</", type, ">");
  $(where).prepend(returnString);
}

$(function(){

  $("#formOne").submit(function(event) {
    var userInput = $("input#user").val();
    var webPageOutput = userInput.toUpperCase();
    prependList(userInput,"ul#user","li");
    prependList(webPageOutput,"ul#shout-machine","li");
    event.preventDefault();
  });

});
