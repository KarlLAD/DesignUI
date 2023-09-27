import { View, Text } from 'react-native'
import React from 'react'
import { stylesTuto } from './styles'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';



const Flex = ({nom, prenom}) => {
  return (
    <View style={stylesTuto.contentFlex}  >

      <View style={stylesTuto.box1}>
      <IconFontAwesome name="rocket" size={30} color="#900" />
      </View>

      <View style={stylesTuto.box2}>
      {/* <IconMaterialIcons name="apps" size={30} color="#900" /> */}
      <Text style={stylesTuto.textBox2} > Home</Text>
      </View>

      <View style={stylesTuto.box3}>
      <IconOcticons name="tools" size={30} color="#900" />

      </View>
     
      
    </View>
  )
}

export default Flex