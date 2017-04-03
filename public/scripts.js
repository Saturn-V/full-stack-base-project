$("#post-form").submit(function(event) {
  event.preventDefault()

  var post = $(this).serialize()
  $.post('/posts', post, function(data) {
    window.location = data.redirectUrl
  })
})

$("#delete-post").click(function(event) {
  event.preventDefault()

  
})
