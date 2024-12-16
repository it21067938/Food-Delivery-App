import React from 'react'
import './AppDownload.css'
import {app_store, play_store} from '../../assets/assets'

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Cook App</p>
        <div className="app-download-platforms">
            <img src={app_store} alt="" />
            <img src={play_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload