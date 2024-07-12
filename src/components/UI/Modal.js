import React from 'react'
import classes from './Modal.module.css'
import { Fragment } from 'react';
import ReactDom from 'react-dom'

const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModelOverlay = (props)=>{
    return <div className={classes.modal} >
        <div>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays')

function Modal(props) {
  return (
    <Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal