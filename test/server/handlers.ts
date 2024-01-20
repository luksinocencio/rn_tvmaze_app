import { http } from 'msw'
import { BASE_URL } from 'src/services/api'
import { showMocks } from 'test/mocks/showMocks'

export const handlers = [
  http.get(`${BASE_URL}shows/:showId/episodes`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(showMocks.episodeList))
  }),
]
