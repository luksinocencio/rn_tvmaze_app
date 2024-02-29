import { by, device, element, waitFor } from 'detox'

describe('Favorite', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  // it('Should favorite a TV show', async () => {
  //   // 1. Digitar no campo de busca
  //   const inputSearch = element(by.id('search-input'))
  //   await inputSearch.replaceText('The Big Bang Theory')
  //   await inputSearch.typeText('\n')

  //   // 2. Pressionar o card
  //   const cardElement = element(by.text('The Big Bang Theory'))
  //   await waitFor(cardElement).toBeVisible().withTimeout(5000)
  //   await cardElement.atIndex(1).tap()

  //   // 3. Pressionar o botão favorito
  //   const buttonElement = element(by.id('favorite-button'))
  //   await waitFor(buttonElement).toBeVisible().withTimeout(5000)
  //   await buttonElement.tap()

  //   // 4. VERIFICAR se o coração ficou vermelho
  //   const heartIconElement = element(by.id('heart-icon-true'))
  //   await expect(heartIconElement).toBeVisible()
  // })

  it('Should favorite the first bad TV Show (star < 5)', async () => {
    // 1.
    const starRatingBad = by.id('star-rating-bad')
    const list = by.id('show-list')

    await waitFor(element(starRatingBad).atIndex(0))
      .toBeVisible()
      .whileElement(list)
      .scroll(300, 'down', 0.5, 0.5)

    await element(starRatingBad).atIndex(0).tap()

    await element(by.id('favorite-button'))
      .tap()
      .catch(async () => {
        await element(starRatingBad).atIndex(0).tap()
      })

    await expect(element(by.id('heart-icon-true'))).toBeVisible()
  })
})
