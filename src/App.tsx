import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { ElementType } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, i) => {
                        const Page: ElementType = route.component;
                        const Layout: ElementType = route.layout;

                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
