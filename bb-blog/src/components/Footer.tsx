import assets from "../assets/asset"


const Footer = () => {
  return (
    <footer className="bg-[#ABDFFF] md:flex-row flex-col flex items-center justify-between mt-30 px-4 py-1">
            <div className="my-5">
                <img className="w-8 m-auto" src={assets.bblogo} alt="" />
                <p >The Metropolitan Battalion Council</p>
            </div>

            <div className="my-5">
                <p className="text-xl">MBC BLOG</p>
            </div>

            <div className="inter flex gap-6 items-center">
                <div>
                <img className="m-auto" src={assets.email} alt="" />  
                <p className="text-[12px]"><a href="mailto:metromediabb@gmail.com">metromediabb@gmail.com</a></p>
                </div>

                <div>
                <img className="
                m-auto" src={assets.facebook} alt="" /> 
                <p className="text-[12px]"><a href="https://web.facebook.com/profile.php?id=100088576658132" target="_blank">Metropolitan Battalion Council</a></p>
                </div>

                <div>
                <img className="m-auto" src={assets.instagram} alt="" /> 
                <p className="text-[12px]"><a href="https://www.instagram.com/metrobattalioncouncil/?utm_source=ig_web_button_share_sheet" target="_blank">Metropolitan Battalion Council</a></p>
                </div>
            </div>
    </footer>
  )
}

export default Footer