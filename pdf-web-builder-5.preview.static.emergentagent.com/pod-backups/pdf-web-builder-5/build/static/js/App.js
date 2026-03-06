import '@/App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import {
    Toaster
} from '@/components/ui/sonner';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function App() {
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        Layout >
        <
        Routes >
        <
        Route path = "/"
        element = { < HomePage / >
        }
        /> <
        Route path = "/products"
        element = { < ProductsPage / >
        }
        /> <
        Route path = "/services"
        element = { < ServicesPage / >
        }
        /> <
        Route path = "/about"
        element = { < AboutPage / >
        }
        /> <
        Route path = "/contact"
        element = { < ContactPage / >
        }
        /> <
        /Routes> <
        /Layout> <
        /BrowserRouter> <
        Toaster position = "top-right" / >
        <
        /div>
    );
}

export default App;