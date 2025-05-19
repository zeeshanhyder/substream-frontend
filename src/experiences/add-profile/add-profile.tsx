'use client'
import { APIResponse } from '@/client-api/types/service-response'
import { ExperienceHeading, TextCustom } from '@/components/ui/typography'
import { Button, Form } from '@heroui/react'
import { getSpinner } from './get-spinner'
import { CaretRight } from '@phosphor-icons/react'
import { Suspense, use, useState } from 'react'
import { createProfile } from '@/server/actions/create-profile.action'
import { useUserSessionStore } from '@/providers/user-session-provider'
import { PersonaUser } from '@/client-api/persona'
import { createNewSession } from '@/server/actions/create-session.action'
import router from 'next/router'
import DefaultFallback from '@/utils/default-fallback'

export default function AddProfileExperience({
    homePath,
    avatarPromise,
}: {
    homePath: string
    avatarPromise: Promise<APIResponse<string>>
}) {
    const { data } = use(avatarPromise)
    const [isLoading, setIsLoading] = useState(false)
    const {
        setAvatarUrl,
        setEmailAddress,
        setHomeDirectory,
        setMediaPathList,
        setUserFullName,
        setUserId,
    } = useUserSessionStore((state) => state)

    const saveProfile = (profile: PersonaUser) => {
        setAvatarUrl(profile.avatarUrl)
        setEmailAddress(profile.emailAddress)
        setHomeDirectory(profile.homeDirectory)
        setMediaPathList(profile.mediaPathList)
        setUserFullName(profile.fullName)
        setUserId(profile.id)
        createNewSession(profile.id).then(() => {
            router.push('/library')
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        const formData = new FormData(event.currentTarget)
        createProfile(formData).then((res) => {
            setIsLoading(false)
            if (res) saveProfile(res)
        })
    }

    return (
        <div className="flex flex-row h-1/2 items-center">
            <img
                src={`data:image/png;base64,${data ?? ''}`}
                style={{
                    width: '100px',
                    height: '100px',
                }}
            />
            <Form className="mx-10 flex flex-col" onSubmit={handleSubmit}>
                <input
                    className="py-2 mb-1 font-bold text-3xl w-3xl border-0 outline-0 focus:border-b-1 focus:border-[var(--foreground)] bg-transparent"
                    type="text"
                    placeholder="Donnie Darko"
                    name="fullName"
                    required
                    autoFocus
                />
                <input
                    className="py-2 mb-1 text-l w-xl border-0 outline-0 focus:border-b-1 focus:border-[var(--foreground)] bg-transparent"
                    type="email"
                    placeholder="donnie@moviebuff.com"
                    name="emailAddress"
                    required
                />
                <input
                    className="py-2 mb-1 text-l w-xl border-0 outline-0 focus:border-b-1 focus:border-[var(--foreground)] bg-transparent"
                    type="text"
                    required
                    placeholder="Media Path (/Users/donnie/Movies)"
                    defaultValue={homePath}
                    name="homeDirectory"
                />
                <Button
                    spinner={getSpinner()}
                    className="mt-5 w-[250px] rounded-full shadow-md justify-between"
                    variant="solid"
                    color="secondary"
                    type="submit"
                    isLoading={isLoading}
                    radius="full"
                >
                    <span className="text-primary font-semibold">
                        Create Profile
                    </span>
                    <CaretRight
                        size={20}
                        weight="bold"
                        className="fill-[var(--background)]"
                    />
                </Button>
            </Form>
        </div>
    )
}
