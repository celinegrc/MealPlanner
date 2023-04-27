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
            <Text style={stylesPDF.text1}>Weekly menus</Text>
            <Text style={stylesPDF.text2}>Monday lunch:  {inputValues.LundiMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Monday dinner:  {inputValues.LundiSoir}</Text>
           <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Tuesday lunch:  {inputValues.MardiMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Tuesday dinner:  {inputValues.MardiSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Wednesday lunch:  {inputValues.MercrediMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Wednesday dinner:  {inputValues.MercrediSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Thursday lunch:  {inputValues.JeudiMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Thursday dinner:  {inputValues.JeudiSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Friday lunch:  {inputValues.VendrediMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Friday dinner:  {inputValues.VendrediSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Saturday lunch:  {inputValues.SamediMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Saturday dinner:  {inputValues.SamediSoir}</Text>
            <Text style={stylesPDF.text1}></Text>
            <Text style={stylesPDF.text2}>Sunday lunch:  {inputValues.DimancheMidi}</Text>
            <Text style={stylesPDF.text2Bis}>Sunday dinner:  {inputValues.DimancheSoir}</Text>
            <Text style={stylesPDF.text3}>My shopping list</Text>
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