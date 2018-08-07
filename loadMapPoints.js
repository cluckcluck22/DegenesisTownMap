function loadMapPoints(map)
{
    var redStar = {
        path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
        fillColor: 'red',
        fillOpacity: 1,
        scale: 0.01,
        strokeColor: 'red',
        strokeWeight: 4
    };
    $.getJSON("sampleMapPoint.json",function(json){
        console.log(json["points"]);
        for(var i = 0; i < json["numberOfPoints"];i++)
        {
            console.log(json["points"][i])
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(json["points"][i]["lat"], json["points"][i]["lon"]),
                map: map,
                icon: redStar,
                title: json["points"][i]["name"]
            });
            with ({ data: json["points"][i]["Description"]})
            {
                var infowindow = new google.maps.InfoWindow({
                    content: data
                });
                with ({infoPane: infowindow,localMarker:marker})
                {
                    google.maps.event.addListener(marker,'click',function(){
                        infoPane.open(map,localMarker);
                    });
                }
            }
        }
    });
}

function alertUserToEvent(evt)
{
    window.alert( evt.target.myParam);
}