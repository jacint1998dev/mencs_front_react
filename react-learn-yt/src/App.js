import React, {useState} from 'react';
import './App.css';
import Blog from './components/Blog';
import Clock from './components/Clock';
import LoginControl from './components/LoginControl';
import Form from './components/Form';
import Search from './components/Search';
import List from './components/List';
import WelcomeDialog from './components/WelcomeDialog';


export default function App() {
  const [flag, setFlag] = useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const userInfo = {
    firstname : "Kovacs",
    lastname : "Jacint"
  }
  const posts = [
    {
      id: 1,
      title: "Introduction to React",
      content: "This is the content of the introduction to React topic"
    },
    {
      id: 2,
      title: "Components and Props",
      content: "This is the content of the Components and Props topic"
    },
    {
      id: 3,
      title: "State and Lifecycle",
      content: "This is the content of the State and Lifecycle topic"
    },
    {
      id: 4,
      title: "Handling Events",
      content: "This is the content of the Handling Events topic"
    },
    {
      id: 5,
      title: "Conditional Rendering",
      content: "This is the content of the Conditional Rendering topic"
    }
  ];
  const filterList = posts.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm);
  });
const toggle= () => {
  console.log("Toggle Clicked");
  setFlag(!flag)
};
  return (
    <div>
       {/* <button onClick={toggle}>Toggle Clock Component</button>
      {flag ? <Clock/> : "No Clock Component"}  */}
      {/* <LoginControl/>
      <Blog posts = {posts}/> */}
      {/* <Form/> */}
      {/* <Search searchTerm={searchTerm} handleSearch={handleSearch}/>
      <List list={filterList}/> */}
      <WelcomeDialog/>
    </div>
  );
}

