import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getItems as fetchItems, updateItems } from 'api/firebase';

export default function useMain() {
  const queryClient = useQueryClient();
  const BannerQuery = useQuery(['banner'], () => fetchItems('banner'), {
    staleTime: 1000 * 60 * 10,
  });
  const IntroTabQuery = useQuery(['intro_tab'], () => fetchItems('intro_tab'), {
    staleTime: 1000 * 60 * 10,
  });
  const AsideBtn1Query = useQuery(
    ['aside_tab1'],
    () => fetchItems('aside_tab1'),
    {
      staleTime: 1000 * 60 * 10,
    },
  );

  const modifyBanner = useMutation(
    (bannerImage) => updateItems('banner', bannerImage),
    {
      onSuccess: () => queryClient.invalidateQueries(['banner']),
    },
  );
  const modifyIntroTab = useMutation((tabs) => updateItems('intro_tab', tabs), {
    onSuccess: () => queryClient.invalidateQueries(['intro_tab']),
  });
  const modifyAsideBtn1 = useMutation(
    (btns) => updateItems('aside_tab1', btns),
    {
      onSuccess: () => queryClient.invalidateQueries(['aside_tab1']),
    },
  );
  return {
    BannerQuery,
    IntroTabQuery,
    AsideBtn1Query,
    modifyBanner,
    modifyIntroTab,
    modifyAsideBtn1,
  };
}
