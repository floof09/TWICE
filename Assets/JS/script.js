$(document).ready(function() {
    $("#biasForm").submit(function(event) {
      event.preventDefault();
      var formData = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: $("#email").val(),
        bias: $("#bias").val(),
        album: $("#album").val()
      };
  
      // Assign permanent prices
      var memberPhotoCardPrice = 200; // Fixed price for the member photo card
      var albumPrice = 800; // Fixed price for the album
  
      // Calculate total price
      var totalPrice = memberPhotoCardPrice + albumPrice;
  
      // Simulate backend processing
      setTimeout(function() {
        var response = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          bias: formData.bias,
          album: formData.album,
          memberPhotoCardPrice: memberPhotoCardPrice,
          albumPrice: albumPrice,
          totalPrice: totalPrice
        };
        displayResponse(response);
      }, 1000); // Simulating a delay of 1 second
    });
  
    function displayResponse(response) {
      $("#output").html("<p>Thank you, " + response.firstName + " " + response.lastName + "!</p>" +
                        "<p>You chose " + response.bias + " as your bias and the album \"" + response.album + "\".</p>" +
                        "<p>The price for the member photo card is: PHP " + response.memberPhotoCardPrice + "</p>" +
                        "<p>The price for the album is: PHP " + response.albumPrice + "</p>" +
                        "<p>Total Price: PHP " + response.totalPrice + "</p>" +
                        "<p>We will contact you at " + response.email + " for further details.</p>");
    }
  });
  