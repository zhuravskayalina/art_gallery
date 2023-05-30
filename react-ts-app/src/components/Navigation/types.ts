import { NavigationItem } from '../Header/types';

export interface NavigationProps {
  items: NavigationItem[];
  showCurrentPageName: (pageName: string) => void;
}
