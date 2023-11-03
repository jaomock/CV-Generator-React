import './allComponents.css'
import locationImg from '../assets/location.png'
import phoneImg from '../assets/phone-line.png'
import emailImg from '../assets/mail-line.png'
import AddWorkPreview from './addWorkPrev'
import AddEducationPreview from './addEductionPrev'
// import { allEducationData,allWorkData } from './EducationWorkData'
// import { useState } from 'react'
import ReactToPrint, { useReactToPrint } from 'react-to-print'
import React from 'react'


// export default function Preview({
//     fName,
//     lName,
//     title,
//     location,
//     email,
//     phone,
//     printRef
// })
// {

export const Preview = React.forwardRef(({
    fName,
    lName,
    title,
    location,
    email,
    phone,
}, ref) => {


    // const[opacityWork,setOpacityWork] = useState(0)

    // if(allWorkData.length === 1){
    //     setOpacityWork(1)
    // }
    
    // const[opacityEdu,setOpacityEdu] = useState(0)

    // if(allEducationData.length > 0){
    //     setOpacityEdu(1)
    // }

    // <ReactToPrint
    // trigger={() => {
    //     return <img src={printImg} alt='printImg' className='imgBtn' />
    // }}
    // content = {()=> this.componentRef}
    // documentTitle = 'New Document'
    // pageStyle='Print'
    // />

    return(
        <div>
            
            <section className='cv-preview'>
                    <div ref={ref} className='info'>
                        <div className='genInfoPreview'>
                        <div className='name-title'>
                            <h1>{fName} {lName}</h1>
                            <h2>{title}</h2>
                        </div>
                        <div className='blackLine'></div>
                        <div className='loc-num-email'>
                            <div className='locInfo'>
                                <img src={locationImg} alt="location" className='previewImg' />
                                <h4>{location}</h4>
                            </div>
                            <div className='phoneInfo'>
                                <img src={phoneImg} altp="phone" className='previewImg' />
                                <h4>{phone}</h4>
                            </div>
                            <div className='emailInfo'>
                                <img src={emailImg} alt="email" className='previewImg' />
                                <h4>{email}</h4>
                            </div>
                        </div>
                        </div>
                        <div className='workInfoPreview'>
                            <div className='workTitle'>
                                <h2 id='expTitle'>Experience</h2>
                            </div>
                            <AddWorkPreview/>
                        </div>
                        <div className='eduInfoPreview'>
                            <div className='eduTitle'>
                                <h2 id='eduTitle'>Education</h2>
                            </div>
                            <AddEducationPreview/>
                        </div>
                    </div>
            </section>
        </div>        
    )

})