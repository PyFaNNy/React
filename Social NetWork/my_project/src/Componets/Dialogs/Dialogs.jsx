import style from './Dialogs.module.css'
import Message from './Messenge/Messenge';
import DialogItem from './DialogItem/DialogItem';

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
  let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );
  let path = "/dialogs" + props.id;

  return (
    <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={style.messages}>
            { messagesElements }
        </div>
    </div>
)
}

export default Dialogs;