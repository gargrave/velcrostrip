import {
  ActionType,
  reducer,
  State,
  ToastConfig,
} from './ToastProvider.reducer'

const makeToast = (num: number): ToastConfig => ({
  id: `toast${num}`,
  msg: `toast${num}`,
  size: num,
})

const toast1: ToastConfig = makeToast(1)
const toast2: ToastConfig = makeToast(2)
const toast3: ToastConfig = makeToast(3)
const toast4: ToastConfig = makeToast(4)
const toast5: ToastConfig = makeToast(5)

const fullState: State = {
  toasts: [toast1, toast2, toast3, toast4, toast5],
}

describe('ToastProvider Reducer', () => {
  describe('Add Size', () => {
    let result: State

    result = reducer(fullState, {
      id: toast1.id,
      size: 42,
      type: ActionType.AddSize,
    })

    expect(result.toasts[0].size).toBe(42)

    result = reducer(fullState, {
      id: toast2.id,
      size: 84,
      type: ActionType.AddSize,
    })

    expect(result.toasts[1].size).toBe(84)
  })

  describe('Add Toast', () => {
    it('adds new toast data and re-calculates the ordered list', () => {
      let result: State

      result = reducer(
        { toasts: [] },
        {
          id: 'toast1',
          props: {
            msg: 'toast1',
          },
          type: ActionType.AddToast,
        },
      )

      expect(result.toasts).toHaveLength(1)
      expect(result.toasts[0].id).toBe('toast1')
      expect(result.toasts[0].msg).toBe('toast1')

      result = reducer(result, {
        id: 'toast2',
        props: {
          msg: 'toast2',
        },
        type: ActionType.AddToast,
      })

      expect(result.toasts).toHaveLength(2)
      expect(result.toasts[1].id).toBe('toast2')
      expect(result.toasts[1].msg).toBe('toast2')
    })
  })

  describe('Dismiss Toast', () => {
    it('removes the specified toast from any location in the list', () => {
      let result: State

      result = reducer(fullState, {
        id: toast3.id,
        type: ActionType.DismissToast,
      })
      expect(result.toasts).toEqual([toast1, toast2, toast4, toast5])

      result = reducer(result, {
        id: toast1.id,
        type: ActionType.DismissToast,
      })
      expect(result.toasts).toEqual([toast2, toast4, toast5])

      result = reducer(result, {
        id: toast5.id,
        type: ActionType.DismissToast,
      })
      expect(result.toasts).toEqual([toast2, toast4])
    })

    it('does nothing if an invalid ID is provided', () => {
      const result = reducer(fullState, {
        id: 'invalidId',
        type: ActionType.DismissToast,
      })

      expect(result).toEqual(fullState)
    })
  })
})
