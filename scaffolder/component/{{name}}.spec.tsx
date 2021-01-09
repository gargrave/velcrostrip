import { render } from '@testing-library/react'
import * as React from 'react'

import { {{name}}, {{name}}Props } from './{{name}}'

let defaultProps: {{name}}Props

describe('{{name}}', () => {
  beforeEach(() => {
    defaultProps = {
    }
  })

  describe('Basic Rendering', () => {
    it('renders something', () => {
      const { container } = render(<{{name}} {...defaultProps} />)
      expect(container.firstChild).not.toBeNull()
    })
  })
})

