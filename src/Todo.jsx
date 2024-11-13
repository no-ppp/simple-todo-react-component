export function Todo(props) {
    return (
        <div className="
            grid grid-cols-9
            border-2 bg-green-100">

            <div className="
            flex flex-col justify-center items-center
            border-r-2  whitespace-normal col-span-2">

                <p className='font-light'>
                    {props.dayMonth} </p>
                <p className='font-bold text-1xl'>
                    {props.year} </p>
            </div>
            <p className="
            flex justify-center items-center col-span-5
            border-r-2 text-sm h-16 text-wrap">
                {props.description} </p>
            <div
                className='
                flex justify-center items-center col-span-1
                whitespace-normal bg-green-500
                border-2 rounded-lg text-white
                hover:bg-green-400 transition-all active:scale-90'>
                <button>
                    Done
                </button>
            </div>
            <div
                className='flex justify-center items-center col-span-1
                whitespace-normal bg-red-500 text-white
                border-2 rounded-lg
                hover:bg-red-400 transition-all active:scale-90'>
                <button>
                    Delete
                </button>
            </div>
        </div>
    )
}