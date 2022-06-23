const center = [55.761907,37.62148];

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 14
    });

    let placemark = new ymaps.Placemark([55.769535,37.639985], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-icon.svg',
        iconImageSize: [12, 12],
        iconImageOffset: [0, 0]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);