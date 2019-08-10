import React ,{Component} from 'react';
import {  View } from 'react-native';
import {Provider} from "react-redux"
import Store from "./src/Store";
import Header from "./src/components/Header"
import CryptoContainer from "./src/components/CryptoContainer"
export default class App extends Component{
  render(){
    return(
      <Provider  store={Store} >
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    )
  }
}


