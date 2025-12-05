
function Header({navigate, icon: Icon, color, hover, text}){
    return (
        <header className="w-screen h-max">
            <button type="button" onClick={navigate} className={` ${color} hover:bg-traco hover:text-white rounded-lg transition hover:cursor-pointer flex flex-col items-center p-1 text-2xl font-bold font-[Arial]`}>
                <Icon 
                    size ={60}
                />
                <p>
                    {text}
                </p>

            </button>
        </header>
    )
}

export default Header;