import React from 'react'

const Alert = (props) => {
    //  console.log(alert.message)
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        // console.log(lower);
        return lower.charAt(0).toUpperCase() + word.slice(1);
    }
    // console.log(capitalize("hello"))
  return (
 props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert" `}>
  <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}

  {/* <button
    type="button"
    className="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  /> */}
</div>


  )
}

export default Alert