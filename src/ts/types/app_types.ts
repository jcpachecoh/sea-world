import { ISeaWordlSpaceProps, ISeaWorldElementProps } from "../interfaces/app_interfaces";

export type SeaWorldContextProps = {
    isConfigurationModalVisible: boolean;
    seaWorldSpace: ISeaWordlSpaceProps;
    seaWorldElements: ISeaWorldElementProps[] | null;
}
