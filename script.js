$(document).ready(function(){
  $("a.thumbnail").click(function(event){
    var imgSrc = $(this).find('img').attr('src');
    $('.hero img').attr('src', imgSrc);
  });
})

//     ".hero".empty();
//     this.addClass("hero");


//     $("img.top").replaceWith(this);


//     $(".hero").removeClass("hero");
//     $(".top").remove();
//     $(this).addClass("hero");
//     $(this).removeClass("thumbnail");


// $((".hero").find("img").attr('src')).replaceWith($(this).find("img").attr('src'));


//     var topLink = $(".hero").find("img").attr("src");
//     var newLink = $(this).find("img").attr("src");
//     $((".hero").find("img").attr("src")).replaceWith(newLink);
