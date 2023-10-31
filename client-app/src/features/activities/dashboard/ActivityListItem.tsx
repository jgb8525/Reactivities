import React from "react";
import { Button, Item, Label } from "semantic-ui-react";

export default function ActivityListItem() {

    return (
        <Item key={activity.id}>
            <Item.Content>
                <Item.Header as='a'>{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                    <div>{activity.description}</div>
                    <div>{activity.city}, {activity.venue}</div>
                </Item.Description>
                <Item.Extra>
                    <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color="blue"></Button>
                    <Button name={activity.id} loading={loading && target === activity.id} onClick={(e) => handleActivityDelete(e, activity.id)} floated='right' content='Delete' color='red'></Button>
                    <Label basic content={activity.category} />
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}