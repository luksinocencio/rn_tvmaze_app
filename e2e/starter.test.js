import { by, device, element } from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should select kirbt buckets', async () => {
    await element(by.text('Kirby Buckets')).tap()
    await expect(element(by.text('Comedy'))).toBeVisible()
  })
})
