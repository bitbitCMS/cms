import { useState, useRef, useEffect } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import "draft-js/dist/Draft.css"

const PostForm = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const editor = useRef(null)

  function focusEditor() {
    editor.current.focus()
  }

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
  ]

  const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
  ]

  const StyleButton = props => {
    const onToggle = e => {
      e.preventDefault()
      alert('oke')
    }

    const className=""
    
    return (
      <span className={className} onMouseDown={onToggle}>{props.label}</span>
    )
  }

  const InlineStyleControls = props => {
    const { onToggle, editorState } = props
    // console.log('masuk kesini', editorState)
    const currentStyle = editorState.getCurrentInlineStyle()

    return (
      <div className="RichEditor-controls">
        {INLINE_STYLES.map(({ label, style }) => (
          <StyleButton
            key={label}
            label={label}
            onToggle={onToggle}
            style={style}
          />
        ))}
      </div>
    )
  }

  const BlockStyleControls = props => {
    const { editorState, onToggle } = props
    const selection = editorState.getSelection()
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType()

    return (
      <div className="RichEditor-controls">
        {BLOCK_TYPES.map(({ label, style}) => (
          <StyleButton
            key={label}
            label={label}
            onToggle={onToggle}
            style={style}
          />
        ))}
      </div>
    )
    
  }

  const toggleInlineStyle = style => {
    RichUtils.toggleInlineStyle(
      editorState,
      style
    )
  }

  const toggleBlockType = type => {
    RichUtils.toggleBlockType(
      editorState,
      blockType
    )
  }


  useEffect(() => {
    focusEditor()
  }, [])
  
  return (
    <div onClick={focusEditor}>
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <Editor
        ref={editor}
        handleKeyCommand={handleKeyCommand}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Tell a post..."
      />
    </div>
  )
}

export default PostForm
