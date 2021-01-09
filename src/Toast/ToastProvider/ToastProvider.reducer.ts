import produce from 'immer'
import { findIndex, propEq, reject } from 'lodash/fp'
import { nanoid } from 'nanoid'

import { ToastPublicProps } from '../Toast'

export enum ActionType {
  AddSize = 'AddSize',
  AddToast = 'AddToast',
  DismissToast = 'DismissToast',
}

type Action =
  | {
      id: string
      size: number
      type: ActionType.AddSize
    }
  | {
      id?: string
      props: ToastPublicProps
      type: ActionType.AddToast
    }
  | {
      id: string
      type: ActionType.DismissToast
    }

export type ToastConfig = ToastPublicProps & {
  id: string
  size: number
}

export type State = {
  toasts: ToastConfig[]
}

export const initialState: State = {
  toasts: [],
}

export const reducer = (state: State, action: Action): State =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionType.AddSize: {
        const { id, size } = action
        const idx = findIndex(propEq('id', id))(state.toasts)
        if (idx === -1) return

        draft.toasts[idx].size = size
        return
      }

      case ActionType.AddToast: {
        const { id: newToastId, props } = action

        draft.toasts.push({
          id: newToastId ?? nanoid(),
          size: 0,
          ...props,
        })
        return
      }

      case ActionType.DismissToast: {
        const { id } = action
        const dismissToastById = reject(propEq('id', id))
        draft.toasts = dismissToastById(state.toasts)
        return
      }

      default:
        return
    }
  })
