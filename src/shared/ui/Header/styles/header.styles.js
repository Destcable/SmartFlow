import { makeStyles } from "@fluentui/react-components";

export const useStylesHeader = makeStyles({
    root: {
        padding: '0 20px',
        backgroundColor: '#2b2d42',
        display: 'flex',
        alignItems: 'center',
        height: '50px',
    },
    logo: {
        marginRight: '20px',
    },
    menuButton: {
        color: '#fff',
        marginRight: '15px',
    },
    flexGrow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
    },
    userName: {
        marginRight: '10px',
    },
});