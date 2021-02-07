/* eslint-disable @typescript-eslint/naming-convention */
export type XPosition = 'left' | 'right'
export type YPosition = 'bottom' | 'top'

export type ToastPosition =
  | 'top-left'
  | 'bottom-left'
  | 'top-right'
  | 'bottom-right'

export const getPositions = (position: ToastPosition): [YPosition, XPosition] =>
  position.split('-') as [YPosition, XPosition]
