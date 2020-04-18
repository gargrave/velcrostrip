import { LoaderStylesProps, LoaderBuilder } from './loaderStyles.types'

import getCoreStyles from './Loader.styles'

import dualRing from './dualRing.styles'
import ellipsis from './ellipsis.styles'
import grid from './grid.styles'
import singleRing from './singleRing.styles'

const shapes: { [key: string]: LoaderBuilder } = {
  dualRing,
  ellipsis,
  grid,
  singleRing,
}

export default (props: LoaderStylesProps) => {
  const styles = getCoreStyles(props)
  const { backdrop, container, wrapper } = styles

  const builder = shapes[props.shape]
  const loader = builder.loader(props)

  return {
    backdrop,
    container,
    loader,
    wrapper,
  }
}
