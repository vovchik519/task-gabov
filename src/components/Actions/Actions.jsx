import React from "react";
import styles from "./Actions.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Actions = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    const addCash = (sum) => {
        dispatch({ type: 'ADD__CASH', payload: sum })
    }
    const getCash = (sum) => {
        dispatch({ type: 'GET__CASH', payload: sum })
    }
    return (
        <div>
            <span>{cash}</span>
            <button type="button" onClick={() => addCash(Number(prompt()))}>добавить</button>
            <button type="button" onClick={() => getCash(Number(prompt()))}>убрать</button>
        </div>
    );
};

export default Actions;