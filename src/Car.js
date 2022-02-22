import React from 'react'
import CarousalItem from './CarousalItem'
import Carousel from './Carousel'

const Car = () => {
  return (
    <Carousel size={3}>
      <CarousalItem img='https://cdn.discordapp.com/attachments/492977404491464705/945304727237824522/Screenshot_2022-02-16_at_12.30.10.png'
        title='xyz'
        desc="this is desc" />
        <CarousalItem img='https://cdn.discordapp.com/attachments/492977404491464705/945304727237824522/Screenshot_2022-02-16_at_12.30.10.png'
        title='xyz'
        desc="this is desc" />
        <CarousalItem img='https://cdn.discordapp.com/attachments/492977404491464705/945304727237824522/Screenshot_2022-02-16_at_12.30.10.png'
        title='xyz'
        desc="this is desc" />
        <CarousalItem img='https://cdn.discordapp.com/attachments/492977404491464705/945304727237824522/Screenshot_2022-02-16_at_12.30.10.png'
        title='xyz'
        desc="this is desc" />
         <CarousalItem img='https://cdn.discordapp.com/attachments/492977404491464705/945304727237824522/Screenshot_2022-02-16_at_12.30.10.png'
        title='xyz'
        desc="this is desc" />
        {/* <CarousalItem img='https://cdn.discordapp.com/attachments/492977404491464705/945304727237824522/Screenshot_2022-02-16_at_12.30.10.png'
        title='xyz'
        desc="this is desc" />
        <CarousalItem img='https://cdn.discordapp.com/attachments/492977404491464705/945304727237824522/Screenshot_2022-02-16_at_12.30.10.png'
        title='xyz'
        desc="this is desc" />
        <CarousalItem img='https://cdn.discordapp.com/attachments/492977404491464705/945304727237824522/Screenshot_2022-02-16_at_12.30.10.png'
        title='xyz'
        desc="this is desc" /> */}
         

    </Carousel>
  )
}

export default Car