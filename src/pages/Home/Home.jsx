import styles from './Home.module.css';
import {Link} from 'react-router-dom';
import Banner from '../../components/Banner/Banner';



function Home(){
    return(
        <div className ={styles.home_container}>
        <Banner />
        <p>Je me simplifie la vie ! 
            J'imprime mes menus pour la semaine, je prépare ma liste de courses et je n'y pense plus.</p>
        <div className ={styles.button_container}>
        <Link to='/form' className = {styles.button_home}> Je renseigne et imprime mes menus de la semaine</Link>
        <Link to = "/idee-repas"className ={styles.button_home}> Je n'ai pas d'idées de repas</Link>
        </div>
        </div>
    )
    
}

export default Home