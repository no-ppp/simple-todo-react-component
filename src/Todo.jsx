export function Todo({ dayMonth, year, description, id, completed, onToggle, onDelete }) {
    return (
        <div className={`grid grid-cols-9 border-2 ${completed ? 'bg-yellow-200' : 'bg-green-100'}`}>
            <div className="col-span-2 flex flex-col items-center justify-center whitespace-normal border-r-2">
                <p className="font-light">{dayMonth}</p>
                <p className="text-1xl font-bold">{year}</p>
            </div>
            <p className="col-span-5 flex h-16 items-center justify-center text-wrap border-r-2 text-sm">
                {description}
            </p>
            <div onClick={onToggle}
                 className="col-span-1 flex items-center justify-center whitespace-normal rounded-lg border-2 bg-green-500 text-white transition-all hover:bg-green-400 active:scale-90">
                <button>Done</button>
            </div>
            <div onClick={onDelete}
                 className="col-span-1 flex items-center justify-center whitespace-normal rounded-lg border-2 bg-red-500 text-white transition-all hover:bg-red-400 active:scale-90">
                <button>Delete</button>
            </div>
        </div>
    )
}