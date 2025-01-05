"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
const Map = () => {
  useEffect(() => {
    document.getElementById("contact-map").innerHTML="<div id='map' style=height:345px></div>"
    var map = L.map("map").setView([35.700105, 51.400394], 14);
    var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(map);
    var marker = L.marker([35.700105, 51.400394])
      .addTo(map)
      .bindPopup("<b>kzddev</b>")
      .openPopup();
  }, []);
  return (
    <>
    <div id="contact-map"></div>
      <div id="map" style={{ height: " 345px" }}></div>
    </>
  );
};

export default Map;
