import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMainMenu as fetchMenu, updateMainMenu } from 'api/firebase';

export default function useMenu() {
  const queryClient = useQueryClient();
  const mainMenuQuery = useQuery(['main_nav'], fetchMenu, {
    staleTime: 1000 * 60,
  });

  const modifyMenu = useMutation((category) => updateMainMenu(category), {
    onSuccess: () => queryClient.invalidateQueries(['main_nav']),
  });
  return { mainMenuQuery, modifyMenu };
}
