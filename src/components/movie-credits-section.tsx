import Sheet from './sheet'

export default function MovieCreditsSection() {
    return (
        <Sheet className="flex flex-row grow">
            <div className="flex-col flex grow min-w-[70%]">
                <h3 className="text-3xl font-bold">Credits</h3>
            </div>
            <div className="header flex flex-row min-w-[30%]">
                <Sheet className="flex flex-col pt-[7px]">
                    <img
                        className="w-[10rem]"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/1280px-Big_buck_bunny_poster_big.jpg"
                    />
                </Sheet>
                <Sheet className="flex flex-col pl-5">
                    <h3 className="text-3xl font-black">Big Buck Bunny</h3>
                    <p>
                        In the thick and undisturbed forest, sparkling spring
                        has finally arrived, and all creatures, big or small,
                        enjoy life. However, Big Buck Bunny--an enormous,
                        fluffy, and utterly adorable rabbit--is facing a crisis:
                        the ruthless, loud, bullying gang of a flying squirrel
                        is heartlessly harassing him, determined to squash his
                        happiness. Now, this means war. But who will win?
                    </p>
                </Sheet>
            </div>
        </Sheet>
    )
}
