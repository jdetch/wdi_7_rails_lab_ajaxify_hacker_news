$(document).ready(function(){

  $('#new_comment').on('submit', commentSubmitted);

});

var commentSubmitted = function(event){
    //alert('I am here'); //do this first to make sure function is being called

    // New article form
    var form = $(event.target);
    var commentBody = $('#comment_body');
      // Get the form action- this creates the ajax url
      var action = form.attr('action');
      var requestObj = {comment:  {body: commentBody.val()} };

    commentBody.val('');

    event.preventDefault();

  $.ajax({
    url: action,
    type: 'POST',
    dataType: 'json',
    data: requestObj,
  })
  .done(function() {
    alert("success");
  })
  .fail(function() {
    console.log("error");
  });
};
