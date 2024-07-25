import { Image } from "@fluentui/react-components";

export const HeaderLogo = ({ 
    src,
    style
}) => <Image 
    src={src} 
    alt="Logo" 
    className={style} 
    width={32} 
    height={32} 
/>