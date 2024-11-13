export function CreateTitle({ handleSubmit }) {
    let newTodo = ''

    return (
        <div className="bg-blue-500">
            <h1 className="flex items-center justify-center font-sans text-5xl font-medium text-white">
                Create Todo!
            </h1>
            <div className="flex items-center justify-center pb-5 font-sans font-medium">
                <form
                    className="flex items-center justify-center pt-3"
                    onSubmit={(e) => handleSubmit(e, newTodo)}
                >
                    <input
                        className="h-9 rounded-l-md border-2 border-r-0 border-blue-200"
                        type="text"
                        onChange={(e) => (newTodo = e.target.value)} // Teraz tekst jest przechowywany w zmiennej
                        placeholder="Your todo!"
                    />
                    <button
                        className="h-9 rounded-r-md border-2 border-blue-200 bg-blue-400 p-1 text-white transition-all hover:bg-blue-300 active:scale-50"
                        type="submit"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}
