var size = 0;
var placement = 'point';

var style_Byggnader_3 = function(feature, resolution) {
    var fill = new ol.style.Fill({
        color: 'rgba(180, 150, 120, 0.65)'
    });
    var stroke = new ol.style.Stroke({
        color: 'rgba(80, 80, 80, 0.8)',
        width: 1
    });

    return [new ol.style.Style({
        fill: fill,
        stroke: stroke
    })];
};