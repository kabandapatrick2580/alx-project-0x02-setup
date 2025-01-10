const About: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-800 to-purple-800">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">
                        About Me
                    </h1>
                    <p className="mt-4 text-xl text-white">
                    Thisngs are about to get interesting! 😊
                    </p>
                </div>
            </main>
        </div>
    )
}
export default About;