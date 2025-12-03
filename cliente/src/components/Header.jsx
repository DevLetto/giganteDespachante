
function Header({navigate, icon: Icon, color}){
    return (
        <header className="w-screen h-max">
            <button type="button" onClick={navigate} className="text-traco hover:bg-traco hover:text-white rounded-lg transition hover:cursor-pointer">
                <Icon 
                    size ={60}
                    className = {`${color} hover:bg-traco hover:text-white rounded-lg transition hover:cursor-pointer`}
                />

            </button>
        </header>
    )
}

export default Header;