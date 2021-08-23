export default function Editor (props) {
  
    return(
    <div>
        {/*<div id="editor-container">*/}
      <div className={props.boxToolbarClassNames}>
         <i className={props.whichIcon} onClick={props.onArrowClick} title="resize editor window" aria-label="resize editor window" role="button" aria-pressed="false" aria-labelledby="resize editor window" tabIndex="0" onKeyPress={props.onArrowClick}/>
        </div>
        {/*</div>*/}
        <div className={props.editorClassNames} id="editor-box">
          <textarea className="form-control border border-dark mx-auto rounded" rows={props.boxHeight} id="editor" onChange={props.onEdit}>{props.stateText}</textarea>
        </div>
      </div>
    );
  
}