$(function() {

  $.ajax({
      url: 'https://www.codeschool.com/users/fdelgadoarrechea.json',
      dataType: 'jsonp',
      success: function(response) {
        $.each(response.courses.completed, function(key, value){
          $('#badges').append('<div class="course"><h3>'+value.title+'</h3><img src="'+value.badge+'"><a href="'+value.url+'" target="_blank" class="btn btn-primary">See course</a></div>');
        });
      }
    });
});
