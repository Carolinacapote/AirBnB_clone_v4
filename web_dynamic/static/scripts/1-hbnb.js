let check = {};

$(document).ready(function () {
    $('input:checkbox').change(function () {
        if ($(this).is(':checked')) {
            check[$(this).attr('data-id')] = $(this).attr('data-name');
        }else if (!$(this).is(':checked')) {
            delete check[$(this).attr('data-id')];
        }
        let amenitiesNames = Object.values(check);
        let strNames = amenitiesNames.join(', ');
        
        $('div.amenities h4').text(strNames);
    });
});
