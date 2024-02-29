import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import { useQuery } from 'react-query'
import { CardImage } from '../../../../components/CardImage/CardImage'
import { ImageIcon } from '../../../../components/ImageIcon/ImageIcon'
import { StarRating } from '../../../../components/StarRating/StarRating'
import { Episode } from '../../../../models/EpisodeModel'

import { Show } from '../../../../models/ShowModel'
import { QueryKeys } from '../../../../services/QueryKeys'
import { showService } from '../../../../services/show/showService'
import { colors } from '../../../../styles/colors'
import { SIZE } from '../../../../utils/constants'
import { SeasonModal } from '../SeasonModal/SeasonModal'
import { ShowInfo } from '../ShowInfo/ShowInfo'

const arrowDownIcon = require('../../../../assets/images/arrow-down.png')
type Props = {
  show: Show
}

function header(show: Show, openModal: () => void, selectedSeason: string) {
  return (
    <View>
      <ShowInfo show={show} />
      <TouchableOpacity style={styles.seasonContainer} onPress={openModal}>
        <Text style={styles.seasonText}>Season: {selectedSeason}</Text>
        <ImageIcon
          style={styles.header}
          size={16}
          source={arrowDownIcon}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  )
}
export function EpisodeList({ show }: Props) {
  const [selectedSeason, setSelectedSeason] = useState('1')
  const modalizeRef = useRef<Modalize>(null)

  const navigation = useNavigation()

  const { data } = useQuery([QueryKeys.EPISODE_LIST, show.id], () =>
    showService.getEpisodes(show.id),
  )

  function navigateToEpisodeDetails(episode: Episode) {
    navigation.navigate('EpisodeDetails', { episode })
  }

  function renderItem({ item }: ListRenderItemInfo<Episode>) {
    return (
      <CardImage
        onPress={() => navigateToEpisodeDetails(item)}
        image={item.image}
        title={item.name}>
        <View style={styles.content}>
          <StarRating rating={item.rating} />
        </View>
      </CardImage>
    )
  }

  function openModal() {
    modalizeRef.current?.open()
  }

  return (
    <>
      <FlatList
        contentContainerStyle={styles.flatListContent}
        ListHeaderComponent={() => header(show, openModal, selectedSeason)}
        data={data ? data.seasons[selectedSeason] : []}
        renderItem={renderItem}
      />
      <SeasonModal
        ref={modalizeRef}
        selectedSeason={selectedSeason}
        onSelectSeason={setSelectedSeason}
        seasons={data?.seasonNames || []}
      />
    </>
  )
}

const styles = StyleSheet.create({
  seasonContainer: {
    paddingHorizontal: SIZE.padding,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZE.margin,
  },
  seasonText: {
    fontWeight: 'bold',
    color: colors.onBackground,
    fontSize: 20,
  },
  header: {
    marginLeft: 8,
  },
  content: {
    marginTop: SIZE.margin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: colors.onBackground,
    fontSize: 20,
  },
  flatListContent: {
    paddingBottom: 16,
  },
})
