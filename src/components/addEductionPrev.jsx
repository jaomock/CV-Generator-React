import './allComponents.css'
import {allEducationData} from './EducationWorkData.jsx'

export default function AddEducationPreview({
}){

    return(
        <div className='educationPreview'>
            {allEducationData.map(edu => 
            <><div className='eduTop'>
            <h3>{edu.deg}</h3>
            <div className='eduRightSide'>
                <h3>{edu.school} |</h3>
                <p id='eduSnE'>{edu.sSDate} - {edu.eSDate}</p>
            </div>
            </div>
            </>
        )}
        </div>
    )
}



