import { Navigate, Outlet } from 'react-router-dom'

const SoonRoutes = () => {
    // const [currentPageType, setCurrentPageType] = useState('');

    // const [loading, setLoading] = useState(true);
  
    // useEffect(()=>{
    //   checkCurrentState()
    // },[])
    // // let navigateNew = useNavigate();
    
    // const checkCurrentState = () => {
    //   fetch(`https://celebri-backend.onrender.com/users/pageState`, {
    //     method: "GET",
    //     headers: {
    //       "content-type": "application/json",
    //       accept: "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((res) => {
    //       console.log(res);
    //       if (res.success === true) {
    //         if (res.currentPageType ) {
    //           // navigate('/soon', { replace: true })
    //           setCurrentPageType(res.currentPageType || '');
    //           console.log(res.currentPageType)
    //         } else {
    //           setLoading(false);
    //         }
    //       } else {
    //         setLoading(false);
    //       }
    //     })
    //     .catch(() => {
    //       setLoading(false);
    //     });
    // };
  
    // if (loading) {
    //   // You can show a loading spinner or some other indicator here
    //   return <div>Loading...</div>;
    // }
  
return (
    currentPageType ? <Outlet/> : <Navigate to='/soon'/>
  )
}


export default SoonRoutes