import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { StoreIds } from '@/@enums';

const BASE_ICON_PATH = `${import.meta.env.VITE_BASE_URL}/assets/icons/`;

export const useSVGStore = defineStore(StoreIds.SVG, () => {
    const svgList = reactive(new Map<string, string>());

    async function addSVG(name: string) {
        if (svgList.get(name)) return;

        const response = await fetch(`${BASE_ICON_PATH}${name}.svg`);
        const data = await response.text();
        svgList.set(name, data);
    }

    return {
        svgList,
        addSVG,
    };
});
