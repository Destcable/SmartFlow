import { useStylesSidebar } from "./styles/sidebar.styles"

export const Sidebar = ({ 
    children 
}) => {
    const styles = useStylesSidebar()
    return <div className={styles.sidebar}>{children}</div>
}
