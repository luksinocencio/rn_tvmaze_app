import React from 'react'
import { render } from '@testing-library/react-native'
import { EpisodeList } from '../EpisodeList'
import { mocks } from './mocks'

describe('EpisodeList', () => {
  test('the component rendered', () => {
    render(<EpisodeList show={mocks.show} />)
    expect(true).toBeTruthy()
  })
})
