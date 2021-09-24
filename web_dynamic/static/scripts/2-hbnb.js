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

  const apiStat = $('div#api_status');
  $.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
    if (data.status === 'OK') {
      apiStat.addClass('available');
    } else {
      apiStat.removeClass('available');
    }
  });
});
