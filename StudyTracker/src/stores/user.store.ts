import { defineStore } from 'pinia';
import type { StoreDefinition } from 'pinia';

export interface user {
    first_name: string;
    last_name: string;
    email: string;
    user_id: string;
}

async function getUserInfoByID(userID: string): Promise<user | null> {
    const response: Response = await fetch(`http://localhost:3000/user/getUserInfoByID/${userID}`, {
        credentials: 'include'
    });
    if (response.status === 400) {
        alert('User not found');
        return null;
    } else {
        const user: user = await response.json();
        console.log(user);
        return {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            user_id: userID
        };
    }
}

export const useUserStore: StoreDefinition = defineStore('user', {
    state: (): user => {
        return {
            first_name: '',
            last_name: '',
            email: '',
            user_id: '-1'
        };
    },
    actions: {
        setUserInfo(user: user): void {
            this.first_name = user.first_name;
            this.last_name = user.last_name;
            this.email = user.email;
            this.user_id = user.user_id;
        },
        async fetchUserInfo(): Promise<void> {
            const response: Response = await fetch(
                `http://localhost:3000/user/getUserInfoById/${localStorage.getItem('userID')}`,
                {
                    credentials: 'include'
                }
            );
            if (response.status === 400) {
                alert('User not found');
            } else {
                const user: user = await response.json();
                this.first_name = user.first_name;
                this.last_name = user.last_name;
                this.email = user.email;
                this.user_id = user.user_id;
            }
        },
        printUserInfo(): void {
            console.log({
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                user_id: this.user_id
            });
        },
        getUserId(): string | null {
            return localStorage.getItem('userID');
        },
        setUserId(user_id: string): void {
            localStorage.setItem('userID', user_id);
        }
    }
});
