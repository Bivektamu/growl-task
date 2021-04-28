import './growl.css'
import React from 'react';
export const Growl = ({ active, message, onDismissed, ...props }) => {

  const [growlActive, setGrowlActive] = React.useState(false)
  const [growlMsg, setGrowlMsg] = React.useState('')

  React.useEffect(()=> {
    setGrowlActive(active)
    setGrowlMsg(message)
  }, [active, message]);


    if(growlActive) {
      setTimeout(()=> {setGrowlActive(!growlActive)}, 3000)
    }

return  (
    <div className={`growl${growlActive ? " active" : ""}`}>
      {growlMsg}
      <div onClick={()=>setGrowlActive(!growlActive)} className="growl-close" />
    </div>
  )
  
}
