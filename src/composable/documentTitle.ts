import { watch } from 'vue';
import { useRoute } from 'vue-router';

export function useDocumentTitle() {
    const route = useRoute();
    watch(() => route.name, changeTitle);

    function changeTitle() {
        document.title = (route.meta.title as string) || 'Playground';
    }
}
