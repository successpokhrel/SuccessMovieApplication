import { useNavigate } from 'react-router';
import usePersonalStore from '../../stores/PersonalStore'
import '../App.css'
import { useState } from 'react';

const LoginPage = () => {
    const [input, setInput] = useState<string>("");
    const {logIn} = usePersonalStore();
    const navigate = useNavigate();

    const HandleLogIn=()=>{
        if(input==="success"){
            logIn(input);
            navigate('/');
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={()=>HandleLogIn()}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
