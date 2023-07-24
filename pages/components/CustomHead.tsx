import Head from 'next/head';

interface CustomHeadProps {
    title: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" type="image/png" href="/logo-ddn-1.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                  crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        </Head>
    );
}

export default CustomHead;