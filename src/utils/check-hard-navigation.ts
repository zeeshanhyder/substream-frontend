import { headers } from 'next/headers'

export const isHardNavigationRoute = async () => {
    const isHardReload = (await headers()).has('next-url')
    return isHardReload
}
