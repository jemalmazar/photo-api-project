
$(function(){
  $('.insta-btn').on('click', function(event) {
    event.preventDefault();

    var hashSearch = $('#hash-search').val();
    var newLine ='';

    $.ajax({
      dataType:'jsonp',
      method:'GET',
      url: "https://api.instagram.com/v1/tags/"+hashSearch+"/media/recent?count=12&client_id=71e21c4bf4294a8498860283067eb682"

    })
    .done(function(response) {

      $.each(response.data, function( index, value ) {
    
        newLine+='<li><'+value.images.standard_resolution.url+'>';
        newLine+='<img src="'+value.caption.from.profile_picture+'"/>';
        newLine+='</div>';
        newLine+='<div>';
        newLine+='<a href="http://'+value.url+'>';
        newLine+='+<img src="'+value.images.profile_picture.url+'"/>'+'</a>'+'"</li>';
        newLine+='</div>';

});
    $('.grid ul').empty().append(newLine);

    });
  });
});
//data
//images
//thumbnail
//standard_resolution
//username
//profile_picture:
