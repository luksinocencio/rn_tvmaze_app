import React from 'react'
import { render } from '@testing-library/react-native'
import { StarRating } from '../StarRating'

// npm run test --testPathPattern=StartRating
// test -> it
// describe('StarRating', () => {
//   it('the component rendered', () => {
//     render(<StarRating rating={{ average: 7 }} />)
//   })
// })

describe('StarRating', () => {
  it('the component rendered', () => {
    const { debug } = render(<StarRating rating={{ average: 7 }} />)
    // mostrar a arvore do component
    debug()
  })
})
