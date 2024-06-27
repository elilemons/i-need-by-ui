import * as React from 'react'
import { statuses } from '../../data/statuses'
import { Status } from '../../types/status'

type Props = {
  currentValue: number
}
export const ProgressText: React.FC<Props> = ({ currentValue }) => {
  const findActiveStatus = (value: number) => {
    return statuses.reduce((activeStatus: Status, currentStatus: Status) => {
      if (value >= currentStatus.min && value <= currentStatus.max) {
        return currentStatus
      }
      return activeStatus
    }, statuses[0])
  }
  const [activeStatus, setActiveStatus] = React.useState(statuses[currentValue])
  React.useEffect(() => {
    if (currentValue <= activeStatus.max || currentValue >= activeStatus.min) {
      setActiveStatus(findActiveStatus(currentValue))
    }
  }, [activeStatus, currentValue, setActiveStatus])

  return <div>Current status: {JSON.stringify(activeStatus)}</div>
}
