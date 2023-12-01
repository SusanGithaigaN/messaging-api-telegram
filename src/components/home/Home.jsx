// import React from 'react'

export default function Home() {
    return (
        <div className="pt-10">
            <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col space-x-4 items-center justify-center">


                <div className="mb-4">
                    {/* 01 */}
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracki">Channel A</h2>
                                {/* <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
                            </div>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Join Channel</button>
                        </div>
                    </div>
                </div>


                <div className="mb-4">
                    {/* 02 */}
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracki">Channel B</h2>
                                {/* <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
                            </div>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Join Channel</button>
                        </div>
                    </div>
                </div>


                <div className="mb-4">
                    {/* 03 */}
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracki">Channel C</h2>
                                {/* <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
                            </div>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Join Channel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
