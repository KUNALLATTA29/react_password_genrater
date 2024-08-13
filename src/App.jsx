import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);

  const handle_password = useCallback(()=>{
    let st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if(number){
      st +="1234567890";
    }
    if(special){
      st +="!@#$%^&*()";
    }

    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*st.length +1)
      pass +=st.charAt(char);
    }

    setPassword(pass);
  }, [length,number,setPassword,special])
  useEffect(()=>{
    handle_password();
  }, [length,number,special])

  return (
    <div className='max-w-sm mx-auto bg-black p-6 rounded-lg shadow-lg text-black'>
      <input
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3'
      readOnly
      />
      <div>
        <input
          type='range'
          min={8}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label style={{color:'white'}}>length : {length}</label>
        <br/>
        <input
          type='checkbox'
          defaultChecked={number}
          onChange={() =>{
            setNumber((prev) => !prev);
          }}
        />
        <label style={{color:'white'}}>number</label>
        <br/>
        <input
          type='checkbox'
          defaultChecked={special}
          onChange={()=>{
            setSpecial((prev) => !prev)
          }}
        />
        <label style={{color:'white'}}>special</label>
      </div>
    </div>
  )
}

export default App
