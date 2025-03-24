import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';

const ProjectRoutes = () => {
  return (

	<BrowserRouter >
		<Routes >				
			<Route path="/" element={<Home />  }  index/>
		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes

