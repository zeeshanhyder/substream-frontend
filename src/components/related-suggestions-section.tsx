import Sheet from './sheet'

export default function RelatedContentSuggestion() {
    return (
        <Sheet className="flex flex-row grow mt-10">
            <div className="flex-col flex grow min-w-[70%]">
                <h3 className="text-xl font-bold">Similar like this</h3>
            </div>
        </Sheet>
    )
}
