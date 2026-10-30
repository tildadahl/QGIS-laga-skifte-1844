var wms_layers = [];


        var lyr_Googlesatellite_0 = new ol.layer.Tile({
            'title': 'Google satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Gckelgrde1844_TPS_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Gäckelgärde1844_TPS<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Gckelgrde1844_TPS_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1403496.673133, 7983931.824674, 1407436.520053, 7987580.339719]
        })
    });
var format_Marker_2 = new ol.format.GeoJSON();
var features_Marker_2 = format_Marker_2.readFeatures(json_Marker_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marker_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marker_2.addFeatures(features_Marker_2);
var lyr_Marker_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marker_2, 
                style: style_Marker_2,
                popuplayertitle: 'Marker',
                interactive: true,
    title: 'Marker<br />\
    <img src="styles/legend/Marker_2_0.png" /> Berg<br />\
    <img src="styles/legend/Marker_2_1.png" /> <br />\
    <img src="styles/legend/Marker_2_2.png" /> Äng<br />\
    <img src="styles/legend/Marker_2_3.png" /> Sump<br />' });
var format_Byggnader_3 = new ol.format.GeoJSON();
var features_Byggnader_3 = format_Byggnader_3.readFeatures(json_Byggnader_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Byggnader_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Byggnader_3.addFeatures(features_Byggnader_3);
var lyr_Byggnader_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Byggnader_3, 
                style: style_Byggnader_3,
                popuplayertitle: 'Byggnader',
                interactive: true,
    title: 'Byggnader<br />\
    <img src="styles/legend/Byggnader_3_0.png" /> Smedja<br />\
    <img src="styles/legend/Byggnader_3_1.png" /> Sågverk<br />\
    <img src="styles/legend/Byggnader_3_2.png" /> <br />' });

lyr_Googlesatellite_0.setVisible(true);lyr_Gckelgrde1844_TPS_1.setVisible(true);lyr_Marker_2.setVisible(true);lyr_Byggnader_3.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_Gckelgrde1844_TPS_1,lyr_Marker_2,lyr_Byggnader_3];
lyr_Marker_2.set('fieldAliases', {'fid': 'fid', 'Nr': 'Nr', 'Typ': 'Typ', });
lyr_Byggnader_3.set('fieldAliases', {'fid': 'fid', 'Typ': 'Typ', 'Kommentar': 'Kommentar', });
lyr_Marker_2.set('fieldImages', {'fid': 'TextEdit', 'Nr': 'TextEdit', 'Typ': 'TextEdit', });
lyr_Byggnader_3.set('fieldImages', {'fid': 'TextEdit', 'Typ': 'TextEdit', 'Kommentar': 'TextEdit', });
lyr_Marker_2.set('fieldLabels', {'fid': 'no label', 'Nr': 'inline label - always visible', 'Typ': 'inline label - visible with data', });
lyr_Byggnader_3.set('fieldLabels', {'fid': 'no label', 'Typ': 'inline label - visible with data', 'Kommentar': 'inline label - visible with data', });
lyr_Byggnader_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});