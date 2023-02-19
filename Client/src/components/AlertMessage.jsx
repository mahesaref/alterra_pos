const AlertMessage = ({ succes, message }) => {
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" defaultChecked />
            <div className="modal">
                <div className="modal-box flex justify-center">
                    {succes
                        ? <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-success" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    <span className="ml-">{message}</span>
                </div>
            </div>
        </>
    )
}

export default AlertMessage;