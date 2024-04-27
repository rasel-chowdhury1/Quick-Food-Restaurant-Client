import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProviders from './Providers/AuthProviders/AuthProviders.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
        <AuthProviders>
          <QueryClientProvider client={queryClient}>
            <div className="max-w-screen-xl mx-auto">
              <RouterProvider router={router} />
            </div>
          </QueryClientProvider>
        </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
