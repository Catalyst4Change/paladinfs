import React from "react"
import "./Modal.scss"

export const Modal = ({ isOpen, onClose, children }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : null}`}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-button" type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
