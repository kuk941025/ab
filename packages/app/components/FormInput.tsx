import React from 'react'
import {
  Text,
  TextInput,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native'
import tw from 'twrnc'

interface FormInputProps {
  title: string
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}
const FormInput: React.FC<FormInputProps> = ({ title, onChange }) => {
  return (
    <View style={tw`flex flex-1 justify-center px-2`}>
      <Text style={tw`text-white text-2xl`}>{title}</Text>
      <TextInput
        onChange={onChange}
        style={tw`border-2 border-white rounded-lg py-4 px-2 text-white`}
      />
    </View>
  )
}

export default FormInput
