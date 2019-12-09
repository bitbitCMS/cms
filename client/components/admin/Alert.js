import { useState } from "react"
import clsx from 'clsx'

const Alert = (props) => {

    return (
        <div className={clsx("alert alert-warning alert-dismissible fade", props.show)} role="alert">
            {props.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={props.onClick}>
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert;