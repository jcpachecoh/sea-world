import { createContext } from 'react';
import { SeaWorldContextProps } from '../ts/types/app_types';

const SeaWorldContext = createContext<Partial<SeaWorldContextProps>>({
    isConfigurationModalVisible: true,
    seaWorldSpace: { width: 0, height: 0 },
    seaWorldElements: null
})

export default SeaWorldContext;