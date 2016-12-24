$(document).ready(function(){
  $("a.thumbnail").click(function(event){
    var imgSrc = $(this).find('img').attr('src');
    $('.hero img').attr('src', imgSrc);
  });
})
