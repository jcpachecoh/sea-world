import React, { useState } from 'react'
import SeaWorldContext from '../../context/SeaWorldContext'
import { SeaWorldContextProps } from '../../ts/types/app_types';
import { ISeaWorldElementProps } from '../../ts/interfaces/app_interfaces';

import Header from '../Header';
import SeaWorldGrid from '../SeaWorldGrid';
import ConfigurationModal from '../ConfigurationModal';
import { ElementState } from '../../ts/enums/app_enums';

const SeaWorldContainer = () => {
  const [seaWorldData, setSeaWorldData] = useState<SeaWorldContextProps>({
    isConfigurationModalVisible: true,
    seaWorldSpace: { width: 0, height: 0, elementSize: 40 },
    seaWorldElements: null
  })
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
    const { seaWorldSpace } = seaWorldData;
    const { width, height } = seaWorldSpace;
    const seaWorldNumberOfElements: number = width * height;

    const newSeaWorldElements: ISeaWorldElementProps[] = [];

    for (let index = 0; index < seaWorldNumberOfElements; index++) {
      newSeaWorldElements.push({
        id: index, state: ElementState.EMPTY
      });
    }
    setSeaWorldData({
      ...seaWorldData,
      seaWorldElements: newSeaWorldElements,
      isConfigurationModalVisible: false
    })
  }

  const handleStateChange = (id: number) => {
    let tempObj: ISeaWorldElementProps[] | null = seaWorldData && seaWorldData.seaWorldElements;
    if (tempObj) {
      tempObj[id] = {...tempObj[id], state: tempObj[id].state === ElementState.EMPTY ? ElementState.FILLED : ElementState.EMPTY}
    }
    setSeaWorldData({
      ...seaWorldData,
      seaWorldElements: tempObj,
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
      <SeaWorldGrid handleStateChange={handleStateChange} />
    </SeaWorldContext.Provider>
  );
}

export default SeaWorldContainer;
