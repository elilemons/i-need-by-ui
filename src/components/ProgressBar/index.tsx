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
} from '@chakra-ui/react'
import * as React from 'react'
import { TbSailboat2 } from 'react-icons/tb'

// TODO Remove test code, use actual type
type Status = {
  label: string
  min: number
  max: number
}

const steps: Status[] = [
  {
    label: 'Run Aground',
    min: 0,
    max: 10,
  },
  {
    label: 'Rising',
    min: 11,
    max: 90,
  },
  {
    label: 'Charting a Course',
    min: 91,
    max: 99,
  },
  {
    label: 'Sailing',
    min: 100,
    max: 100,
  },
]

const ProgressBar: React.FC = () => {
  const findActiveStep = (value: number) => {
    return steps.reduce((activeStep, currentStep, index) => {
      if (value >= currentStep.min && value <= currentStep.max) {
        return index
      }
      return activeStep
    }, 0)
  }

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const [currentValue, setCurrentValue] = React.useState(0)

  React.useEffect(() => {
    if (currentValue <= steps[activeStep].max || currentValue >= steps[activeStep].min) {
      setActiveStep(findActiveStep(currentValue))
    }
  }, [activeStep, currentValue, setActiveStep])

  return (
    <>
      <NumberInput
        defaultValue={currentValue}
        min={0}
        onChange={value => setCurrentValue(Number(value))}
        step={10}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

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
    </>
  )
}

export default ProgressBar
