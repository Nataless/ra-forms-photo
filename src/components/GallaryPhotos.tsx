import {Photo} from './Photo'
import { v4 as uuidv4 } from 'uuid';


export const GallaryPhotos = (props: { array: string[]; callback: any; }) => {
  const { array, callback } = props;

  return (
    <div className="conteiner__images">
      {
        array.map((item: string) => {
          return <Photo srcUrl={item} key={uuidv4()} callback={callback}/>
        })
      }
    </div>
  )
}