import '../Styles/Editor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*import { faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons'; */
/*IMPORT BOOTSTRAP HERE AS WELL? And in Preview component*/



export default function Editor (props) {
  
    return(
    <div>
      <div className={props.boxToolbarClassNames} id="box-toolbar">
         <FontAwesomeIcon icon={props.whichIcon} className="arrows-icon" onClick={props.onArrowClick} title="resize editor window" aria-label="resize editor window" role="button" aria-pressed="false" aria-labelledby="resize editor window" tabIndex="0" onKeyPress={props.onArrowClick}/>
        </div>
        <div className={props.editorClassNames} id="editor-box">
          <textarea className="form-control border border-dark mx-auto rounded" rows={props.boxHeight} id="editor" onChange={props.onEdit} defaultValue={props.stateText}/>
        </div>
      </div>
    );
  
}