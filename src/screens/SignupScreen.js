import React from 'react';
import { Button } from '../../components/MyButton';
import { Logo } from '../../components/Logo';
import { Check } from '../../components/Check';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';

export const SignupScreen = () => {

  return (
    <Container>
        <Logo color={'#f75f6a'}/>
      <Container>
        <Text color={'#4e4d57'} size={'30px'} bold>{isLoginScreen?'Sign In':'Sign Up'}</Text>
        {isLoginScreen&&<Text bold>Welcome to Huila</Text>}
        <TextInput text={'Email'} placeholder={'Your email address'}
          onChangeText={value => setEmail(value)}
          value={email} disabled={email?true:false}
        />
        <TextInput text={'Password'}
          onChangeText={value => setPassword(value)}
          value={password} disabled={password?true:false}
        />
        {!isLoginScreen&&<Check value={terms}  onValueChange={value => setTerms(value)} />} 
      </Container>
      <Button onPress={isLoginScreen?handleLogin:handleSingUp} text={'Sign In'}/>
      <Text bold size={'14px'}>Or</Text>
      <Button icon text={'Sign In with Google'}/>
    </Container>
  );
};
