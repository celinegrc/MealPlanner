import React from 'react';
import { useState } from 'react';
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
    link.download = 'document.pdf';
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
    }));
}

return (
    <>
    <Banner />
    <div className={styles.form_container}>
        <form>
        < section className ={styles.day1_container}>
            <div>
            <div className ={styles.day_container}>
            <label>Lundi</label>
            <input
                value={inputValues.LundiMidi}
                onChange={handleInputChange}
                type='text'
                name='LundiMidi'
                placeholder='Midi'
            />
            <input
                value={inputValues.LundiSoir}
                onChange={handleInputChange}
                type='text'
                name='LundiSoir'
                placeholder='Soir'
            />
            </div>
            <div className ={styles.day_container}>
            <label>Mardi</label>
            <input
                value={inputValues.MardiMidi}
                onChange={handleInputChange}
                type='text'
                name='MardiMidi'
                placeholder='Midi'
            />
            <input
                value={inputValues.MardiSoir}
                onChange={handleInputChange}
                type='text'
                name='MardiSoir'
                placeholder='Soir'
            />
            </div>
            <div className ={styles.day_container}>
            <label>Mercredi</label>
            <input
                value={inputValues.MercrediMidi}
                onChange={handleInputChange}
                type='text'
                name='MercrediMidi'
                placeholder='Midi'
            />
            <input
                value={inputValues.MercrediSoir}
                onChange={handleInputChange}
                type='text'
                name='MercrediSoir'
                placeholder='Soir'
            />
            </div>
            <div className ={styles.day_container}>
            <label>Jeudi</label>
            <input
                value={inputValues.JeudiMidi}
                onChange={handleInputChange}
                type='text'
                name='JeudiMidi'
                placeholder='Midi'
            />
            <input
                value={inputValues.JeudiSoir}
                onChange={handleInputChange}
                type='text'
                name='JeudiSoir'
                placeholder='Soir'
            />
            </div>
        </div>
        <div >
            <div className ={styles.day_container}>
            <label>Vendredi</label>
            <input
                value={inputValues.VendrediMidi}
                onChange={handleInputChange}
                type='text'
                name='VendrediMidi'
                placeholder='Midi'
            />
             <input
                value={inputValues.VendrediSoir}
                onChange={handleInputChange}
                type='text'
                name='VendrediSoir'
                placeholder='Soir'
            />
            </div>
            <div className ={styles.day_container}>
            <label>Samedi</label>
            <input
                value={inputValues.SamediMidi}
                onChange={handleInputChange}
                type='text'
                name='SamediMidi'
                placeholder='Midi'
            />
             <input
                value={inputValues.SamediSoir}
                onChange={handleInputChange}
                type='text'
                name='SamediSoir'
                placeholder='Soir'
            />
            </div>
            <div className ={styles.day_container}>
            <label>Dimanche</label>
            <input
                value={inputValues.DimancheMidi}
                onChange={handleInputChange}
                type='text'
                name='DimancheMidi'
                placeholder='Midi'
            />
             <input
                value={inputValues.DimancheSoir}
                onChange={handleInputChange}
                type='text'
                name='DimancheSoir'
                placeholder='Soir'
            />
            </div>
            <div className={styles.button_container}>
                <button onClick={(e) => generatePdf(e,inputValues)}>Générer PDF</button>
                <button onClick ={clear}>Effacer</button>
            </div>
        </div>
        </section>
        <Link to ='/idee-repas'><p className={styles.link_home}>Je n'ai plus d'idées</p></Link>
        </form>
    </div>
    </>
);
}

export default Form;