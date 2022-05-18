import { Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrders } from "../redux/toolkitSlice";
const { Option } = Select;

const UnloadingSelect = ({ value, id }) => {
    const { unloading } = useSelector((state) => state.toolkit.addresses);
    const defaultValue = unloading.filter((item) => item.id === value)[0].name;
    const dispatch = useDispatch();

    return (
        <Select
            id={id}
            onChange={(value, option) => {
                dispatch(changeOrders({ unloading: option.id, id: id }));
            }}
            defaultValue={defaultValue}
            style={{ minWidth: 150 }}
        >
            {unloading.map((item) => (
                <Option key={item.id} id={item.id} value={item.name}>
                    {item.name}
                </Option>
            ))}
        </Select>
    );
};

export default UnloadingSelect;
