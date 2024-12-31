import { getLibrary, getNewlyAdded } from '@/api'
import Landing from '@/components/landing'

export default async function Home() {
    const newlyReleased = await getNewlyAdded()
    const myLibrary = await getLibrary()
    return (
        <Landing
            newlyReleased={newlyReleased.data}
            myLibrary={myLibrary.data}
        />
    )
}
