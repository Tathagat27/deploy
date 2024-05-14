"use client"
import {useState} from 'react'
import './styles/page.css'
import { HiOutlineSearch } from "react-icons/hi";
import OnlinePage from './subPages/OnlinePage/OnlinePage';
import NearMePage from './subPages/NearMePage/NearMePage';
import InvitePage from './subPages/InvitePage/InvitePage';
import RequestPage from './subPages/RequestPage/RequestPage';
import ProposalPage from './subPages/ProposalPage/ProposalPage';

const AddStudent = () => {

  const [searchInputChange, setSearchInputChange] = useState(false);

  const [pageNavigation, setPageNavigation] = useState(0);

  return (
    <div className='add_student_main_wrapper'>

      {/* <=== Search bar to search students === > */}
      <div className='search_students_search_bar'>
        <h3>Add Students</h3>
        <div>
          <HiOutlineSearch className='search_icon' style={searchInputChange ? {color:"#6764FF"} : {color:"#00000080"}  }/>
          <input type="text" placeholder='Search Student' onChange={() =>{setSearchInputChange(true)}} />
          {searchInputChange && <button className='search_btn'>search</button> }
        </div>
      </div>

      {/* <=== Navigation bar for tabs ONLINE, NEAR ME, INVITE, REQUEST, PROPOSAL === > */}

      <div className='NavBar_for_Tabs'>

          <div className='Navigation_tab_headings'>
            <h4 onClick={() => setPageNavigation(0)} style={pageNavigation === 0 ? {color:"#6764FF",fontWeight:"600"} : {color:"#00000080",fontWeight:"500"}}>Online</h4> 
            <h4 onClick={() => setPageNavigation(1)} style={pageNavigation === 1 ? {color:"#6764FF",fontWeight:"600"} : {color:"#00000080",fontWeight:"500"}}>Near Me</h4> 
            {/* <h4 onClick={() => setPageNavigation(2)} style={pageNavigation === 2 ? {color:"#6764FF",fontWeight:"600"} : {color:"#00000080",fontWeight:"500"}}>Invite</h4>  */}
            <h4 onClick={() => setPageNavigation(3)} style={pageNavigation === 3 ? {color:"#6764FF",fontWeight:"600"} : {color:"#00000080",fontWeight:"500"}}>Request</h4> 
            <h4 onClick={() => setPageNavigation(4)} style={pageNavigation === 4 ? {color:"#6764FF",fontWeight:"600"} : {color:"#00000080",fontWeight:"500"}}>Proposal</h4>
          </div>

          <div className='NavBar_underLine'>
            <div style={
              pageNavigation === 0 ? {left: "0" ,width: "5.5vw"}
              :
              pageNavigation === 1 ? {left: "25%" ,width: "7vw"}
              :
              pageNavigation === 2 ? {left: "50%" ,width: "5.5vw"}
              :
              pageNavigation === 3 ? {left: "55%" ,width: "7vw"}
              :
              pageNavigation === 4 && {left: "83%" ,width: "7vw"}
            }></div>
          </div>
      </div>

      {/* <=== Tabs === > */}
      {
        pageNavigation === 0 ?
        <OnlinePage/>
        :
        pageNavigation === 1 ?
        <NearMePage/>
        :
        pageNavigation === 2 ?
        <InvitePage/>
        :
        pageNavigation === 3 ?
        <RequestPage/>
        :
        <ProposalPage/>
      }
      
    </div>
  )
} 

export default AddStudent