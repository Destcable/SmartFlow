import { makeStyles } from '@fluentui/react-components'
import { Sidebar } from '../../Sidebar/Sidebar';
import { SidebarProjects } from './components/SidebarProjects';

const useStyles = makeStyles({
    sidebar: {
        height: '100vh'
    },
    sidebarHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        borderBottom: `1px solid #e1e1e1`
    },
    sidebarContentHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
    },
    sidebarContent: {

    },
    inputSearch: {
        width: '100%'
    }
});

export const ProjectsPageList = () => {
    const styles = useStyles()

    return <Sidebar>
        <SidebarProjects styles={styles}/>
    </Sidebar>
}


// Обсудить про датчик по уровню краски