import React from "react"
import "./Modal.scss"

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-button" type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
