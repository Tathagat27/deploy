import './styles/ChooseYourPlan.css'
import Search_Image from './Assets/Search_image.svg'
import Image from 'next/image'


const ChooseYourPlan = () => {
  return (
    <div className='ChooseYourPlan_wrapper'>
        <h4>ChooseYourPlan</h4>
        <p>The power of creating your batch plan now at your disposal!!</p>

        <div className='Search_image'>
            <Image src={Search_Image} alt='Search_icon' style={{width:'17.181vw',height:'15.622vw'}}/>
        </div>

        <div className='Basic_instructions'>
                <h4>Basic Instruction</h4>
                <ul>
                    <li>This helps you monetize your precious skill on your scale and connect Student from across nation to enroll with your plans.</li>
                    <li>Plans is collection of information about What, How, When and For What Charge you are running your classes.</li>
                    <li>You have 3 Free Plan Slots that can be created and Edited anytime.</li>
                    <li>You can Buy more Plans if you are planning to expand your services.</li>
                    <li>To Delete any Plan having subscribed Student, You must wait for end the business cycle. </li>
                </ul>
        </div>
    </div>
  )
}

export default ChooseYourPlan