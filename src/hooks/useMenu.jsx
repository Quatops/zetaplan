import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getItems as fetchItems,
  updateItems,
  updateSubCate,
  addNewSubCate,
} from 'api/firebase';

export default function useMenu() {
  const queryClient = useQueryClient();
  const mainMenuQuery = useQuery(['main_nav'], () => fetchItems('main_nav'), {
    staleTime: 1000 * 60 * 10,
  });

  const subMenuQuery = useQuery(['sub_nav'], () => fetchItems('sub_nav'), {
    staleTime: 1000 * 60 * 10,
  });

  const modifyMainMenu = useMutation(
    (category) => updateItems('main_nav', category),
    {
      onSuccess: () => queryClient.invalidateQueries(['main_nav']),
    },
  );
  const modifySubMenu = useMutation(
    (menuItem) => updateSubCate('sub_nav', menuItem),
    {
      onSuccess: () => queryClient.invalidateQueries(['sub_nav']),
    },
  );
  const addSubMenu = useMutation((menuItem) => addNewSubCate(menuItem), {
    onSuccess: () => queryClient.invalidateQueries(['sub_nav']),
  });
  return {
    mainMenuQuery,
    subMenuQuery,
    modifyMainMenu,
    modifySubMenu,
    addSubMenu,
  };
}
