import React from 'react'
import Button from './ui/Button'
import { LuDownload } from 'react-icons/lu'

type TitleCardProps = {
  title: string,
  onDownload: () => void,
}
const TitleCard = ({title, onDownload}: TitleCardProps) => {
  return (
    <div className="flex flex-row bg-white rounded-xl  p-5 mb-3 gap-2 justify-between">
        <p className='font-bold text-xl rounded-2xl '>{title}</p>
        <Button title='Download CV' isActive={true} onClick={onDownload} icon={<LuDownload style={{ width: "15px", height: "15px"}}/>}/>
    </div>
  )
}

export default TitleCard  