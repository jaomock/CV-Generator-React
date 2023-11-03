import './allComponents.css'
import './add-clear.css'
import eInfo from '../assets/booklet-line.png'
import { allEducationData } from './EducationWorkData'
/*This is education*/ 
export default function SchoolEXP({
    schoolRef,
    schoolsDateRef,
    schooleDateRef,
    degreeRef,
    addEInfo,
    clearEData
}){

return (
    <div className="workInfo">
        <div className='boxTopBar'>
        <img src={eInfo} alt="wInfo" className='smallImg'></img>
        <p>Education</p>
        </div>
    <input ref={schoolRef} type="text"  className="allLabels" placeholder="School" />
    <input ref={schoolsDateRef} type="text" className="allLabels" placeholder="Enter Start Date" />
    <input ref={schooleDateRef} type="text" className="allLabels" placeholder="Enter End Date" />
    <input ref={degreeRef} type="text" className="allLabels" placeholder="Enter Degree/Field Of Study" />
    <section className='bottomBtnz'>
            <button onClick={() => {addEInfo()}} className='btn'>Add</button>
            <button onClick={() => {clearEData()}} className='btn'>Clear</button>
            </section>
</div>
)
}