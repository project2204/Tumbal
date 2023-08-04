import add from "../assets/images/Tambah.png"


function FormTambah() {

    return (
        <div className="bg-[#DBDBCC]">

            <div className="pl-40 py-8 flex flex-wrap    ">
                <img src={add} alt="" className="h-16 w-16" />
                <p className=" my-auto px-6 text-xl text-[#67C13C]" >Form tambah</p>
            </div>
            <div className="box-border bg-white place-content-center mx-auto h-96 w-5/6 border  shadow-2xl outline  outline-1  ">
                <p>tes</p>
            </div>
        </div>

    )
}


export default FormTambah