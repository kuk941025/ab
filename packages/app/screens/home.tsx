import React from 'react'
import { Text, View, Image } from 'react-native'
import tw from 'twrnc'

export default function HomeScreen() {
  return (
    <View style={tw`flex flex-1 p-4`}>
      <Text style={tw`text-white`}>Hi</Text>
      <View style={tw`flex flex-row h-60`}>
        <Image
          source={{
            uri: 'https://image.shutterstock.com/image-illustration/temporary-permanent-choice-life-pictured-600w-1726904257.jpg'
          }}
          style={tw`flex-1 h-20`}
        />
        <Image
          source={{
            uri: 'https://image.shutterstock.com/image-illustration/temporary-permanent-choice-life-pictured-600w-1726904257.jpg'
          }}
          style={tw`flex-1 h-20`}
        />
      </View>
    </View>
  )
}
