import { addNewProfile } from '@/server-api/add-profile'
import { createNewSession } from './create-session.action'

export const createProfile = async (form: FormData) => {
    try {
        let res = await addNewProfile(form)
        if (!res.data?.id) {
            throw new Error('User not created! Exiting')
        }
        // } else {
        //     setTimeout(async () => {
        //         await createNewSession(res?.data?.id ?? '', '/onboarding')
        //     }, 1000)
        // }
        return res.data
    } catch (err) {
        console.log(err)
    }
}
