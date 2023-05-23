

$('#upload-button').on('click', function() {
    var fileInput = $('#file-input')[0];
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  });

  $.ajax({
    url: '/upload', // URL of the server-side endpoint
    type: 'POST',   // HTTP request method
    data: formData, // Form data to be sent in the request
    processData: false,
    contentType: false,
    success: function(data) {
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });