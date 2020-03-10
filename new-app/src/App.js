import React from 'react';
import './App.scss';
import { Login, Register,ImageWrap } from "./components/login/index"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

class App extends React.Component {

  render() {

    const displayPosts = (
      <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanel><Login /></TabPanel>
        <TabPanel><Register /></TabPanel>
      </Tabs>

    )


    return (

      <div className="App">
        <div className='wrapper'>
          <article className='info'>
            <h2>Join the Digital Health Lab!</h2>
            <p>The Digital Health Lab is a research lab in the School of Exercise Science, Physical and Health Education in the McKinnon Building at the University of Victoria, Canada. Our lab focuses on conducting inter-disciplinary research in the domain of digital health, health promotion and physical activity. Our aim is to find innovative and effective ways to use digital communication technology to help improve people’s health and well-being.</p>
          </article>
        </div>
        <div className='wrapper2'>
          <ImageWrap/>
          <div className="login">
            <div className="container">
              {displayPosts}
            </div>
          </div>
          <div className='feet'>
            <a target="_blank" href='https://www.uvic.ca/research/labs/digitalhealth/' id='home' class='fa fa-home'><div id='text1'>Home Page</div></a>
            <a target="_blank" href = 'https://www.uvic.ca/research/labs/digitalhealth/research/currentprojects/index.php' id='book' class='fa fa-book'><div id='text1'>Projects</div></a>
            <a target="_blank" href='https://www.uvic.ca/research/labs/digitalhealth/our_lab/index.php' id='user' class='fa fa-user'><div id='text1'>Current Staffs</div></a>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
