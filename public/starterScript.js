console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  getAllTodos();

  // becasue the delete-btn is added dynamically
  // the click handler needs to be written like such, bound to the document
  $(document).on('click', '.delete-btn', function() {
    var id = $(this).data('itemid');
    $.ajax({
      method: "DELETE",
      url: '/ajax/delete/:id',
      data: data,
      success: handleTodosDeleteResponse()
    });
  });

  $("#new-todo-form").submit(function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    $("#new-todo-form").trigger("reset");
    $.ajax({
      method: "POST",
      url: '/ajax/add/',
      data: data,
      success: handleTodoAddResponse()
    })
  });

  $(document).on('click', '.complete-btn', function() {
    var id = $(this).data('itemid');
    $.ajax({
      // add code here

    });
  });

  $(document).on('click', '.edit-btn', function() {
    var id = $(this).data("itemid")
    // hide the static item, show the input field
    $('.item-'+id).hide()
    $('.input-'+id).show()

    // hide the edit button, show the save button
    $('.edit-'+id).hide()
    $('.save-'+id).show()

  });

  $(document).on('click', '.save-btn', function() {
    var id = $(this).data("itemid")
    var updatedItem = $('.input-'+id+' input').val()

    $.ajax({
      // add your code here
    })
  });

});

function getAllTodos() {
  $('.list-group').html('')
  $.ajax({
    // add your code here

  }).done(function(data) {
    for( let i=0; i<data.todos.length; i++){
      let itemId = data.todos[i].id
      $('.list-group').append('<div style="background-color: ghostwhite;" class="list-group-item listitem-'+itemId+'">'
      +'<td>'
      +'<button class="btn btn-primary edit-btn edit-'+itemId+'" data-itemid="'+itemId+'">Edit</button>'
      +'<button class="btn btn-success save-btn save-'+itemId+'" data-itemid="'+itemId+'" style="display: none;">Save</button>'
      +'</td>'
      +'<td>'
      +'<span class="item-'+itemId+' item">&nbsp;'+data.todos[i].item+'</span>'
      +'<span class="form-inline edit-form input-'+itemId+'" style="display: none;">&nbsp;<input class="form-control" value="'+data.todos[i].item+'"/></span>'
      +'</td>'
      +'<td>'
      +'<button class="btn btn-success complete-btn pull-right" data-itemid="'+itemId+'">✔️</button>'
      +'</td>'
      +'<td>'
      +'<button class="btn btn-danger delete-btn pull-right" data-itemid="'+itemId+'">➖</button>'
      +'</td>'
      +'</div>') }
  });
};

function handleTodoAddResponse(data) {
  getAllTodos();
}

function handleTodosDeleteResponse(itemId) {
  var $row = $('.listitem-' + itemId);
  $row.remove();
}

function handleTodosCompleteResponse(itemId) {
  var $row = $('.listitem-' + itemId);
  $row.remove();
}

function handleTodosUpdateResponse(id, updatedItem) {
  $('.item-'+id).html('&nbsp;'+updatedItem)

  $('.item-'+id).show()
  $('.input-'+id).hide()
  $('.edit-'+id).show()
  $('.save-'+id).hide()
}
