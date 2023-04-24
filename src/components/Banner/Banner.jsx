import assiette from '../../assets/images/assiette.png';
import styles from './Banner.module.css'
import {Link} from 'react-router-dom'

function Banner(){
    return(
        
        <div className={styles.banniere}>
        <Link to='/' className={styles.title}>Mes menus hebdo avec <span className={styles.cursive}>Meal Planner</span></ Link>
        <img src={assiette} alt=""/>
        </div>
    )
};

export default Banner;