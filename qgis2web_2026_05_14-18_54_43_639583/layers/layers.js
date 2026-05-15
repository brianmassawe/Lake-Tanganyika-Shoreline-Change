var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BaselineOnshore_2 = new ol.format.GeoJSON();
var features_BaselineOnshore_2 = format_BaselineOnshore_2.readFeatures(json_BaselineOnshore_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaselineOnshore_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaselineOnshore_2.addFeatures(features_BaselineOnshore_2);
var lyr_BaselineOnshore_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaselineOnshore_2, 
                style: style_BaselineOnshore_2,
                popuplayertitle: 'Baseline Onshore',
                interactive: true,
                title: '<img src="styles/legend/BaselineOnshore_2.png" /> Baseline Onshore'
            });
var format_ShorelineChange19952025_3 = new ol.format.GeoJSON();
var features_ShorelineChange19952025_3 = format_ShorelineChange19952025_3.readFeatures(json_ShorelineChange19952025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShorelineChange19952025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShorelineChange19952025_3.addFeatures(features_ShorelineChange19952025_3);
var lyr_ShorelineChange19952025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShorelineChange19952025_3, 
                style: style_ShorelineChange19952025_3,
                popuplayertitle: 'Shoreline Change (1995 - 2025)',
                interactive: true,
    title: 'Shoreline Change (1995 - 2025)<br />\
    <img src="styles/legend/ShorelineChange19952025_3_0.png" /> Erosion (< -25m)<br />\
    <img src="styles/legend/ShorelineChange19952025_3_1.png" /> Stable (-25m - 25m)<br />\
    <img src="styles/legend/ShorelineChange19952025_3_2.png" /> Accretion (>25m)<br />' });
var format_Shoreline19952025_4 = new ol.format.GeoJSON();
var features_Shoreline19952025_4 = format_Shoreline19952025_4.readFeatures(json_Shoreline19952025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shoreline19952025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shoreline19952025_4.addFeatures(features_Shoreline19952025_4);
var lyr_Shoreline19952025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shoreline19952025_4, 
                style: style_Shoreline19952025_4,
                popuplayertitle: 'Shoreline (1995 - 2025)',
                interactive: true,
    title: 'Shoreline (1995 - 2025)<br />\
    <img src="styles/legend/Shoreline19952025_4_0.png" /> 1995<br />\
    <img src="styles/legend/Shoreline19952025_4_1.png" /> 2025<br />' });
var format_IntersectionPoint19952025_5 = new ol.format.GeoJSON();
var features_IntersectionPoint19952025_5 = format_IntersectionPoint19952025_5.readFeatures(json_IntersectionPoint19952025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntersectionPoint19952025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntersectionPoint19952025_5.addFeatures(features_IntersectionPoint19952025_5);
var lyr_IntersectionPoint19952025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntersectionPoint19952025_5, 
                style: style_IntersectionPoint19952025_5,
                popuplayertitle: 'Intersection Point (1995 - 2025)',
                interactive: true,
                title: '<img src="styles/legend/IntersectionPoint19952025_5.png" /> Intersection Point (1995 - 2025)'
            });
var format_ShorelineChange20152025_6 = new ol.format.GeoJSON();
var features_ShorelineChange20152025_6 = format_ShorelineChange20152025_6.readFeatures(json_ShorelineChange20152025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShorelineChange20152025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShorelineChange20152025_6.addFeatures(features_ShorelineChange20152025_6);
var lyr_ShorelineChange20152025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShorelineChange20152025_6, 
                style: style_ShorelineChange20152025_6,
                popuplayertitle: 'Shoreline Change (2015 - 2025)',
                interactive: true,
    title: 'Shoreline Change (2015 - 2025)<br />\
    <img src="styles/legend/ShorelineChange20152025_6_0.png" /> Erosion (< -25m)<br />\
    <img src="styles/legend/ShorelineChange20152025_6_1.png" /> Stable (-25m - 25m)<br />\
    <img src="styles/legend/ShorelineChange20152025_6_2.png" /> Accretion (> 25m)<br />' });
var format_Shoreline20152025_7 = new ol.format.GeoJSON();
var features_Shoreline20152025_7 = format_Shoreline20152025_7.readFeatures(json_Shoreline20152025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shoreline20152025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shoreline20152025_7.addFeatures(features_Shoreline20152025_7);
var lyr_Shoreline20152025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shoreline20152025_7, 
                style: style_Shoreline20152025_7,
                popuplayertitle: 'Shoreline (2015 - 2025)',
                interactive: true,
    title: 'Shoreline (2015 - 2025)<br />\
    <img src="styles/legend/Shoreline20152025_7_0.png" /> 2015<br />\
    <img src="styles/legend/Shoreline20152025_7_1.png" /> 2025<br />' });
var format_IntersectionPoint20152025_8 = new ol.format.GeoJSON();
var features_IntersectionPoint20152025_8 = format_IntersectionPoint20152025_8.readFeatures(json_IntersectionPoint20152025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntersectionPoint20152025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntersectionPoint20152025_8.addFeatures(features_IntersectionPoint20152025_8);
var lyr_IntersectionPoint20152025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntersectionPoint20152025_8, 
                style: style_IntersectionPoint20152025_8,
                popuplayertitle: 'Intersection Point (2015 - 2025)',
                interactive: true,
                title: '<img src="styles/legend/IntersectionPoint20152025_8.png" /> Intersection Point (2015 - 2025)'
            });
var format_ShorelineChange20052015_9 = new ol.format.GeoJSON();
var features_ShorelineChange20052015_9 = format_ShorelineChange20052015_9.readFeatures(json_ShorelineChange20052015_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShorelineChange20052015_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShorelineChange20052015_9.addFeatures(features_ShorelineChange20052015_9);
var lyr_ShorelineChange20052015_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShorelineChange20052015_9, 
                style: style_ShorelineChange20052015_9,
                popuplayertitle: 'Shoreline Change (2005 - 2015)',
                interactive: true,
    title: 'Shoreline Change (2005 - 2015)<br />\
    <img src="styles/legend/ShorelineChange20052015_9_0.png" /> Erosion (< -25m)<br />\
    <img src="styles/legend/ShorelineChange20052015_9_1.png" /> Stable (-25m - 25m)<br />\
    <img src="styles/legend/ShorelineChange20052015_9_2.png" /> Accretion (> 25m)<br />' });
var format_Shoreline20052015_10 = new ol.format.GeoJSON();
var features_Shoreline20052015_10 = format_Shoreline20052015_10.readFeatures(json_Shoreline20052015_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shoreline20052015_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shoreline20052015_10.addFeatures(features_Shoreline20052015_10);
var lyr_Shoreline20052015_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shoreline20052015_10, 
                style: style_Shoreline20052015_10,
                popuplayertitle: 'Shoreline (2005 - 2015)',
                interactive: true,
    title: 'Shoreline (2005 - 2015)<br />\
    <img src="styles/legend/Shoreline20052015_10_0.png" /> 2005<br />\
    <img src="styles/legend/Shoreline20052015_10_1.png" /> 2015<br />' });
var format_IntersectionPoint20052015_11 = new ol.format.GeoJSON();
var features_IntersectionPoint20052015_11 = format_IntersectionPoint20052015_11.readFeatures(json_IntersectionPoint20052015_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntersectionPoint20052015_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntersectionPoint20052015_11.addFeatures(features_IntersectionPoint20052015_11);
var lyr_IntersectionPoint20052015_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntersectionPoint20052015_11, 
                style: style_IntersectionPoint20052015_11,
                popuplayertitle: 'Intersection Point (2005 - 2015)',
                interactive: true,
                title: '<img src="styles/legend/IntersectionPoint20052015_11.png" /> Intersection Point (2005 - 2015)'
            });
var format_ShorelineChange19952005_12 = new ol.format.GeoJSON();
var features_ShorelineChange19952005_12 = format_ShorelineChange19952005_12.readFeatures(json_ShorelineChange19952005_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShorelineChange19952005_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShorelineChange19952005_12.addFeatures(features_ShorelineChange19952005_12);
var lyr_ShorelineChange19952005_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShorelineChange19952005_12, 
                style: style_ShorelineChange19952005_12,
                popuplayertitle: 'Shoreline Change (1995 - 2005)',
                interactive: true,
    title: 'Shoreline Change (1995 - 2005)<br />\
    <img src="styles/legend/ShorelineChange19952005_12_0.png" /> Erosion (< -25m)<br />\
    <img src="styles/legend/ShorelineChange19952005_12_1.png" /> Stable (-25m - 25m)<br />\
    <img src="styles/legend/ShorelineChange19952005_12_2.png" /> Accretion (> 25m)<br />' });
var format_Shoreline19952005_13 = new ol.format.GeoJSON();
var features_Shoreline19952005_13 = format_Shoreline19952005_13.readFeatures(json_Shoreline19952005_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shoreline19952005_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shoreline19952005_13.addFeatures(features_Shoreline19952005_13);
var lyr_Shoreline19952005_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shoreline19952005_13, 
                style: style_Shoreline19952005_13,
                popuplayertitle: 'Shoreline (1995 - 2005)',
                interactive: true,
    title: 'Shoreline (1995 - 2005)<br />\
    <img src="styles/legend/Shoreline19952005_13_0.png" /> 1995<br />\
    <img src="styles/legend/Shoreline19952005_13_1.png" /> 2005<br />' });
var format_IntersectionPoint19952005_14 = new ol.format.GeoJSON();
var features_IntersectionPoint19952005_14 = format_IntersectionPoint19952005_14.readFeatures(json_IntersectionPoint19952005_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntersectionPoint19952005_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntersectionPoint19952005_14.addFeatures(features_IntersectionPoint19952005_14);
var lyr_IntersectionPoint19952005_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntersectionPoint19952005_14, 
                style: style_IntersectionPoint19952005_14,
                popuplayertitle: 'Intersection Point (1995 - 2005)',
                interactive: true,
                title: '<img src="styles/legend/IntersectionPoint19952005_14.png" /> Intersection Point (1995 - 2005)'
            });
var format_Reference_Point_15 = new ol.format.GeoJSON();
var features_Reference_Point_15 = format_Reference_Point_15.readFeatures(json_Reference_Point_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reference_Point_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reference_Point_15.addFeatures(features_Reference_Point_15);
var lyr_Reference_Point_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reference_Point_15, 
                style: style_Reference_Point_15,
                popuplayertitle: 'Reference_Point',
                interactive: true,
                title: '<img src="styles/legend/Reference_Point_15.png" /> Reference_Point'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_BaselineOnshore_2.setVisible(true);lyr_ShorelineChange19952025_3.setVisible(true);lyr_Shoreline19952025_4.setVisible(true);lyr_IntersectionPoint19952025_5.setVisible(false);lyr_ShorelineChange20152025_6.setVisible(false);lyr_Shoreline20152025_7.setVisible(false);lyr_IntersectionPoint20152025_8.setVisible(false);lyr_ShorelineChange20052015_9.setVisible(false);lyr_Shoreline20052015_10.setVisible(false);lyr_IntersectionPoint20052015_11.setVisible(false);lyr_ShorelineChange19952005_12.setVisible(false);lyr_Shoreline19952005_13.setVisible(false);lyr_IntersectionPoint19952005_14.setVisible(false);lyr_Reference_Point_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_BaselineOnshore_2,lyr_ShorelineChange19952025_3,lyr_Shoreline19952025_4,lyr_IntersectionPoint19952025_5,lyr_ShorelineChange20152025_6,lyr_Shoreline20152025_7,lyr_IntersectionPoint20152025_8,lyr_ShorelineChange20052015_9,lyr_Shoreline20052015_10,lyr_IntersectionPoint20052015_11,lyr_ShorelineChange19952005_12,lyr_Shoreline19952005_13,lyr_IntersectionPoint19952005_14,lyr_Reference_Point_15];
lyr_BaselineOnshore_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Group': 'Group', 'max_dist': 'max_dist', 'orient': 'orient', 'smoothing': 'smoothing', });
lyr_ShorelineChange19952025_3.set('fieldAliases', {'baselineid': 'baselineid', 'groupid': 'groupid', 'transorder': 'transorder', 'azimuth': 'azimuth', 'length': 'length', 'tcd': 'tcd', 'shrcount': 'shrcount', 'lrr': 'lrr', 'lr2': 'lr2', 'lci90': 'lci90', 'lse': 'lse', 'wlr': 'wlr', 'wr2': 'wr2', 'wci': 'wci', 'wse': 'wse', 'epr': 'epr', 'eprunc': 'eprunc', 'nsm': 'nsm', 'sce': 'sce', 'class': 'class', });
lyr_Shoreline19952025_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'year': 'year', 'uncrty': 'uncrty', 'date': 'date', });
lyr_IntersectionPoint19952025_5.set('fieldAliases', {'transorder': 'transorder', 'baselineid': 'baselineid', 'shoreline0': 'shoreline0', 'decimalye0': 'decimalye0', 'distance': 'distance', 'intersectx': 'intersectx', 'intersecty': 'intersecty', 'uncertain0': 'uncertain0', });
lyr_ShorelineChange20152025_6.set('fieldAliases', {'baselineid': 'baselineid', 'groupid': 'groupid', 'transorder': 'transorder', 'azimuth': 'azimuth', 'length': 'length', 'tcd': 'tcd', 'shrcount': 'shrcount', 'lrr': 'lrr', 'lr2': 'lr2', 'lci90': 'lci90', 'lse': 'lse', 'wlr': 'wlr', 'wr2': 'wr2', 'wci': 'wci', 'wse': 'wse', 'epr': 'epr', 'eprunc': 'eprunc', 'nsm': 'nsm', 'sce': 'sce', 'class': 'class', });
lyr_Shoreline20152025_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'year': 'year', 'uncrty': 'uncrty', 'date': 'date', });
lyr_IntersectionPoint20152025_8.set('fieldAliases', {'transorder': 'transorder', 'baselineid': 'baselineid', 'shoreline0': 'shoreline0', 'decimalye0': 'decimalye0', 'distance': 'distance', 'intersectx': 'intersectx', 'intersecty': 'intersecty', 'uncertain0': 'uncertain0', });
lyr_ShorelineChange20052015_9.set('fieldAliases', {'baselineid': 'baselineid', 'groupid': 'groupid', 'transorder': 'transorder', 'azimuth': 'azimuth', 'length': 'length', 'tcd': 'tcd', 'shrcount': 'shrcount', 'lrr': 'lrr', 'lr2': 'lr2', 'lci90': 'lci90', 'lse': 'lse', 'wlr': 'wlr', 'wr2': 'wr2', 'wci': 'wci', 'wse': 'wse', 'epr': 'epr', 'eprunc': 'eprunc', 'nsm': 'nsm', 'sce': 'sce', 'class': 'class', });
lyr_Shoreline20052015_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'year': 'year', 'uncrty': 'uncrty', 'date': 'date', });
lyr_IntersectionPoint20052015_11.set('fieldAliases', {'transorder': 'transorder', 'baselineid': 'baselineid', 'shoreline0': 'shoreline0', 'decimalye0': 'decimalye0', 'distance': 'distance', 'intersectx': 'intersectx', 'intersecty': 'intersecty', 'uncertain0': 'uncertain0', });
lyr_ShorelineChange19952005_12.set('fieldAliases', {'baselineid': 'baselineid', 'groupid': 'groupid', 'transorder': 'transorder', 'azimuth': 'azimuth', 'length': 'length', 'tcd': 'tcd', 'shrcount': 'shrcount', 'lrr': 'lrr', 'lr2': 'lr2', 'lci90': 'lci90', 'lse': 'lse', 'wlr': 'wlr', 'wr2': 'wr2', 'wci': 'wci', 'wse': 'wse', 'epr': 'epr', 'eprunc': 'eprunc', 'nsm': 'nsm', 'sce': 'sce', 'class': 'class', });
lyr_Shoreline19952005_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'year': 'year', 'uncrty': 'uncrty', 'date': 'date', });
lyr_IntersectionPoint19952005_14.set('fieldAliases', {'transorder': 'transorder', 'baselineid': 'baselineid', 'shoreline0': 'shoreline0', 'decimalye0': 'decimalye0', 'distance': 'distance', 'intersectx': 'intersectx', 'intersecty': 'intersecty', 'uncertain0': 'uncertain0', });
lyr_Reference_Point_15.set('fieldAliases', {'id': 'id', 'Location': 'Location', 'N': 'N', 'E': 'E', });
lyr_BaselineOnshore_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Group': 'Range', 'max_dist': 'TextEdit', 'orient': 'TextEdit', 'smoothing': 'TextEdit', });
lyr_ShorelineChange19952025_3.set('fieldImages', {'baselineid': 'TextEdit', 'groupid': 'TextEdit', 'transorder': 'TextEdit', 'azimuth': 'TextEdit', 'length': 'TextEdit', 'tcd': 'TextEdit', 'shrcount': 'TextEdit', 'lrr': 'TextEdit', 'lr2': 'TextEdit', 'lci90': 'TextEdit', 'lse': 'TextEdit', 'wlr': 'TextEdit', 'wr2': 'TextEdit', 'wci': 'TextEdit', 'wse': 'TextEdit', 'epr': 'TextEdit', 'eprunc': 'TextEdit', 'nsm': 'TextEdit', 'sce': 'TextEdit', 'class': 'TextEdit', });
lyr_Shoreline19952025_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'year': 'TextEdit', 'uncrty': 'TextEdit', 'date': 'TextEdit', });
lyr_IntersectionPoint19952025_5.set('fieldImages', {'transorder': 'TextEdit', 'baselineid': 'TextEdit', 'shoreline0': 'TextEdit', 'decimalye0': 'TextEdit', 'distance': 'TextEdit', 'intersectx': 'TextEdit', 'intersecty': 'TextEdit', 'uncertain0': 'TextEdit', });
lyr_ShorelineChange20152025_6.set('fieldImages', {'baselineid': 'TextEdit', 'groupid': 'TextEdit', 'transorder': 'TextEdit', 'azimuth': 'TextEdit', 'length': 'TextEdit', 'tcd': 'TextEdit', 'shrcount': 'TextEdit', 'lrr': 'TextEdit', 'lr2': 'TextEdit', 'lci90': 'TextEdit', 'lse': 'TextEdit', 'wlr': 'TextEdit', 'wr2': 'TextEdit', 'wci': 'TextEdit', 'wse': 'TextEdit', 'epr': 'TextEdit', 'eprunc': 'TextEdit', 'nsm': 'TextEdit', 'sce': 'TextEdit', 'class': 'TextEdit', });
lyr_Shoreline20152025_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'year': 'TextEdit', 'uncrty': 'TextEdit', 'date': 'TextEdit', });
lyr_IntersectionPoint20152025_8.set('fieldImages', {'transorder': 'TextEdit', 'baselineid': 'TextEdit', 'shoreline0': 'TextEdit', 'decimalye0': 'TextEdit', 'distance': 'TextEdit', 'intersectx': 'TextEdit', 'intersecty': 'TextEdit', 'uncertain0': 'TextEdit', });
lyr_ShorelineChange20052015_9.set('fieldImages', {'baselineid': 'TextEdit', 'groupid': 'TextEdit', 'transorder': 'TextEdit', 'azimuth': 'TextEdit', 'length': 'TextEdit', 'tcd': 'TextEdit', 'shrcount': 'TextEdit', 'lrr': 'TextEdit', 'lr2': 'TextEdit', 'lci90': 'TextEdit', 'lse': 'TextEdit', 'wlr': 'TextEdit', 'wr2': 'TextEdit', 'wci': 'TextEdit', 'wse': 'TextEdit', 'epr': 'TextEdit', 'eprunc': 'TextEdit', 'nsm': 'TextEdit', 'sce': 'TextEdit', 'class': 'TextEdit', });
lyr_Shoreline20052015_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'year': 'TextEdit', 'uncrty': 'TextEdit', 'date': 'TextEdit', });
lyr_IntersectionPoint20052015_11.set('fieldImages', {'transorder': 'TextEdit', 'baselineid': 'TextEdit', 'shoreline0': 'TextEdit', 'decimalye0': 'TextEdit', 'distance': 'TextEdit', 'intersectx': 'TextEdit', 'intersecty': 'TextEdit', 'uncertain0': 'TextEdit', });
lyr_ShorelineChange19952005_12.set('fieldImages', {'baselineid': 'TextEdit', 'groupid': 'TextEdit', 'transorder': 'TextEdit', 'azimuth': 'TextEdit', 'length': 'TextEdit', 'tcd': 'TextEdit', 'shrcount': 'TextEdit', 'lrr': 'TextEdit', 'lr2': 'TextEdit', 'lci90': 'TextEdit', 'lse': 'TextEdit', 'wlr': 'TextEdit', 'wr2': 'TextEdit', 'wci': 'TextEdit', 'wse': 'TextEdit', 'epr': 'TextEdit', 'eprunc': 'TextEdit', 'nsm': 'TextEdit', 'sce': 'TextEdit', 'class': 'TextEdit', });
lyr_Shoreline19952005_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'year': 'TextEdit', 'uncrty': 'TextEdit', 'date': 'TextEdit', });
lyr_IntersectionPoint19952005_14.set('fieldImages', {'transorder': 'TextEdit', 'baselineid': 'TextEdit', 'shoreline0': 'TextEdit', 'decimalye0': 'TextEdit', 'distance': 'TextEdit', 'intersectx': 'TextEdit', 'intersecty': 'TextEdit', 'uncertain0': 'TextEdit', });
lyr_Reference_Point_15.set('fieldImages', {'id': 'TextEdit', 'Location': 'TextEdit', 'N': 'TextEdit', 'E': 'TextEdit', });
lyr_BaselineOnshore_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'Group': 'hidden field', 'max_dist': 'hidden field', 'orient': 'hidden field', 'smoothing': 'hidden field', });
lyr_ShorelineChange19952025_3.set('fieldLabels', {'baselineid': 'hidden field', 'groupid': 'hidden field', 'transorder': 'hidden field', 'azimuth': 'hidden field', 'length': 'hidden field', 'tcd': 'hidden field', 'shrcount': 'hidden field', 'lrr': 'hidden field', 'lr2': 'hidden field', 'lci90': 'hidden field', 'lse': 'hidden field', 'wlr': 'hidden field', 'wr2': 'hidden field', 'wci': 'hidden field', 'wse': 'hidden field', 'epr': 'hidden field', 'eprunc': 'hidden field', 'nsm': 'inline label - always visible', 'sce': 'hidden field', 'class': 'inline label - always visible', });
lyr_Shoreline19952025_4.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'year': 'inline label - always visible', 'uncrty': 'hidden field', 'date': 'hidden field', });
lyr_IntersectionPoint19952025_5.set('fieldLabels', {'transorder': 'hidden field', 'baselineid': 'hidden field', 'shoreline0': 'hidden field', 'decimalye0': 'hidden field', 'distance': 'hidden field', 'intersectx': 'hidden field', 'intersecty': 'hidden field', 'uncertain0': 'hidden field', });
lyr_ShorelineChange20152025_6.set('fieldLabels', {'baselineid': 'hidden field', 'groupid': 'hidden field', 'transorder': 'hidden field', 'azimuth': 'hidden field', 'length': 'hidden field', 'tcd': 'hidden field', 'shrcount': 'hidden field', 'lrr': 'hidden field', 'lr2': 'hidden field', 'lci90': 'hidden field', 'lse': 'hidden field', 'wlr': 'hidden field', 'wr2': 'hidden field', 'wci': 'hidden field', 'wse': 'hidden field', 'epr': 'hidden field', 'eprunc': 'hidden field', 'nsm': 'inline label - always visible', 'sce': 'hidden field', 'class': 'inline label - always visible', });
lyr_Shoreline20152025_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'year': 'hidden field', 'uncrty': 'hidden field', 'date': 'hidden field', });
lyr_IntersectionPoint20152025_8.set('fieldLabels', {'transorder': 'hidden field', 'baselineid': 'hidden field', 'shoreline0': 'hidden field', 'decimalye0': 'hidden field', 'distance': 'hidden field', 'intersectx': 'hidden field', 'intersecty': 'hidden field', 'uncertain0': 'hidden field', });
lyr_ShorelineChange20052015_9.set('fieldLabels', {'baselineid': 'hidden field', 'groupid': 'hidden field', 'transorder': 'hidden field', 'azimuth': 'hidden field', 'length': 'hidden field', 'tcd': 'hidden field', 'shrcount': 'hidden field', 'lrr': 'hidden field', 'lr2': 'hidden field', 'lci90': 'hidden field', 'lse': 'hidden field', 'wlr': 'hidden field', 'wr2': 'hidden field', 'wci': 'hidden field', 'wse': 'hidden field', 'epr': 'hidden field', 'eprunc': 'hidden field', 'nsm': 'inline label - always visible', 'sce': 'hidden field', 'class': 'inline label - always visible', });
lyr_Shoreline20052015_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'year': 'hidden field', 'uncrty': 'hidden field', 'date': 'hidden field', });
lyr_IntersectionPoint20052015_11.set('fieldLabels', {'transorder': 'hidden field', 'baselineid': 'hidden field', 'shoreline0': 'hidden field', 'decimalye0': 'hidden field', 'distance': 'hidden field', 'intersectx': 'hidden field', 'intersecty': 'hidden field', 'uncertain0': 'hidden field', });
lyr_ShorelineChange19952005_12.set('fieldLabels', {'baselineid': 'hidden field', 'groupid': 'hidden field', 'transorder': 'hidden field', 'azimuth': 'hidden field', 'length': 'hidden field', 'tcd': 'hidden field', 'shrcount': 'hidden field', 'lrr': 'hidden field', 'lr2': 'hidden field', 'lci90': 'hidden field', 'lse': 'hidden field', 'wlr': 'hidden field', 'wr2': 'hidden field', 'wci': 'hidden field', 'wse': 'hidden field', 'epr': 'hidden field', 'eprunc': 'hidden field', 'nsm': 'inline label - always visible', 'sce': 'hidden field', 'class': 'inline label - always visible', });
lyr_Shoreline19952005_13.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'year': 'no label', 'uncrty': 'no label', 'date': 'no label', });
lyr_IntersectionPoint19952005_14.set('fieldLabels', {'transorder': 'hidden field', 'baselineid': 'hidden field', 'shoreline0': 'hidden field', 'decimalye0': 'hidden field', 'distance': 'hidden field', 'intersectx': 'hidden field', 'intersecty': 'hidden field', 'uncertain0': 'hidden field', });
lyr_Reference_Point_15.set('fieldLabels', {'id': 'hidden field', 'Location': 'inline label - always visible', 'N': 'inline label - always visible', 'E': 'inline label - always visible', });
lyr_Reference_Point_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});