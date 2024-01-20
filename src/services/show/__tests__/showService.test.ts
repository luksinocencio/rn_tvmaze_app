import { api } from '../../api'
import { showService } from '../showService'
import { episode1, episode2, episode22, episode23, episodeList } from './mocks'

describe('showService', () => {
  describe('getService', () => {
    beforeAll(() => {
      jest.spyOn(api, 'get').mockResolvedValue({ data: episodeList })
    })
    it('when API return episode list return a list of episodes grouped by season', async () => {
      // const spyFn = jest
      //   .spyOn(api, 'get')
      //   .mockImplementation(() => Promise.resolve({ data: episodeList }))

      const groupedEpisodes = await showService.getEpisodes('250')

      expect(groupedEpisodes.seasonNames).toEqual(['1', '2'])
      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy()
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy()
      // expect(spyFn).toHaveBeenCalledTimes(1)
    })

    it('when API return episode list return all season names', async () => {
      // const spyFn = jest
      //   .spyOn(api, 'get')
      //   .mockResolvedValue({ data: episodeList })

      const groupedEpisodes = await showService.getEpisodes('250')

      expect(groupedEpisodes.seasonNames).toEqual(['1', '2'])
      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy()
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy()
      // expect(spyFn).toHaveBeenCalledTimes(1)
    })

    it('when API return episode list return the episodes grouped by season', async () => {
      const groupedEpisodes = await showService.getEpisodes('250')

      const temp1 = groupedEpisodes.seasons[1]
      const temp2 = groupedEpisodes.seasons[2]

      expect(temp1.includes(episode1)).toBeTruthy()
      expect(temp1.includes(episode2)).toBeTruthy()

      expect(temp2.includes(episode22)).toBeTruthy()
      expect(temp2.includes(episode23)).toBeTruthy()
    })
  })
})
