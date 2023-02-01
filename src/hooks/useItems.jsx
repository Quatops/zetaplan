import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getItems as fetchItems, updateItems } from 'api/firebase';

export function useMain() {
  const queryClient = useQueryClient();
  const BannerQuery = useQuery(['banner'], () => fetchItems('banner'), {
    staleTime: 1000 * 60 * 10,
  });
  const IntroTabQuery = useQuery(['intro_tab'], () => fetchItems('intro_tab'), {
    staleTime: 1000 * 60 * 10,
  });
  const ContactUsQuery = useQuery(
    ['contact_us'],
    () => fetchItems('contact_us'),
    {
      staleTime: 1000 * 60 * 100,
    },
  );
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
    ContactUsQuery,
    modifyBanner,
    modifyIntroTab,
    modifyAsideBtn1,
    modifyAsideBtn2,
  };
}

export function useAccelerating() {
  const queryClient = useQueryClient();
  const AccelePortQuery = useQuery(
    ['accelerating_portfolio'],
    () => fetchItems('accelerating_portfolio'),
    {
      staleTime: 1000 * 60 * 10,
    },
  );
  const AcceleDifferentQuery = useQuery(
    ['accelerating_differentiation'],
    () => fetchItems('accelerating_differentiation'),
    {
      staleTime: 1000 * 60 * 10,
    },
  );
  const AcceleProgramQuery = useQuery(
    ['accelerating_program'],
    () => fetchItems('accelerating_program'),
    {
      staleTime: 1000 * 60 * 10,
    },
  );
  const modifyAccelePort = useMutation(
    (image) => updateItems('accelerating_portfolio', image),
    {
      onSuccess: () =>
        queryClient.invalidateQueries(['accelerating_portfolio']),
    },
  );
  const modifyAcceleDifferent = useMutation(
    (content) => updateItems('accelerating_differentiation', content),
    {
      onSuccess: () =>
        queryClient.invalidateQueries(['accelerating_differentiation']),
    },
  );
  return {
    AccelePortQuery,
    AcceleDifferentQuery,
    AcceleProgramQuery,
    modifyAccelePort,
    modifyAcceleDifferent,
  };
}

export function useInverstPortfolio() {
  const queryClient = useQueryClient();
  const InvestmentLogoQuery = useQuery(
    ['investment_portfolio'],
    () => fetchItems('investment_portfolio'),
    {
      staleTime: 1000 * 60 * 10,
    },
  );
  return {
    InvestmentLogoQuery,
  };
}
