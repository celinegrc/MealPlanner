import styles from './Home.module.css';
import {Link} from 'react-router-dom';
import Banner from '../../components/Banner/Banner';



function Home(){
    return(
        <div className ={styles.home_container}>
        <Banner />
        <p>Simplifiez-vous la vie ! Imprimez vos menus pour la semaine, préparez votre liste de courses et n'y pensez plus.</p>
        <div className ={styles.button_container}>
        <Link to='/form' className = {styles.button_home}> Je renseigne et imprime mes menus de la semaine</Link>
        <Link to = "/idee-repas"className ={styles.button_home}> Je n'ai pas d'idées de repas</Link>
        </div>
        </div>
    )
    
}

export default Home