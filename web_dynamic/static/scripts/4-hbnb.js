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

  $('button').click(function () {
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search',
      contentType: 'application/json',
      data: JSON.stringify({})
    }).done(function (data) {
      console.log(data);
      for (const place of data) {
        const templ = `<article>

       <div class="title_box">

        <h2>
            ${place.name}
        </h2>
        <div class="price_by_night">
            $${place.price_by_night}
        </div>
       </div>

       <div class="information">
        <div class="max_guest">
         ${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}
        </div>
        <div class="number_rooms">
         ${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}
        </div>
        <div class="number_bathrooms">
         ${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}
        </div>
       </div>

       
       <div class="description">
        ${place.description}
       </div>
    </article>`;
        $('section.places').append($(templ));
      }
    });
  });
});
