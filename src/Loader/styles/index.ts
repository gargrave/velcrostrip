import { LoaderStylesProps, LoaderBuilder } from './loaderStyles.types'

import dualRing from './dualRing.styles'
import ellipsis from './ellipsis.styles'
import singleRing from './singleRing.styles'

const shapes: { [key: string]: LoaderBuilder } = {
  dualRing,
  ellipsis,
  singleRing,
}

export default (props: LoaderStylesProps) => {
  const builder = shapes[props.shape]

  return {
    loader: builder.loader(props),
    loaderWrapper: builder.wrapper(props),
  }
}
