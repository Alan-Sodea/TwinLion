import { hookstate } from '@hookstate/core';

export const globalStore = hookstate([

]);

export const imageStore = hookstate([

]);



export const presetLayouts = [
    '/case1.png',
    '/case2.png',
    '/case3.png',
]

export const isConnected = hookstate(false);
export const ThePassword = hookstate("admin123");

export const actualSection = hookstate("");