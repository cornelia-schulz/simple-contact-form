$(document).ready(function () {
  $('#submit').click(function (e) {
    e.preventDefault()
    console.log('Form submitted')

    var data = {}
    data.firstName = $('#firstName').val()
    data.lastName = $('#lastName').val()
    data.email = $('#email').val()


    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: 'http://localhost:3000/endpoint',
      success: function (data) {
        console.log('success')
        $('#result').append(JSON.stringify(data))
        $('#result').append('<br /')
        $('#firstName').val('')
        $('#lastName').val('')
        $('#email').val('')
      }
    })
  })
})
