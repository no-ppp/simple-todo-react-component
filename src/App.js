
import './App.css';

function App() {
  return (
      <div>
          <div className='bg-blue-500'>
              <h1 className="text-white flex justify-center items-center text-5xl font-medium font-sans">
                  Create Todo !
              </h1>
              <div className='pb-5 flex justify-center items-center font-medium font-sans'>
                  <form className='pt-3 flex justify-center items-center'>
                      <input className='border-blue-200 border-2 border-r-0 h-9 rounded-l-md' type="text"
                             placeholder="Title"/>
                      <button className='border-blue-200 text-white border-2 h-9 rounded-r-md p-1 bg-blue-400'
                              type="submit">Create
                      </button>
                  </form>
              </div>
          </div>
          <div>
              <div className="grid grid-cols-9 border-2 bg-green-100">
                  <div className="flex flex-col border-r-2 justify-center items-center whitespace-normal col-span-2">
                      <p className='font-light'> 31.05 </p>
                      <p className='font-bold text-1xl'> 2024 </p>
                  </div>
                  <p className="flex justify-center border-r-2 items-center text-sm col-span-5 h-16 text-wrap"> Casdasd
                      asdasdoadssd asdasda
                      asda asdkasld </p>
                  <div
                      className=' flex justify-center items-center whitespace-normal bg-green-500 col-span-1 border-2 rounded-lg text-white hover:bg-green-400 transition-all active:scale-90'>
                      <button>
                          Done
                      </button>
                  </div>
                  <div
                      className='flex justify-center items-center whitespace-normal bg-red-500 col-span-1 border-2 rounded-lg text-white hover:bg-red-400 transition-all active:scale-90'>
                      <button>
                          Delete
                      </button>
                  </div>
              </div>
          </div>
          <div>
              <div className="grid grid-cols-9 border-2 bg-yellow-50">
                  <div className="flex flex-col border-r-2 justify-center items-center whitespace-normal col-span-2">
                      <p className='font-light'> 31.05 </p>
                      <p className='font-bold text-1xl'> 2024 </p>
                  </div>
                  <p className="flex justify-center border-r-2 items-center text-sm col-span-5 h-16 text-wrap"> Casdasd
                      asdasdoadssd asdasda
                      asda asdkasld </p>
                  <div
                      className=' flex justify-center items-center whitespace-normal bg-blue-500 col-span-1 border-2 rounded-lg text-white hover:bg-blue-400 transition-all active:scale-90'>
                      <button>
                          Done
                      </button>
                  </div>
                  <div
                      className='flex justify-center items-center whitespace-normal bg-red-500 col-span-1 border-2 rounded-lg text-white hover:bg-red-400 transition-all active:scale-90'>
                      <button>
                          Delete
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
