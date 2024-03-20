import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#888',
    zIndex: 1,
  },
  cabeca: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    borderRadius: 10,
    marginTop:20
    
    
    
  },
  cabec: {
    backgroundColor:'#1D1D1D',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  
    
    height: 84
  
    
    
    
  },
  lop: {
   
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  
    
    height: 55,
    
  
    
    
    
  },
  cabe: {
    

  
    
    
    
  },
  list: {
   
    width: 35, height: 35, flexShrink: 1, alignSelf: 'flex-start',marginLeft:15,marginTop:15,marginVertical:9

    
    
  },
  logo: {
   
    width: 25, height: 25, flexShrink: 1, tintColor: '#fff',alignSelf: 'flex-start',marginLeft:18,marginTop:15,marginVertical:9

    
    
  },
  log: {
   
    width: 40, height: 40, flexShrink: 1, tintColor: '#fff', alignSelf: 'flex-start',marginLeft:18,marginTop:2,marginVertical:10

    
    
  },
  lupa: {
   
    width: 30, height: 30, flexShrink: 1, tintColor: '#fff', alignSelf: 'flex-start',marginLeft:width-213,marginVertical:-43

    
    
  },
  bar: {
       
    width: "100%",
    height: '100%',
 
   
    alignContent: 'flex-start',
    justifyContent:'flex-start'
    
    
    
 },
 text:{
  fontSize: 20,
  color: '#fff',
  
  fontWeight: 'bold',
 marginLeft:11,
 marginVertical:15,
 
}
,
txt:{
  fontSize: 15,
  color: '#fff',
  
  
 marginLeft:11,
 marginVertical:15,
 
}
,
input: {
  height: 40,
  width: width/2.8,
  borderColor: 'gray',
  borderWidth: 1,
  marginTop: 10,
  marginLeft:11,
  color:'#fff',
  paddingLeft:15
},
textt: {
  fontSize:15,
  marginTop:25,
  marginLeft:15,
  color:'#fff'
  
},
line: {
  borderBottomColor: 'black',
  borderBottomWidth: 3,
  width: width/1.1,
  borderBottomColor: '#67686D',

  marginTop:1,
 
  
borderRadius:20,
marginLeft:21
},
flatListc: {
  width: width,
  alignItems: "center",
  justifyContent: "center",
  marginVertical:25
},
loby: {
  height:75,
  width: width/1.2,
  backgroundColor:'#333',
  borderRadius: 20,
  marginTop:11
},
cardtext:{
  fontSize:24,
  color: '#fff',
  // marginTop: 18,
  fontWeight: 'bold',
  
 

 
},
card:{

  marginLeft:9,
  marginVertical:-18,
height:'100%'
 
},
cardtextmini:{
  fontSize: 18,
  color: '#fff',
  // marginTop: 18,
  fontWeight: 'bold',
  
 

 
},
cardmini:{

  marginLeft:18,
  marginVertical:14
 
},
lin: {
  borderBottomColor: 'black',
  borderBottomWidth: 3,
  
  borderBottomColor: '#67686D',

  marginTop:6,
 
  
borderRadius:20,

}
});


