import HeaderElements from "./HeaderElements";


const Header = () => {
let elements = [['index.js','Frontpage'],['uploadedFiles', 'Projects Uploaded'], ['uploadfiles', 'Upload Project'], ['cv', 'CV']];

  return ( 
  <ul className="nav">
    {elements.map((element) =>(
        <HeaderElements arr={element}/>
    ))}
  </ul>
    )
}

export default Header;