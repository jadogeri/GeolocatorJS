import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from './Test';
import MapViewer from './MapViewer';

const ProjectRoutes = () => {
  return (

	<BrowserRouter >
		<Routes >				
			<Route path="/map" element={<MapViewer />  } />
			<Route path="/" element={<Test />  }  index/>
		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes

