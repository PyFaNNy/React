import style from './Dialogs.module.css'

function Dialogs(props) {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog + ' ' + style.active}>
          Dmitry
        </div>
        <div className={style.dialog}>
          Artem
        </div>
        <div className={style.dialog}>
          Anton
        </div>
      </div>
      <div className={style.messenges}>
        <div className={style.messange}>
          Hi
        </div>
        <div className={style.messange}>
          How are you
        </div>
      </div>
    </div>
  )
}

export default Dialogs;