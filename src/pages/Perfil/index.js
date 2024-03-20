
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
  StyleSheet,
  Switch
} from "react-native";



import { styles } from "./styles";

import { FloatingAction } from "react-native-floating-action";

export function Perfil() {
  const actions = [
    {
      text: "Cold (IA)",
      icon: require("./i_ia.png"),
      name: "bt_camera",
      position: 2,
      color: "#e33f4e",
  },
    {
        text: "Criar alarme",
        icon: require("./i_alarm.png"),
        name: "bt_camera",
        position: 2,
        color: "#e33f4e",
    },

]
  const dados = [{
    hora:'10:50',
    name:'Dipirona'
  },
  {
    hora:'16:50',
    name:'Dipirona'
  },
  {
    hora:'00:50',
    name:'Dipirona'
  },
]

  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const toggleSwitch = () => { setIsEnabled(previousState => !previousState), console.log(isEnabled) }
    const [isEnabled, setIsEnabled] = useState(false)
    return (
      <View style={styles.container}>
       <View style={styles.bar}>
      <View style={styles.cabeca}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image source={require('./i_menu.png')} style={styles.log}/>
   
        </TouchableOpacity>
        <Text style={styles.text}>Clock cure</Text>
        
        <TouchableOpacity onPress={toggleInput}>
        <Image source={require('./i_mag.png')} style={styles.lupa}/>
        {isInputVisible && <TextInput style={styles.input} value={inputValue} onChangeText={handleInputChange} />}
        </TouchableOpacity>
        </View>
        <View style={styles.line} />
      
        {isOpen && <View style={styles.menu}> 
        <View style={styles.cabec}>
          
        <TouchableOpacity onPress={toggleMenu}>
          <Image source={require('./i_arrow.png')} style={styles.log}/>
   
        </TouchableOpacity>
        <Text style={styles.text}>Clock cure</Text>
       
       
        
        </View>
        <View style={styles.lop}>
          
          <TouchableOpacity onPress={toggleMenu}>
            <Image source={require('./i_conf.png')} style={styles.logo}/>
     
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.txt}>Config.</Text>
          </TouchableOpacity>
         
         
          </View>
          <View style={styles.lin} />
          <View style={styles.lop}>
          
          <TouchableOpacity onPress={toggleMenu}>
            <Image source={require('./i_bin.png')} style={styles.logo}/>
     
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.txt}>Bin</Text>
          </TouchableOpacity>
         
         
          </View>
          <View style={styles.lin} />
          <View style={styles.lop}>
          
          <TouchableOpacity onPress={toggleMenu}>
            <Image source={require('./i_fov.png')} style={styles.logo}/>
     
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.txt}>Favoritos</Text>
          </TouchableOpacity>
         
         
          </View>
          <View style={styles.lin} />
          <View style={styles.lop}>
          
          <TouchableOpacity onPress={toggleMenu}>
            <Image source={require('./i_categ.png')} style={styles.logo}/>
     
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.txt}>Categorias</Text>
          </TouchableOpacity>
         
         
          </View>
          <View style={styles.lin} />
         </View>
         }
              <View style={styles.flatListc}>
        <FlatList
          data={dados}
          numColumns={1}
          
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TouchableOpacity style={styles.loby}>
   
   <View style={styles.lop}>
          
          
            <Image source={require('./i_droug.png')} style={styles.list}/>
     
          
         <View style={styles.card}>
          <Text style={styles.cardtext}>{item.hora}</Text>
          </View>
         
         
          <View style={{  marginHorizontal:65}}>
                   

   
                </View>
                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" ,marginHorizontal:-29,marginVertical:-4}}>
                        
                        <Switch
                            trackColor={{ false: '#BEBEBE', true: '#e33f4e' }}
                            thumbColor={isEnabled ? '#BEBEBE' : '#e33f4e'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={
                                toggleSwitch
                            }
                            value={isEnabled}

                        />
                       
                    </View>
          </View>
                          
                        
                      
                        
      </TouchableOpacity>}


         /> 
        
      </View> 
        
      </View>
      <FloatingAction
                color="#e33f4e"
                actions={actions}
                // position="center"
                onPressItem={name => {
                    if (name === '') {
                       console.log('ah')
                    }
                    else {
                      console.log('aha')
                    }
                }}
            />
  
      </View> 
    );
  };
  
  