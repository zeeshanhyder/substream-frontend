import React from 'react'
import { Tabs, Tab, ScrollShadow } from '@nextui-org/react'
import Sheet from './sheet'
import MovieCard from './movie-title-card'

export default function SeasonsSection() {
    return (
        <Sheet className="flex flex-col grow">
            <div className="flex flex-col">
                <h3 className="text-2xl font-bold">Episodes</h3>
                <Tabs variant="underlined">
                    <Tab title="Season 1">
                        <ScrollShadow
                            orientation="horizontal"
                            className="max-h-[300px] max-w-[100%]"
                        >
                            <div className="flex flex-row overflow-hidden overflow-x-auto">
                                <MovieCard
                                    title={'Episode 1'}
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 2'}
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 3'}
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 4'}
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 5'}
                                />
                            </div>
                        </ScrollShadow>
                    </Tab>
                    <Tab title="Season 2">
                        <ScrollShadow
                            orientation="horizontal"
                            className="max-h-[300px] max-w-[100%]"
                        >
                            <div className="flex flex-row overflow-hidden overflow-x-auto">
                                <MovieCard
                                    title={'Episode 1'}
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 2'}
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 3'}
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 4'}
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 5'}
                                />
                            </div>
                        </ScrollShadow>
                    </Tab>
                    <Tab title="Season 3">
                        <ScrollShadow
                            orientation="horizontal"
                            className="max-h-[300px] max-w-[100%]"
                        >
                            <div className="flex flex-row overflow-hidden overflow-x-auto">
                                <MovieCard
                                    title={'Episode 1'}
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 2'}
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 3'}
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 4'}
                                />
                                <MovieCard
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOWuk9UDhkMIZx7tu5SAm1anzf8L5R0SX0SnNKCvmx6eZZDww1"
                                    title={'Episode 5'}
                                />
                            </div>
                        </ScrollShadow>
                    </Tab>
                </Tabs>
            </div>
        </Sheet>
    )
}
