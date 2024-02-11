import React, { useEffect, useState } from "react";
import styles from "./DateView.module.scss";

const DateView = ({ date }) => {
    const [dateDay, setDateDay] = useState(null)
    useEffect(() => {
        if (date) {
            setDateDay(date.split(' ').map(part => part.split('-')))
        }
    }, [date])
    if (!dateDay) {
        return null;
    }

    return (
        <p className={styles.dateView}>
            {dateDay[0][2]}
            <span>
                {dateDay[0][1]}
            </span>
        </p>
    );
};

export default DateView;