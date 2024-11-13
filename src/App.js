import {CreateTitle} from "./CreateTitle";
import {Todo} from './Todo.jsx'
import './App.css';

function App() {
  return (
      <div>
          <CreateTitle/>
            <Todo dayMonth={'31.05'} year={'2024'} description={'Cos tam cos tam cos tam'}/>



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
