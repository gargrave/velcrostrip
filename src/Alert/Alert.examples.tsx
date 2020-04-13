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
      <Alert type={StyleTheme.Success}>This is a Success alert.</Alert>
      <Alert type={StyleTheme.Secondary}>This is a Secondary alert.</Alert>
      <Alert type={StyleTheme.Info}>This is an Info alert.</Alert>
      <Alert type={StyleTheme.Warning}>This is a Warning alert.</Alert>
      <Alert type={StyleTheme.Danger}>This is a Danger alert.</Alert>

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
