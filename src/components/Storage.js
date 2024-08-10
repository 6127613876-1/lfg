import React from 'react'
import DropboxChooser from 'react-dropbox-chooser'
const Storage = () =>
{
  return (
    <DropboxChooser 
    appKey={'vt9ucbe1hxcgzo6'}
    success={files => console.log(files)}
    cancel={() => console.log("cancel")}
    multiselect={true}
    >
    <div className="dropbox-button"><button>Click me!</button></div>        
    </DropboxChooser>
  )
}
export default Storage;