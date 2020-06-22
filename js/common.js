    // прилипающее меню
    $(function(){
      $(window).scroll(function() {
        if($(this).scrollTop() >= 80) {
          $('.main-menu').addClass('fixed').removeClass('notfixed');
          $('.submenu').addClass('scrolled').removeClass('notscrolled');
        }
        else{
          $('.main-menu').removeClass('fixed').addClass('notfixed');
          $('.submenu').removeClass('scrolled').addClass('notscrolled');
        }
      });
    });
    // плавный скролл
    $(document).ready(function() {
      $('a').mPageScroll2id({
        offset : 110
      });
    // вкладки
      $('ul.left__menu li').click(function(e){
        e.preventDefault();
        $('ul.left__menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).data('left-menu');
        $('div.rowtab').addClass('hidden');
        $('div#'+tab).removeClass('hidden');
      })
    });