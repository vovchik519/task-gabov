import react from 'react';
import styles from './style.module.scss'

function UsersInfo(props) {
    return (
        <>
            <details className={styles.wrapper}>
                <summary>{props.name}</summary>
                <p>{props.username}</p>
                <a href={`tel:${props.phone}`}>{props.phone}</a>
                <a href={`mailto:${props.email}`}>{props.email}</a>
                <a href={`http://${props.website}`} target='_blank'>{props.website}</a>
            </details>
        </>
    )
}

export default UsersInfo;