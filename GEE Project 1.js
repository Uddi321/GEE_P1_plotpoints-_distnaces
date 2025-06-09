Pump 1: (25.340335, 88.725638),Pump 2: (25.339381, 88.726047),Pump 3: (25.339432, 88.725569), Create points for each pump., Display them on the map.Draw lines between the pumps.Calculate and print the distances.
// Define pump points
var pump1 = ee.Geometry.Point([88.725638, 25.340335]);
var pump2 = ee.Geometry.Point([88.726047, 25.339381]);
var pump3 = ee.Geometry.Point([88.725569, 25.339432]);

// Add points to the map
Map.addLayer(pump1, {color: 'red'}, 'Pump 1');
Map.addLayer(pump2, {color: 'green'}, 'Pump 2');
Map.addLayer(pump3, {color: 'blue'}, 'Pump 3');

// Center map on pump 1
Map.centerObject(pump1, 18);

// Create lines between pumps
var line1_2 = ee.Geometry.LineString([pump1.coordinates(), pump2.coordinates()]);
var line2_3 = ee.Geometry.LineString([pump2.coordinates(), pump3.coordinates()]);
var line3_1 = ee.Geometry.LineString([pump3.coordinates(), pump1.coordinates()]);

// Add lines to map
Map.addLayer(line1_2, {color: 'orange'}, 'Line Pump 1 to 2');
Map.addLayer(line2_3, {color: 'purple'}, 'Line Pump 2 to 3');
Map.addLayer(line3_1, {color: 'cyan'}, 'Line Pump 3 to 1');

// Calculate distances (in meters)
var dist1_2 = pump1.distance(pump2);
var dist2_3 = pump2.distance(pump3);
var dist3_1 = pump3.distance(pump1);

// Print distances
print('Distance Pump 1 to 2 (meters):', dist1_2);
print('Distance Pump 2 to 3 (meters):', dist2_3);
print('Distance Pump 3 to 1 (meters):', dist3_1);


Distance Pump 1 to 2 (meters):
113.4197253926349
JSON
Distance Pump 2 to 3 (meters):
48.45127238684416
JSON
Distance Pump 3 to 1 (meters):
100.27352293192385
