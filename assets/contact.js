var messages = [];
var dates = [];
// for more permanent do localStorage
if (sessionStorage.messages) {
    messages = JSON.parse(sessionStorage.getItem("messages"));
} else {
    sessionStorage.setItem("messages", JSON.stringify(messages));
}
// for the corresponding timestamps
if (sessionStorage.dates) {
    dates = JSON.parse(sessionStorage.getItem("dates"));
} else {
    sessionStorage.setItem("dates", JSON.stringify(dates));
}
function newMessage() {
  message = $(".message-input input").val();
  if($.trim(message) == '') {
    return false;
  }
  messages.push(message);
  var d = new Date();
  dates.push(d.toLocaleString("en-US"));
  sessionStorage.setItem("messages", JSON.stringify(messages));
  sessionStorage.setItem("dates", JSON.stringify(dates));

  $('<li class="sent"><p>' + message + '</p></li>').appendTo($('.messages ul'));
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

