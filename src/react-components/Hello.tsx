import * as React from 'react'

export type HelloProps = {
  text: string
}

export const Hello: React.FC<HelloProps> = ({ text }) => {
  return <div>Hello, {text}!</div>
}
