import { Accordion, AccordionItem } from '@heroui/react'

export default function ContentDetails() {
    return (
        <div className="header flex flex-col min-w-[30%]">
            <Accordion defaultExpandedKeys={['1']} selectionMode="multiple">
                <AccordionItem
                    key="1"
                    aria-label="Plot Summary"
                    title={<p className="font-bold text-xl">Plot Summary</p>}
                >
                    In the thick and undisturbed forest, sparkling spring has
                    finally arrived, and all creatures, big or small, enjoy
                    life. However, Big Buck Bunny--an enormous, fluffy, and
                    utterly adorable rabbit--is facing a crisis: the ruthless,
                    loud, bullying gang of a flying squirrel is heartlessly
                    harassing him, determined to squash his happiness. Now, this
                    means war. But who will win?
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Trivia"
                    title={<p className="font-bold text-xl">Trivia</p>}
                >
                    No Content
                </AccordionItem>
            </Accordion>
        </div>
    )
}
