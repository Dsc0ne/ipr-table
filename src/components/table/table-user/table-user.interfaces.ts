import React from "react";

export interface DataType {
    key: React.Key;
    name: string;
    age: number;
    street: string;
    building: string;
    number: number;
    companyAddress: string;
    companyName: string;
    gender: string;
}

export interface Item {
    key: string;
    name: string;
    age: string;
    address: string;
}

export interface EditableRowProps {
    index: number;
}