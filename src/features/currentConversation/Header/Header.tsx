import React from "react";
import { ConversationOccupancy } from "../ConversationOccupancy";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { setLayoutLeft } from "features/layout/actions";
import {
  ConversationsIndexedById,
  getConversationsById
} from "features/conversations/conversationModel";
import { getCurrentConversationId } from "../currentConversationModel";
import {
  Wrapper,
  Body,
  Information,
  UserName,
  Favorite,
  Name,
  Description,
  Border,
  BackIconWrapper
} from "./Header.style";
import { Back as BackIcon } from "foundations/components/icons/Back";

//Added by rainbow///////////////////////////////////
import { UserInitialsAvatar } from "foundations/components/UserInitialsAvatar";
import { getUsersById } from "features/users/userModel";
import { getLoggedInUserId } from "features/authentication/authenticationModel";
/////////////////////////////////////////////

export interface ConversationDescriptionFragment {
  id: string;
  name: string;
  description: string;
}

export const getCurrentConversationDescription = createSelector(
  [getConversationsById, getCurrentConversationId],
  (
    conversations: ConversationsIndexedById,
    currentConversationId: string
  ): ConversationDescriptionFragment => {
    return {
      ...conversations[currentConversationId]
    };
  }
);

const Header = () => {
  const conversation: ConversationDescriptionFragment = useSelector(
    getCurrentConversationDescription
  );

  const userId = useSelector(getLoggedInUserId);
  const usersById = useSelector(getUsersById);
  const user = usersById[userId];

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Body>
        <BackIconWrapper
          onClick={() => {
            dispatch(setLayoutLeft());
          }}
        >
          <BackIcon />
        </BackIconWrapper>
        <Information>
          <UserInitialsAvatar size={60} name={user.name} uuid={user.id} />
          <UserName>{user.name}</UserName>
        </Information>
        <Favorite />
      </Body>
    </Wrapper>
  );
};

export { Header };
