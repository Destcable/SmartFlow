import { Avatar, Body1Strong, Button, makeStyles } from '@fluentui/react-components'
import { Sidebar } from '../../Sidebar/Sidebar';
import { SidebarProjects } from './components/SidebarProjects';
import { AlignSpaceAroundVerticalFilled, AppsListRegular, StarRegular } from '@fluentui/react-icons';
import { SiedebarProjectsItem } from './components/SiedebarProjectsItem';
import { SiedebarProjectsItemWrpapper } from './components/SiedebarProjectsItemWrpapper';

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

const useStylesContentProjectsList = makeStyles({
    contentHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: 'rgba(255,255,255,255)',
        padding: '1rem',
        borderBottom: `1px solid #e1e1e1`,
    },
    avatarProject: {
        borderRadius: '8px',
    }
})

export const ProjectsPageList = () => {
    const styles = useStyles()
    const stylesContent = useStylesContentProjectsList()

    return <div style={{ display: 'flex' }}>
        <Sidebar>
            <SidebarProjects styles={styles}>
                <SiedebarProjectsItemWrpapper>
                    <SiedebarProjectsItem />
                </SiedebarProjectsItemWrpapper>
            </SidebarProjects>
        </Sidebar>
        <div style={{ backgroundColor: 'rgba(244,245,247,255)', width: '100%' }}>
            <div className={stylesContent.contentHeader}>
                <Button appearance='transparent' icon={<StarRegular />} />
                <Avatar className={stylesContent.avatarProject} name="TEST | HR App MVP" />
                <Body1Strong>TEST | HR App MVP</Body1Strong>
                <Button appearance='transparent' icon={<AppsListRegular />}>List</Button>
                <Button appearance='transparent' icon={<AlignSpaceAroundVerticalFilled />}>Board</Button>
            </div>
        </div>
    </div>

}