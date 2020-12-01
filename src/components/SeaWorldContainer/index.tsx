import React, { useState } from 'react'
import SeaWorldContext from '../../context/SeaWorldContext'
import { SeaWorldContextProps } from '../../ts/types/app_types'

import Header from '../Header';
import SeaWorldGrid from '../SeaWorldGrid';
import ConfigurationModal from '../ConfigurationModal';

const SeaWorldContainer = () => {
    const [seaWorldData, setSeaWorldData] = useState<SeaWorldContextProps>({ isConfigurationModalVisible: true, seaWorldSpace: { width: 0, height: 0 }, seaWorldElements: null })
    const handleChangeGrid = (value: number, property: string) => {
      setSeaWorldData({
        ...seaWorldData,
        seaWorldSpace: {
          ...seaWorldData.seaWorldSpace,
          [property]: value
        }
      })
    }

    const handleConfigurationVisible = () => {
      setSeaWorldData({
        ...seaWorldData,
        isConfigurationModalVisible: !seaWorldData.isConfigurationModalVisible
      })
    }

    const handleSetSeaWordElements = () => {

    }

    return (
      <SeaWorldContext.Provider value={seaWorldData}>
        <Header title={"Sea World"} handleConfigurationVisible={handleConfigurationVisible} />
        <ConfigurationModal
          handleChangeGrid={handleChangeGrid}
          handleConfigurationVisible={handleConfigurationVisible}
          handleSetSeaWordElements={handleSetSeaWordElements}
        />
        <SeaWorldGrid />
      </SeaWorldContext.Provider>
    );
}

export default SeaWorldContainer;
