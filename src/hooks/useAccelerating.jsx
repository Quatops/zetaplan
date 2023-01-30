import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getItems as fetchItems, updateItems } from 'api/firebase';

export default function useAccelerating() {
  const queryClient = useQueryClient();
  const AccelePortQuery = useQuery(
    ['accelerating_portfolio'],
    () => fetchItems('accelerating_portfolio'),
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

  return { AccelePortQuery, modifyAccelePort };
}
