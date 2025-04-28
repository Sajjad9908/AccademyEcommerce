import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CourseContext from './CourseContext.jsx'
import HomeContext from './component/HomeContext.jsx'
import { Provider } from 'react-redux';
import { store } from './addtocart/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseContext>
    <HomeContext>
    <Provider store={store}>
    <App />
    </Provider>
    </HomeContext>
    </CourseContext>
  </StrictMode>,
)
