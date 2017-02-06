// (function ($) {
//     $.fn.serializeFormJSON = function () {
//
//         var obj = {}
//         var a = this.serializeArray()
//         $.each(a, function () {
//             if (obj[this.name]) {
//                 if (!obj[this.name].push) {
//                     obj[this.name] = [obj[this.name]]
//                 }
//                 obj[this.name].push(this.value || '')
//             } else {
//                 obj[this.name] = this.value || ''
//             }
//         })
//         return obj
//     }
// })(jQuery)

$("#post-form").submit(function(event) {
  event.preventDefault()

  var post = $(this).serialize()
  $.post('/posts', post, function(data) {
  })
})



/*
client
  grab form data
  post to server

server
  save data
  sends back success

client
  redirects to index

*/
