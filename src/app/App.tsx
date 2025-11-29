
import { Router } from './router'
import { AppProviders } from './providers'
import '../index.css'

export const App = () => {
    return (
        <AppProviders>
            <Router />
        </AppProviders>
    )
}