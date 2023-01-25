import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getMainMenu as fetchMenu,
  getSubMenu as fetchSubMenu,
  updateMainMenu,
  updateSubMenu,
} from 'api/firebase';

export default function useMenu() {
  const queryClient = useQueryClient();
  const mainMenuQuery = useQuery(['main_nav'], fetchMenu, {
    staleTime: 1000 * 60,
  });

  const subMenuQuery = useQuery(['sub_nav'], fetchSubMenu, {
    staleTime: 1000 * 60,
  });

  const modifyMainMenu = useMutation((category) => updateMainMenu(category), {
    onSuccess: () => queryClient.invalidateQueries(['main_nav']),
  });
  const modifySubMenu = useMutation((category) => updateSubMenu(category), {
    onSuccess: () => queryClient.invalidateQueries(['sub_nav']),
  });
  return { mainMenuQuery, subMenuQuery, modifyMainMenu, modifySubMenu };
}
