// import Links from './Links'
// import { cart, logo, user1 } from '../../assets'
// import SearchInput from './SearchInput'
// import CostumeButton from './CostumeButton'
// import { Link, useNavigate } from 'react-router-dom'
// import { GlobalContext } from '../GlobalProvider'
// import { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// export const Navbar = () => {
//   const { setUser } = useContext(GlobalContext)
//   const [numberItems,setNumberItems]=useState(null)
//   const navigate = useNavigate()
//   const loginFunc = () => {
//     navigate('/login')
//   }
//   const ShoppingCartFunc = () => {
//     navigate('/ShoppingCart')
//   }
//   const LogoutFunc = async () => {
//     const token = localStorage.getItem('refreshToken')
//     try {
//       await axios.post(
//         'http://localhost:3000/api/logout',
//         { token },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         }
//       )
//       setUser(null)
//       localStorage.removeItem('accessToken')
//       localStorage.removeItem('refreshToken')
//       localStorage.removeItem('user')
//     } catch (error) {
//       console.log(
//         `we had an error stttttttttatuuuuuuus ${error.response.status}`
//       )
//       if (error.response.status === 403) {
//         let accessToken1
//         try {
//           const token = localStorage.getItem('refreshToken')
//           const response = await axios.post('http://localhost:3000/token', {
//             token,
//           })
//           console.log(response)
//           const { accessToken } = response.data
//           accessToken1 = accessToken
//         } catch (error) {
//           console.log(`this dude's error ${error}`)
//         }

//         try {
//           const accessToken = accessToken1
//           await axios.post(
//             'http://localhost:3000/api/logout',
//             { token },
//             {
//               headers: {
//                 Authorization: `Bearer ${accessToken}`,
//               },
//             }
//           )
//           setUser(null)
//           localStorage.removeItem('accessToken')
//           localStorage.removeItem('refreshToken')
//         } catch (error) {
//           console.log(`bruhhh ${error}`)
//         }
//       }
//     } finally {
//     }
//   }
//   const { user } = useContext(GlobalContext)
//   console.log(user)

//   useEffect(() => {
//     if (localStorage.getItem('user')) {
//       setUser(JSON.parse(localStorage.getItem('user')))
//     }
//   }, [])
//   return (
//     <nav className="grid grid-cols-2 gap-8 h-[50px] mb-9 min-w-[1080px]	fixed mb-[200px] z-1 bg-white ">
//       <div className="grid grid-cols-[1.4fr_3fr] gap-4">
//         <div className=" m-auto ml-6   ">
//           <Link to="/">
//             <img
//               src={logo}
//               alt="name"
//               className="w-full h-full object-cover cursor-pointer	"
//             />
//           </Link>
//         </div>
//         <Links />
//       </div>

//       <div className="m-auto  grid grid-cols-[2fr_1fr] w-full gap-4">
//         <SearchInput />
//         <div className="w-full  grid grid-cols-[2fr_1fr_1fr]">
//           <CostumeButton
//             text={user ? 'Logout' : 'Login'}
//             w="100px"
//             black={true}
//             handel={user ? LogoutFunc : loginFunc}
//           />
//           {user ? (
//             <img
//               src={user.imagePath[0]}
//               className="rounded-[50%] m-auto h-[25px] cursor-pointer border border-black-5"
//               onClick={() => {
//                 if (user.role === 'admin') {
//                   navigate('/Magazine')
//                 }
//               }}
//             />
//           ) : (
//             <img
//               src={user1}
//               alt="user"
//               className="h-6 m-auto  cursor-pointer"
//             />
//           )}
//           <img src={cart} alt="cart" className="h-6 m-auto  cursor-pointer" onClick={ShoppingCartFunc} />
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
import Links from "./Links";
import { cart, logo, user1 } from "../../assets";
import SearchInput from "./SearchInput";
import CostumeButton from "./CostumeButton";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../GlobalProvider";
import { useCart } from "./CartContext";

export const Navbar = () => {
  const { setUser, user } = useContext(GlobalContext);
  const { totalItems } = useCart(); // On récupère le nombre total d'articles
  const [numberItems, setNumberItems] = useState(null);
  const navigate = useNavigate();

  const loginFunc = () => {
    navigate("/login");
  };

  const ShoppingCartFunc = () => {
    navigate("/ShoppingCart");
  };

  const LogoutFunc = async () => {
    const token = localStorage.getItem("refreshToken");
    try {
      await axios.post(
        "http://localhost:3000/api/logout",
        { token },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setUser(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    } catch (error) {
      console.log(`Erreur : ${error.response.status}`);
      if (error.response.status === 403) {
        let accessToken1;
        try {
          const token = localStorage.getItem("refreshToken");
          const response = await axios.post("http://localhost:3000/token", {
            token,
          });
          const { accessToken } = response.data;
          accessToken1 = accessToken;
        } catch (error) {
          console.log(`Erreur lors du rafraîchissement : ${error}`);
        }

        try {
          const accessToken = accessToken1;
          await axios.post(
            "http://localhost:3000/api/logout",
            { token },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setUser(null);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        } catch (error) {
          console.log(`Erreur finale : ${error}`);
        }
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [setUser]);

  return (
    <nav className="grid grid-cols-2 gap-8 h-[50px] mb-9 min-w-[1080px] fixed z-10 bg-white">
      <div className="grid grid-cols-[1.4fr_3fr] gap-4">
        <div className="m-auto ml-6">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-cover cursor-pointer"
            />
          </Link>
        </div>
        <Links />
      </div>

      <div className="m-auto grid grid-cols-[2fr_1fr_1fr] w-full gap-4">
        <SearchInput />
        <CostumeButton
          text={user ? "Logout" : "Login"}
          w="100px"
          black={true}
          handel={user ? LogoutFunc : loginFunc}
        />
        <div className="relative  w-[66px]">
          <img
            src={cart}
            alt="cart"
            className="h-6 m-auto cursor-pointer"
            onClick={ShoppingCartFunc}
          />
          {totalItems > 0 && (
            <span className="absolute -top-3  bg-red-500 text-white text-xs px-2 rounded-full">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
