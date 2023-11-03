import './index.css'
import './components/allComponents.css'
import General from './components/generalInfo.jsx'
import Education from './components/education.jsx'
import SchoolEXP from './components/experience.jsx'
import pInfo from './assets/personalinfo.png'
import wInfo from './assets/workexp.png'
import eInfo from './assets/booklet-line.png'
// import Preview from './components/CVPreview.jsx'
import { useState } from 'react'
import { useRef } from 'react'
import {allWorkData,allEducationData} from './components/EducationWorkData'
import { useReactToPrint } from 'react-to-print'
import printImg from './assets/printer-line.png'
import { Preview } from './components/CVPreview.jsx'



export default function Content(){

    const [showPInfo, setShowPInfo] = useState(true)

    const handlePClick = () => {
        setShowPInfo(true)
        setShowWInfo(false)
        setshowEInfo(false)
    }

    const [showWInfo, setShowWInfo] = useState(false)

    const handleWClick = () => {
        setShowPInfo(false)
        setShowWInfo(true)
        setshowEInfo(false)
    }

    const [showEInfo, setshowEInfo] = useState(false)

    const handleEClick = () => {
        setShowPInfo(false)
        setShowWInfo(false)
        setshowEInfo(true)
    }

    const[fName,setfName] = useState('')
    const[lName,setlName] = useState('')
    const[title,setTitle] = useState('')
    const[location,setLocation] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')

    const fNameRef = useRef()
    const lNameRef = useRef()
    const titleRef = useRef()
    const locationRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    function addPInfo(){
        if(fNameRef.current.value === '' || lNameRef.current.value === ''
         || titleRef.current.value === '' || locationRef.current.value === ''
          || emailRef.current.value === '' || phoneRef.current.value === ''){
                alert('Please fill in all Personal info')
                return
            }
        setfName(fNameRef.current.value)
        setlName(lNameRef.current.value)
        setTitle(titleRef.current.value)
        setLocation(locationRef.current.value)
        setEmail(emailRef.current.value)
        setPhone(phoneRef.current.value)
        fNameRef.current.value = ''
        lNameRef.current.value = ''
        titleRef.current.value = ''
        locationRef.current.value = ''
        emailRef.current.value = ''
        phoneRef.current.value = ''
    }

    function clearPInfo(){
        setfName('')
        setlName('')
        setTitle('')
        setLocation('')
        setEmail('')
        setPhone('')
    }

    const[updateEduData,setUpdateEduData] = useState(0)

    const positionRef = useRef()
    const companyRef = useRef()
    const sDateRef = useRef()
    const eDateRef = useRef()
    const descRef = useRef()

    function addWInfo(){
        if(positionRef.current.value === '' || companyRef.current.value === '' 
        || sDateRef.current.value === '' || eDateRef.current.value === '' 
        || descRef.current.value === ''){
            alert('Please fill in all Work info')
            return
        }

        setUpdateEduData(updateEduData + 1)
        allWorkData.push({
            pos:positionRef.current.value,
            comp:companyRef.current.value,
            start:sDateRef.current.value,
            end:eDateRef.current.value,
            description:descRef.current.value
        })
        positionRef.current.value = ''
        companyRef.current.value = ''
        sDateRef.current.value = ''
        eDateRef.current.value = ''
        descRef.current.value = ''
    }

    const[updateForm,setUpdateForm] = useState(0)

    function clearWData(){
        allWorkData.length = 0
        setUpdateForm(updateForm + 1)
    }

    const schoolRef = useRef('')
    const schoolsDateRef = useRef('')
    const schooleDateRef = useRef('')
    const degreeRef = useRef('')

    function addEInfo(){
        if(schoolRef.current.value === '' || schoolsDateRef.current.value === '' 
        || schooleDateRef.current.value === '' || degreeRef.current.value === ''){
            alert('Please fill in all Education info')
            return
        }
        setUpdateEduData(updateEduData + 1)
        allEducationData.push({
            school:schoolRef.current.value,
            sSDate:schoolsDateRef.current.value,
            eSDate:schooleDateRef.current.value,
            deg:degreeRef.current.value
        })
        schoolRef.current.value = '',
        schoolsDateRef.current.value = '',
        schooleDateRef.current.value = '',
        degreeRef.current.value = ''
    }
    function clearEData(){
        allEducationData.length = 0
        setUpdateForm(updateForm + 1)
    }

    const printRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    })

    return (
        <>
            <div className='formContent'>
                <div className='allButtons'>
            <div className='infoButtons'>
            <img onClick={handlePClick} src={pInfo} alt="pInfo" className='imgBtn'/>
            <img onClick={handleEClick} src={wInfo} alt="eInfo" className='imgBtn'/>
            <img onClick={handleWClick} src={eInfo} alt="wInfo" className='imgBtn'/>
            </div>
            <div className='printButton'></div>
            <img onClick={handlePrint} src={printImg} alt='printImg' className='imgBtn' />
                </div>
            <span className='bodyContent'>
            {showPInfo && 
                <General 
                addPInfo = {addPInfo} 
                clearPInfo = {clearPInfo}
                fNameRef = {fNameRef} 
                lNameRef = {lNameRef}
                titleRef = {titleRef}
                locationRef = {locationRef}
                emailRef = {emailRef}
                phoneRef = {phoneRef}
                />
            }
            {showEInfo &&
                <Education
                addWInfo = {addWInfo}
                positionRef = {positionRef}
                companyRef = {companyRef}
                sDateRef = {sDateRef}
                eDateRef = {eDateRef}
                descRef = {descRef}
                clearWData = {clearWData}
                />

            }
            {showWInfo &&
                <SchoolEXP
                schoolRef = {schoolRef}
                schoolsDateRef = {schoolsDateRef}
                schooleDateRef = {schooleDateRef}
                degreeRef = {degreeRef}
                addEInfo = {addEInfo}
                clearEData = {clearEData}
                />
            }
            <Preview ref={printRef}
            fName = {fName} 
            lName = {lName}
            title = {title}
            location = {location}
            email = {email}
            phone = {phone}
            />
            </span>
            </div>
        </>
    )
}