import React from 'react'
import { View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import tw from 'twrnc'
import Article from 'app/components/Article'

export default function HomeScreen() {
  const {height, width} = Dimensions.get('window')
  const renderArticle = () => <Article />

  return (
    <View style={tw`flex-1`}>
      <Carousel
        data={[1, 2]}
        renderItem={renderArticle}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        vertical
        itemHeight={height}
        sliderHeight={height}
      />
    </View>
  )
}
