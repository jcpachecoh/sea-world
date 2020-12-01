import { ElementState } from "../enums/app_enums";

export interface IElementPositionProps {
    x: number;
    y: number;
}

export interface ISeaWorldElementProps {
    id: number;
    position: IElementPositionProps;
    state: ElementState;
}

export interface ISeaWordlSpaceProps {
    width: number;
    height: number;
}