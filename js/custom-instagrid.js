
$(function(){
  $('form[name="search-form"]').on('submit', function(event) {
    event.preventDefault();

              if ($('#hash-search').val() === '') {
                  $('#try-again').fadeIn('fast').delay(4000).fadeOut();
            } else {
                  $('.search-wrapper').css('height', 'auto');
                  $('.loader img').css('display', 'block');
}
    var hashSearch = $('#hash-search').val();
    var newLine ='';

    $.ajax({
      dataType:'jsonp',
      method:'GET',
      url: "https://api.instagram.com/v1/tags/"+hashSearch+"/media/recent?count=12&client_id=71e21c4bf4294a8498860283067eb682"

    })
    .done(function(response) {

      $.each(response.data, function( index, value ) {
        newLine+='<li>';
        newLine+='<div class="list-wrapper">';
        newLine+='<a href="'+value.link+'">';
        newLine+='<img src="'+value.images.standard_resolution.url+'"/></a>';
        newLine+='<div class="user-wrapper">';
        newLine+='<div class="prof-pic">';
        newLine+='<img src="'+value.caption.from.profile_picture+'"/>';
        newLine+='</div>';
        newLine+='<div class="social-wrapper">';
        newLine+='<h3>'+value.caption.from.username+'</h3>';
        newLine+='<p><i class="fa fa-comment-o"></i>'+value.comments.count;
        newLine+='<i class="fa fa-heart"></i>'+value.likes.count+'</p>';
        newLine+='</div>';
        newLine+='</div>';
        newLine+='</div>';
        newLine+='</li>';

});

$('.instagrid ul').empty();
    $('.instagrid ul').append(newLine);
    $('.loader img').hide();


    });
  });
});

// Wait for window load
// $(window).load(function() {
//   // Animate loader off screen
//   $(".loader").fadeOut("slow");;
// });
//data
//images
//thumbnail
//standard_resolution
//username
//profile_picture:
