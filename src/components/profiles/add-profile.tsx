import { Heading1 } from '@/components/ui/typography'
import AddNewProfileIcon from './add-new-profile-icon.svg'
import Image from 'next/image'

export const AddProfile = () => {
    return (
        <div className="flex flex-col mr-12 items-center text-center cursor-pointer">
            <Image
                width={100}
                height={100}
                src={AddNewProfileIcon}
                alt={`Add profile`}
            />
            <Heading1>Add Profile</Heading1>
        </div>
    )
}
