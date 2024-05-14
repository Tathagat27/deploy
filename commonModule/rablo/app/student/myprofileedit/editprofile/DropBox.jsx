"use client"
import React, { useEffect, useState }  from "react";
import Image from "next/image";
import "./styles/DropBox.css";
import Image_icon from './icons/gallery.svg'
import Timer from './icons/timer.svg'
import File from './icons/file.svg'
import Document_Upload_Icon from './icons/documentupload.svg'
import { IoClose } from "react-icons/io5";
const DropBox = () => {
  
    const [BrowseImage, setBrowseImage] = useState({ selectedFile: null, fileName:'', uploading: true, loadingBar: 0,});

    useEffect(() => {
        if (BrowseImage.loadingBar === 100) {
          setBrowseImage((prev) => ({
            ...prev,
            uploading: false
          }));
        }
    }, [BrowseImage.loadingBar]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setBrowseImage((prev) => ({
        ...prev,
        selectedFile: file,
        fileName:file.name
        }));
        loadingBar();
    };
    const loadingBar = () => {
        let i = 0;
        function update() {
          setBrowseImage((prev) => ({
            ...prev,
            loadingBar: i
          }));
          if (i < 100) {
            i++;
            setTimeout(update, 10);}}
            update();
    };
    return (
        <>
        {BrowseImage.selectedFile === null
        ?
        <div className="dropbox">
            <input
                type="file"
                className="image_uploads"
               accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
            />
            <input
                type="button"
                className="drop-image"
                accept=".jpg, .jpeg, .png"
                value={"Browse Your Device"}
            />
            
            <div className="drag_and_drop">
                Or<br/> 
                Drag & Drop here
            </div>
        </div>
        :
        <div className="Progress_bar_and_Uploaded_Image">
            {
                BrowseImage.uploading 
                ?
            <div className="progress_bar">
                <div className="Img_Icon_and_file_detials">
                        <Image className="gallery_icon" src={Image_icon} alt="upload_img_icon"/>
                        <div>
                             <p>{BrowseImage.fileName}</p>
                             <div>
                                <div className="details_wrapper">
                                    <Image className="details_icon" src={Timer} alt=""/>
                                    <p className="details_label">Time left :</p>
                                    <p className="acutual_detail">3 min</p>
                                </div>
                                <div className="details_wrapper">
                                    <Image className="details_icon" src={File} alt=""/>
                                    <p className="details_label">Size :</p>
                                    <p className="acutual_detail">256kb</p>
                                </div>
                             </div>
                        </div>
                </div>
                <div className="Loading_bar">
                    <div><span style={{width:`${BrowseImage.loadingBar}%`}}></span></div>
                    <p>{BrowseImage.loadingBar}%</p>
                </div>
                <IoClose className="close_icon"/>
            </div>
            :
            <div className="Image_after_uploaded_Wrapper">
                <div className="file_name">
                    <Image className="file_icon" src={Document_Upload_Icon} alt="document upload icon"/>
                    <p className="Uploaded_file_name">{BrowseImage.fileName.slice(0, 4) + BrowseImage.fileName.slice(-4)}</p>
                    <IoClose className="close" onClick={()=>{
                        setBrowseImage((prev) => ({
                            ...prev,
                            selectedFile: null
                          }));
                    }}/>
                </div>
                <div className="Uploaded_Image_thumbnail">
                    <Image className="thumbnail" src={Image_icon} alt="thumbnail"/>
                </div>
            </div>
            }
        </div>
        }
        </>
    );
}

export default DropBox;