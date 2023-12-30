import React from 'react'
import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react';
import Profile1 from "../../asset/img/hive/profile-1.jpg";

function PostDetailedChat() {
  return (
    <>
        <Segment
                textAlign='center'
                attached='top'
                inverted
                color='orange'
                style={{border: 'none'}}
            >
                <Header>Chat about this post</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src={Profile1}/>
                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>How artistic!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src={Profile1}/>
                        <Comment.Content>
                            <Comment.Author as='a'>Joe Henderson</Comment.Author>
                            <Comment.Metadata>
                                <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button
                            content='Add Reply'
                            labelPosition='left'
                            icon='edit'
                            style={{ backgroundColor: '#ff8906', color: 'white' }}
                            primary
                        />
                    </Form>
                </Comment.Group>
            </Segment>
    </>
  )
}

export default PostDetailedChat
