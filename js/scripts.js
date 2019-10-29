$(document).ready(function(){
  $(".wordPuzzle").submit(function() {
    event.preventDefault();
    var wordInputed = $(".wordInput").val().split("");
    var vowels= ["a","e","i","o","u","A","E","I","O","U"];

    for (i = 0; i < wordInputed.length; i ++){
      if(vowels.includes(wordInputed[i]))
      {
        wordInputed[i] = '-';
      }
    }
    $("#print").append(wordInputed);
  });
});
