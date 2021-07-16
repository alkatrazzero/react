import axios, {AxiosResponse} from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b3402cf1-e842-47f8-a97d-907bf923b8a4",
  },
});
export enum ResultCodesEnum{
  success=0,
  Error=1,
  CaptchaIsRequired=10
}
type MeResType = {
  data: { id: number, email: string, login: string }
  resultCode: ResultCodesEnum
  messages: Array<string>
}
type LoginResType = {
  data: { userId: number}
  resultCode: ResultCodesEnum
  messages: Array<string>
}
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5,term:string='',friend:null |boolean=null) {
    return instance
      .get(`users/?page=${currentPage}&count=${pageSize}&term=${term}`+(friend===null?'':`&friend=${friend}`))
      .then((response) => {
        return response.data;
      });
  },
  getAuth() {
    return instance.get<MeResType>("auth/me").then(res=>res.data)
  },
  getProfile(userId: number) {
    return instance.get(`profile/` + userId);
  },
  unFollow(id: number) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  follow(id: number) {
    return instance.post(`follow/${id}`, {}).then((response) => {
      return response.data;
    });
  },
  getCurrentProfileId(id: number) {
    return instance.get(`profile/${id}`);
  },
  getStatus(id: number) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status});
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<LoginResType>(`auth/login`, {email, password, rememberMe, captcha}).then(res=>res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  },
  getCaptcha() {
    return instance.get('security/get-captcha-url')
  },
  savePhoto(file: any) {
    const formData = new FormData()
    formData.append("image", file)
    return instance.put('profile/photo', formData, {
      headers: {'Content-Type': 'multipart/form/data'}
    });
  },
  getFollowers(userId: number) {
    return instance.get(`follow/` + userId);
  },
  saveProfile(profile: ProfileType) {
    return instance.put('profile/', profile)
  }
};
