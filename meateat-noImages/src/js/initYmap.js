ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
    myMap = new ymaps.Map("map", {
        center: [40.372488, 49.954121],
        zoom: 13
});

myPlacemark = new ymaps.Placemark([40.372488, 49.954121], { 
    // hintContent: 'Moscow!', 
    // balloonContent: 'Capital of Russia'
});
    
    myMap.geoObjects.add(myPlacemark);
}