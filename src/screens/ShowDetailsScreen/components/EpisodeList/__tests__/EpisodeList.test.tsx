import React from 'react'
import { render, screen, waitFor } from '@testing-library/react-native'
import { EpisodeList } from '../EpisodeList'
import { mocks } from './mocks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { showService } from '../../../../../services/show/showService'

interface iWrapper {
  children: React.ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
})

const wrapper = ({ children }: iWrapper) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('EpisodeList', () => {
  test('show all season one episodes at first', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: ['1', '2'],
      seasons: {
        1: [mocks.episode1, mocks.episode2],
        2: [mocks.episode22, mocks.episode23],
      },
    })

    render(<EpisodeList show={mocks.show} />, { wrapper })

    await waitFor(() => {
      screen.getByText(mocks.episode1.name)
    })

    expect(screen.getByText(mocks.episode1.name)).toBeTruthy()
  })

  test('show all season one episodes at first using findByText', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: ['1', '2'],
      seasons: {
        1: [mocks.episode1, mocks.episode2],
        2: [mocks.episode22, mocks.episode23],
      },
    })

    render(<EpisodeList show={mocks.show} />, { wrapper })

    await screen.findByText(mocks.episode1.name)

    expect(screen.getByText(mocks.episode1.name)).toBeTruthy()
    expect(screen.getByText(mocks.episode2.name)).toBeTruthy()
  })
})
