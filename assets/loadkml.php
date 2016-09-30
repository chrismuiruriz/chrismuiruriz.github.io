<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="initial-scale=1.0">
        <meta charset="utf-8">
        <title>KML Layers</title>
        <style>
            html, body {
                height: 100%;
                margin: 0;
                padding: 0;
            }
            #map {
                height: 100%;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script>

            function initMap() {
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 11,
                    center: {lat: 41.876, lng: -87.624}
                });

                var myParser = new geoXML3.parser({map: map});
                myParser.parse('cta.kml');
            }
        </script>
        <script type="text/javascript" src="http://geoxml3.googlecode.com/svn/branches/polys/geoxml3.js"></script>
        <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnVXTkzB23Gx3g_-xw34pzfokdg1Yrzsc&callback=initMap">
        </script>
    </body>
</html>