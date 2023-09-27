import {StyleSheet} from 'react-native';

export const stylesTuto = StyleSheet.create({
  contentFlex: {
    // flex: 1, // occupe tout l'espace disponible
    // paddingTop : 10 ,
    paddingVertical : 10 ,
    
    flexDirection: 'row',
    backgroundColor: 'red',
    // justifyContent:'center',
    // alignContent:"center",
    // alignContent: 'center',
    justifyContent: 'space-around',
  },

  box1: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
       borderRadius : 30 ,
    alignContent: 'center' ,

  },

  box2: {
    backgroundColor: '#fff',
    height: 50,
    width: 200,
    // borderB : 20 ,
    // borderTopStartRadius : 10,
    // borderBlockColor: 10,
  },

  box3: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
  },

textBox2: {

    fontSize:32,
    color: "#ccc",
    

},
contentSearch: {

    paddingHorizontal : 20,
    

} ,



});
