import { defineStore } from 'pinia';
import type { StoreDefinition } from 'pinia';

export interface playground {
    playground_id: string;
    playground_name: string;
    created_by: string;
    created_at: string;
    updated_at: string;
}

export const usePlaygroundStore: StoreDefinition = defineStore('playground', {
    state: (): playground => {
        return {
            playground_id: '-1',
            playground_name: '',
            created_by: '-1',
            created_at: '',
            updated_at: ''
        };
    },
    actions: {
        setPlaygroundInfo(playground: playground): void {
            this.playground_id = playground.playground_id;
            this.playground_name = playground.playground_name;
            this.created_by = playground.created_by;
            this.created_at = playground.created_at;
            this.updated_at = playground.updated_at;
        },
        async fetchPlaygroundInfo(): Promise<void> {

        }
    }
});
