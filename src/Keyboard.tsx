import './Index.css'

const keyboard = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
]
const Keyboard:React.FC=()=> {

  return (
    <>
      {keyboard.map((keys,index)=>{
        return(
      <div key ={index} className='key-row'>
        {keys.map((letter,index)=>(
            <div key ={index} className='key-box'>{letter}</div>
      ))}
      </div>
      )})}
    </>
  )
}

export default Keyboard
