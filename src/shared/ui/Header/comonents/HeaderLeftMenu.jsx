import { Button, Menu, MenuButton, MenuItem, MenuList, MenuPopover, MenuTrigger, Text } from "@fluentui/react-components"
import { SquareMultipleRegular } from "@fluentui/react-icons"

export const HeaderLeftMenu = ({
    styles
}) => <div>
        <Button icon={<SquareMultipleRegular />} className={styles.menuButton} appearance='transparent'></Button>
        <Text className={styles.menuButton}>Projects</Text>
        <Menu>
            <MenuTrigger disableButtonEnhancement>
                <MenuButton appearance="transparent" className={styles.menuButton}>
                    Time Sheet
                </MenuButton>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    <MenuItem>Item a</MenuItem>
                    <MenuItem>Item b</MenuItem>
                </MenuList>
            </MenuPopover>
        </Menu>

        <Menu>
            <MenuTrigger disableButtonEnhancement>
                <MenuButton appearance="transparent" className={styles.menuButton}>
                    Reports
                </MenuButton>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    <MenuItem>Item a</MenuItem>
                    <MenuItem>Item b</MenuItem>
                </MenuList>
            </MenuPopover>
        </Menu>
    </div>