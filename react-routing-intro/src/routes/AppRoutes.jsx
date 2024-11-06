import HomePage from "./../pages/HomePage/HomePage"
import AboutPage from "./../pages/AboutPage/AboutPage"
import ProjectsPage from "./../pages/ProjectsPage/ProjectsPage"
import NotFoundPage from "./../pages/NotFoundPage/NotFoundPage"
import ProjectDetailsPage from './../pages/ProjectDetailsPage/ProjectDetailsPage'

import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/sobre-mi' element={<AboutPage />} />
            <Route path='/proyectos' element={<ProjectsPage />} />
            <Route path='/proyectos/:projectId' element={<ProjectDetailsPage />} />

            <Route path='*' element={<NotFoundPage />} />

        </Routes>
    )
}

export default AppRoutes