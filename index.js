function updateMap(){
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            
            cases = element.infected;
            if(cases>=1000){
                color = "rgb(26, 0, 0)";
            }
            else if(cases<1000 && cases>=800){
                color = "rgb(77, 0, 0)";
            }
            else if(cases<800 && cases>=600){
                color = "rgb(128, 0, 0)";
            }
            else if(cases<600 && cases>=400){
                color = "rgb(179, 0, 0)";
            }
            else if(cases<400 && cases>=200){
                color = "rgb(255, 26, 26)";
            }
            else if(cases<200 && cases>=100){
                color = "rgb(255, 102, 102)";
            }
            else if(cases<100){
                color = "rgb(255, 153, 153)";
            }
            const marker = new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        
        });
    });
}
updateMap();
let interval = 1800000;
setInterval(updateMap, interval);

