import { HStack, Icon, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const RatingBar = ({ totalStars }: { totalStars: number }) => {
  const [rating, setRating] = useState(0)

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating)
  }

  return (
    <HStack>
      {[...Array(totalStars)].map((_, index) => (
        <IconButton
          key={index}
          background={'none'}
          minWidth={0}
          _hover={{ background: 'none' }}
          aria-label={`Star ${index + 1}`}
          color={index < rating ? 'yellow.400' : 'gray.200'}
          icon={<Icon as={FaStar} />}
          onClick={() => handleRatingClick(index + 1)}
        />
      ))}
    </HStack>
  )
}

export default RatingBar
