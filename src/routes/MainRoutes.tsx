import React from 'react'
import { Route, Routes } from 'react-router-dom'

export function MainRoutes () {
	return (
		<Routes>
			<Route path="/"/>
			<Route path="*" element={<p>Not Found</p>}/>
		</Routes>
	)
}
