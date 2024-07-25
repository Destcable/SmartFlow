import { Button, makeStyles } from '@fluentui/react-components'

const useStyles = makeStyles({
    sidebarHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    sidebarContent: {

    }
});

export const ProjectsPageList = () => {
    const styles = useStyles()

    return <div>
        <div className={styles.sidebarHeader}>
            <span>Projects</span>
            <div>
                <Button></Button>
                <Button></Button>
            </div>
        </div>
    </div>
}