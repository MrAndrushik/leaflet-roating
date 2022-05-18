import React from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

const RoutingMachine = ({ Loading, Unloading }) => {
    const map = useMap();
    L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.8.0/dist/images/";

    React.useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(Number(`${Loading.lat}`), Number(`${Loading.lon}`)),
                L.latLng(
                    Number(`${Unloading.lat}`),
                    Number(`${Unloading.lon}`)
                ),
            ],
            lineOptions: {
                styles: [{ color: "#e94a4a", weight: 4 }],
            },
            show: true,
            addWaypoints: false,
            routeWhileDragging: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,
        }).addTo(map);

        return () => map.removeControl(routingControl);
    }, [map, Loading, Unloading]);

    return null;
};

export default RoutingMachine;
