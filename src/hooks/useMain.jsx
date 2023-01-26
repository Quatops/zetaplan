import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getBannerImg as fetchBanner,
  getIntroTab as fetchIntroTab,
  updateBannerImage,
} from 'api/firebase';

export default function useMain() {
  const queryClient = useQueryClient();
  const BannerQuery = useQuery(['banner'], fetchBanner, {
    staleTime: 1000 * 60 * 10,
  });
  const IntroTabQuery = useQuery(['intro_tab'], fetchIntroTab, {
    staleTime: 1000 * 60 * 10,
  });
  const modifyBanner = useMutation(
    (bannerImage) => updateBannerImage(bannerImage),
    {
      onSuccess: () => queryClient.invalidateQueries(['banner']),
    },
  );
  return { BannerQuery, IntroTabQuery, modifyBanner };
}
