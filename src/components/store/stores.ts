import {createStore} from "@reduxjs/toolkit";
const userArray: [] = [];
const dateTimeArray: [] = [];
const usersReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ]
        default:
            return state
    }
}

const dateTimeReducer = (state:any, action: any) => {
    switch (action.type) {
        case 'ADD_DAY':
            return [
                ...state,
                {
                    date: action.date,
                    time: action.time,
                }
            ]
        default:
            return state
    }
}
export const userStore = createStore(usersReducer, userArray);
export const dateTimeStore = createStore(dateTimeReducer, dateTimeArray);
