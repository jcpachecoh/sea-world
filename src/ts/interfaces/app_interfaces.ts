import { ElementState } from "../enums/app_enums";

export interface IElementPositionProps {
    x: number;
    y: number;
}

export interface ISeaWorldElementProps {
    id: number;
    state: ElementState;
    position: IElementPositionProps;
}

export interface ISeaWordlSpaceProps {
    width: number;
    height: number;
    elementSize: number;
}