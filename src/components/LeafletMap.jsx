import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RoutingMachine from "./RoutingMachine";
import { useSelector } from "react-redux";

const LeafletMap = () => {
    const activeOrder = useSelector((state) => state.toolkit.activeOrder);
    const orders = useSelector((state) => state.toolkit.orders);
    const Loading = useSelector(
        (state) =>
            state.toolkit.addresses.loading.filter(
                (item) =>
                    item.id ===
                    orders.find((order) => order.id === activeOrder)?.loading
            )[0]
    );
    const Unloading = useSelector(
        (state) =>
            state.toolkit.addresses.unloading.filter(
                (item) =>
                    item.id ===
                    orders.find((order) => order.id === activeOrder)?.unloading
            )[0]
    );

    return (
        <MapContainer
            center={[55.702868, 37.530865]}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {Object.keys(activeOrder).length !== 0 && (
                <RoutingMachine Loading={Loading} Unloading={Unloading} />
            )}
        </MapContainer>
    );
};

export default LeafletMap;
