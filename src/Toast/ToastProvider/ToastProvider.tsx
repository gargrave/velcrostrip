import { map, pipe, prop, sum, take } from 'lodash/fp'
import * as React from 'react'

import { Toast, ToastPublicProps } from '../Toast'
import { ToastContext, ToastContextType } from './ToastProvider.context'
import { ActionType, initialState, reducer } from './ToastProvider.reducer'

const sumOfListHeight = pipe(map(prop('size')), sum)

// eslint-disable-next-line @typescript-eslint/ban-types
export type ToastProviderProps = React.PropsWithChildren<{
  renderContainer?: Element
}>

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const showToast = React.useCallback((props: ToastPublicProps) => {
    dispatch({
      props,
      type: ActionType.AddToast,
    })
  }, [])

  const handleToastMeasured = React.useCallback((id: string, size: number) => {
    dispatch({
      id,
      size,
      type: ActionType.AddSize,
    })
  }, [])

  const handleToastClosed = React.useCallback((id: string) => {
    dispatch({
      id,
      type: ActionType.DismissToast,
    })
  }, [])

  // memoized value to use for context provider
  const contextValue = React.useMemo(
    (): ToastContextType => ({
      showToast,
    }),
    [showToast],
  )

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {state.toasts.map(({ id, ...props }, index) => {
        const verticalOffset = sumOfListHeight(take(index, state.toasts))

        return (
          <Toast
            afterMeasure={handleToastMeasured}
            id={id}
            index={index}
            key={id}
            onClose={handleToastClosed}
            verticalOffset={verticalOffset}
            {...props}
          />
        )
      })}
    </ToastContext.Provider>
  )
}
