import React from 'react'
import { render } from '@testing-library/react-native'
import { StarRating } from '../StarRating'

// jest --testPathPattern=StarRating --coverage -> npm install -g jest
// npm run test --testPathPattern=StartRating --coverage
// npm run test --testPathPattern=StartRating
// test -> it
// describe('StarRating', () => {
//   it('the component rendered', () => {
//     render(<StarRating rating={{ average: 7 }} />)
//   })
// })

describe('StarRating', () => {
  describe('should render', () => {
    test('and show tree elements', () => {
      const { debug } = render(<StarRating rating={{ average: 7 }} />)
      // mostrar a arvore do component
      debug()
    })
  })
  describe('rating was passed', () => {
    it('show the average', () => {
      const { getByText } = render(<StarRating rating={{ average: 7 }} />)
      const element = getByText('7')

      expect(element).toBeTruthy()
    })

    it('show the star icon', () => {
      const { getByTestId } = render(<StarRating rating={{ average: 7 }} />)
      const element = getByTestId('starIcon')

      expect(element).toBeTruthy()
    })
  })

  describe('rating was NOT passing', () => {
    it('the component will return nothing', () => {
      const { UNSAFE_root } = render(<StarRating />)

      expect(UNSAFE_root.children).toEqual([])
      expect(UNSAFE_root.children.length).toEqual(0)
    })
  })
})
