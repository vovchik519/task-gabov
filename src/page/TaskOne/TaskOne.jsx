import react, { useEffect, useState } from 'react';
import UsersInfo from '../../components/UsersInfo/UsersInfo';
import axios from 'axios';

const useFetch = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            setData(response.data);
        };
        fetchData();
    }, []);
    return data;
};
function TaskOne() {
    const result = useFetch();
    return (
        <div>
            {result && result.map((item, index) => (
                <UsersInfo
                    key={index}
                    name={item.name}
                    username={item.username}
                    phone={item.phone}
                    email={item.email}
                    website={item.website}
                />
            ))}
        </div>
    )
}

export default TaskOne;