import {Dispatch} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {myClient} from '../../..';
import {CALL_API} from '../apiMiddleware';
import {
  GET_CHATROOM,
  GET_CHATROOM_SUCCESS,
  GET_CHATROOM_FAILED,
  GET_CONVERSATIONS,
  GET_CONVERSATIONS_FAILED,
  GET_CONVERSATIONS_SUCCESS,
  ON_CONVERSATIONS_CREATE,
  ON_CONVERSATIONS_CREATE_FAILED,
  ON_CONVERSATIONS_CREATE_SUCCESS,
  PAGINATED_CONVERSATIONS_SUCCESS,
  PAGINATED_CONVERSATIONS,
  PAGINATED_CONVERSATIONS_FAILED,
  FIREBASE_CONVERSATIONS,
  FIREBASE_CONVERSATIONS_SUCCESS,
  FIREBASE_CONVERSATIONS_FAILED,
} from '../types/types';

export const getConversations =
  (payload: any, showLoader: boolean) => async (dispatch: Dispatch) => {
    try {
      return await dispatch({
        type: GET_CONVERSATIONS_SUCCESS,
        [CALL_API]: {
          func: myClient?.getConversation(payload),
          body: payload,
          types: [
            GET_CONVERSATIONS,
            GET_CONVERSATIONS_SUCCESS,
            GET_CONVERSATIONS_FAILED,
          ],
          showLoader: showLoader,
        },
      });
    } catch (error) {
      // process error
    }
  };

export const paginatedConversations =
  (payload: any, showLoader: boolean) => async (dispatch: Dispatch) => {
    try {
      return await dispatch({
        type: PAGINATED_CONVERSATIONS_SUCCESS,
        [CALL_API]: {
          func: myClient?.getConversation(payload),
          body: payload,
          types: [
            PAGINATED_CONVERSATIONS,
            PAGINATED_CONVERSATIONS_SUCCESS,
            PAGINATED_CONVERSATIONS_FAILED,
          ],
          showLoader: false,
        },
      });
    } catch (error) {
      // process error
    }
  };

export const firebaseConversation =
  (payload: any, showLoader: boolean) => async (dispatch: Dispatch) => {
    try {
      return await dispatch({
        type: FIREBASE_CONVERSATIONS_SUCCESS,
        [CALL_API]: {
          func: myClient?.conversationsFetch(payload),
          body: payload,
          types: [
            FIREBASE_CONVERSATIONS,
            FIREBASE_CONVERSATIONS_SUCCESS,
            FIREBASE_CONVERSATIONS_FAILED,
          ],
          showLoader: false,
        },
      });
    } catch (error) {
      // process error
    }
  };

export const onConversationsCreate =
  (payload: any, showLoader?: boolean) => async (dispatch: Dispatch) => {
    try {
      return await dispatch({
        type: ON_CONVERSATIONS_CREATE_SUCCESS,
        [CALL_API]: {
          func: myClient?.postConversation(payload),
          body: payload,
          types: [
            ON_CONVERSATIONS_CREATE,
            ON_CONVERSATIONS_CREATE_SUCCESS,
            ON_CONVERSATIONS_CREATE_FAILED,
          ],
          showLoader: showLoader != undefined ? true : false,
        },
      });
    } catch (error) {
      // process error
    }
  };

export const getChatroom = (payload: any) => async (dispatch: Dispatch) => {
  try {
    return await dispatch({
      type: GET_CHATROOM_SUCCESS,
      [CALL_API]: {
        func: myClient?.getChatroom(payload),
        body: payload,
        types: [GET_CHATROOM, GET_CHATROOM_SUCCESS, GET_CHATROOM_FAILED],
        showLoader: false,
      },
    });
  } catch (error) {
    // process error
  }
};
