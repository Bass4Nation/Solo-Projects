import HeaderElements from "./HeaderElements";


const Header = () => {
let elements = [['index.js','Frontpage'],['uploadedFiles', 'Projects Uploaded'], ['uploadfiles', 'Upload Project'], ['cv', 'CV']];

  return ( 
  <ul>
    {elements.map((element) =>(
        <HeaderElements arr={element}/>
    ))}
  </ul>
    )
}

export default Header;