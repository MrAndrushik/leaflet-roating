import React from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import LoadingSelect from "./LoadingSelect";
import UnloadingSelect from "./UnloadingSelect";
import { setActiveOrder } from "../redux/toolkitSlice";

const Navbar = () => {
    const refNav = React.useRef(null);
    const orders = useSelector((state) => state.toolkit.orders);
    const activeOrder = useSelector((state) => state.toolkit.activeOrder);
    const dispatch = useDispatch();
    let isResizing = false;

    document.onmousedown = (e) => {
        if (
            e.clientX + 30 >= refNav.current.clientWidth &&
            e.clientX - 30 <= refNav.current.clientWidth
        )
            isResizing = true;
    };

    document.onmouseup = function (e) {
        isResizing = false;
    };

    document.onmousemove = function (e) {
        if (!isResizing) {
            return;
        } else {
            refNav.current.style.width = e.clientX + "px";
        }
    };

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Loading",
            dataIndex: "loading",
            key: "loading",
            render: (place, obj) => {
                return <LoadingSelect value={place} id={obj.id} />;
            },
        },
        {
            title: "Unloading",
            dataIndex: "unloading",
            key: "unloading",
            render: (place, obj) => {
                return <UnloadingSelect value={place} id={obj.id} />;
            },
        },
    ];

    return (
        <div ref={refNav} className="navbar">
            <div className="navbar__container">
                <Table
                    dataSource={orders}
                    columns={columns}
                    pagination={false}
                    rowClassName={(record) =>
                        record.id === activeOrder ? "active-row" : ""
                    }
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                dispatch(setActiveOrder(record.id));
                            },
                        };
                    }}
                />
                ;
            </div>
        </div>
    );
};

export default Navbar;
