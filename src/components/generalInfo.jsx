import './add-clear.css'
import './allComponents.css'
import pInfo from '../assets/personalinfo.png'

export default function General({
    addPInfo,
    clearPInfo,
    fNameRef,
    lNameRef, 
    titleRef,
    locationRef,
    emailRef,
    phoneRef
})
{

    return (
            <div className='generalInfo'>
            <div className='boxTopBar'>
            <img src={pInfo} alt="pInfo" className='smallImg'></img>
            <p>Personal Information</p>
            </div>
            <input ref={fNameRef} type="text"  className="allLabels" placeholder="First Name" required />
            <input ref={lNameRef} type="text" className="allLabels" placeholder="Last Name" required />
            <input ref={titleRef} type="text" className="allLabels" placeholder="Title" required />
            <input ref={locationRef} type="text" className="allLabels" placeholder="Location" required />
            <input ref={emailRef} type="email" className="allLabels" placeholder="Email" required />
            <input ref={phoneRef} type="tel" className="allLabels" placeholder="Phone Number" required />
            <section className='bottomBtnz'>
            <button onClick={() => addPInfo()}  className='btn'>Add</button>
            <button onClick={() => clearPInfo()} className='btn'>Clear</button>
            </section>
        </div>
    )
}
