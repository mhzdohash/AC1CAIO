import NavBar from "./NavBar"

export default function Header() {
    return (  
        <header className="flex bg-[#2af15aaa] text-white p-4 mb-4 justify-between">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao MHZFlix!</h1>
            <NavBar/>
        </header>
    )
}