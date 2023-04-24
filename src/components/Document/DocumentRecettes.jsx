import { Document, Page, Text, StyleSheet} from '@react-pdf/renderer';

const stylesPDF = StyleSheet.create({
    
    title: {
      textAlign:'center',
      MarginBottom:15,
      padding: 10,
      color: "#3d3636",
      fontSize:23,
    },
    textInstructions: {
        marginLeft: 20,
        marginRight:20,
        marginBottom:-5,
        padding: 10,
        fontSize:15,
        border:'1 solid black',
      },
      text: {
        textAlign: 'center',
        fontSize:20,
        margin:25,
      }
  });

function DocumentRecettes({titleRecipe, ingredients, mesures, instructions}) {

    return (
        <Document>
         <Page style={stylesPDF.pageRecette} size="A4">
            <Text style={stylesPDF.title}> {titleRecipe} </Text>
            <Text style={stylesPDF.text}> {ingredients}, {mesures}</Text>
            <Text style={stylesPDF.textInstructions}>{instructions} </Text>
        </Page>
      </Document>
 
    
    )
    
}

export default DocumentRecettes;