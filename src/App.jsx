import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'



function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userdata,setUserdata] = useContext(AuthContext)


  useEffect(()=>{
   const loggedInUser = localStorage.getItem('loggedInUser')
  //  console.log(loggedInUser);

  if(loggedInUser){
    const data = JSON.parse(loggedInUser)
    setUser(data.role)
    setLoggedInUserData(data.data)
  }

  },[])


  const handleLogIn = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      alert('Logged in as admin');
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userdata) {
      const employee = userdata.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee); // Use the actual employee data
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }));
        // console.log(employee);
      } 
      else {
        alert('Invalid credentials');
      }
    }
  };
  

  // const handleLogIn = (email,password)=>{
  //   if(email == 'admin@example.com' && password == '123'){
  //     alert('employee')
  //     setUser('admin')
  //     localStorage.setItem('loggedInUser', JSON.stringify({role:"admin"}))
  //   }
  //   else if(authdata){
  //     const employee = authdata.employees.find((e) => email == e.email && password == e.password);
  //     if(employee){
  //     setUser('employee')
  //     setLoggedInUserData("employee")
  //     localStorage.setItem('loggedInUser', JSON.stringify({role:"employee"}))
  //     }
  //   }else {
  //     alert('Invalid')
  //   } 
  // }


  return (
   <>
   { !user ? <Login handleLogIn={handleLogIn} /> : ''  }
   { user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashBoard changeUser={setUser} data={loggedInUserData} /> : null  )}
   </>
  )
}

export default App
