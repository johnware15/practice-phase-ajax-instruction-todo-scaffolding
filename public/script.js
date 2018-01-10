console.log("Sanity Check: JS is working!");

$(document).ready(() => {
  getAllTodos();

// becasue the delete-btn is added dynamically
// the click handler needs to be written like such, bound to the document
  $(document).on('click', '.delete-btn', () => {
    var id = $(this).data('id');
    $.ajax({
      // add code here for deleteOne action
    });
  });

  $(document).on('click', '.edit-btn', () => {
    var id = $(this).data('id')

    // hide the static title, show the input field
    $('.title-'+id).hide()
    $('.input-'+id).show()

    // hide the edit button, show the save button
    $('.edit-'+id).hide()
    $('.save-'+id).show()

  })

  $(document).on('click', '.save-btn', () => {
    var id = $(this).data('id')

    var updatedTitle = $('.input-'+id+' input').val()
    $.ajax({
      // add code here for updateOne action
    })
  })
});

function getAllTodos() {
  $('.list-group').html('')
  $.ajax({
    // add code here for getAll action
  }).done(function(data) {
    for( let i=0; i<data.todoz.length; i++){
      $('.list-group').append('<li class="list-group-item item-'+data.todoz[i].id+'">'
      +'<button class="btn btn-primary edit-btn edit-'+data.todoz[i].id+'" data-id="'+data.todoz[i].id+'">Edit</button>'
      +'<button class="btn btn-success save-btn save-'+data.todoz[i].id+'" data-id="'+data.todoz[i].id+'">Save</button>'
      +'<span class="title-'+data.todoz[i].id+'">&nbsp;'+data.todoz[i].title+'</span>'
      +'<span class="form-inline edit-form input-'+data.todoz[i].id+'">&nbsp;<input class="form-control" value="'+data.todoz[i].title+'"/></span>'
      +'<button class="btn btn-danger delete-btn pull-right" data-id="'+data.todoz[i].id+'">Delete</button>'
      +'</li>') }
  });
};

function handleTodosDeleteResponse(data) {
  console.log('handleTodozDeleteResponse got ', data);
  var bookId = data._id;
  var $row = $('.item-' + bookId);
  $row.remove();
}

function handleTodosUpdateResponse(data) {
  var id = data._id;
  $('.title-'+id).html('&nbsp;'+data.title)
  $('.title-'+id).show()
  $('.input-'+id).hide()
  $('.edit-'+id).show()
  $('.save-'+id).hide()
}
