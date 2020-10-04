import { LoaderProps } from './Loader'

export type RequiredLoaderStylesProps = Required<
  Pick<LoaderProps, 'loaderSize' | 'loaderShape' | 'styleTheme'>
>

export type OptionalLoaderStylesProps = Partial<
  Pick<LoaderProps, 'baseColor' | 'innerSize' | 'overlay' | 'speed'>
>

export type LoaderStylesProps = RequiredLoaderStylesProps &
  OptionalLoaderStylesProps
