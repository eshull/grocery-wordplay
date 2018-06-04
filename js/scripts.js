$(function(){

  $("#list").submit(function(event) {
    event.preventDefault();

    var items = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix", "itemSeven", "itemEight"]

    items.forEach(function(item){
      var userInput = $("input#" + item).val();
      $("ul").append("<li>" + userInput + "</li>");
    });

    $("#list").toggle();
    $(".shopping-list").toggle();

  });
});
