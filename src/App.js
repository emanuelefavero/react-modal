import { useState } from 'react'
import ReactModal from 'react-modal'

function App() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
            {modalOpen && (
                <ReactModal
                    // NOTE: Modal Behavior
                    // isOPen = false
                    isOpen={modalOpen}
                    // the modal will be closed when the user clicks on the overlay (outside the modal window) or if user clicks the Esc key
                    onRequestClose={() => setModalOpen(false)}
                    // NOTE: Modal Style
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        },
                        content: {
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            right: '40px',
                            bottom: '40px',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px',
                        },
                    }}
                >
                    {/* NOTE: Modal Content */}
                    <h1>Modal Window</h1>
                    <p>
                        A modal window is a graphical control element
                        subordinate to an application's main window. A modal
                        window creates a mode that disables the main window but
                        keeps it visible, with the modal window as a child
                        window in front of it. (Useful for accessibility)
                    </p>
                    <button onClick={() => setModalOpen(false)}>
                        Close Modal
                    </button>
                </ReactModal>
            )}
        </>
    )
}

export default App

// TIP: Modal prop functions are:
// onAfterOpen - called after the modal has opened
// onRequestClose - called when the user clicks the close button, or hits the escape key, or clicks outside the modal
// onAfterClose - called after the modal has closed
