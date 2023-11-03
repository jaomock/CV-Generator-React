import './allComponents.css'
import './add-clear.css'
import wInfo from '../assets/workexp.png'
import {allEducationData} from './EducationWorkData'
/*this is work*/
export default function Education({
    addWInfo,
    // clearEInfo,
    positionRef,
    companyRef,
    sDateRef,
    eDateRef,
    descRef,
    clearWData
}){


    return (
        <div className="educationInfo">
            <div className='boxTopBar'>
                <img src={wInfo} alt="eInfo" className='smallImg'></img>
                <p>Work Experience</p>
            </div>
            <input ref={positionRef} type="text"  className="allLabels" placeholder="Position" required />
            <input ref={companyRef} type="text" className="allLabels" placeholder="Company" required />
            <input ref={sDateRef} type="text" className="allLabels" placeholder="Start Date"  required />
            <input ref={eDateRef} type="text" className="allLabels" placeholder="End Date"  required />
            <textarea ref={descRef} placeholder='Description' className='allLabels' required ></textarea>
            <section className='bottomBtnz'>
            <button onClick={() => {addWInfo()}} className='btn'>Add</button>

            <button onClick={() => {clearWData()}} className='btn'>Clear</button>
            </section>
        </div>
        
    )
}

