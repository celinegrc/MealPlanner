import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Form.module.css'
import Banner from '../../components/Banner/Banner';
import DocumentPdf from '../../components/Document/Document'
import {  pdf  } from '@react-pdf/renderer';
import {Link} from 'react-router-dom'



function generatePdf(e, inputValues) {
    e.preventDefault();
  const documentData = (
    <DocumentPdf inputValues ={inputValues}/>
);

const pdfBlob = pdf(documentData).toBlob();
  pdfBlob.then(function(blob) {
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = 'meal_planner.pdf';
    link.click();
    URL.revokeObjectURL(objectUrl);
  });
}

function Form (){

const [inputValues, setInputValues] = useState({
LundiMidi: '',
LundiSoir: '',
MardiMidi: '',
MardiSoir: '',
MercrediMidi: '',
MercrediSoir: '',
JeudiMidi: '',
JeudiSoir: '',
VendrediMidi: '',
VendrediSoir:'',
SamediMidi: '',
SamediSoir:'',
DimancheMidi: '',
DimancheSoir: ''
});



useEffect(() => {
    const savedInputValues = JSON.parse(localStorage.getItem('inputValues'));
    if (savedInputValues) {
      setInputValues(savedInputValues);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  }, [inputValues]);

  console.log(localStorage)
function clear(e){
    e.preventDefault();
    setInputValues({
        LundiMidi: '',
        LundiSoir: '',
        MardiMidi: '',
        MardiSoir: '',
        MercrediMidi: '',
        MercrediSoir: '',
        JeudiMidi: '',
        JeudiSoir: '',
        VendrediMidi: '',
        VendrediSoir:'',
        SamediMidi: '',
        SamediSoir:'',
        DimancheMidi: '',
        DimancheSoir: ''
    });
}

function handleInputChange(e) {
    const { name, value } = e.target;
    setInputValues(prevState => ({
        ...prevState,
        [name]: value,
    } 
    ));
}

return (
    <>
    <Banner />
    <div className={styles.form_container}>
        <form>
            <section className={styles.day1_container}>
        <div>
            <div className={styles.day_container}>
            <label htmlFor="Lundi">Monday</label>
            <input
                value={inputValues.LundiMidi}
                onChange={handleInputChange}
                type="text"
                name="LundiMidi"
                id="Lundi"
                placeholder="Lunch"
            />
            <input
                value={inputValues.LundiSoir}
                onChange={handleInputChange}
                type="text"
                name="LundiSoir"
                id="Lundi"
                placeholder="Dinner"
            />
            </div>
            <div className={styles.day_container}>
            <label htmlFor="Mercredi">Wednesday</label>
            <input
                value={inputValues.MercrediMidi}
                onChange={handleInputChange}
                type="text"
                name="MercrediMidi"
                id="Mercredi"
                placeholder="Lunch"
            />
            <input
                value={inputValues.MercrediSoir}
                onChange={handleInputChange}
                type="text"
                name="MercrediSoir"
                id="Mercredi"
                placeholder="Dinner"
            />
            </div>
            <div className={styles.day_container}>
            <label htmlFor="Vendredi">Friday</label>
            <input
                value={inputValues.VendrediMidi}
                onChange={handleInputChange}
                type="text"
                name="VendrediMidi"
                id="Vendredi"
                placeholder="Lunch"
            />
            <input
                value={inputValues.VendrediSoir}
                onChange={handleInputChange}
                type="text"
                name="VendrediSoir"
                id="Vendredi"
                placeholder="Dinner"
            />
            </div>
            <div className={styles.day_container}>
            <label htmlFor="Dimanche">Sunday</label>
            <input
                value={inputValues.DimancheMidi}
                onChange={handleInputChange}
                type="text"
                name="DimancheMidi"
                id="Dimanche"
                placeholder="Lunch"
            />
            <input
                value={inputValues.DimancheSoir}
                onChange={handleInputChange}
                type="text"
                name="DimancheSoir"
                id="Dimanche"
                placeholder="Dinner"
            />
            </div>
        </div>
        <div>
            <div className={styles.day_container}>
            <label htmlFor="Mardi">Tuesday</label>
            <input
                value={inputValues.MardiMidi}
                onChange={handleInputChange}
                type="text"
                name="MardiiMidi"
                id="Mardi"
                placeholder="Lunch"
            />
            <input
                value={inputValues.MardiSoir}
                onChange={handleInputChange}
                type="text"
                name="MardiSoir"
                id="Mardi"
                placeholder="Dinner"
            />
            </div>
                <div className ={styles.day_container}>
                <label htmlFor="Jeudi">Thursday</label>
                <input
                    value={inputValues.JeudiMidi}
                    onChange={handleInputChange}
                    type='text'
                    id="Jeudi"
                    name='JeudiMidi'
                    placeholder='Lunch'
                />
                <input
                    value={inputValues.JeudiSoir}
                    onChange={handleInputChange}
                    type='text'
                    id="Jeudi"
                    name='JeudiSoir'
                    placeholder='Dinner'
                />
                </div>
                <div className ={styles.day_container}>
                <label htmlFor="Samedi">Saturday</label>
                <input
                    value={inputValues.SamediMidi}
                    onChange={handleInputChange}
                    type='text'
                    id="Samedi"
                    name='SamediMidi'
                    placeholder='Lunch'
                />
                <input
                    value={inputValues.SamediSoir}
                    onChange={handleInputChange}
                    type='text'
                    id="Samedi"
                    name='SamediSoir'
                    placeholder='Dinner'
                />
                </div>
                <div className={styles.button_container}>
                    <button onClick={(e) => generatePdf(e,inputValues)}>Create PDF</button>
                    <button onClick ={clear}>Erase</button>
                </div>
            </div>
        </section>
        <Link to ='/idee-repas'><p className={styles.link_home}>No more ideas ?</p></Link>
        </form>
    </div>
    </>
)}

export default Form;