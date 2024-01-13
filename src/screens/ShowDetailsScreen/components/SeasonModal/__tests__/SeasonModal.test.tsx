import React, { createRef } from 'react'
import { render, act, fireEvent } from '@testing-library/react-native'
import { SeasonModal } from '../SeasonModal'
import { Modalize } from 'react-native-modalize'

describe('SeasonModal', () => {
  test('show all season option', () => {
    const modalizeRef = createRef<Modalize>()

    const { getAllByText } = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={season => console.log('teste')}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    )

    act(() => {
      modalizeRef.current?.open()
    })

    expect(getAllByText(/season/i, { exact: false }).length).toEqual(3)
  })

  test('call onSelectSeason with correct season when season was pressed', () => {
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

    fireEvent.press(season2Element)

    expect(onSelectSeasonMock).toHaveBeenCalledWith('2')
  })
})
