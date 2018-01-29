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
