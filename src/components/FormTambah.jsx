import add from "../assets/images/Tambah.png"


function FormTambah() {

    return (
        <div className="bg-[#DBDBCC] h-screen">

            <div className="pl-40 py-8 flex flex-wrap    ">
                <img src={add} alt="" className="h-16 w-16" />
                <p className=" my-auto px-6 text-xl text-[#67C13C]" >Form tambah</p>
            </div>
            <div className="box-border bg-white place-content-center mx-auto h-auto w-5/6 border p-8  shadow-2xl outline  outline-1  ">
                <div className="flex flex-wrap py-8 pl-20">
                    <p className="text-xl my-auto">NIK/No. KTP/KIA</p>
                    <input type="text" className="pl-4 border-2 mx-28 border-black h-8 rounded-lg " placeholder="NIK/No. KTP/KIA" />
                    <div className="flex flex-wrap">
                        <p className="text-xl px-20 my-auto">Alergi</p>
                        <input type="radio" className="h-4 w-4 my-auto ml-[127px]" />
                        <p className="text-xl my-auto px-4">Tidak Ada</p>
                        <input type="radio" className="h-4 w-4 my-auto ml-10 " />
                        <p className="text-xl my-auto pl-4">Ada</p>
                    </div>
                </div>
                <div className="flex flex-wrap pl-20">
                    <p className="text-xl ">
                        Nama Lengkap
                    </p>
                    <input type="text" className="pl-4 border-2 mx-28 border-black h-8 rounded-lg ml-32" placeholder="Nama Lengkap" />
                    <div className="flex flex-wrap">
                        <p className="text-xl px-20 ">
                            Golongan Darah
                        </p>
                        <div className="flex flex-wrap">
                            <div className="flex flex-col">
                                <div className="flex flex-wrap">
                                    <input type="radio" className="h-4 w-4 my-auto ml-9 " />
                                    <p className="text-xl my-auto px-4">A</p>
                                </div>
                                <div className="flex flex-wrap my-6">
                                    <input type="radio" className="h-4 w-4 my-auto ml-9 " />
                                    <p className="text-xl my-auto px-4">B</p>
                                </div>
                            </div>
                            <div className="flex flex-col ml-[80px]">
                                <div className="flex flex-wrap">
                                    <input type="radio" className="h-4 w-4 my-auto ml-9 " />
                                    <p className="text-xl my-auto px-4">AB</p>
                                </div>
                                <div className="flex flex-wrap my-6">
                                    <input type="radio" className="h-4 w-4 my-auto ml-9 " />
                                    <p className="text-xl my-auto px-4">O</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap py-8 pl-20">
                    <p className="text-xl mt-1 ">Tempat Lahir</p>
                    <input type="text" className="pl-4 border-2 mx-28 border-black h-8 rounded-lg ml-36" placeholder="Tempat lahir" />
                    <div className="flex flex-wrap">
                        <p className="text-xl px-20 ">
                            Agama
                        </p>
                        <div className="flex flex-wrap ml-[84px]">
                            <div className="flex flex-col">
                                <div className="flex flex-wrap">
                                    <input type="radio" className="h-4 w-4 my-auto ml-9 " />
                                    <p className="text-xl my-auto pl-4">ISLAM</p>
                                </div>
                                <div className="flex flex-wrap my-4">
                                    <input type="radio" className="h-4 w-4 my-auto ml-9 " />
                                    <p className="text-xl my-auto pl-4">KRISTEN</p>
                                </div>
                                <div className="flex flex-wrap my-1">
                                    <input type="radio" className="h-4 w-4 my-auto ml-9 " />
                                    <p className="text-xl my-auto pl-4">KHATOLIK</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-wrap">
                                    <input type="radio" className="h-4 w-4 my-auto ml-[51px]   " />
                                    <p className="text-xl my-auto px-4">HINDU</p>
                                </div>
                                <div className="flex flex-wrap my-4">
                                    <input type="radio" className="h-4 w-4 my-auto ml-[51px] " />
                                    <p className="text-xl my-auto px-4">BUDHA</p>
                                </div>
                                <div className="flex flex-wrap my-1">
                                    <input type="radio" className="h-4 w-4 my-auto ml-[51px]" />
                                    <p className="text-xl my-auto px-4">KHONG HUCU</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap py-4 pl-20">
                    <p className="text-xl my-auto ">Tanggal Lahir</p>
                    <input type="text" className="pl-4 border-2 mx-28 border-black h-8 rounded-lg ml-36" placeholder="Tanggal lahir" />

                </div>
                <div className="flex flex-wrap py-4 pl-20">
                    <p className="text-xl  ">Jenis Kelamin</p>
                    <input type="radio" className=" h-4 w-4 mt-[5.5px]  ml-36" />
                    <p className="text-lg pl-2 ">LAKI-LAKI</p>
                    <input type="radio" className="h-4 w-4 mt-[5.5px] ml-6" />
                    <p className="text-lg pl-2 ">PEREMPUAN</p>
                    
                    <div className="flex flex-wrap">
                    <p className="pl-[195px] text-xl ">Status Perkawinan</p>
                        <div className="flex flex-col ">
                            <div className="flex flex-wrap my-auto">
                            <input type="radio" className="h-4 w-4 my-auto ml-[96px]" />
                            <p className="text-lg px-4 ">BELUM KAWIN</p>
                            </div>
                            <div className="flex flex-wrap py-4">
                            <input type="radio" className="h-4 w-4 my-auto ml-[96px]" />
                            <p className="text-lg px-4 ">KAWIN</p>
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <div className="flex flex-wrap my-auto">
                            <input type="radio" className="h-4 w-4 my-auto ml-[4px]" />
                            <p className="text-lg px-4 ">BELUM KAWIN</p>
                            </div>
                            <div className="flex flex-wrap py-4">
                            <input type="radio" className="h-4 w-4 my-auto ml-[4px]" />
                            <p className="text-lg px-4 ">CERAI MATI</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-wrap py-4 pl-20">
                    <p className="text-xl  ">Kebangsaan</p>
                    <input type="radio" className=" h-4 w-4 mt-[5.5px]  ml-[157px]" />
                    <p className="text-lg pl-2 ">WNI</p>
                    <input type="radio" className="h-4 w-4 mt-[5.5px] ml-[73px]" />
                    <p className="text-lg pl-2 ">WNA</p>                    
                </div>
                
            </div>
        </div>

    )
}


export default FormTambah