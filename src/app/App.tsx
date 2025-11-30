
import { Router } from './router/router.tsx'
import { AppProviders } from './providers/app-providers'
import {BrowserRouter} from 'react-router-dom'
import '../index.css'

export const App = () => {
    return (
        <BrowserRouter>
            <AppProviders>
                <Router />
            </AppProviders>
        </BrowserRouter>

    )
}