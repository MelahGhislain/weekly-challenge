import React, { FC, useState } from 'react'
import { TFile } from './__index'

// This component displays the file structure reculsively 
const File: FC<TFile> = ({files, depth}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
  
    return (
      <>
        <div className='file' style={{paddingLeft: `${depth * 10}px`}}>
          {/* Displays folder name or file name */}
          {
            files.children?
            <button onClick={()=>setIsOpen(!isOpen)}>
              {!isOpen ? "+" : "-"}
              {" "}
              {files.name}
            </button>
            : 
            <span >
              {files.name}
            </span>
          }
          {/* handles nested files and folders */}
          { isOpen &&
            files.children?.map((files, index) => <File key={index} files={files} depth={2} />) 
          }
        </div>
      </>
    )
  }

export default File
