import { Button, Input } from "@fluentui/react-components";
import { AddRegular, SettingsRegular, StarRegular } from "@fluentui/react-icons";

export const SidebarProjects = ({ 
    styles
}) => <>
<div className={styles.sidebarHeader}>
            <Input
                placeholder="Поиск"
                contentAfter={<AddRegular />}
                className={styles.inputSearch}
            />
        </div>
        <div>
            <div className={styles.sidebarContentHeader}>
                <Button appearance='transparent' icon={<StarRegular />} />
                <div>
                    <Button appearance='transparent' icon={<SettingsRegular />} />
                    <Button icon={<AddRegular />}>Проект</Button>
                </div>
            </div>
        </div>
</>