import { points } from './data.js';
mapboxgl.accessToken = 'pk.eyJ1IjoidG9ueWFiZXJjaCIsImEiOiJja3VtdzhtNTEwbnU5MzB0aDd6a2gwcmoyIn0.vvTuXXt_Rytnb6iXU9naOw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [
    2.3364, 48.86091
  ],
  zoom: 16,
  style: 'mapbox://styles/mapbox/light-v10',
});

const navigation = new mapboxgl.NavigationControl({
  showCompass: true,
})

map.addControl(navigation, 'top-right');

const marker1 = new mapboxgl.Marker({
  color: "#171717",
  draggable: false
}).setLngLat([2.3364, 48.86091])
  .addTo(map);

const marker2 = new mapboxgl.Marker({
  color: "#757575",
  draggable: false
}).setLngLat([2.3333, 48.8602])
  .addTo(map);

const marker3 = new mapboxgl.Marker({
  color: "#757575",
  draggable: false
}).setLngLat([2.3397, 48.8607])
  .addTo(map);

const marker4 = new mapboxgl.Marker({
  color: "#757575",
  draggable: false
}).setLngLat([2.3330, 48.8619])
  .addTo(map);

const marker5 = new mapboxgl.Marker({
  color: "#757575",
  draggable: false
}).setLngLat([2.3365, 48.8625])
  .addTo(map);
