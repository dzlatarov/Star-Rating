import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Star.css'

interface StarPropType {
    numberOfStars: number
}


export const Star = ({ numberOfStars = 5 }: StarPropType) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const onClickHandle = (_index: number) => {
        setRating(_index)
    }

    const onMouseMoveHandle = (_index: number) => {
        setHover(_index)
    }

    const onMouseLeaveHandle = () => {
        setHover(rating)
    }
    return (
        <div className='star-container'>
            {
                [...Array(numberOfStars)].map((_e: number, index: number) => {
                    index += 1
                    return <FaStar 
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => onClickHandle(index)}
                        onMouseMove={() => onMouseMoveHandle(index)}
                        onMouseLeave={() => onMouseLeaveHandle()}
                        size={40}
                    />
                })
            }
        </div>
  )
}
