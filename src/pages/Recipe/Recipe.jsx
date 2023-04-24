import { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import styles from './Recipe.module.css'
import Collapse from '../../components/Collapse/Collapse';
import DocumentRecettes from '../../components/Document/DocumentRecettes';
import {  pdf  } from '@react-pdf/renderer';



function Recipe() {

  const [recipe, setRecipe] = useState(null);  

  useEffect(() => {
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php?language=fr';
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setRecipe(data.meals[0]);
      })
      .catch((error) => console.error(error));
  }, []);
         

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
      if (ingredient && ingredient !== "") {
        ingredients.push(ingredient)}}

  const mesures = []
  for (let i=0; i<15;i++){
    const mesure = recipe[`strMeasure${i}`]
    if (mesure && mesure !=="" && mesure !==" "){
     mesures.push(mesure)}}

     const instructions = recipe.strInstructions
     const titleRecipe = recipe.strMeal


     function generateRecipePdf({titleRecipe, ingredients, mesures, instructions}) {
     
      console.log({ingredients})
    const documentData = (
      <DocumentRecettes titleRecipe ={titleRecipe} ingredients = {ingredients} mesures ={mesures} instructions ={instructions}/>
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



  return (
    <div>
      <Banner/>
      <Collapse 
        collapseTitle = {<div >
                          <h1 
                            className={styles.recipe_title}>Idée repas : <span className={styles.recipe_title_span}>{recipe.strMeal}</span>
                          </h1>
                          <img  className={styles.recipe_image}src={recipe.strMealThumb} alt={recipe.strMeal} />
                        </div>} 
        collapseContent = {<div>
                              <div className ={styles.print}  
                                onClick={() => generateRecipePdf({titleRecipe, ingredients, mesures, instructions})}>
                                  Télécharger le recette
                              </div>
                              <div className={styles.ingredient_mesure_container}>
                                <ul className={styles.ingredientList}>
                                  {ingredients.map((ingredient, index) => (
                                  <li key={index}>{ingredient}</li>
                                  ))}
                                </ul >
                                <ul className={styles.mesureList}>
                                {mesures.map((mesure, index)=>
                                  <li key={index}>{mesure}</li>)
                                  }
                                </ul>
                              </div>
                                <div className={styles.recipe_instructions}>
                                  {instructions}
                                </div>
                          </div>}
        />
    </div>
  )
}

export default Recipe;