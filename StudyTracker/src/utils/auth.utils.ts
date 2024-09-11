export async function isUserAuthenticated(): Promise<boolean> {
    const response: Response = await fetch('http://localhost:3000/auth/isLoggedIn', {
        credentials: 'include'
    });
    return response.status === 201;
}
