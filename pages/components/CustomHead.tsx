import Head from 'next/head';

interface CustomHeadProps {
    title: string;
    description?: string;
    keywords?: string;
    url?: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({
                                                   title,
                                                   description = "The Blood Run est une course annuelle pour promouvoir le don du sang. The Blood Run 2023 le 03 septembre prochain à Sollies pont !",
                                                   keywords = "The Blood Run, course, don du sang, The Blood Run 2023, handi, marche, Sollies pont",
                                                   url = "https://www.bloodrun.fr"
                                               }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <link rel="canonical" href={url}/>
            {/*<link rel="icon" href="/icon.ico"/>*/}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={url}/>
            <meta property="og:type" content="website"/>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                  crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        </Head>
    );
}

export default CustomHead;
