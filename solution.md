```
$.ajax({
  method: "POST",
  url: '/ajax/delete/'+id,
  success: handleTodosDeleteResponse(id)
});
```
$.ajax({
  method: 'PUT',
  url: '/ajax/update/'+id,
  data: {item: updatedItem},
  success: handleTodosUpdateResponse(id, updatedItem)
})
```
$.ajax({
  method: 'GET',
  url: '/ajax/get-all'
})
```
