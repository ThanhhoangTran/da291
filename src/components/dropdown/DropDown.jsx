import React, {useRef} from 'react'
import './dropdown.css'
const clickOutSideContent = (btn_toggle, content_toggle)=>{
    document.addEventListener('mousedown', (e)=>{
      if(btn_toggle && btn_toggle.current.contains(e.target)){
          if(content_toggle.current && content_toggle.current.classList.contains('active')){
            content_toggle.current.classList.remove('active')
          }
          else {
            content_toggle.current.classList.add('active')
          }
      }
      else {
        if(content_toggle.current && !content_toggle.current.contains(e.target)){
          content_toggle.current.classList.remove('active')
        }
      }
    })
}

const DropDown = props => {
  const btn_toggle_ref = useRef(null);
  const content_toggle_ref = useRef(null);
  clickOutSideContent(btn_toggle_ref, content_toggle_ref);
  return (
    <div className='dropdown'>
        <div className="dropdown_toggle" ref={btn_toggle_ref}>
            {props.icon ? props.icon : null}
            {props.customToggle ? props.customToggle(): null}
        </div>
        <div className="dropdown_content" ref={content_toggle_ref}>
          {props.contentData && props.renderItems ? props.contentData.map((item, index)=>props.renderItems(item, index)): null}
        </div>
    </div>
  )
}

export default DropDown;