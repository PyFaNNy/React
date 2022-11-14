import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'

function Dialog(props) {
  let path = "/dialogs" + props.id;

  return (
    <div className={style.dialog + ' ' + style.active}>
      <NavLink to={path} >{props.name}</NavLink> 
    </div>
  )
}

function Message(props) {
  return (
    <div className={style.messange}>
    {props.messange}
  </div>
  )
}

function Dialogs(props) {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <Dialog id='1' name="Dmitry"/>
        <Dialog id='2' name="Artem"/>
        <Dialog id='3' name="Anton"/>
        <Dialog id='4' name="Sveta"/>
      </div>
      <div className={style.messenges}>
        <Message messange="Hi"/>
        <Message messange="Hello"/>
        <Message messange="Bye"/>
      </div>
    </div>
  )
}

export default Dialogs;