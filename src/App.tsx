/* Core */

import { cx } from 'class-variance-authority';
import {
    Outlet,
    Route,
    Routes,
    NavLink as RRNavLink,
    useHref,
    useLocation,
    useMatch,
    useParams,
} from 'react-router';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

import { TodoList1 } from './mobx-1.tsx';
import { TodoList2 } from './mobx-2.tsx';

const NavLink = ({
    to,
    children,
    className,
}: {
    to: string;
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <RRNavLink
            to={to}
            className={({ isActive }) => cx(isActive ? 'text-amber-600' : '', className)}
            end
        >
            {children}
        </RRNavLink>
    );
};

function Dashboard() {
    return (
        <div className='[grid-area:content]'>
            <h1 className='heading'>Dashboard</h1>
            <Outlet />
        </div>
    );
}

function ProjectsIndex() {
    return (
        <div className='[grid-area:content]'>
            <h1 className='heading'>Projects Index</h1>
        </div>
    );
}
function ProjectLayout() {
    return (
        <div className='[grid-area:content]'>
            <h1 className='heading'>Project Layout</h1>
            <Outlet />
        </div>
    );
}
function Project() {
    const { pid } = useParams();

    return (
        <div className='[grid-area:content]'>
            <h1>Project {pid}</h1>
        </div>
    );
}
function EditProject() {
    const { pid } = useParams();

    return (
        <div className='[grid-area:content]'>
            <h1>Edit Project {pid}</h1>
        </div>
    );
}

const Nav = () => {
    const navLinkCn = 'list-disc';
    const separatorCn = 'bg-border shrink-0 mb-4';

    return (
        <Card className='flex flex-col gap-2 px-2 [grid-area:sidebar-l]'>
            <h1 className='heading'>Nav</h1>
            <Separator className={separatorCn} />

            <NavLink to='/'>Home</NavLink>
            <Separator className={separatorCn} />

            <div className='flex flex-col gap-2'>
                <NavLink to='/dashboard' className={navLinkCn}>
                    Dashboard
                </NavLink>
                <NavLink to='/dashboard/settings' className={navLinkCn}>
                    Settings
                </NavLink>
            </div>
            <Separator className={separatorCn} />

            <div className='flex flex-col gap-2'>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/projects/1'>Project 1</NavLink>
                <NavLink to='/projects/2'>Project 2</NavLink>
                <NavLink to='/projects/1/edit'>Edit Project 1</NavLink>
                <NavLink to='/projects/2/edit'>Edit Project 2</NavLink>
            </div>
            <Separator className={separatorCn} />

            <NavLink to='/events'>Events</NavLink>
            <Separator className={separatorCn} />

            <NavLink to='/test'>Test</NavLink>
            <NavLink to='/mobx-1'>Mobx 1</NavLink>
            <NavLink to='/mobx-2'>Mobx 2</NavLink>
        </Card>
    );
};

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
        <Card className='[grid-area:sidebar-r] px-2'>
            <h1 className='heading'>Events</h1>
            <NavLink to='/events/trending'>Trending</NavLink>
            <NavLink to='/events/new-york'>New York</NavLink>
            <NavLink to='/events/los-angeles'>Los Angeles</NavLink>
            <NavLink to='/events/chicago'>Chicago</NavLink>
            <NavLink to='/events/houston'>Houston</NavLink>
            <NavLink to='/events/phoenix'>Phoenix</NavLink>
            <NavLink to='/events/philadelphia'>Philadelphia</NavLink>
        </Card>
    );
};

const EventsOptional = () => {
    const { city } = useParams();

    return (
        <Card className='[grid-area:sidebar-r] px-2'>
            <h1 className='heading'>Events Optional {city}</h1>
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
                <Route
                    index
                    element={<h1 className='heading [grid-area:content]'>Root Index</h1>}
                />

                <Route path='dashboard' element={<Dashboard />}>
                    <Route
                        index
                        element={<h1 className='[grid-area:content]'>Dashboard Index</h1>}
                    />
                    <Route
                        path='settings'
                        element={<h1 className='[grid-area:content]'>Settings</h1>}
                    />
                </Route>

                <Route
                    path='projects'
                    element={
                        <div className='heading [grid-area:content]'>
                            <h1>Projects Route Definition</h1>
                            <Outlet />
                        </div>
                    }
                >
                    <Route index element={<ProjectsIndex />} />
                    <Route element={<ProjectLayout />}>
                        <Route path=':pid' element={<Project />} />
                        <Route path=':pid/edit' element={<EditProject />} />
                    </Route>
                </Route>

                <Route path='events'>
                    <Route
                        index
                        element={<h1 className='heading [grid-area:content]'>Events Index</h1>}
                    />
                    <Route path=':city' element={<EventsOptional />} />
                    <Route
                        path='trending'
                        element={<h1 className='heading [grid-area:content]'>Trending</h1>}
                    />
                </Route>

                <Route
                    path='test'
                    element={
                        <section className='heading [grid-area:content]'>
                            <h1>Test layout</h1>
                            <Outlet />
                        </section>
                    }
                >
                    <Route
                        index
                        element={<h1 className='heading [grid-area:content]'>Test Index</h1>}
                    />
                    <Route path='files/:testId' element={<TestOptParam />} />
                </Route>

                <Route path='mobx-1' element={TodoList1} />
                <Route path='mobx-2' element={TodoList2} />
            </Routes>
        </main>
    );
}

const TestOptParam = () => {
    const { testId } = useParams<'testId'>();
    const href = useHref('xxx/test');
    const location = useLocation();
    const match = useMatch({ path: '/test/files/:testId' });

    console.log('match', match);
    console.log('location', location);
    // console.log(href);

    return (
        <div className='[grid-area:content]'>
            <h1>Test {testId}</h1>
            {href}
            <Outlet />
        </div>
    );
};
