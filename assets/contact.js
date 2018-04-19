function newMessage() {
  message = $(".message-input input").val();
  if($.trim(message) == '') {
    return false;
  }

  $('<li class="sent"><img src="images/grayson.jpg" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
  $('.message-input input').val(null);
  $('.contact.active .preview').html('<span>You: </span>' + message);
  $(".messages").animate({ scrollTop: $(document).height() }, "fast");
};

$( document ).ready(function() {
  $('.input').focus();
    $('.submit').click(function() {
      console.log("hi");
      newMessage();
    });

    $(window).on('keydown', function(e) {
      if (e.which == 13) {
        console.log("keydown");
        newMessage();
        return false;
      }
    });
});

