import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '@/interfaces';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;