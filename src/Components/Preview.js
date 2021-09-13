import marked from 'marked';
import '../Styles/Preview.css';

export default function Preview (props) {
  
    return (
      <div className="container-fluid border border-dark rounded col-xs-12" id="preview" dangerouslySetInnerHTML={{__html: marked(props.renderedText)}}>
      </div>
    );
}