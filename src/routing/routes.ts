import React from 'react';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import FeedPage from 'pages/FeedPage';
import MessagesPage from 'pages/MessagesPage';
import FriendsPage from 'pages/FriendsPage';

export enum RoutePaths {
  LOGIN = '/login',
  REGISTER = '/register',
  PROFILE = '/profile',
  FEED = '/feed',
  MESSAGES = '/messages',
  FRIENDS = '/friends',
}

export interface IRoute {
  path: RoutePaths;
  Component: React.FC;
  exact: boolean;
}

export const publicRoutes: IRoute[] = [
  {
    path: RoutePaths.LOGIN,
    Component: LoginPage,
    exact: false,
  },
  {
    path: RoutePaths.REGISTER,
    Component: RegisterPage,
    exact: false,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RoutePaths.PROFILE,
    Component: FeedPage,
    exact: false,
  },
  {
    path: RoutePaths.FEED,
    Component: FeedPage,
    exact: false,
  },
  {
    path: RoutePaths.MESSAGES,
    Component: MessagesPage,
    exact: false,
  },
  {
    path: RoutePaths.FRIENDS,
    Component: FriendsPage,
    exact: false,
  },
];
