import React, { useState } from 'react'
import axios from "axios";
import CreateNameSlide from './../components/CreateNameSlide';
import CreatePathogenSelectSlide from './../components/CreatePathogenSelectSlide';
import CreatePathogenStatusSlide from './../components/CreatePathogenStatusSlide';
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

const initialUserValue = {
  name:'',
  pathogensData: {}
,
  image:''
}

const initialErrorsValue = {
  usernameError: false,
  passwordError: false
}

const Create = () => {

  const [user, setUser] = useState(initialUserValue)
  const [userErrors, setUserErrors] = useState(initialErrorsValue)
  const [newList, setNewList] = useState([])

  const [pageState, setPageState] = useState("name")

  const cancel = () => {
    setUser(initialUserValue)
    setUserErrors(initialErrorsValue)
    setPageState("name")
  }

  const backToDetails = () => {
    cancel()
    navigate('/details')
  }

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target

    if (name === "image") {
			setUser(prevUser => ({
				...prevUser,
				[name]: e.target.files[0],
			}));
		} else {
			setUser((prevUser) => ({
				...prevUser,
				[name]: value,
			}));
		}

  } 

  const handleSubmit = () => {

		const formData = new FormData();
		for (let key in user) {
      if(key === 'pathogensData'){

        for (let newKey in user.pathogensData) {
			      formData.append(newKey, user.pathogensData[newKey]);
        }
      }
			formData.append(key, user[key]);
		}

		axios
			.post("/create", formData)
			.then(res => {
        navigate("/details")
        setPageState('name')
      })
			.catch(err => console.log(err));
	};

  return (
    <Stack justifyContent='center' alignItems='center' sx={{width: '100%',  minHeight: 'calc(100vh - 64px)' , backgroundColor: '#b4d5ff'}}>
    <Box sx={{width: {xs: '90%', md: '60%'}, my:{xs: '1rem'}}}>
      {pageState === "name"? (
        <CreateNameSlide setPageState={setPageState} user={user} handleChange={handleChange} userErrors={userErrors} setUserErrors={setUserErrors} backToDetails={backToDetails} />

      ): pageState === "selectPathogen"? (
        <CreatePathogenSelectSlide setPageState={setPageState} user={user} setUser={setUser} cancel={cancel}/>

      ): (
      <CreatePathogenStatusSlide handleChange={handleChange} setPageState={setPageState} user={user} setUser={setUser} handleSubmit={handleSubmit} newList={newList} setNewList={setNewList} cancel={cancel} />
      )}
    </Box>
    </Stack>
  )
}

export default Create