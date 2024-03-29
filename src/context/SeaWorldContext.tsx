import { createContext } from 'react';
import { SeaWorldContextProps } from '../ts/types/app_types';

const SeaWorldContext = createContext<Partial<SeaWorldContextProps>>({
    isConfigurationModalVisible: true,
    seaWorldSpace: { width: 0, height: 0, elementSize: 20 },
    seaWorldElements: null,
    matrix: null
})

export default SeaWorldContext;