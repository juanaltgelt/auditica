import {useState} from 'react'
import {Link} from "react-router-dom"
import { ReactComponent as Home } from "../assets/dashboard/home.svg";
import { ReactComponent as Dlogo } from "../assets/dashboard/dashboard-logo.svg";
import { ReactComponent as Search } from "../assets/dashboard/browse.svg";
import { ReactComponent as Library } from "../assets/dashboard/library.svg";
import { ReactComponent as AddSong } from "../assets/dashboard/addSong.svg";
import AddNewSong from '../pages/addNewSong/AddNewSong';


function FirstColumn() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="col-2  d-flex flex-column align-items-start first-column ">
          <div className="mb-4">
            <Link to="/">
              <Dlogo className="d-logo" />
            </Link>
          </div>
          <ul className="px-0 mx-0">
            <li>
              {" "}
              <Link to="/dashboard">
                <Home />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <Search />
                <span>Search</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/">
                <Library />
                <span>Your library</span>
              </Link>
            </li>
            
          </ul>
        
          <button onClick={()=> setShow(true)} className="btn btn-success">  <AddSong /> Add New Song
              </button>
              {show && <AddNewSong show={show} setShow={setShow} />}

        </div>
  )
}

export default FirstColumn