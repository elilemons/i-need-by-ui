import {
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Box,
  useSteps,
  Progress,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { TbSailboat2 } from 'react-icons/tb'

type Props = {
  currentValue: number
}
const ProgressBar: React.FC<Props> = ({ currentValue }) => {
  return (
    <VStack spacing={3}>
      <Slider
        aria-label='slider-ex-3'
        value={currentValue}
        onChange={() => {
          /* Do nothing */
        }}
        min={0}
        max={100}
        orientation='vertical'
        minH='400'
      >
        <SliderTrack width={50}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box as={TbSailboat2} />
        </SliderThumb>
      </Slider>
    </VStack>
  )
}

export default ProgressBar
