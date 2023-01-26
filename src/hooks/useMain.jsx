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
  const AsideBtn2Query = useQuery(
    ['aside_tab2'],
    () => fetchItems('aside_tab2'),
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
  const modifyAsideBtn2 = useMutation(
    (btns) => updateItems('aside_tab2', btns),
    {
      onSuccess: () => queryClient.invalidateQueries(['aside_tab2']),
    },
  );
  return {
    BannerQuery,
    IntroTabQuery,
    AsideBtn1Query,
    AsideBtn2Query,
    modifyBanner,
    modifyIntroTab,
    modifyAsideBtn1,
    modifyAsideBtn2,
  };
}
