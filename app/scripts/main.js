$(function(){

  // swap large product image when thumbnail is clicked
  // update product description
  $('.thumbs img').on('click', function() {
      $('.thumbs img').removeClass('active');
      $(this).addClass('active');
      $('#largeImage').attr('src',$(this).attr('src').replace('small','large'));
      $('#product-description').html($(this).attr('alt'));
  });

  //add simple price update -- for demo only
  $('#product').on('keyup change', function() {
    var qty = $('#product').val();
    var price = 19.95;
    var total = qty * price;
    total = total.toFixed(2);
    $('#result').text(total);
  });

  //simple accordion, would probably use a more robust accordion in production
  $('.accordion').each(function () {
    var $accordian = $(this);
    $accordian.find('.accordion-head').on('click', function () {
      $(this).parent().find('.accordion-head').removeClass('open close');
      $(this).removeClass('open').addClass('closed');
      $accordian.find('.accordion-body').slideUp('fast');
      if (!$(this).next().is(':visible')) {
          $(this).removeClass('closed').addClass('open');
          $(this).next().slideDown('fast').addClass('active');
      }
    });
  });

});
