export const saveToken = (token) => localStorage.setItem('dola_token', token)
export const getToken = () => localStorage.getItem('dola_token')
export const removeToken = () => localStorage.removeItem('dola_token')
