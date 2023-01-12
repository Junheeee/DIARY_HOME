import { Divider, Header, List } from "semantic-ui-react";

export default function about() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        회사 소개
      </Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a>junh_eee@naver.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a>semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의사항
      </Header>
      <Divider />
    </div>
  );
}
