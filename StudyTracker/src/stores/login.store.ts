import { defineStore } from 'pinia';
import type { StoreDefinition } from 'pinia';

export interface user {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    user_id: number;
}

export const useUserStore: StoreDefinition = defineStore('user', {
    state: (): user => {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            user_id: -1
        };
    },
    actions: {
        setUserInfo(user: user): void {
            this.first_name = user.first_name;
            this.last_name = user.last_name;
            this.email = user.email;
            this.password = user.password;
            this.user_id = user.user_id;
        },
        printUserInfo(): void {
            console.log({
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                user_id: this.user_id
            });
        }
    }
});

export function areUserStateMembersFilled(user: user): boolean {
    return (
        user.first_name != '' &&
        user.last_name != '' &&
        user.email != '' &&
        user.password != '' &&
        user.user_id != -1
    );
}
