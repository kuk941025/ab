import React from 'react'
import { Dimensions } from 'react-native'
import NativeCarousel from 'react-native-snap-carousel'

interface CarouselProps {
  renderItem: () => JSX.Element
}
const Carousel: React.FC<CarouselProps> = ({ renderItem }) => {
  const { height, width } = Dimensions.get('window')
  return (
    <NativeCarousel
      data={[1, 2]}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width}
      layout="default"
      vertical
      itemHeight={height}
      sliderHeight={height}
    />
  )
}

export default Carousel
