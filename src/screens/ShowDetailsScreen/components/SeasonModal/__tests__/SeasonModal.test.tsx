import React, { createRef } from 'react'
import { SeasonModal } from '../SeasonModal'
import { Modalize } from 'react-native-modalize'
import { fireEvent, render, act } from 'test-utils'

describe('SeasonModal', () => {
  test('show all season option', () => {
    const modalizeRef = createRef<Modalize>()

    const { getAllByText } = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={season => console.log(season)}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    )

    act(() => {
      modalizeRef.current?.open()
    })

    expect(getAllByText(/season/i, { exact: false }).length).toEqual(3)
  })

  test('call onSelectSeason with correct season when season was pressed', async () => {
    const modalizeRef = createRef<Modalize>()

    const onSelectSeasonMock = jest.fn()

    const { getByText } = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    )

    act(() => {
      modalizeRef.current?.open()
    })

    const season2Element = getByText(/season 2/i, { exact: false })

    await fireEvent.press(season2Element)

    expect(onSelectSeasonMock).toHaveBeenCalledWith('2')
  })
})
