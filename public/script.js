console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  getAllTodos()
  // add rest of code here

});

function getAllTodos() {
  $('.list-group').html('')
  $.ajax({
    // add your code here
  }).done(function(data) {
    for( let i=0; i<data.todos.length; i++){
      let itemId = data.todos[i].id
      $('.list-group').append(
        // add rest of code here
      )}
  });
};

function handleTodosDeleteResponse(args) {
  // manip that DOM
}

function handleTodosUpdateResponse(args) {
  // manip that DOM
}
