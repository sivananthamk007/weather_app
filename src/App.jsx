import { useState } from 'react'
import Sun from './assets/sunny.svg';
import Air from './assets/air.svg';
import './App.css'
import axios from 'axios';

const key = '3633c4fa84dad24914111df4cca95a32'

const App = () => {
  const [city, SetCity] = useState('');
  const [data, SetData] = useState()

  const finding = async (e) => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      console.log(res)
      SetData(res.data)
    }
    catch (err) {
      alert('error in api call')
    }

  }

  return (
    <div className='h-screen flex items-center justify-center flex-col bg-yellow-50'>
      <h1 className='font-semibold text-blue-700 mb-5 text-4xl mb-10 '>WEATHER APP</h1>

      <div className='flex gap-1 mb-15 '>
        <input className='py-1 ps-3 text-gray-900 border-2 bg-gray-300 font-semibold text-lg' type="text" placeholder='city name...' onChange={(e) => SetCity(e.target.value)} />
        <button className='bg-blue-600 hover:bg-blue-500 text-gray-900 font-bold py-3 px-9 rounded-lg' onClick={finding}>submit</button>
      </div>


      <div>
        {data &&
          <div className='border-3 border-gray-700 p-6 rounded-lg bg-yellow-100  flex flex-col gap-3'>
            <div className='flex'>
              <h1 className='text-xl font-semibold text-blue-900'>place & temp  : <span className='text-xl text-gray-900'>{data.name} & {data.main.temp}</span> <span className='text-orange-500 font-bold'>C'</span></h1>

            </div>
            <div className='flex'>
              <h2 className='text-xl font-semibold text-blue-900'>wind speed 
                : <span className='text-xl text-gray-900'>{data.wind.speed}</span></h2>
            </div>
            <h2 className='text-xl font-semibold text-blue-900'>weather type : <span className='text-xl text-gray-900'> {data.weather[0].main}</span></h2>
          </div>

        }

      </div>
    </div>
  )
}

export default App;
//   const [city, SetCity] = useState("")
//   const [data, SetData] = useState()

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
//       SetData(res.data)
//       console.log(res)
//     }
//     catch (err) {
//       alert('error in api call')
//     }

//   }
//   return (
//     <div className='App'>
//       <h1>WEATHER APP</h1>
//       <div>

//         <input type='text' className='input' value={city}
//           onChange={e => SetCity(e.target.value)}
//           placeholder='enter the city name'
//         />

//         <button className='button' onClick={fetchData}>Fetch</button>

//         <div>
//           {data && (
//             <div className='container'>
//               <h1 className='city-name'> {data.name},{data.sys.country}</h1>
//               <div>
//                 <div> temp -
//                   {Math.floor(data.main.temp)} C
//                 </div>
//                 <div>
//                   wind - {data.wind.speed}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
