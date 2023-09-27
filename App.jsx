import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Flex from './tuto/Flex'
import Recherche from './tuto/Recherche'
import CardTuto from './tuto/CardTuto'

const stagiaires = [
    { id : 1, prenom : "ladour 1"},
    { id : 2, prenom : "ladour 2"},
    { id : 3, prenom : "ladour 3"},
    { id : 4, prenom : "ladour 4"},
    { id : 5, prenom : "ladour 5"},

]
  



const App = () => {


  return (
    <>
          <Flex nom="LADOUR" prenom="Karl"/>
   
        <Recherche/>


        

        {/* horizontal={true} */}
        <FlatList
            data={stagiaires}
    
            numColumns="2"
            renderItem={({item}) => <CardTuto title={item.prenom}  />  }
            keyExtractor={item=>item.id}
        />


    </>
 
    

  )
}

export default App



