/* Core */
import { useState, memo, useEffect } from "react";
import waait from "waait";
import { NavLink, Link, Outlet, Routes, Route, useParams } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </div>
  );
}

export function ProjectsLayout() {
  const { pid } = useParams();

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Projects Layout {pid}</h1>
      <Outlet />
    </div>
  );
}

export function ProjectsWithoutLayout() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Projects Without Layout</h1>

      <Outlet />
    </div>
  );
}

export function ProjectsHome() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Projects Home</h1>
    </div>
  );
}

export function Project() {
  const { pid } = useParams();

  return (
    <div>
      <h1>Project {pid}</h1>
    </div>
  );
}

export function EditProject() {
  const { pid } = useParams();

  return (
    <div>
      <h1>Edit Project {pid}</h1>
    </div>
  );
}

const Nav = () => {
  const navLinkCn = "list-disc";

  return (
    <nav className="flex gap-8 justify-center">
      <NavLink to="/">Home</NavLink>

      <div className="flex flex-col gap-2">
        <NavLink to="/dashboard" className={navLinkCn}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/settings" className={navLinkCn}>
          Settings
        </NavLink>
      </div>

      <div className="flex flex-col gap-2">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/projects/1">Project 1</NavLink>
        <NavLink to="/projects/2">Project 2</NavLink>
        <NavLink to="/projects/1/edit">Edit Project 1</NavLink>
        <NavLink to="/projects/2/edit">Edit Project 2</NavLink>
      </div>

      <div className="flex flex-col gap-2">
        <NavLink to="/projects-without-layout">Projects without layout</NavLink>
        <NavLink to="/projects-without-layout/1">Project 1</NavLink>
        <NavLink to="/projects-without-layout/2">Project 2</NavLink>
        <NavLink to="/projects-without-layout/1/edit">Edit Project 1</NavLink>
        <NavLink to="/projects-without-layout/2/edit">Edit Project 2</NavLink>
      </div>

      <NavLink to="/concerts">Concerts</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export function App() {
  return (
    <main className="min-h-screen grid gap-8 auto-rows-min">
      <h1 className="text-4xl font-bold">Vite Foundation</h1>
      <Nav />

      <Routes>
        <Route index element={<h1>Home root</h1>} />
        <Route path="about" element={<h1>About</h1>} />

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<h1>Home dashboard</h1>} />
          <Route path="settings" element={<h1>Settings</h1>} />
        </Route>

        <Route path="projects">
          <Route index element={<ProjectsHome />} />
          <Route element={<ProjectsLayout />}>
            <Route path=":pid?" element={<Project />} />
            <Route path=":pid/edit?" element={<EditProject />} />
          </Route>
        </Route>

        <Route path="concerts">
          <Route index element={<h1>Concerts Home</h1>} />
          <Route path=":city" element={<h1>City</h1>} />
          <Route path="trending" element={<h1>Trending</h1>} />
        </Route>

        <Route path="projects-without-layout">
          <Route
            index
            element={
              <h1 className="text-2xl font-bold">
                Projects without layout home
              </h1>
            }
          />
          <Route element={<ProjectsWithoutLayout />}>
            <Route path=":pid" element={<h1>Project without layout</h1>} />
            <Route
              path=":pid/edit"
              element={<h1>Edit Project without layout</h1>}
            />
          </Route>
        </Route>
      </Routes>
    </main>
  );
}
