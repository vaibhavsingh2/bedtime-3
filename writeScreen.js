import * as React from 'react';
import {Text,View,TouchableOpacity,TextInput,StyleSheet,EasingNode} from 'react-native';


export default class WriteScreen extends React.Component{
  constructor() {
    super();
    this.state = {
      text: '',
    
    };
  } 
  render(){  

return(

<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
<View>
   
<TextInput
 editable
 maxLength={1000}
multiline= {true}
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
  
</View>
            
<View>
            <TouchableOpacity
            style={{backgroundColor: 'red',marginTop:50,width:99,height:50,paddingTop:15,paddingLeft:20}}
            >
           <Text> Submit </Text>  
            </TouchableOpacity>
    </View>
           
         
            </View>
     
     )
      
      }

} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
    },
    inputBox: {
      marginTop: 50,
      width: '99%',
      
      alignSelf: 'center',
      height: 500,
      textAlign: 'center',
      borderWidth: 4,
    },
    
    
  });