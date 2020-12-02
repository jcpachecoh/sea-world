import { ElementState } from "../enums/app_enums";

export interface ISeaWorldElementProps {
    id: number;
    state: ElementState;
}

export interface ISeaWordlSpaceProps {
    width: number;
    height: number;
    elementSize: number;
}