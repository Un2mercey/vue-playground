import { Sizes } from '@/@enums';

export enum ButtonTypes {
    PRIMARY = '--type-primary',
    CLEAR = '--type-clear',
    SECONDARY = '--type-secondary',
    GHOST = '--type-ghost',
    ACCENT = '--type-accent',
}

export enum ButtonShapes {
    DEFAULT = '--shape-default',
    ROUND = '--shape-round',
    BRICK = '--shape-brick',
}

export type ButtonSizes = Exclude<Sizes, Sizes.XXL | Sizes.XL>;
