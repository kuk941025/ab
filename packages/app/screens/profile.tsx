import React from 'react'
import { View, Button } from 'react-native'
import tw from 'twrnc'
import FormInput from 'app/components/FormInput'

export default function ProfileScreen() {
  return (
    <View style={tw`flex flex-1 flex-col`}>
      <FormInput title="제목" />
      <View style={tw`w-full bg-white p-2`}>
        <Button onPress={() => {}} title="제출" />
      </View>
    </View>
  )
}
