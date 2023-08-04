import navbar from '../assets/images/Vector.png'
import panahBawah from '../assets/images/panahBawah.png'

function Navbar() {
    return (
        <div className=" bg-[#DBDBCC] ">

            <nav className="flex flex-wrap justify-between py-4 bg-white drop-shadow-xl">
                <div className="flex flex-wrap justify-between ml-12  ">
                    <button>
                        <img src={navbar} alt="" className="w-10 h-10 my-auto" />
                    </button>
                    <div className=" ">
                    <p className="px-20 mb-6 ">Nama Rumah Sakit X</p>
                    <p className="px-20">Selasa, 19 September 2023 23.50 WIB</p>
                    
                    </div>

                </div>
                <div className="flex flex-wrap justify-between mr-4 ">
                <p className="my-auto  px-4">Dr. Muhammad Rizky  M. Sc,</p>
                    <img src={panahBawah} alt="" className="pt-3"/>
                </div>
            </nav>

        </div>
    )
}


export default Navbar