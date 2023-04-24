import { Document, Page, Text, Font, StyleSheet} from '@react-pdf/renderer';

Font.register({ family: 'Pacifico', src : 
"https://fonts.googleapis.com/css2?family=Pacifico&display=swap.ttf" });

const stylesPDF = StyleSheet.create({
    
    text1: {
      textAlign:'center',
      MarginBottom:5,
      padding: 10,
      color: "#3d3636",
      fontSize:23,
      FontFamily: "Pacifico"
    },
    text2: {
        marginLeft: 20,
        marginRight:20,
        marginBottom:-5,
        padding: 10,
        fontSize:15,
        borderTop:'1 solid black',
        borderLeft:'1 solid black',
        borderRight: '1 solid black'
      },
      text2Bis: {
        marginLeft: 20,
        marginRight:20,
        marginBottom:-5,
        padding: 10,
        fontSize:15,
        borderBottom:'1 solid black',
        borderLeft:'1 solid black',
        borderRight: '1 solid black'
      },
      text3: {
        textAlign: 'center',
        fontSize:20,
        marginTop:15,
      },
      text4: {
        marginLeft: 15,
        marginBottom:-10,
        marginTop:-5,
        padding: 10,
        fontSize:15
      },
      text5: {
       textAlign: 'center',
      fontSize:10
      },
  });


function DocumentPdf({inputValues}) {
    console.log('ok')
    return (
 
        <Document>
         <Page size="A4">
            <Text style={stylesPDF.text1}>Menus de la semaine</Text>
            <Text style={stylesPDF.text2}>Lundi midi:  {inputValues.LundiMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Lundi soir:  {inputValues.LundiSoir}</Text>
           <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Mardi midi:  {inputValues.MardiMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Mardi soir:  {inputValues.MardiSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Mercredi midi:  {inputValues.MercrediMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Mercredi soir:  {inputValues.MercrediSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Jeudi midi:  {inputValues.JeudiMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Jeudi soir:  {inputValues.JeudiSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Vendredi midi:  {inputValues.VendrediMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Vendredi soir:  {inputValues.VendrediSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Samedi midi:  {inputValues.SamediMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Samedi soir:  {inputValues.SamediSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Dimanche midi:  {inputValues.DimancheMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Dimanche soir:  {inputValues.DimancheSoir}</Text>
            <Text style={stylesPDF.text3}>Ma liste de courses</Text>
            <Text style={stylesPDF.text4}>---------------------------------------------------------------------------------------------------------</Text>
            <Text style={stylesPDF.text4}>---------------------------------------------------------------------------------------------------------</Text>
            <Text style={stylesPDF.text4}>---------------------------------------------------------------------------------------------------------</Text>
            <Text style={stylesPDF.text4}>---------------------------------------------------------------------------------------------------------</Text>
            <Text style={stylesPDF.text4}>---------------------------------------------------------------------------------------------------------</Text>
            <Text style={stylesPDF.text4}>---------------------------------------------------------------------------------------------------------</Text>
            <Text style={stylesPDF.text4}>---------------------------------------------------------------------------------------------------------</Text>
            <Text style={stylesPDF.text5}>© Meal Planner</Text>
        </Page>
      </Document>
 
    
    )
    
}

export default DocumentPdf;