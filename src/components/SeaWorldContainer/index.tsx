import React, { useState } from 'react'
import SeaWorldContext from '../../context/SeaWorldContext'
import { SeaWorldContextProps } from '../../ts/types/app_types';
import { ISeaWorldElementProps } from '../../ts/interfaces/app_interfaces';

import Header from '../Header';
import SeaWorldGrid from '../SeaWorldGrid';
import ConfigurationModal from '../ConfigurationModal';
import { ElementState } from '../../ts/enums/app_enums';

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
    console.log('called')
    const { seaWorldSpace } = seaWorldData;
    const { width, height } = seaWorldSpace;
    const seaWorldNumberOfElements: number = width * height;

    const newSeaWorldElements: ISeaWorldElementProps[] = [];
    let contX: number = 0;
    let contY: number = 0;
    for (let index = 0; index < seaWorldNumberOfElements; index++) {
      newSeaWorldElements.push({
        id: index, state: ElementState.EMPTY, position: {
          x: index,
          y: contY
        }})
      console.log('contX', contX, index <= width - 1);
      contX = index <= width - 1 ? contX++ : width - 1;
      contY = index <= height - 1 ? contY++ : height - 1;
    }
    console.log('seaWordElements', newSeaWorldElements)
    setSeaWorldData({
      ...seaWorldData,
      seaWorldElements: newSeaWorldElements,
      isConfigurationModalVisible: false
    })
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
