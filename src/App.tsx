import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
  Flex,
  Container,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './Logo'
import ProgressBar from './components/ProgressBar'
import { ProgressText } from './components/ProgressText'
import { DonationText } from './components/DonationText'

export const App = () => (
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
          <ProgressBar />
        </Box>
        <Box>
          <ProgressText />
        </Box>
      </Flex>
    </Container>
  </ChakraProvider>
)
