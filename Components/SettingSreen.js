
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Form, Text } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Email from '../InputComponents/Email';
import Password from '../InputComponents/Password';
import LoginButtons from './TabScreens/Designs/LoginButtons';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      inputs: [],
    };
  }

  changeInputFocus = index => () => {
    if (index === 0) {
      this.state.inputs[index+1].state.inputRef._root.focus(); // eslint-disable-line
    }
  };

  updateCanLoginState = () => {
    let canLogin = true;
    this.state.inputs.forEach((child) => {
      if (child.state.isCorrect !== 1) {
        canLogin = false;
      }
    });
    this.loginButtons.loginButton.updateCanLogin(
      canLogin, this.state.inputs[0].state.value,
      this.state.inputs[1].state.value,
    );
  };

  clearAllInputs = () => {
    this.state.inputs.forEach((child) => {
      child.clearInput();
    });
  };

  forgotPassword = () => {
    console.warn('Forgot password clicked'); // eslint-disable-line
  };

  render() {
    return (
      <Animatable.View
        animation="fadeInRight"
        delay={1200}
        duration={700}
        ref={(ref) => { this.animationView = ref; }}
        style={GLOBAL.loginScreenStyle.mainView}
      >
        <Form style={GLOBAL.loginScreenStyle.form}>
          <Email
            changeFocus={this.changeInputFocus(0)}
            update={this.updateCanLoginState}
            ref={(ref) => { this.state.inputs[0] = ref; }}
          />
          <Password
            changeFocus={this.changeInputFocus(1)}
            update={this.updateCanLoginState}
            ref={(ref) => { this.state.inputs[1] = ref; }}
          />
        </Form>
        <TouchableOpacity onPress={this.forgotPassword} activeOpacity={0.5} style={{ marginTop: height / 25, alignItems: 'center' }}>
          <Text style={GLOBAL.loginScreenStyle.remember}>{language.dontRemember}</Text>
        </TouchableOpacity>
        <LoginButtons
          ref={(ref) => { this.loginButtons = ref; }}
          clear={this.clearAllInputs}
          move={this.props.move}
        />
      </Animatable.View>
    );
  }
}

LoginScreen.propTypes = {
  move: PropTypes.func.isRequired,
};

// import React from 'react';
// import { Text, View, StyleSheet} from 'react-native';


// class SettingScreen extends React.Component {
  
//     render() {
      
//       return (
//           <View style={styles.container}>
//             <Text style={styles.header}>Settings</Text>

//             <View style={styles.outerContainer}>
//               <View style={styles.innerContainer}>
//                 <Text style={styles.text}>Video Streaming Settings</Text>
//                 <Text style={styles.textDecor}>480p</Text>
//               </View>

//               <View style={styles.innerContainer}>
//                 <Text style={styles.text}>Notifications</Text>
//               </View>

//               <View style={styles.innerContainer}>
//                 <Text style={styles.text}>Signed in as</Text>
//                 <Text style={styles.textDecor}>Naufil Shaikh</Text>
//               </View>

//               <View style={styles.innerContainer}>
//                 <Text style={styles.text}>Clear Search History</Text>
//               </View>

//               <View style={styles.innerContainer}>
//                 <Text style={styles.text}>Contact Us</Text>
//               </View>

//               <View style={styles.innerContainer}>
//                 <Text style={styles.text}>About</Text>
//               </View>

//               <View style={styles.innerContainer}>
//                 <Text style={styles.text}>Help</Text>
//               </View>
//             </View>
            
//           </View>
//       );
//     }
//   }

//   const styles=StyleSheet.create({
//     container:{
//       flex:1,
//       flexDirection:'column',
//       justifyContent:'flex-start',
//       alignItems:'center',
//       backgroundColor:'#212121'
//     },
//     header:{
//       color:'white',
//       marginTop:20,
//       fontSize:20,
//       fontFamily:'Muli'
//     },
//     outerContainer:{
//       flexDirection:'column',
//       justifyContent:'flex-start',
//       alignItems:'flex-start',
//       width:'100%',
//       padding:10,
//       marginTop:40,
//       // borderWidth:2,
//       // borderColor:'red'
//     },
//     innerContainer:{
//       flexDirection:'column',
//       justifyContent:'flex-start',
//       alignItems:'flex-start',
//       width:'100%', 
//       padding:15,  
//       borderWidth:1,
//       // borderColor:'green',
//       borderColor:'#212121',
//       borderBottomColor:'#b8b8b8'
//     },
//     text:{
//       fontFamily:'Muli',
//       fontSize:18,
//       color:'white',
//       padding:5
//     },
//     textDecor:{
//       fontFamily:'Muli',
//       fontSize:16,
//       padding:5,
//       color:'#d1d1d1'
//     }
    
//   })

//   export default SettingScreen;