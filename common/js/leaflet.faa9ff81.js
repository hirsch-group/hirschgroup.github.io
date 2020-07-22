function onMapClick() {}
var mymap = L.map("mapid").setView([51.758611, 20.454610], 6);
window.setTimeout(function() {
    console.log("manually set the leaflet images path."),
    L.Icon.Default.imagePath = "../common/js/images",
    L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: "mapbox.streets"
    }).addTo(mymap),
    L.marker([50.060605, 20.018122]).addTo(mymap).bindPopup("<b>Oddział Kraków</b><br /> ul. Sikorki 19<br> 31-581 Kraków").openPopup();
    var popup = L.popup();
}, 0);
mymap.on("click",
        onMapClick),
    $(".ms-list-row1").click(function() {
        mymap.setView(new L.LatLng(50.060605, 20.018122), 10),
        L.marker([50.060605, 20.018122]).addTo(mymap).bindPopup("<b>Oddział Kraków</b><br /> ul. Sikorki 19<br> 31-581 Kraków").openPopup(),
            $(".ms-list-row2").css("background-color", "#1c8fa3"),
            $(".ms-list-row1").css("background-color", "#33a9bd"),
            $(".ms-list-row3").css("background-color", "#1c8fa3")
    }),
    $(".ms-list-row2").click(function() {
        mymap.setView(new L.LatLng(52.2350533, 20.971332200000006), 10),
            L.marker([52.2350533, 20.971332200000006]).addTo(mymap).bindPopup("<b>Oddział Warszawa</b><br />ul. Staszica 1/12 <br> 05-805 Pruszków").openPopup(),
            $(".ms-list-row1").css("background-color", "#1c8fa3"),
            $(".ms-list-row2").css("background-color", "#33a9bd"),
            $(".ms-list-row3").css("background-color", "#1c8fa3")
    }),
    $(".ms-list-row3").click(function() {
        mymap.setView(new L.LatLng(53.1330797, 18.0080247), 10),
            L.marker([53.1330797, 18.0080247]).addTo(mymap).bindPopup("<b>Oddział Bydgosz</b><br /> ul. Kościuszki 1/12<br> 42-305 Nivea").openPopup(),
            $(".ms-list-row1").css("background-color", "#1c8fa3"),
            $(".ms-list-row2").css("background-color", "#1c8fa3"),
            $(".ms-list-row3").css("background-color", "#33a9bd")
    }),
    $(".move-map-button-dis").hide(),
    $(".move-map-button-en").click(function() {
        mymap.dragging.enable(),
            mymap.touchZoom.enable(),
            mymap.doubleClickZoom.enable(),
            mymap.scrollWheelZoom.enable(),
            mymap.boxZoom.enable(),
            mymap.keyboard.enable(),
            $(".move-map-button-en").hide(),
            $(".move-map-button-dis").show(),
            $(".map-smoke").css("display",
                "none")
    }),
    $(".move-map-button-dis").click(function() {
        mymap.dragging.disable(),
            mymap.touchZoom.disable(),
            mymap.doubleClickZoom.disable(),
            mymap.scrollWheelZoom.disable(),
            mymap.boxZoom.disable(),
            mymap.keyboard.disable(),
            $(".move-map-button-en").show(),
            $(".move-map-button-dis").hide(),
            $(".map-smoke").css("display",
                "inherit")
    }),
    $(window).resize(function() {
        $(window).width() < 650 ? (mymap.dragging.disable(),
            mymap.touchZoom.disable(),
            mymap.doubleClickZoom.disable(),
            mymap.scrollWheelZoom.disable(),
            mymap.boxZoom.disable(),
            mymap.keyboard.disable()) : (mymap.dragging.enable(),
            mymap.touchZoom.enable(),
            mymap.doubleClickZoom.enable(),
            mymap.scrollWheelZoom.enable(),
            mymap.boxZoom.enable(),
            mymap.keyboard.enable())
    }),
    $(window).width() < 650 ? (mymap.dragging.disable(),
        mymap.touchZoom.disable(),
        mymap.doubleClickZoom.disable(),
        mymap.scrollWheelZoom.disable(),
        mymap.boxZoom.disable(),
        mymap.keyboard.disable()) : (mymap.dragging.enable(),
        mymap.dragging.enable(),
        mymap.touchZoom.enable(),
        mymap.doubleClickZoom.enable(),
        mymap.scrollWheelZoom.enable(),
        mymap.boxZoom.enable(),
        mymap.keyboard.enable());