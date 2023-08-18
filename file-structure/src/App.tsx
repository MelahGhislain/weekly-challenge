import { FC, useState } from 'react'
import './App.css'
import { TFolder } from './types'
import File from './components/files'

// This object could be a Json file
const folder: TFolder = {
  name: 'file-structure',
  children: [
    {
      name: 'public',
      children: [
        {name: 'vite.svg'}
      ]
    },
    {
      name: 'src',
      children: [
        {
          name: 'assets',
          children: [
            {name: 'react.svg'},
            {
              name: 'images',
              children: [
                {name: 'logo.png'}
              ]
            }
          ]
        },
        {
          name: 'components',
          children: [
            {
              name: 'forms',
              children: [
                {name: 'index.tsx'},
                {
                  name: 'fields',
                  children: [
                    {name: 'input.tsx'},
                    {name: 'select.tsx'},
                    {name: 'textarea.tsx'}
                  ]
                }
              ]
            },
            {
              name: 'buttons',
              children: [
                {name: 'outline.tsx'},
                {name: 'contained.tsx'}
              ]
            }
          ]
        },
        {name: 'app.css'},
        {name: 'app.tsx'},
        {name: 'index.css'}
      ]
    },
    {name: 'package.json'},
    {name: 'README.md'}
  ]
}

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className='folder'>
          <button onClick={()=>setIsOpen(!isOpen)}>
            {!isOpen ? "+" : "-"}
            {" "}
            {folder.name}
          </button>
          { isOpen &&
            folder.children?.map((file, index) => (
              <File key={index} files={file} depth={1}  />
            ))
          }
      </div>
    </>
  )
}

export default App
