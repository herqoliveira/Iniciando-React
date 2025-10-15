import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer(){
    const data = new Date().getFullYear();
    return (
        <>
        <div className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">
                    Blog Pessoal Palmeiras | Copyright: {data}
                </p>
                <p className="text-lg">Acesse as nossas redes sociais</p>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/henrique-de-oliveira-gomes-a34891300" target="_blank">
                        <LinkedinLogoIcon size={48} weight="bold"/>
                    </a>
                    <a href="https://www.facebook.com/henrique.d.gomes.58" target="_blank">
                        <FacebookLogoIcon size={48} weight="bold"/>
                    </a>
                    <a href="https://www.instagram.com/henriquehsk" target="_blank">
                        <InstagramLogoIcon size={48} weight="bold"/>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer