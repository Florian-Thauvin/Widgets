import React from 'react';
import { DataType } from '../../../../common/model/WidgetDefinition';

export interface IOrder<T extends DataType> {
    attribute: keyof T;
    index: number;
    type: 'ascending' | 'descending';
}

interface IOrderProps<T extends DataType> {
    orders: IOrder<T>[];
    index: number;
    attribute: keyof T;
    setOrder: React.Dispatch<React.SetStateAction<IOrder<T>[]>>;
}

const findOrder = <T extends DataType>(orders: IOrder<T>[], index: number, attribute: keyof T): IOrder<T> => {
    const order: IOrder<T> | undefined = orders.find((value: IOrder<T>) => value.index === index);
    return order ? order : { attribute, index, type: 'ascending' };
};

const updateOrderType = <T extends DataType>(orders: IOrder<T>[], index: number, order: IOrder<T>, type: 'ascending' | 'descending') => {
    const oldIndex = orders.findIndex((value) => value.index === index);

    if (oldIndex === -1) {
        return [...orders, { ...order, type }];
    } else {
        return [...orders.slice(0, oldIndex), { ...order, type }, ...orders.slice(oldIndex + 1)];
    }
};

export const OrderParamsView = <T extends DataType>(props: IOrderProps<T>): JSX.Element => {
    const { orders, index } = props;
    const order = findOrder(orders, index, props.attribute);

    const onOrderClick = (type: 'ascending' | 'descending') => {
        props.setOrder(updateOrderType(orders, index, order, type));
    };

    return (
        <div>
            <button onClick={() => onOrderClick('ascending')}>ascending</button>
            <button onClick={() => onOrderClick('descending')}>descending</button>
        </div>
    );
};

export function applyOrders<T extends DataType>(a: T, b: T, orders: IOrder<T>[], index: number): number {
    let compare = 0;

    if (index < orders.length) {
        const attributeKey = orders[index].attribute;
        const factor = orders[index].type === 'ascending' ? 1 : -1;

        const valueA = a[attributeKey];
        const valueB = b[attributeKey];

        if (valueA) {
            if (valueB) {
                compare = factor * valueA.toString().localeCompare(valueB.toString());
            } else {
                // If A is defined and B is undefined, A will be before B
                compare = 1;
            }
        } else if (valueB) {
            // If A is undefined and B is defined, B will be before A
            compare = -1;
        }

        // If we can't determine an order, apply the new one
        if (compare === 0) {
            compare = applyOrders(a, b, orders, index + 1);
        }
    }

    return compare;
}
