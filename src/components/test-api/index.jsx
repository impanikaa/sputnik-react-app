import { useEffect, useState } from 'react';
import styles from './style.module.css'
import Loader from './loader';

const TestApi = () => {

    const [teamData, setTeamData] = useState([])
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '8e94ebe819msh5bb5c672f1b0111p1584ccjsn116c76ced694',
                    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
                }
            };

            fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setTeamData(res.data);
                setIsLoad(false);
            },)
        }, 2000)

        return () => clearTimeout(timer);

        
    }, []);

    return(
        <div>
            <h2 className={styles.h2}>
                КОМАНДЫ
            </h2>
            {isLoad && <div> <Loader></Loader> </div> }
            {teamData.map((el) => {
                return(
                    <div className={styles.container}>
                        <div key={el.id} className={styles.data_container}>
                            <button className={styles.button} onClick={() => {
                                setTeamData(teamData.filter((filterElement) => el.id !== filterElement.id))}}>
                            <span className={styles.text}>Delete</span>
                            <span className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666
                                     3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">
                            </path></svg></span></button>
                            {el.id}. {el.abbreviation} {el.city}
                        </div>
                    </div>
                )})}
        </div>
    )
}


export default TestApi;