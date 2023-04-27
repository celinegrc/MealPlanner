import styles from './Home.module.css';
import {Link} from 'react-router-dom';
import Banner from '../../components/Banner/Banner';



function Home(){
    return(
        <div className ={styles.home_container}>
        <Banner />
        <p>I simplify my life! I print my menus for the week, I prepare my shopping list, and I don't have to think about it anymore</p>
        <div className ={styles.button_container}>
        <Link to='/form' className = {styles.button_home}>I enter and print my menus for the week</Link>
        <Link to = "/idee-repas"className ={styles.button_home}>I have no meal ideas</Link>
        </div>
        </div>
    )
    
}

export default Home