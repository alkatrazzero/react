import React from "react";
import s from "./FormsControl.module.css"

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (<div className={s.formControl + " " + (hasError ? s.error : " ")}>
        <div>
            <textarea {...input} {...props} />
        </div>
        <div>
            {hasError && <span className={s.span}>{meta.error}</span>}
        </div>
    </div>)
}