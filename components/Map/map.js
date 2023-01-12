import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    const Waterfront = [49.28594, -123.11129];
    const Burrard = [49.285581150633966, -123.12012245876285];
    const Granville = [49.28276095478255, -123.11653428814928];
    const StadiumChinatown = [49.27979845679656, -123.10987266116597];
    const MainStreet = [49.27386359520572, -123.10032729917528];
    const Commercial = [49.2633411509439, -123.06975238147467];
    const Nanaimo = [49.2490691315998, -123.05594851569174];
    const Avenue = [49.245026747979736, -123.04620840477385];
    const Joyce = [49.238527289018805, -123.03173634397011];
    const Patterson = [49.238527289018805, -123.03173634397011];
    const Metrotown = [49.227012795117936, -123.00356583754541];
    const Royal = [49.22090265099934, -122.98828797503771];
    const Edmonds = [49.21333399396498, -122.95936303302729];
    const TwStreet = [49.20094132078033, -122.94914918107322];
    const NewWest = [49.20234336279984, -122.912928630534];
    const Columbia = [49.20548379245932, -122.9063196675326];
    const ScottRoad = [49.205315559962315, -122.87413315936365];
    const Gateway = [49.19981965847605, -122.85078721204012];
    const SurreyCentral = [49.19045278629459, -122.84743981518676];
    const KingGeorge = [49.183721004558926, -122.8446932331487];

    const Sapperton = [49.224867245515924, -122.88940687280657];
    const Braid = [49.23346574487059, -122.88289468815077];
    const Lougheed = [49.24873987579262, -122.89720327202059];
    const Production = [49.25367827603813, -122.91875717413494];

    const traintoproduction = [
        Columbia,
        Sapperton,
        Braid,
        Lougheed,
        Production
    ]

    const polyline = [
        [49.28594, -123.11129], //Waterfront Station
        [49.285581150633966, -123.12012245876285], //Burrard Station
        [49.28276095478255, -123.11653428814928], //Granville Station
        [49.27979845679656, -123.10987266116597], //Stadium-Chinatown Station
        [49.27386359520572, -123.10032729917528], //Main Street–Science World Station
        [49.2633411509439, -123.06975238147467], //Commercial-Broadway Station
        [49.2490691315998, -123.05594851569174], //Nanaimo Station
        [49.245026747979736, -123.04620840477385], // 29th Avenue Station
        [49.238527289018805, -123.03173634397011], //Patterson Station
        [49.227012795117936, -123.00356583754541], //Metrotown Station
        [49.22090265099934, -122.98828797503771], //Royal Oak Station
        [49.21333399396498, -122.95936303302729], //Edmonds Station
        [49.20094132078033, -122.94914918107322], //22nd Street Station
        [49.20234336279984, -122.912928630534], //New Westminster Station
        [49.20548379245932, -122.9063196675326], //Columbia Station
        [49.205315559962315, -122.87413315936365], //Scott Road Station
        [49.19981965847605, -122.85078721204012], //Gateway Station
        [49.19045278629459, -122.84743981518676], //Surrey Central Station
        [49.183721004558926, -122.8446932331487], //King George Station
    ]

    const polylineproduction = [
        [49.20548379245932, -122.9063196675326], //Columbia Station
        [49.224867245515924, -122.88940687280657], //Sapperton
        [49.23346574487059, -122.88289468815077], //Braid
        [49.24873987579262, -122.89720327202059], //Lougheed Town Centre
        [49.25367827603813, -122.91875717413494], //Production Way-University
    ]

    const blueOption = { color: 'blue' };
    const darkBlueOption = { color: '#183152' };
    const orangeOption = { color: 'orange' };

    return (
        <MapContainer className={style.map} center={[49.227012795117936, -123.00356583754541]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={Waterfront}>
                <Popup>
                    Terminus Station: Waterfront
                </Popup>
            </Marker>

            <Marker position={Burrard}>
                <Popup>
                    Burrard Station
                </Popup>
            </Marker>

            <Marker position={Granville}>
                <Popup>
                    Granville Station
                </Popup>
            </Marker>

            <Marker position={StadiumChinatown}>
                <Popup>
                    Stadium-Chinatown Station
                </Popup>
            </Marker>

            <Marker position={MainStreet}>
                <Popup>
                    Main Street–Science World Station
                </Popup>
            </Marker>

            <Marker position={Commercial}>
                <Popup>
                    Commercial-Broadway Station
                </Popup>
            </Marker>

            <Marker position={Nanaimo}>
                <Popup>
                    Nanaimo Station
                </Popup>
            </Marker>

            <Marker position={Avenue}>
                <Popup>
                    29th Avenue Station
                </Popup>
            </Marker>

            <Marker position={Joyce}>
                <Popup>
                    Joyce-Collingwood Station
                </Popup>
            </Marker>

            <Marker position={Patterson}>
                <Popup>
                    Patterson Station
                </Popup>
            </Marker>

            <Marker position={Metrotown}>
                <Popup>
                    Metrotown Station
                </Popup>
            </Marker>

            <Marker position={Royal}>
                <Popup>
                    Royal Oak Station
                </Popup>
            </Marker>

            <Marker position={Edmonds}>
                <Popup>
                    Edmonds Station
                </Popup>
            </Marker>

            <Marker position={TwStreet}>
                <Popup>
                    22nd Street Station
                </Popup>
            </Marker>

            <Marker position={NewWest}>
                <Popup>
                    New Westminster Station
                </Popup>
            </Marker>

            <Marker position={Columbia}>
                <Popup>
                    Columbia Station
                </Popup>
            </Marker>

            <Marker position={ScottRoad}>
                <Popup>
                    Scott Road Station
                </Popup>
            </Marker>

            <Marker position={Gateway}>
                <Popup>
                    Gateway Station
                </Popup>
            </Marker>

            <Marker position={SurreyCentral}>
                <Popup>
                    Surrey Central Station
                </Popup>
            </Marker>

            <Marker position={KingGeorge}>
                <Popup>
                    Terminus Station: King George
                </Popup>
            </Marker>
            <Marker position={Sapperton}>
                <Popup>
                    Sapperton Station
                </Popup>
            </Marker>

            <Marker position={Braid}>
                <Popup>
                    Braid Station
                </Popup>
            </Marker>
            <Marker position={Lougheed}>
                <Popup>
                    Lougheed Town Centre Station
                </Popup>
            </Marker>

            <Marker position={Production}>
                <Popup>
                    Terminus Station: Production Way-University
                </Popup>
            </Marker>

            <CircleMarker center={[49.183721004558926, -122.8446932331487]} pathOptions={orangeOption} radius={20}>
                <Popup>Terminus Station from Waterfront</Popup>
            </CircleMarker>

            <CircleMarker center={[49.28524524981317, -123.11434751643503]} pathOptions={orangeOption} radius={20}>
                <Popup>Terminus Station from King George</Popup>
            </CircleMarker>

            <CircleMarker center={[49.25367827603813, -122.91875717413494]} pathOptions={orangeOption} radius={20}>
                <Popup>Terminus Station from Columbia</Popup>
            </CircleMarker>

            <Polyline pathOptions={blueOption} positions={polyline} />
            <Polyline pathOptions={darkBlueOption} positions={polylineproduction} />


        </MapContainer>

    )
}