import React from 'react'
import { View, Image } from 'react-native'
import tw from 'twrnc'
import VersusIcon from 'app/components/VersusIcon'

export default function HomeScreen() {
  return (
    <View style={tw`flex flex-1 p-4`}>
      <View style={tw.style(`flex flex-row`, { height: '80%' })}>
        <Image
          source={{
            uri: 'https://image.shutterstock.com/image-illustration/temporary-permanent-choice-life-pictured-600w-1726904257.jpg'
          }}
          style={tw`flex-1 h-full`}
        />
        <Image
          source={{
            uri: 'https://image.shutterstock.com/image-illustration/temporary-permanent-choice-life-pictured-600w-1726904257.jpg'
          }}
          style={tw`flex-1 h-full`}
        />

        <View
          style={tw`absolute left-0 right-0 top-0 bottom-0 justify-center items-center`}
        >
          <VersusIcon />
        </View>
      </View>
    </View>
  )
}
