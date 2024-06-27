import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import * as React from 'react'
import { Status } from '../../types/status'
import { statuses } from '../../data/statuses'

type Props = {
  currentValue: number
  onCurrentValueChange: (value: number) => void
}
export const TestSetStatus: React.FC<Props> = ({ currentValue, onCurrentValueChange }) => {
  // This component exists to just visually set the status

  return (
    <NumberInput
      defaultValue={currentValue}
      min={0}
      onChange={value => onCurrentValueChange(Number(value))}
      step={10}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}
