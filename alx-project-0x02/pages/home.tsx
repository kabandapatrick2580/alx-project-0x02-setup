import Card from "@/components/common/Card";
import React from "react";


const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl">Welcome to My Testing Application</h1>
            <p className="mt-4">This is a test project to demonstrate my understanding of Next.js as a React Framework</p>
            <div className="flex flex-wrap justify-center mt-8">  
                <Card title="What is Next.js?" content="Next.js is a React Framework that enables functionality such as server-side rendering and generating static websites for React based web applications.">
                </Card>
                <Card title="What is Tailwind CSS?" content="Tailwind CSS is a utility-first CSS framework for building custom designs.">
                </Card>
            </div>  
        </div>
    )
}
export default Home;