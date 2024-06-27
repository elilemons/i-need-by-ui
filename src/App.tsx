import { Box, ChakraProvider, Container, Flex, VStack, theme } from '@chakra-ui/react'

import { ColorModeSwitcher } from './ColorModeSwitcher'
import { DonationText } from './components/DonationText'
import ProgressBar from './components/ProgressBar'
import { ProgressText } from './components/ProgressText'
import React from 'react'
import { TestSetStatus } from './components/TestSetStatus'

export const App: React.FC = () => {
  const [currentValue, setCurrentValue] = React.useState(0)

  return (
    <ChakraProvider theme={theme}>
      <Container minH='100vh' minW='100vw' fontSize='xl'>
        <Flex justifyContent={'flex-end'}>
          <ColorModeSwitcher />
        </Flex>
        <Flex justifyContent={'space-between'}>
          <Box>
            <DonationText />
          </Box>
          <Box>
            <VStack spacing={3}>
              <TestSetStatus currentValue={currentValue} onCurrentValueChange={setCurrentValue} />
              <ProgressBar currentValue={currentValue} />
            </VStack>
          </Box>
          <Box>
            <ProgressText currentValue={currentValue} />
          </Box>
        </Flex>
      </Container>
    </ChakraProvider>
  )
}
