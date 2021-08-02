import React from 'react';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import FeedPage from 'pages/FeedPage';
import MessagesPage from 'pages/MessagesPage';
import FriendsPage from 'pages/FriendsPage';
import ProfilePage from 'pages/PrtofilePage';

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
    exact: true,
  },
  {
    path: RoutePaths.REGISTER,
    Component: RegisterPage,
    exact: true,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RoutePaths.PROFILE,
    Component: ProfilePage,
    exact: true,
  },
  {
    path: RoutePaths.FEED,
    Component: FeedPage,
    exact: true,
  },
  {
    path: RoutePaths.MESSAGES,
    Component: MessagesPage,
    exact: true,
  },
  {
    path: RoutePaths.FRIENDS,
    Component: FriendsPage,
    exact: true,
  },
];
