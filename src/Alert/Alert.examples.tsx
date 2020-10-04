import * as React from 'react'

import { StyleTheme } from '../styles'
import { Alert } from './Alert'

const unDismissStyles: React.CSSProperties = {
  color: '#666',
  cursor: 'pointer',
  fontSize: '1.1rem',
}

/**
 * @visibleName Alert
 */
const AlertExamples: React.FC = () => {
  const [dismissed, setDismissed] = React.useState(false)

  const handleAlertDismissed = () => {
    setDismissed(true)
  }

  const handleUnDismiss = () => {
    setDismissed(false)
  }

  return (
    <>
      <h3>Basic themed Alerts</h3>
      <Alert>This is the default alert (Primary).</Alert>
      <Alert styleTheme={StyleTheme.Success}>This is a Success alert.</Alert>
      <Alert styleTheme={StyleTheme.Secondary}>
        This is a Secondary alert.
      </Alert>
      <Alert styleTheme={StyleTheme.Info}>This is an Info alert.</Alert>
      <Alert styleTheme={StyleTheme.Warning}>This is a Warning alert.</Alert>
      <Alert styleTheme={StyleTheme.Danger}>This is a Danger alert.</Alert>

      <hr />
      <h3>Dismissable</h3>
      {dismissed ? (
        <div onClick={handleUnDismiss} style={unDismissStyles}>
          Alert dismissed! Click here to bring it back!
        </div>
      ) : (
        <Alert dismissable={true} onDismiss={handleAlertDismissed}>
          Click the button to hide me!
        </Alert>
      )}
    </>
  )
}

export default AlertExamples
