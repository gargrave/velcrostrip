import { LoaderProps } from '../Loader'

export type RequiredLoaderStylesProps = Required<
  Pick<LoaderProps, 'shape' | 'size' | 'type'>
>

export type OptionalLoaderStylesProps = Partial<
  Pick<LoaderProps, 'baseColor' | 'innerSize' | 'speed'>
>

export type LoaderStylesProps = RequiredLoaderStylesProps &
  OptionalLoaderStylesProps

export type LoaderBuilder = {
  loader: (props: LoaderStylesProps) => string
  wrapper: (props: LoaderStylesProps) => string
}
