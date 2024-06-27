import { Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepTitle, StepDescription, StepSeparator, Box, useSteps } from '@chakra-ui/react';
import * as React from "react"

// TODO Remove test code, use actual type
type Status = {
  label: string
  min: number
  max: number
}

const steps: Status[] = [
  {
    label: "Run Aground",
    min: 0,
    max: 10
  },
  {
    label: "Rising",
    min: 10,
    max: 90
  },
  {
    label: "Charting a Course",
    min: 91,
    max: 99
  },
  {
    label: "Sailing",
    min: 100,
    max: 100
  },
]

const ProgressBar: React.FC = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length
  })


  return (
    <Stepper size='lg' index={activeStep} orientation='vertical' height='400px'>
    {steps.map((step, index) => (
      <Step key={index} onClick={() => setActiveStep(index)} >
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>

        <Box flexShrink='0'>
          <StepTitle>{step.label}</StepTitle>
          <StepDescription>{step.min} { step.max}</StepDescription>
        </Box>

        <StepSeparator />
      </Step>
    ))}
  </Stepper>
  )
}

export default ProgressBar