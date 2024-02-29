import { by, device, element } from 'detox'

describe('Favorite', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Should favorite a TV show', async () => {
    // 1. Digitar no campo de busca
    const inputSearch = element(by.id('search-input'))
    await inputSearch.typeText('The Big Bang Theory')

    // 2. Pressionar o card
    const cardElement = element(by.text('The Big Bang Theory'))
    await cardElement.atIndex(1).tap()
  })
})
