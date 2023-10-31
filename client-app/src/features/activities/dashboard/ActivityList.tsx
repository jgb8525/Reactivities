import React, { SyntheticEvent, useState } from "react";

import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer(function ActivityList() {
    const [target, setTarget] = useState('');
    const { activityStore } = useStore();
    const { deleteActivity, activitiesByDate, loading } = activityStore;

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity => (
                    
                ))}
            </Item.Group>
        </Segment>
    )
})