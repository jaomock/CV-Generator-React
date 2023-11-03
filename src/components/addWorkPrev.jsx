import './allComponents.css'
import {allWorkData} from './EducationWorkData.jsx'


export default function AddWorkPreview({
}){


    return(
        <div className='workPreview'>
            {allWorkData.map(test =>
        <><div key={test.pos} className='workTop'>
                    <h3>{test.pos}</h3>
                    <div className='company-sDate-eDate'>
                        <h4 id='company'>{test.comp + ' | '}</h4>
                        <p>{test.start} - {test.end}</p>
                    </div>
                </div><p>{test.description}</p></>
            )}
        </div>
        
    )
}
