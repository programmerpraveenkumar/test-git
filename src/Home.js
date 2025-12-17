import { useState } from "react";
import './home.css'
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
function Home(){
    // navigate('/dashboard')
    const navigate = useNavigate();
    let firstName = 'asdfds';
    //useState();//hooks to find the variable's change and update in ui
    //variablename,settermethod
    const[cityName,setCityName]=useState("mumbai");
    const[companyList,setCompanyList]=useState(['tcs','hcl','hexaware','infosys']);
    const [studentList,setStudentList] = useState([]);
    const [name,setName] = useState();
    const [mobile,setMobile] = useState();
    const [myclass,setMyClass] = useState('myheading');
    const [status,setStatus] = useState(true);
    //create boolean variable 


    let nameList = ['asdf','sdaf','asdfsdaf','awdsf']
    let siteList = ['https://www.google.com', 
                    'https://www.youtube.com',
                    'https://www.blogger.com',  
                    'https://www.googleimages.com' ,
                    'https://www.linkedin.com']
                    
    const printMessage=()=>{
        alert("clicked from button")
        firstName = 'new value';
        console.log(firstName);
        setCityName("banglore")
        
    }
    const getALLStudents=async ()=>{
        //add cross origin in spring boot
            const response = await fetch("Your spring Api Url");
            const json = await response.json();
            console.log(json);
            setStudentList(json);
            if(response.ok){
                navigate("/home")
            }else{
                alert("Login failure");
            }
    }
    const changeCssClass=(name)=>{
        setMyClass(name);
    }

    const createStudent=async ()=>{

            let data  = {
                "name":name,
                
            }
            const response = await fetch("Your spring post Api Url",{
                method:"POST",
                body:JSON.stringify(data),
                "headers":{"Content-Type":"application/json"}
            });
            if(response.ok){
                    const json = await response.json();
                 console.log(json);
                    getALLStudents();
            }else{
                    alert("failed to create")
            }
            
    }
    
                    return (
        <>
            <Header/>
            <h2 className={myclass}>my city is test {cityName}</h2>
                        
              <h1>this is home {firstName}</h1>
              <button onClick={()=>changeCssClass('brown')}>Brown</button>
              <button onClick={()=>changeCssClass('green')}>Green</button>
                        {(status)?<h1>this is some heading</h1>:<h2>this is h2</h2>}
                        <button onClick={()=>setStatus(()=>!status)}>H1 and H2  </button>
           {
            nameList.map((ele,index)=>{
                    return <h1 key={index}>{ele.name}</h1>
            })
           }
           

           <button onClick={printMessage}>click me</button>

           <button onClick={getALLStudents}>click to get Students</button>
           <h1>Create student</h1>
           <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
           <input type="text" onChange={(e)=>setMobile(e.target.value)} placeholder="Enter Mobile"/>
           <button onClick={createStudent}>Create Students</button>
           <Footer/>
        </>
    )
}

export default Home;