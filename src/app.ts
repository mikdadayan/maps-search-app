// import axios from "../node_modules/axios/index";

const form = document.querySelector("form")! as HTMLFormElement;
// const addressInput = document.getElementById("address")! as HTMLInputElement;

// declare let google: any;
declare let ol: any;

// type GoogleGeocodingResponse = {
//   results: { geometry: { location: { lat: number; lng: number } } }[];
//   status: "OK" | "ZERO_RESULTS";
// };

// const GOOGLE_API_KEY = "AIzaSyCIaAc2c5M3VpbCH6PPq_guwy9lHuowXOs";

const searchAddressHandler = (event: Event) => {
  event.preventDefault();
  //   const enteredAddress = addressInput.value;
  //   const coordinates = { lat: 40.41, lng: -73.99 };

  //   axios
  //     .get<GoogleGeocodingResponse>(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
  //         enteredAddress
  //       )}&key=${GOOGLE_API_KEY}`
  //     )
  //     .then((response) => {
  //       const coordinates = response.data.results[0].geometry.location;
  //       console.log(coordinates);
  //   const map = new google.maps.Map(
  //     document.getElementById("map") as HTMLElement,
  //     {
  //       zoom: 16,
  //       center: coordinates,
  //     }
  //   );

  //   new google.maps.Marker({
  //     position: coordinates,
  //     map: map,
  //   });
  const iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-2, 53])),
    name: "Somewhere near Nottingham",
  });

  document.getElementById("map")!.innerHTML = ""; 
  new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [iconFeature],
        }),
        style: new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: "fraction",
            anchorYUnits: "pixels",
            src: "https://openlayers.org/en/latest/examples/data/icon.png",
          }),
        }),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-2, 53]),
      zoom: 16,
    }),
  });
  //     })

  //     .catch((err) => {
  //       alert(err.message);
  //       console.log(err);
  //     });
};

form.addEventListener("submit", searchAddressHandler);
