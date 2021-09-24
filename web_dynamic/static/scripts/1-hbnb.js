const check = {};

$(document).ready(function () {
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      check[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).is(':checked')) {
      delete check[$(this).attr('data-id')];
    }
    const amenitiesNames = Object.values(check);
    const strNames = amenitiesNames.join(', ');

    $('div.amenities h4').text(strNames);
  });
});
