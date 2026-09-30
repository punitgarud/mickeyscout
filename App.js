import { View, Text, StatusBar } from 'react-native';
export default function App(){
  return(
    <View style={{flex:1,backgroundColor:'#070707',justifyContent:'center',alignItems:'center'}}>
      <StatusBar barStyle="light-content" />
      <Text style={{color:'white',fontSize:36,fontWeight:'900'}}>MickeyScout</Text>
      <Text style={{color:'#00ff88',marginTop:12}}>FRESH BUILD WORKS</Text>
    </View>
  );
}