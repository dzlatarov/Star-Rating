import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

interface StarPropType {
    numberOfStars: number
}


export const Star = ({ numberOfStars = 5 }: StarPropType) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const onClickHandle = (index: number) => {
        console.log
    }
    return (
        <div>
            {
                [...Array(numberOfStars)].map((e: number, index: number) => {
                    return <FaStar key={index} onClick={() => onClickHandle(index)} onMouseMove={() => ({})} onMouseLeave={() => ({})}/>
                })
            }
        </div>
  )
}
