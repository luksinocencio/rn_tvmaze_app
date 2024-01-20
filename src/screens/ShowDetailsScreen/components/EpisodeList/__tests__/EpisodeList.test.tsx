import React from 'react'

import { EpisodeList } from '../EpisodeList'
import { showService } from '../../../../../services/show/showService'
import { render, screen, waitFor } from 'test-utils'
import { showMocks } from 'test/mocks/showMocks'

describe('EpisodeList', () => {
  test('show all season one episodes at first', async () => {
    render(<EpisodeList show={showMocks.show} />)

    await waitFor(() => {
      screen.getByText(showMocks.episode1.name)
    })

    expect(screen.getByText(showMocks.episode1.name)).toBeTruthy()
  })

  test('show all season one episodes at first using findByText', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: ['1', '2'],
      seasons: {
        1: [showMocks.episode1, showMocks.episode2],
        2: [showMocks.episode22, showMocks.episode23],
      },
    })

    render(<EpisodeList show={showMocks.show} />)

    await screen.findByText(showMocks.episode1.name)

    expect(screen.getByText(showMocks.episode1.name)).toBeTruthy()
    expect(screen.getByText(showMocks.episode2.name)).toBeTruthy()
  })
})
