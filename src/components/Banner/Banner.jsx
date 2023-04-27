import assiette from '../../assets/images/assiette.png';
import styles from './Banner.module.css'
import {Link} from 'react-router-dom'

function Banner(){
    return(
        
        <header className={styles.banniere}>
        <h1 className={styles.title}>Weekly menus with <Link to='/' className={styles.cursive}>Meal Planner</Link></ h1>
        <img src={assiette} alt=""/>
        </header>
    )
};

export default Banner;