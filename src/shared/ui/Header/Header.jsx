import Logo from '../../../app/assets/icons/logo.png'
import { HeaderLogo } from './comonents/HeaderLogo';
import { HeaderLeftMenu } from './comonents/HeaderLeftMenu';
import { useStylesHeader } from './styles/header.styles';
import { HeaderRightMenu } from './comonents/HeaderRightMenu';


export const Header = () => {
    const styles = useStylesHeader();

    return (
        <div className={styles.root}>
            <HeaderLogo src={Logo} style={styles.logo} />
            <HeaderLeftMenu styles={styles}/>
            <div className={styles.flexGrow}></div>
            <HeaderRightMenu styles={styles}/>
        </div>
    );
};
