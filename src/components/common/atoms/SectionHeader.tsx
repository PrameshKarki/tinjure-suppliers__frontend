import { Button, Flex, Text } from '@chakra-ui/react'

interface IProps {
  heading: string
  hasActionButton: boolean
  actionButtonText?: string
  actionButtonOnClick?: () => void
}

const SectionHeader = (props: IProps) => {
  const { heading, hasActionButton, actionButtonText, actionButtonOnClick } = props
  return (
    <Flex my={6} justifyContent={'space-between'}>
      <Text fontSize={22} fontWeight={'bold'} className='text-astronaut-900'>
        {heading}
      </Text>
      {hasActionButton && <Button onClick={actionButtonOnClick}>{actionButtonText ?? 'Show More'}</Button>}
    </Flex>
  )
}

export default SectionHeader
