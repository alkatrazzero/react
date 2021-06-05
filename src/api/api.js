import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b3402cf1-e842-47f8-a97d-907bf923b8a4",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users/?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    getAuth() {
        return instance.get("auth/me");
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`).then((response) => {
            return response.data;
        });
    },
    follow(id) {
        return instance.post(`follow/${id}`, {}).then((response) => {
            return response.data;
        });
    },
    getCurrentProfileId(id) {
        return instance.get(`profile/${id}`);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    login(email, password, rememberMe = false,captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe,captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    getCaptcha(){
        return instance.get('security/get-captcha-url')
    }
};
