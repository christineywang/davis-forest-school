function postToGoogle(evt) {
  evt.preventDefault();

  var data = $(this).serializeArray().reduce(function (accumulator, currentItem) {
      accumulator[currentItem.name] = currentItem.value;
      return accumulator;
    }, {});

  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf4OjkRoPI65HCiQ3Vdi6VdKCni6kDbojDNhP0jbWs0w4r7gA/formResponse?embedded=true",
    data: data,
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function() {
        //Success message
      },
      200: function() {
        //Success Message
      }
    }
  });
}

$(function () {
  $("#googleForm").submit(postToGoogle);
});

function clickButton() {
  $("form#googleForm").css("display", "none");
  $(".card-body div p").text("Thank you!");
}

//try {
  //eval('alert("Hello world)');
//}
//catch(error) {
  //console.log(error);
  // expected output: SyntaxError: unterminated string literal
  // Note - error messages will vary depending on browser
//}

// help the site show up in Google searches
// add meta tags
// open graph tags
// Come up with text description for the website
