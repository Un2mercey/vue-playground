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
export const isButtonSize = (token: unknown): token is ButtonSizes => {
    return ![Sizes.XXL, Sizes.XL].includes(token as Sizes);
};
