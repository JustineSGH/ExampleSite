(function($){

    //Init
    var $slide         = $('.slide');
    var $slider         = $('.slider');
    var $wrapper        = $('.slide-wrapper');
    var $nbSlide        = 0;
    var $currentSlide   = 0;
    var $leftPost       = 0;
    var $limit          = 0;
    var $widthSlide     = 940;
    var $nextSlide      = 0;

    $slide.each(function(){
        $nbSlide++;
    });
    console.log('Nombre de Slide : ' + $nbSlide);
    $limit = ($nbSlide*$widthSlide)-$widthSlide;
    console.log('Limite left : '+$limit);

    function moveTo($leftPost){
        $wrapper.css({left:$leftPost});
    }
/*
    if ($nbSlide >= 1){
        $('.slider-nav').css({'display':'none'});
    }
    if ($nbSlide > 1){
        $('.slider').append('<div class="slider-nav"><span class="slider-nav-left"> < </span><span class="slider-nav-right"> > </span></div>');

    }
*/
    //Navigation
    if ($nbSlide >1){
        var $output = '<div class="slider-nav-btn"><ul>';
        for (var i= 0; i<$nbSlide; i++){
            if (i==0){
                $output = $output + '<li id="slider-nav-' + i + '" class="active"></li>';
            }else{
                $output = $output + '<li id="slider-nav-' + i + '"></li>';
            }
        };
        $output = $output + '</ul></div>';

        $slider.append($output);
        var $li = $('.slider-nav-btn li');
    }
    //Au click sur li
    $li.click(function(){
        if(!$(this).hasClass('active')){
            $li.removeClass('active');
            $(this).addClass('active');

            var $id = $(this).attr('id');
            $id =$id.replace('slider-nav-', '');

            $leftPost = -$id*$widthSlide;

            moveTo($leftPost);
            $currentSlide = $id;
        }
    });
    //Au click droit
    $('.slider-nav-right').click(function() {

        //$('.slide-wrapper').css({'left':-940});
        if( $currentSlide < $nbSlide-1){
            $nextSlide++;
        }else{
            $nextSlide = 0;
        }

        $leftPost = $nextSlide * $widthSlide;
        moveTo(-$leftPost);
        $currentSlide = $nextSlide;

    });

    //Click gauche
    $('.slider-nav-left').click(function() {

        if( $currentSlide > 0){
            $nextSlide--;
        }else{
            $nextSlide = $nbSlide-1;

        }

        $leftPost = $nextSlide * $widthSlide;
        moveTo(-$leftPost);
        $currentSlide = $nextSlide;

    });



})(jQuery);
