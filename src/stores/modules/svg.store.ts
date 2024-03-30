import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { StoreIds } from '@/@enums';

const BASE_ICON_PATH = '/assets/icons/';

export const useSVGStore = defineStore(StoreIds.SVG, () => {
    const svgList = reactive(new Map<string, string>());

    async function addSVG(name: string) {
        if (svgList.get(name)) return;

        const response = await fetch(`${BASE_ICON_PATH}${name}.svg`);
        let data = await response.text();
        svgList.set(name, data);
    }

    return {
        svgList,
        addSVG,
    };
});
