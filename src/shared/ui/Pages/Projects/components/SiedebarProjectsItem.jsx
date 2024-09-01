import { Avatar, Button } from "@fluentui/react-components";
import { StarRegular } from "@fluentui/react-icons";

export const SiedebarProjectsItem = () => {
    return <>
        <Button appearance='transparent' icon={<StarRegular />} />
        <Avatar style={{ width: '38px', height: '38px', borderRadius: '8px', marginRight: '12px' }} name="TEST | HR App MVP" />
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span>TEST | HR App MVP</span>
                <span>Just Now</span>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
                <span>Open</span>
            </div>
        </div>
    </>
};