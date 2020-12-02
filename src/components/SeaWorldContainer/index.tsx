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
    seaWorldElements: null,
    matrix: null
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
    const newSeaWorldElements: ISeaWorldElementProps[] = [];
    const matrixData: number[][] | null = Array(width).fill(null).map(() => Array(height));
    let cont = 0;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        matrixData[i][j] = 0;
        newSeaWorldElements.push({
          id: cont,
          state: ElementState.EMPTY,
          position: {
            x: i,
            y: j
          }
        });
        cont++;
      }
    }
    setSeaWorldData({
      ...seaWorldData,
      seaWorldElements: newSeaWorldElements,
      isConfigurationModalVisible: false,
      matrix: matrixData
    })
  }

  const handleStateChange = (id: number) => {
    let tempObj: ISeaWorldElementProps[] | null = seaWorldData && seaWorldData.seaWorldElements;
    let tempMatrix: number[][] | null = seaWorldData && seaWorldData.matrix;
    
    if (tempObj) {
      tempObj[id] = {...tempObj[id], state: tempObj[id].state === ElementState.EMPTY ? ElementState.FILLED : ElementState.EMPTY}
    }
    if (tempMatrix && tempObj) {
      tempMatrix[tempObj[id].position.x][tempObj[id].position.y] = 1
    }
    setSeaWorldData({
      ...seaWorldData,
      seaWorldElements: tempObj,
      isConfigurationModalVisible: false,
      matrix: tempMatrix
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
