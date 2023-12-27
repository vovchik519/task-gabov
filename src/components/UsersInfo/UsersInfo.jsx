import react from 'react';
import styles from './UsersInfo.module.scss'

function UsersInfo({ name, username, phone, email, website }) {
    return (
        <>
            <details className={styles.wrapper}>
                <summary>{name}</summary>
                <p>{username}</p>
                <a href={`tel:${phone}`}>{phone}</a>
                <a href={`mailto:${email}`}>{email}</a>
                <a href={`http://${website}`} target='_blank'>{website}</a>
            </details>
        </>
    )
}

export default UsersInfo;