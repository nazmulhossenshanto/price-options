import React, { useState } from 'react';
import Link from '../Link/Link';
import { IoMenu } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

const Routes = () => {
  const [open, setOpen] = useState(true)
  const routes = [
    { id: "1", path: "/", name: "Home" },
    { id: "2", path: "/About", name: "About" },
    { id: "3", path: "/Contact", name: "Contact" },
    { id: "4", path: "/Undefined", name: "Undefined" }
  ];
    return (
        <div>
           <div onClick={() => setOpen(!open)}>
            {open ?  <TiDeleteOutline /> : <IoMenu /> }
           </div>

           <ul className={`absolute duration-2000 ${open? 'top-20' : '-top-60' }`}>
             {
                routes.map(route =>
                    <Link key={route.id}
                    route={route}
                    ></Link>
                )
            }
           </ul>
        </div>
    );
};

export default Routes;