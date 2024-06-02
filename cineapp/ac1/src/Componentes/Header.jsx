import NavBar from "./NavBar"

export default function Header() {
    return (  
        <header className="flex bg-[#0DC40A8A] text-black text-3xl p-4 justify-between">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao MhzFlix!</h1>
            <NavBar/>
        </header>
    )
}