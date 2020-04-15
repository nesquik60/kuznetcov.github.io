jQuery(document).ready(function(){
  jQuery('.hide_menu').click(function(event) {
    jQuery('.hide_menu,.nav').toggleClass('active');
      jQuery('body').toggleClass('lock');
  });
});