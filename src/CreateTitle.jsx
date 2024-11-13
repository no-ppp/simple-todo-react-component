export function CreateTitle(props) {
    return (
        <div className='bg-blue-500'>
            <h1 className="text-white flex justify-center items-center text-5xl font-medium font-sans">
                Create Todo !
            </h1>
            <div className='pb-5 flex justify-center items-center font-medium font-sans'>
                <form className='pt-3 flex justify-center items-center'>
                    <input className='border-blue-200 border-2 border-r-0 h-9 rounded-l-md' type="text"
                           placeholder="Title"/>
                    <button
                        className='border-blue-200 text-white border-2 h-9 rounded-r-md p-1 bg-blue-400 hover:bg-blue-300 transition-all active:scale-50'
                        type="submit">Create
                    </button>
                </form>
            </div>
        </div>
    )
}