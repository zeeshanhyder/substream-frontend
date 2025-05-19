'use server'
import getConfig from 'next/config'
import AddProfileExperience from '@/experiences/add-profile/add-profile'
import { APIResponse } from '@/client-api/types/service-response'
import { arrayBufferToBase64 } from '@/app/add-profile/get-img-base-64'
import { ExperienceHeading, TextCustom } from '@/components/ui/typography'
import { Suspense } from 'react'
import DefaultFallback from '@/utils/default-fallback'

const { serverRuntimeConfig } = getConfig()
const { homePath } = serverRuntimeConfig

const getAvatar = async (): Promise<APIResponse<string>> => {
    try {
        const data = await fetch('https://avatar.iran.liara.run/public')
        const base64data = await data.blob()
        const arrayBufferData = await base64data.arrayBuffer()
        const base64Img = arrayBufferToBase64(arrayBufferData)

        return {
            data: base64Img,
            error: undefined,
            status: data.status,
        }
    } catch (err) {
        return {
            data: undefined,
            error: (err as Error).message,
            status: 500,
        }
    }
}

export default async function Profiles() {
    const avatarPromise = getAvatar()
    return (
        <div className="flex flex-col h-screen mx-[10vw]">
            <div className="flex flex-col h-1/2 mt-[10vmax]">
                <ExperienceHeading>Add Profile</ExperienceHeading>
                <TextCustom className="text-4xl opacity-35">
                    Enter profile details
                </TextCustom>
            </div>
            <Suspense fallback={<DefaultFallback />}>
                <AddProfileExperience
                    homePath={`${homePath}/media`}
                    avatarPromise={avatarPromise}
                />
            </Suspense>
        </div>
    )
}
