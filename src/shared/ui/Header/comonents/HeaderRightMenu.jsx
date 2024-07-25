import { Avatar, Text, ToolbarButton } from "@fluentui/react-components";
import { ClockRegular, HomeRegular, QuestionCircleRegular, SettingsRegular } from "@fluentui/react-icons";

export const HeaderRightMenu = ({
    styles
}) => <div className={styles.userSection}>
        <Text className={styles.userName}>Destcable Inc.</Text>
        <ToolbarButton icon={<HomeRegular />} className={styles.menuButton} />
        <ToolbarButton icon={<ClockRegular />} className={styles.menuButton} />
        <ToolbarButton icon={<QuestionCircleRegular />} className={styles.menuButton} />
        <ToolbarButton icon={<SettingsRegular />} className={styles.menuButton} />
        <Avatar name="Artem Pavlov" />
    </div>