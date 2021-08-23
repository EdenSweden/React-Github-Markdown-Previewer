import React from 'react';
import marked from 'marked';
import Editor from './Editor';
import Preview from './Preview';
import '../Styles/Wrapper.css';
import { faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';



const placeholder = `# Welcome to my Github Markdown Previewer!
## This lets you type Github markdown in the box above,
### and renders it in HTML.
#### Look at all the cool stuff you can do:
Watch me easily insert a [link](https://en.wikipedia.org/wiki/Hummingbird) to an article about hummingbirds.
If you want some inline code, \`<p>Here you go!</p>\`
What about a multi-line block of code? No problem:
\`\`\`
const myFunction = () => {
if (user.age > 12 && user.age < 20 ){
return "You are a teenager!"
} else {
return "You are not a teen."
  }
};  
\`\`\`
Need to create a list?
- This
- is
     - not
     - a
- problem.
1. There are numbered lists
2. as well!

> Insert a blockquote
> by someone you admire.

Or try a cute puppy image:
 ![Cute black puppy](https://picsum.photos/id/237/200/300)

*Try italicizing your text.*
**Be bold!** And have fun.

(For a cheat sheet of markdown rules, check out this [link](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)).`

marked.setOptions({
  breaks: true
});

export default class Wrapper extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        text: placeholder,
        //setting this.state.expanded to true makes the first click work properly.
        expanded: true,
        boxToolbarClassString: "d-none d-sm-flex flex-row bg-info justify-content-end p-1 border border-dark rounded-top col-sm-8 offset-sm-2",
        editorClassString: "container form-group bg-info rounded-bottom border border-dark p-1 col-sm-8 col-xs-12",
        iconName: faExpandArrowsAlt/*"fas fa-expand-arrows-alt"*/,
        numRows: "10"
        }
      this.handleChange = this.handleChange.bind(this);
      this.toggleExpand = this.toggleExpand.bind(this);
        }
      
     //change preview text to reflect editor input
      handleChange(input) {
      this.setState({text: input.target.value});
      }
    //change the size of the editor box by toggling classes
      toggleExpand() {
        this.setState({expanded: this.state.expanded === true ? false : true, boxToolbarClassString: this.state.expanded === true ? "d-none d-sm-flex flex-row bg-info justify-content-end p-1 border border-dark rounded-top col-sm-12 mw-100 mt-n3"
  : "d-none d-sm-flex flex-row bg-info justify-content-end p-1 border border-dark rounded-top col-sm-8 offset-sm-2",  iconName: this.state.expanded === true ? faCompressArrowsAlt/*"fas fa-compress-arrows-alt"*/ : faExpandArrowsAlt/*"fas fa-expand-arrows-alt"*/, editorClassString: this.state.expanded === true ? "d-flex bg-info rounded-bottom border border-dark p-1 {/*mx-sm-5 col-sm-12*/} col-xs-12 mb-3 w-100 mw-100" : "container form-group bg-info rounded-bottom border border-dark p-1 col-sm-8 col-xs-12", numRows: this.state.expanded === true ? "20" : "10" });
        console.log(this.state.expanded);
      }
      
    render(){
      return (
      <div className="mt-3">
      <Editor onEdit={this.handleChange} stateText={this.state.text} onArrowClick={this.toggleExpand} whichIcon={this.state.iconName} boxToolbarClassNames={this.state.boxToolbarClassString} editorClassNames={this.state.editorClassString} boxHeight={this.state.numRows}/>
      <Preview renderedText={this.state.text} id="preview" />
      </div>
      );
      }
    }