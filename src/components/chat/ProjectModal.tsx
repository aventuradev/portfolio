/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoIosCloseCircle } from "react-icons/io";
type Props = {
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  setProject: React.Dispatch<React.SetStateAction<string>>,
  title:string,
  children: JSX.Element
}
export const ProjectModal = ({ show, setShow, children, setProject, title }: Props) => {
  return (
    <div
      className={`project-modal ${show ? 'show' : ''}`}>
      <div className="top">
        <h3>{title}</h3>
        <button
          onClick={() => {setShow(!show); setProject('')}}
          className="modal-close-button"
        >
          <IoIosCloseCircle />
        </button>
      </div>
      <div className="modal-content">
        {
          children
        }
      </div>
    </div>
  )
}
