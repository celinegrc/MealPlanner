import styles from './Collapse.module.css'
import {useState} from 'react'
import arrowOpen from '../../assets/images/arrow_open.png'

function Collapse({collapseTitle, collapseContent}){
const [isOpen,setIsOpen]= useState(false);

    return(
        <div className={styles.collapse_container}>
            <div >
            {collapseTitle}
            </div >
            <div className={styles.open_collapse} onClick={()=>setIsOpen(prevState => !prevState)}> 
            <h2 className={styles.see_recipe}>Voir la recette</h2>
            <img className ={styles.arrow_open}src= {arrowOpen} alt="ouvrir" />
            </div>

            {isOpen &&
                 <div className={styles.collapse_content} >
                    {collapseContent}
                </div>}
            
        </div>
    )
}

export default Collapse;