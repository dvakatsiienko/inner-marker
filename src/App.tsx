/* Core */
import { useState, memo, useEffect } from 'react';
import waait from 'waait';
import { NavLink, Link, Outlet, Routes, Route, useParams } from 'react-router';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Dashboard() {
    return (
        <div className='[grid-area:content]'>
            <h1 className='heading'>Dashboard</h1>
            {/* will either be <Home/> or <Settings/> */}
            <Outlet />
        </div>
    );
}

export function ProjectsLayout() {
    return (
        <div className='[grid-area:content]'>
            <h1 className='heading'>Projects Layout</h1>
            <Outlet />
        </div>
    );
}

export function ProjectsWithoutLayout() {
    return (
        <div className='[grid-area:content]'>
            <h1 className='heading'>Projects Without Layout</h1>

            <Outlet />
        </div>
    );
}

export function ProjectsIndex() {
    return (
        <div className='[grid-area:content]'>
            <h1 className='heading'>Projects Index</h1>
        </div>
    );
}

export function Project() {
    const { pid } = useParams();

    return (
        <div className='[grid-area:content]'>
            <h1>Project {pid}</h1>
        </div>
    );
}

export function EditProject() {
    const { pid } = useParams();

    return (
        <div className='[grid-area:content]'>
            <h1>Edit Project {pid}</h1>
        </div>
    );
}

const Nav = () => {
    const navLinkCn = 'list-disc';

    return (
        <Card className='flex flex-col gap-8 justify-center px-2 [grid-area:nav]'>
            <NavLink to='/'>Home</NavLink>

            <div className='flex flex-col gap-2'>
                <NavLink to='/dashboard' className={navLinkCn}>
                    Dashboard
                </NavLink>
                <NavLink to='/dashboard/settings' className={navLinkCn}>
                    Settings
                </NavLink>
            </div>

            <div className='flex flex-col gap-2'>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/projects/1'>Project 1</NavLink>
                <NavLink to='/projects/2'>Project 2</NavLink>
                <NavLink to='/projects/1/edit'>Edit Project 1</NavLink>
                <NavLink to='/projects/2/edit'>Edit Project 2</NavLink>
            </div>

            <div className='flex flex-col gap-2'>
                <NavLink to='/projects-without-layout'>Projects Without Layout</NavLink>
                <NavLink to='/projects-without-layout/1'>Project 1</NavLink>
                <NavLink to='/projects-without-layout/2'>Project 2</NavLink>
                <NavLink to='/projects-without-layout/1/edit'>Edit Project 1</NavLink>
                <NavLink to='/projects-without-layout/2/edit'>Edit Project 2</NavLink>
            </div>

            <NavLink to='/concerts'>Concerts</NavLink>
            <NavLink to='/about'>About</NavLink>
        </Card>
    );
};

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Cards = () => {
    const cardCn = 'grid place-items-center font-semibold h-full';

    return (
        <Carousel className='[grid-area:cards]'>
            <CarouselContent className='h-full'>
                <CarouselItem>
                    <Card className={cardCn}>Card 1</Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className={cardCn}>Card 2</Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className={cardCn}>Card 3</Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className={cardCn}>Card 4</Card>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

const Events = () => {
    return (
        <Card className='[grid-area:events] px-2'>
            <h1 className='heading'>Events</h1>
        </Card>
    );
};

const Links = () => {
    return (
        <Card className='[grid-area:links] p-2 content-center grid grid-cols-2 gap-2 px-2'>
            <Button size={'sm'}>link 1</Button>
            <Button size={'sm'}>link 2</Button>
            <Button size={'sm'}>link 3</Button>
            <Button size={'sm'}>link 4</Button>
        </Card>
    );
};

export function App() {
    return (
        <main className='min-h-screen grid gap-16 auto-rows-min p-4 layout'>
            <Links />

            <Nav />
            <Cards />
            <Events />

            <Routes>
                <Route index element={<h1 className='heading [grid-area:content]'>Root Index</h1>} />
                <Route path='about' element={<h1 className='heading [grid-area:content]'>About</h1>} />

                <Route path='dashboard' element={<Dashboard />}>
                    <Route index element={<h1 className='[grid-area:content]'>Dashboard Index</h1>} />
                    <Route path='settings' element={<h1 className='[grid-area:content]'>Settings</h1>} />
                </Route>

                <Route path='projects'>
                    <Route index element={<ProjectsIndex />} />
                    <Route element={<ProjectsLayout />}>
                        <Route path=':pid?' element={<Project />} />
                        <Route path=':pid/edit?' element={<EditProject />} />
                    </Route>
                </Route>

                <Route path='concerts'>
                    <Route index element={<h1 className='heading [grid-area:content]'>Concerts Home</h1>} />
                    <Route path=':city' element={<h1 className='heading [grid-area:content]'>City</h1>} />
                    <Route path='trending' element={<h1 className='heading [grid-area:content]'>Trending</h1>} />
                </Route>

                <Route path='projects-without-layout'>
                    <Route
                        index
                        element={<h1 className='heading [grid-area:content]'>Projects Without Layout Index</h1>}
                    />

                    <Route element={<ProjectsWithoutLayout />}>
                        <Route path=':pid' element={<h1 className='[grid-area:content]'>Project Without Layout</h1>} />
                        <Route
                            path=':pid/edit'
                            element={<h1 className='[grid-area:content]'>Edit Project Without Layout</h1>}
                        />
                    </Route>
                </Route>
            </Routes>
        </main>
    );
}
