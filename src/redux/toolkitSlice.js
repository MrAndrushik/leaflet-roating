import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        addresses: {
            loading: [
                {
                    id: "STR-13",
                    name: "Строгино",
                    lat: 55.80444321556234,
                    lon: 37.40349762314891,
                },
                {
                    id: "M-1",
                    name: "Марксистская",
                    lat: 55.74181905634003,
                    lon: 37.65306675758969,
                },
                {
                    id: "T-12",
                    name: "Тульская",
                    lat: 55.711587711268905,
                    lon: 37.62203653271623,
                },
                {
                    id: "O-1",
                    name: "Одинцово",
                    lat: 55.67504224846832,
                    lon: 37.28144393608088,
                },
            ],
            unloading: [
                {
                    id: "SB-1",
                    name: "Санкт-Петербург",
                    lat: 59.91990628505451,
                    lon: 30.32912957796007,
                },
                {
                    id: "KP",
                    name: "Коптево",
                    lat: 55.84029659325396,
                    lon: 37.52008984533713,
                },
                {
                    id: "TL-1",
                    name: "Тула",
                    lat: 54.19689118087162,
                    lon: 37.660148492793354,
                },
            ],
        },
        orders: [
            {
                key: "1242",
                id: "1242",
                loading: "STR-13",
                unloading: "KP",
            },
            {
                key: "342",
                id: "342",
                loading: "T-12",
                unloading: "KP",
            },
            {
                key: "42",
                id: "42",
                loading: "O-1",
                unloading: "KP",
            },
            {
                key: "1452",
                id: "1452",
                loading: "STR-13",
                unloading: "SB-1",
            },
        ],
        isLoading: true,
        activeOrder: "",
    },
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setActiveOrder(state, action) {
            state.activeOrder = action.payload;
        },
        changeOrders(state, action) {
            if (action.payload.loading) {
                state.orders.find(
                    (order) => order.id === action.payload.id
                ).loading = action.payload.loading;
            } else if (action.payload.unloading) {
                state.orders.find(
                    (order) => order.id === action.payload.id
                ).unloading = action.payload.unloading;
            }
        },
        changeActiveOrder(state, action) {
            if (action.payload.loading) {
                state.activeOrder.loading = action.payload.loading;
            }
        },
    },
});

export default toolkitSlice.reducer;
export const { setIsLoading, setActiveOrder, changeOrders, changeActiveOrder } =
    toolkitSlice.actions;
