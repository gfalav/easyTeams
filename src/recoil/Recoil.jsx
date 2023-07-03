import { atom } from "recoil";

export const drawerWidth = atom({ key: 'drawerWidth', default: 240 })
export const isMb = atom({ key: 'isMb', default: false })
export const toggleMenu = atom({ key: 'toggleMenu', default: false })
export const user = atom({ key: 'user', default: null})
export const avatarImg = atom({ key: 'avatarImg', default: null})