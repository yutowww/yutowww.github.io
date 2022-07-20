import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



export default class Mapping extends Component {
  render() {
    const position = [35.64982443478135, 139.71008459759418];
    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: '350px',margin:'5%'}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              株式会社MS総合研究所<br />
              〒150-0011<br />
              東京都渋谷区恵比寿東3丁目16番1号<br />
              ベルザ恵比寿ビル
            </Popup>
          </Marker>
        </MapContainer>
    )
  }
}
